"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const planetaryOptions = [
  { id: "low", label: "Low", icon: "eco", description: "Minimal environmental impact" },
  { id: "medium", label: "Moderate", icon: "nature", description: "Balanced approach" },
  { id: "high", label: "High Priority", icon: "park", description: "Maximum sustainability focus" },
];

export default function PlanetaryPage() {
  const router = useRouter();
  const [selectedPriority, setSelectedPriority] = useState("medium");

  return (
    <div className="screen-wrapper">
      <div className="shrink-0 bg-background-light dark:bg-background-dark z-20">
        <div className="flex items-center p-4 pb-2 justify-between">
          <button
            onClick={() => router.back()}
            className="flex size-10 items-center justify-center rounded-full hover:bg-primary/10 dark:hover:bg-white/10 transition-colors"
            aria-label="Back"
          >
            <span className="material-symbols-outlined text-2xl text-foreground dark:text-white">arrow_back</span>
          </button>
          <div className="text-sm font-semibold text-primary/60 dark:text-primary/60">Step 5 of 6</div>
          <div className="w-10"></div>
        </div>

        <div className="progress-container">
          <div className="progress-track">
            <div className="progress-fill" style={{ width: "83%" }}></div>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto no-scrollbar pb-32">
        <div className="px-4 pt-4 pb-2">
          <h1 className="text-dark dark:text-white tracking-tight text-[28px] font-bold leading-tight">Planetary health preference</h1>
          <p className="text-primary/70 dark:text-primary/70 text-base mt-2">Help us prioritize sustainable and eco-friendly meal options for you.</p>
        </div>

        <section className="px-4 mt-8">
          <h2 className="text-dark dark:text-white text-lg font-bold mb-4">Sustainability Priority</h2>
          <div className="flex flex-col gap-3">
            {planetaryOptions.map((option) => {
              const isActive = selectedPriority === option.id;
              return (
                <label
                  key={option.id}
                  className={`relative flex cursor-pointer items-center gap-4 rounded-xl border-2 p-4 transition-all ${
                    isActive
                      ? "border-primary bg-primary/10 dark:bg-primary/20"
                      : "border-transparent bg-white shadow-sm dark:bg-neutral-800/50 dark:border-neutral-700"
                  }`}
                >
                  <input
                    type="radio"
                    name="planetary"
                    className="sr-only"
                    checked={isActive}
                    onChange={() => setSelectedPriority(option.id)}
                  />
                  <div className={`flex size-12 shrink-0 items-center justify-center rounded-full transition-colors ${
                    isActive ? "bg-white text-primary dark:bg-background-dark" : "bg-primary/10 text-primary/70 dark:bg-primary/20"
                  }`}>
                    <span className="material-symbols-outlined text-[24px]">{option.icon}</span>
                  </div>
                  <div className="flex flex-col flex-1">
                    <span className="font-bold text-foreground dark:text-white text-base">{option.label}</span>
                    <span className={`text-sm ${isActive ? "text-primary/70 dark:text-primary/70" : "text-primary/60 dark:text-primary/60"}`}>
                      {option.description}
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
      </div>

      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-background-light via-background-light to-transparent dark:from-background-dark dark:via-background-dark pt-8 pb-8 px-4 z-10">
        <button onClick={() => router.push("/complete")} className="btn-primary shadow-lg shadow-primary/30 active:scale-[0.98] transition-transform w-full">
          Next Step
        </button>
      </div>
    </div>
  );
}

