"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { primaryGoals, budgetTiers } from "@/data/personalizationData";

export default function PersonalizationStep() {
  const router = useRouter();
  const [selectedGoals, setSelectedGoals] = useState(["weight"]);
  const [selectedBudget, setSelectedBudget] = useState("medium");

  const toggleGoal = (id) => {
    setSelectedGoals((prev) =>
      prev.includes(id) ? prev.filter((g) => g !== id) : [...prev, id]
    );
  };

  return (
    <div className="screen-wrapper">
      {/* Sticky Header Area */}
      <div className="shrink-0 bg-background-light dark:bg-background-dark z-20">
        <div className="flex items-center p-4 pb-2 justify-between">
          <button 
            onClick={() => router.back()}
            className="flex size-10 items-center justify-center rounded-full hover:bg-gray-200 dark:hover:bg-white/10 transition-colors"
          >
            <span className="material-symbols-outlined text-2xl dark:text-white">arrow_back</span>
          </button>
          <div className="text-sm font-semibold text-gray-500 dark:text-gray-400">Step 2 of 4</div>
          <div className="w-10"></div>
        </div>

        {/* ProgressBar - 50% for Step 2 */}
        <div className="progress-container">
          <div className="progress-track">
            <div className="progress-fill" style={{ width: "50%" }}></div>
          </div>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto no-scrollbar pb-32">
        <div className="px-4 pt-4 pb-2">
          <h1 className="text-dark dark:text-white tracking-tight text-[28px] font-bold leading-tight">
            Let's personalize your plan.
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-base mt-2">
            Select your primary goals and budget preference to begin.
          </p>
        </div>

        {/* Goals Section */}
        <section className="px-4 mt-8">
          <h2 className="text-dark dark:text-white text-lg font-bold mb-4">Primary Goals</h2>
          <div className="flex flex-col gap-3">
            {primaryGoals.map((goal) => {
              const isActive = selectedGoals.includes(goal.id);
              return (
                <label 
                  key={goal.id}
                  className={`relative flex cursor-pointer items-center gap-4 rounded-xl border-2 p-4 transition-all ${
                    isActive 
                      ? "border-primary bg-primary/10 dark:bg-primary/20" 
                      : "border-transparent bg-white shadow-sm dark:bg-neutral-800/50 dark:border-neutral-700"
                  }`}
                >
                  <input
                    type="checkbox"
                    className="sr-only"
                    checked={isActive}
                    onChange={() => toggleGoal(goal.id)}
                  />
                  <div className={`flex size-12 shrink-0 items-center justify-center rounded-full transition-colors ${
                    isActive ? "bg-white text-primary dark:bg-background-dark" : "bg-[#f0f2ef] text-gray-600 dark:bg-neutral-700"
                  }`}>
                    <span className="material-symbols-outlined text-[24px]">{goal.icon}</span>
                  </div>
                  <div className="flex flex-col flex-1">
                    <span className="font-bold text-[#141712] dark:text-white text-base">{goal.title}</span>
                    <span className={`text-sm ${isActive ? "text-gray-600 dark:text-gray-300" : "text-gray-500 dark:text-gray-400"}`}>
                      {goal.description}
                    </span>
                  </div>
                  {isActive && (
                    <span className="material-symbols-outlined text-primary fill-1">check_circle</span>
                  )}
                </label>
              );
            })}
          </div>
        </section>

        {/* Budget Section */}
        <section className="px-4 mt-8 mb-4">
          <h2 className="text-dark dark:text-white text-lg font-bold mb-4">Budget Preference</h2>
          <div className="grid grid-cols-3 gap-3">
            {budgetTiers.map((tier) => {
              const isActive = selectedBudget === tier.id;
              return (
                <label key={tier.id} className="relative cursor-pointer group h-24">
                  <input
                    type="radio"
                    name="budget"
                    className="sr-only"
                    checked={isActive}
                    onChange={() => setSelectedBudget(tier.id)}
                  />
                  <div className={`flex flex-col items-center justify-center h-full rounded-xl border-2 transition-all ${
                    isActive 
                      ? "border-primary bg-primary/5 dark:bg-primary/20" 
                      : "border-transparent bg-white shadow-sm dark:bg-neutral-800/50 dark:border-neutral-700"
                  }`}>
                    <span className={`text-2xl font-bold mb-1 transition-colors ${isActive ? "text-primary" : "text-gray-400"}`}>
                      {tier.symbol}
                    </span>
                    <span className={`text-sm font-bold ${isActive ? "text-[#141712] dark:text-white" : "text-gray-500"}`}>
                      {tier.label}
                    </span>
                  </div>
                </label>
              );
            })}
          </div>
        </section>
      </div>

      {/* Sticky Footer CTA */}
      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-background-light via-background-light to-transparent dark:from-background-dark dark:via-background-dark pt-8 pb-6 px-4 z-10">
        <button 
          onClick={() => router.push("/onboarding/step-3")}
          className="btn-primary shadow-lg shadow-primary/30 active:scale-[0.98] transition-transform"
        >
          Next Step
        </button>
      </div>
    </div>
  );
}
