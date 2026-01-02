"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { cookingTimeOptions } from "@/data/setupData";

export default function SetupStep4() {
  const router = useRouter();
  const [weeklyBudget, setWeeklyBudget] = useState(50);
  const [cookingTime, setCookingTime] = useState("");

  const handleNext = () => {
    // DEMO DATA
    const data = {
      weeklyBudget,
      cookingTime,
    };
    console.log("Step 4 Data:", data);
    router.push("/setup/step-5");
  };

  const canProceed = cookingTime !== "";

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
          <div className="text-sm font-semibold text-primary/60">Step 4 of 6</div>
          <div className="w-10"></div>
        </div>

        <div className="progress-container">
          <div className="progress-track">
            <motion.div
              className="progress-fill"
              initial={{ width: "50%" }}
              animate={{ width: "67%" }}
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
          <h1 className="text-foreground text-[28px] font-bold tracking-tight mb-2">
            Budget & Time
          </h1>
          <p className="text-primary/70 text-base mb-8">
            Help us plan meals that fit your lifestyle.
          </p>

          {/* Weekly Budget */}
          <section className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-foreground text-lg font-bold">Weekly Food Budget</h2>
              <span className="text-primary font-bold text-xl">${weeklyBudget}</span>
            </div>
            <div className="relative">
              <input
                type="range"
                min="20"
                max="200"
                step="5"
                value={weeklyBudget}
                onChange={(e) => setWeeklyBudget(Number(e.target.value))}
                className="w-full h-2 bg-primary/20 rounded-lg appearance-none cursor-pointer slider"
                style={{
                  background: `linear-gradient(to right, var(--color-primary) 0%, var(--color-primary) ${((weeklyBudget - 20) / 180) * 100}%, rgba(var(--color-primary-rgb), 0.2) ${((weeklyBudget - 20) / 180) * 100}%, rgba(var(--color-primary-rgb), 0.2) 100%)`
                }}
              />
              <div className="flex justify-between mt-2 text-xs text-primary/60">
                <span>$20</span>
                <span>$200</span>
              </div>
            </div>
          </section>

          {/* Cooking Time */}
          <section className="mb-4">
            <h2 className="text-foreground text-lg font-bold mb-4">Cooking Time Preference</h2>
            <div className="flex flex-col gap-3">
              {cookingTimeOptions.map((option) => {
                const isSelected = cookingTime === option.id;
                return (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => setCookingTime(option.id)}
                    className={`relative flex items-center gap-4 rounded-xl border-2 p-4 text-left transition-all ${
                      isSelected
                        ? "border-primary bg-primary/10"
                        : "border-dark/10 bg-surface-light hover:border-primary/50"
                    }`}
                  >
                    <div className={`flex size-12 shrink-0 items-center justify-center rounded-full transition-colors ${
                      isSelected ? "bg-primary text-white" : "bg-primary/10 text-primary/70"
                    }`}>
                      <span className="material-symbols-outlined text-[24px]">{option.icon}</span>
                    </div>
                    <div className="flex flex-col flex-1">
                      <span className={`font-bold text-base ${
                        isSelected ? "text-primary" : "text-foreground"
                      }`}>
                        {option.label}
                      </span>
                      <span className={`text-sm ${
                        isSelected ? "text-primary/70" : "text-primary/60"
                      }`}>
                        {option.description}
                      </span>
                    </div>
                    {isSelected && (
                      <span className="material-symbols-outlined text-primary fill-1">
                        check_circle
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </section>
        </div>
      </motion.div>

      {/* Footer */}
      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-background-light via-background-light to-transparent dark:from-background-dark dark:via-background-dark pt-8 pb-8 px-4 z-10">
        <button
          onClick={handleNext}
          disabled={!canProceed}
          className={`btn-primary w-full shadow-lg shadow-primary/30 active:scale-[0.98] transition-transform ${
            !canProceed ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          Next Step
        </button>
      </div>
    </div>
  );
}

