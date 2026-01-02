"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { healthGoals, activityLevels } from "@/data/setupData";

export default function SetupStep3() {
  const router = useRouter();
  const [goal, setGoal] = useState("");
  const [activityLevel, setActivityLevel] = useState("");

  const handleNext = () => {
    // DEMO DATA
    const data = {
      goal,
      activityLevel,
    };
    console.log("Step 3 Data:", data);
    router.push("/setup/step-4");
  };

  const canProceed = goal !== "";

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
          <div className="text-sm font-semibold text-primary/60">Step 3 of 6</div>
          <div className="w-10"></div>
        </div>

        <div className="progress-container">
          <div className="progress-track">
            <motion.div
              className="progress-fill"
              initial={{ width: "33%" }}
              animate={{ width: "50%" }}
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
            Health Goals
          </h1>
          <p className="text-primary/70 text-base mb-6">
            What's your primary health goal?
          </p>

          {/* Primary Goal */}
          <section className="mb-8">
            <h2 className="text-foreground text-lg font-bold mb-4">Primary Goal</h2>
            <div className="flex flex-col gap-3">
              {healthGoals.map((g) => {
                const isSelected = goal === g.id;
                return (
                  <label
                    key={g.id}
                    className={`relative flex cursor-pointer items-center gap-4 rounded-xl border-2 p-4 transition-all ${
                      isSelected
                        ? "border-primary bg-primary/10"
                        : "border-dark/10 bg-surface-light hover:border-primary/50"
                    }`}
                  >
                    <input
                      type="radio"
                      name="goal"
                      value={g.id}
                      checked={isSelected}
                      onChange={() => setGoal(g.id)}
                      className="sr-only"
                    />
                    <div className={`flex size-12 shrink-0 items-center justify-center rounded-full transition-colors ${
                      isSelected ? "bg-primary text-white" : "bg-primary/10 text-primary/70"
                    }`}>
                      <span className="material-symbols-outlined text-[24px]">{g.icon}</span>
                    </div>
                    <div className="flex flex-col flex-1">
                      <span className={`font-bold text-base ${
                        isSelected ? "text-primary" : "text-foreground"
                      }`}>
                        {g.label}
                      </span>
                      <span className={`text-sm ${
                        isSelected ? "text-primary/70" : "text-primary/60"
                      }`}>
                        {g.description}
                      </span>
                    </div>
                    {isSelected && (
                      <span className="material-symbols-outlined text-primary fill-1">
                        check_circle
                      </span>
                    )}
                  </label>
                );
              })}
            </div>
          </section>

          {/* Activity Level */}
          <section className="mb-4">
            <h2 className="text-foreground text-lg font-bold mb-4">
              Activity Level <span className="text-primary/60 font-normal text-sm">(optional)</span>
            </h2>
            <div className="flex flex-col gap-3">
              {activityLevels.map((level) => {
                const isSelected = activityLevel === level.id;
                return (
                  <button
                    key={level.id}
                    type="button"
                    onClick={() => setActivityLevel(level.id)}
                    className={`relative flex items-center gap-4 rounded-xl border-2 p-4 text-left transition-all ${
                      isSelected
                        ? "border-primary bg-primary/10"
                        : "border-dark/10 bg-surface-light hover:border-primary/50"
                    }`}
                  >
                    <div className={`flex size-10 shrink-0 items-center justify-center rounded-full transition-colors ${
                      isSelected ? "bg-primary text-white" : "bg-primary/10 text-primary/70"
                    }`}>
                      <span className="material-symbols-outlined text-lg">
                        {isSelected ? "radio_button_checked" : "radio_button_unchecked"}
                      </span>
                    </div>
                    <div className="flex flex-col flex-1">
                      <span className={`font-semibold text-base ${
                        isSelected ? "text-primary" : "text-foreground"
                      }`}>
                        {level.label}
                      </span>
                      <span className={`text-sm ${
                        isSelected ? "text-primary/70" : "text-primary/60"
                      }`}>
                        {level.description}
                      </span>
                    </div>
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

