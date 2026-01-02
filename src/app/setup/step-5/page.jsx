"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function SetupStep5() {
  const router = useRouter();
  const [householdSize, setHouseholdSize] = useState(1);
  const [sameMeals, setSameMeals] = useState(true);

  const handleNext = () => {
    // DEMO DATA
    const data = {
      householdSize,
      sameMeals,
    };
    console.log("Step 5 Data:", data);
    router.push("/setup/step-6");
  };

  const increment = () => {
    if (householdSize < 10) setHouseholdSize(householdSize + 1);
  };

  const decrement = () => {
    if (householdSize > 1) setHouseholdSize(householdSize - 1);
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
          <div className="text-sm font-semibold text-primary/60">Step 5 of 6</div>
          <div className="w-10"></div>
        </div>

        <div className="progress-container">
          <div className="progress-track">
            <motion.div
              className="progress-fill"
              initial={{ width: "67%" }}
              animate={{ width: "83%" }}
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
              <span className="material-symbols-outlined text-4xl text-primary">groups</span>
            </div>
          </div>

          <h1 className="text-foreground text-[28px] font-bold tracking-tight mb-2 text-center">
            Household Size
          </h1>
          <p className="text-primary/70 text-base mb-8 text-center">
            How many people are you planning meals for?
          </p>

          {/* Counter */}
          <section className="mb-8">
            <div className="flex items-center justify-center gap-6">
              <button
                type="button"
                onClick={decrement}
                disabled={householdSize <= 1}
                className={`flex size-12 items-center justify-center rounded-full border-2 transition-all ${
                  householdSize <= 1
                    ? "border-dark/10 bg-surface-light text-primary/30 cursor-not-allowed"
                    : "border-primary bg-primary/10 text-primary hover:bg-primary/20"
                }`}
              >
                <span className="material-symbols-outlined text-2xl">remove</span>
              </button>
              
              <div className="text-center">
                <div className="text-6xl font-bold text-primary mb-2">{householdSize}</div>
                <div className="text-primary/70 text-sm">
                  {householdSize === 1 ? "person" : "people"}
                </div>
              </div>

              <button
                type="button"
                onClick={increment}
                disabled={householdSize >= 10}
                className={`flex size-12 items-center justify-center rounded-full border-2 transition-all ${
                  householdSize >= 10
                    ? "border-dark/10 bg-surface-light text-primary/30 cursor-not-allowed"
                    : "border-primary bg-primary/10 text-primary hover:bg-primary/20"
                }`}
              >
                <span className="material-symbols-outlined text-2xl">add</span>
              </button>
            </div>
          </section>

          {/* Same Meals Toggle */}
          {householdSize > 1 && (
            <section className="mb-4">
              <div className="bg-surface-light rounded-xl p-4 border border-dark/10">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h3 className="text-foreground font-semibold mb-1">Same meals for everyone</h3>
                    <p className="text-primary/60 text-sm">
                      Plan the same meals for all household members
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSameMeals(!sameMeals)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      sameMeals ? "bg-primary" : "bg-primary/30"
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        sameMeals ? "translate-x-6" : "translate-x-1"
                      }`}
                    />
                  </button>
                </div>
                <p className="text-xs text-primary/50 italic">
                  Different preferences per person (coming soon)
                </p>
              </div>
            </section>
          )}
        </div>
      </motion.div>

      {/* Footer */}
      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-background-light via-background-light to-transparent dark:from-background-dark dark:via-background-dark pt-8 pb-8 px-4 z-10">
        <button
          onClick={handleNext}
          className="btn-primary w-full shadow-lg shadow-primary/30 active:scale-[0.98] transition-transform"
        >
          Next Step
        </button>
      </div>
    </div>
  );
}

