"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ageRanges, genderOptions } from "@/data/setupData";

export default function SetupStep1() {
  const router = useRouter();
  const [firstName, setFirstName] = useState("");
  const [ageRange, setAgeRange] = useState("");
  const [gender, setGender] = useState("");

  const handleNext = () => {
    // DEMO DATA — Store in state (replace with backend later)
    const profileData = {
      firstName,
      ageRange,
      gender,
    };
    console.log("Step 1 Data:", profileData);
    router.push("/setup/step-2");
  };

  const canProceed = firstName.trim() !== "" && ageRange !== "";

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
          <div className="text-sm font-semibold text-primary/60">Step 1 of 6</div>
          <div className="w-10"></div>
        </div>

        <div className="progress-container">
          <div className="progress-track">
            <motion.div
              className="progress-fill"
              initial={{ width: "0%" }}
              animate={{ width: "17%" }}
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
              <span className="material-symbols-outlined text-4xl text-primary">person</span>
            </div>
          </div>
          
          <h1 className="text-foreground text-[28px] font-bold tracking-tight mb-2 text-center">
            Tell us about you
          </h1>
          <p className="text-primary/70 text-base text-center mb-8">
            We'll use this to personalize your meal plans.
          </p>

          {/* First Name */}
          <div className="input-group mb-5">
            <label className="text-foreground text-sm font-semibold ml-1 mb-2 block">
              First name
            </label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Enter your first name"
              className="form-input"
            />
          </div>

          {/* Age Range */}
          <div className="input-group mb-5">
            <label className="text-foreground text-sm font-semibold ml-1 mb-2 block">
              Age range
            </label>
            <select
              value={ageRange}
              onChange={(e) => setAgeRange(e.target.value)}
              className="form-input"
            >
              <option value="">Select age range</option>
              {ageRanges.map((range) => (
                <option key={range.id} value={range.id}>
                  {range.label}
                </option>
              ))}
            </select>
          </div>

          {/* Gender (Optional) */}
          <div className="input-group mb-5">
            <label className="text-foreground text-sm font-semibold ml-1 mb-2 block">
              Gender <span className="text-primary/60 font-normal">(optional)</span>
            </label>
            <div className="grid grid-cols-2 gap-3">
              {genderOptions.map((option) => (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => setGender(option.id)}
                  className={`px-4 py-3 rounded-xl border-2 transition-all ${
                    gender === option.id
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-dark/10 bg-surface-light text-foreground hover:border-primary/50"
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
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

