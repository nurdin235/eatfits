"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { demoWeeklyPlan, weeklySummary, suggestedMeals } from "@/data/weeklyPlanData";

export default function WeeklyPlanPage() {
  const [currentWeek, setCurrentWeek] = useState(0);
  const [selectedDay, setSelectedDay] = useState("monday");
  const [showSwapModal, setShowSwapModal] = useState(false);
  const [swapContext, setSwapContext] = useState(null); // { day, mealType }
  const [plan, setPlan] = useState(demoWeeklyPlan);

  // Calculate week dates (May 6 - May 12)
  const getWeekDates = () => {
    const startDate = new Date(2024, 4, 6); // May 6, 2024
    startDate.setDate(startDate.getDate() + currentWeek * 7);
    const endDate = new Date(startDate);
    endDate.setDate(endDate.getDate() + 6);
    
    const formatDate = (date) => {
      const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      return `${months[date.getMonth()]} ${date.getDate()}`;
    };
    
    return `${formatDate(startDate)} – ${formatDate(endDate)}`;
  };

  const handleSwap = (day, mealType) => {
    setSwapContext({ day, mealType });
    setShowSwapModal(true);
  };

  const handleRemove = (day, mealType) => {
    setPlan((prev) => ({
      ...prev,
      [day]: {
        ...prev[day],
        [mealType]: null,
      },
    }));
  };

  const handleSelectSwap = (meal) => {
    if (swapContext) {
      setPlan((prev) => ({
        ...prev,
        [swapContext.day]: {
          ...prev[swapContext.day],
          [swapContext.mealType]: meal,
        },
      }));
    }
    setShowSwapModal(false);
    setSwapContext(null);
  };

  const handleAddMeal = (day, mealType) => {
    // In real app, this would navigate to browse dishes
    // For demo, we'll use swap modal
    handleSwap(day, mealType);
  };

  const MealSlot = ({ meal, day, mealType }) => {
    if (!meal) {
      return (
        <div className="border-2 border-dashed border-primary/30 rounded-xl p-6 flex flex-col items-center justify-center min-h-[140px] bg-surface-light/50">
          <button
            onClick={() => handleAddMeal(day, mealType)}
            className="flex flex-col items-center gap-2 text-primary hover:text-primary/80 transition-colors"
          >
            <span className="material-symbols-outlined text-3xl">add</span>
            <span className="font-semibold text-sm">Add Meal</span>
          </button>
        </div>
      );
    }

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
        className="bg-white rounded-xl p-3 border border-dark/10 shadow-sm relative group"
      >
        <div className="flex gap-3">
          {/* Image */}
          <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
            <Image
              src={meal.image}
              alt={meal.name}
              fill
              className="object-cover"
              sizes="80px"
            />
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <h3 className="text-foreground font-bold text-sm mb-1 truncate">{meal.name}</h3>
            <div className="flex items-center gap-3 text-xs text-primary/70">
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">local_fire_department</span>
                {meal.calories} kcal
              </span>
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">schedule</span>
                {meal.time} min
              </span>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-2 mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            onClick={() => handleSwap(day, mealType)}
            className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg bg-primary/10 text-primary text-xs font-semibold hover:bg-primary/20 transition-colors"
          >
            <span className="material-symbols-outlined text-sm">refresh</span>
            Swap
          </button>
          <button
            onClick={() => handleRemove(day, mealType)}
            className="flex items-center justify-center w-10 h-8 rounded-lg bg-cta/10 text-cta hover:bg-cta/20 transition-colors"
          >
            <span className="material-symbols-outlined text-sm">close</span>
          </button>
        </div>
      </motion.div>
    );
  };

  const days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
  const mealTypes = ["breakfast", "lunch", "dinner"];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen bg-[#D5DDDF] pb-24"
    >
      {/* Header */}
      <div className="bg-white sticky top-0 z-30 border-b border-dark/10">
        <div className="px-4 pt-4 pb-3">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-[#1B2727] text-2xl font-bold">Your Weekly Plan</h1>
            <button
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#6B8E4E] text-white text-sm font-semibold hover:bg-[#5a7a3f] transition-colors"
            >
              <span className="material-symbols-outlined text-sm">refresh</span>
              Regenerate
            </button>
          </div>

          {/* Week Selector */}
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={() => setCurrentWeek(currentWeek - 1)}
              className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-primary/10 transition-colors"
            >
              <span className="material-symbols-outlined text-[#1B2727]">chevron_left</span>
            </button>
            <span className="text-[#3C5148] text-sm font-medium">{getWeekDates()}</span>
            <button
              onClick={() => setCurrentWeek(currentWeek + 1)}
              className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-primary/10 transition-colors"
            >
              <span className="material-symbols-outlined text-[#1B2727]">chevron_right</span>
            </button>
          </div>
        </div>
      </div>

      {/* Weekly Summary */}
      <div className="px-4 pt-4 pb-2">
        <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-2">
          <div className="flex-shrink-0 w-[140px] bg-white rounded-xl p-4 border border-dark/10">
            <div className="text-[#3C5148] text-xs font-medium mb-1">CALORIES</div>
            <div className="text-[#1B2727] text-xl font-bold">{weeklySummary.weeklyCalories.toLocaleString()}</div>
            <div className="text-[#3C5148] text-xs mt-1">Total weekly</div>
          </div>
          <div className="flex-shrink-0 w-[140px] bg-white rounded-xl p-4 border border-dark/10">
            <div className="text-[#3C5148] text-xs font-medium mb-1">PREP TIME</div>
            <div className="text-[#1B2727] text-xl font-bold">{weeklySummary.avgPrepTime}</div>
            <div className="text-[#3C5148] text-xs mt-1">Average / meal</div>
          </div>
          <div className="flex-shrink-0 w-[140px] bg-white rounded-xl p-4 border border-dark/10">
            <div className="text-[#3C5148] text-xs font-medium mb-1">$ COST</div>
            <div className="text-[#1B2727] text-xl font-bold">{weeklySummary.estimatedCost}</div>
            <div className="text-[#3C5148] text-xs mt-1">Estimated</div>
          </div>
        </div>
      </div>

      {/* Daily Meal Plans */}
      <div className="px-4 pt-4 pb-6 space-y-6">
        {days.map((day) => {
          const dayData = plan[day];
          const dayLabel = day.charAt(0).toUpperCase() + day.slice(1);
          
          return (
            <motion.div
              key={day}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-xl p-4 border border-dark/10"
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-[#1B2727] text-lg font-bold">{dayLabel}</h2>
                <span className="text-[#3C5148] text-sm">{dayData.date}</span>
              </div>

              <div className="space-y-3">
                {mealTypes.map((mealType) => {
                  const mealLabel = mealType.charAt(0).toUpperCase() + mealType.slice(1);
                  return (
                    <div key={mealType}>
                      <div className="text-[#3C5148] text-xs font-semibold mb-2 uppercase tracking-wide">
                        {mealLabel}
                      </div>
                      <MealSlot
                        meal={dayData[mealType]}
                        day={day}
                        mealType={mealType}
                      />
                    </div>
                  );
                })}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Swap Modal */}
      <AnimatePresence>
        {showSwapModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-end"
            onClick={() => setShowSwapModal(false)}
          >
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="bg-white rounded-t-3xl w-full max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-[#1B2727] text-xl font-bold">Swap Meal</h3>
                  <button
                    onClick={() => setShowSwapModal(false)}
                    className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-primary/10 transition-colors"
                  >
                    <span className="material-symbols-outlined text-[#1B2727]">close</span>
                  </button>
                </div>
                <p className="text-[#3C5148] text-sm mb-4">Choose a replacement meal</p>
                
                <div className="space-y-3">
                  {suggestedMeals.map((meal) => (
                    <button
                      key={meal.id}
                      onClick={() => handleSelectSwap(meal)}
                      className="w-full flex items-center gap-3 p-3 rounded-xl border border-dark/10 hover:border-primary hover:bg-primary/5 transition-all text-left"
                    >
                      <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                        <Image
                          src={meal.image}
                          alt={meal.name}
                          fill
                          className="object-cover"
                          sizes="64px"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-[#1B2727] font-semibold text-sm mb-1">{meal.name}</h4>
                        <div className="flex items-center gap-3 text-xs text-[#3C5148]">
                          <span>{meal.calories} kcal</span>
                          <span>•</span>
                          <span>{meal.time} min</span>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

