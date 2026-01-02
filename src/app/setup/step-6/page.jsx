"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function SetupStep6() {
  const router = useRouter();

  // DEMO DATA — In a real app, this would come from context/state management
  const demoUserProfile = {
    firstName: "Alex",
    ageRange: "25–34",
    gender: "Prefer not to say",
    dietType: ["Vegetarian"],
    allergies: ["Nuts"],
    dislikes: ["Mushrooms"],
    goal: "Eat healthier",
    activityLevel: "Moderate",
    weeklyBudget: 40,
    cookingTime: "Quick",
    householdSize: 1,
    sameMeals: true,
  };

  const handleGenerate = () => {
    // DEMO DATA — Log final profile
    console.log("Final User Profile:", demoUserProfile);
    // Redirect to dashboard (mock)
    router.push("/");
  };

  const handleEdit = (step) => {
    router.push(`/setup/step-${step}`);
  };

  return (
    <div className="screen-wrapper">
      {/* Header */}
      <div className="shrink-0 bg-background-light dark:bg-background-dark z-20">
        <div className="flex items-center p-4 pb-2 justify-between">
          <button
            onClick={() => router.back()}
            className="flex size-10 items-center justify-center rounded-full hover:bg-primary/10 transition-colors"
          >
            <span className="material-symbols-outlined text-2xl text-foreground">arrow_back</span>
          </button>
          <div className="text-sm font-semibold text-primary/60">Step 6 of 6</div>
          <div className="w-10"></div>
        </div>

        <div className="progress-container">
          <div className="progress-track">
            <motion.div
              className="progress-fill"
              initial={{ width: "83%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.3 }}
        className="flex-1 overflow-y-auto no-scrollbar pb-32"
      >
        <div className="px-4 pt-6 pb-4">
          <div className="flex items-center justify-center mb-6">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="material-symbols-outlined text-4xl text-primary">check_circle</span>
            </div>
          </div>

          <h1 className="text-foreground text-[28px] font-bold tracking-tight mb-2 text-center">
            Review & Finish
          </h1>
          <p className="text-primary/70 text-base mb-8 text-center">
            Review your preferences and generate your personalized meal plan.
          </p>

          {/* Summary Cards */}
          <div className="space-y-4">
            {/* Profile */}
            <div className="bg-surface-light rounded-xl p-4 border border-dark/10">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-foreground font-bold">Profile</h3>
                <button
                  onClick={() => handleEdit(1)}
                  className="text-primary text-sm font-semibold hover:underline"
                >
                  Edit
                </button>
              </div>
              <div className="text-primary/70 text-sm space-y-1">
                <p>{demoUserProfile.firstName}, {demoUserProfile.ageRange}</p>
                {demoUserProfile.gender && <p>{demoUserProfile.gender}</p>}
              </div>
            </div>

            {/* Diet */}
            <div className="bg-surface-light rounded-xl p-4 border border-dark/10">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-foreground font-bold">Diet</h3>
                <button
                  onClick={() => handleEdit(2)}
                  className="text-primary text-sm font-semibold hover:underline"
                >
                  Edit
                </button>
              </div>
              <div className="text-primary/70 text-sm space-y-1">
                <p>{demoUserProfile.dietType.join(", ")}</p>
                {demoUserProfile.allergies.length > 0 && (
                  <p>Allergies: {demoUserProfile.allergies.join(", ")}</p>
                )}
                {demoUserProfile.dislikes.length > 0 && (
                  <p>Dislikes: {demoUserProfile.dislikes.join(", ")}</p>
                )}
              </div>
            </div>

            {/* Goal */}
            <div className="bg-surface-light rounded-xl p-4 border border-dark/10">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-foreground font-bold">Goal</h3>
                <button
                  onClick={() => handleEdit(3)}
                  className="text-primary text-sm font-semibold hover:underline"
                >
                  Edit
                </button>
              </div>
              <div className="text-primary/70 text-sm space-y-1">
                <p>{demoUserProfile.goal}</p>
                {demoUserProfile.activityLevel && (
                  <p>Activity: {demoUserProfile.activityLevel}</p>
                )}
              </div>
            </div>

            {/* Budget & Time */}
            <div className="bg-surface-light rounded-xl p-4 border border-dark/10">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-foreground font-bold">Budget & Time</h3>
                <button
                  onClick={() => handleEdit(4)}
                  className="text-primary text-sm font-semibold hover:underline"
                >
                  Edit
                </button>
              </div>
              <div className="text-primary/70 text-sm space-y-1">
                <p>${demoUserProfile.weeklyBudget}/week</p>
                <p>Cooking time: {demoUserProfile.cookingTime}</p>
              </div>
            </div>

            {/* Household */}
            <div className="bg-surface-light rounded-xl p-4 border border-dark/10">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-foreground font-bold">Household</h3>
                <button
                  onClick={() => handleEdit(5)}
                  className="text-primary text-sm font-semibold hover:underline"
                >
                  Edit
                </button>
              </div>
              <div className="text-primary/70 text-sm space-y-1">
                <p>{demoUserProfile.householdSize} {demoUserProfile.householdSize === 1 ? "person" : "people"}</p>
                {demoUserProfile.householdSize > 1 && (
                  <p>Same meals: {demoUserProfile.sameMeals ? "Yes" : "No"}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Footer */}
      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-background-light via-background-light to-transparent dark:from-background-dark dark:via-background-dark pt-8 pb-8 px-4 z-10">
        <button
          onClick={handleGenerate}
          className="btn-primary w-full shadow-lg shadow-primary/30 active:scale-[0.98] transition-transform"
        >
          Generate My Meal Plan
        </button>
      </div>
    </div>
  );
}

