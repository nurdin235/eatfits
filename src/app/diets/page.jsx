"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { dietPreferences } from "@/data/personalizationData";

export default function DietsPage() {
  const router = useRouter();
  const [selectedDiet, setSelectedDiet] = useState("omnivore");

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
          <div className="text-sm font-semibold text-primary/60 dark:text-primary/60">Step 3 of 6</div>
          <div className="w-10"></div>
        </div>

        <div className="progress-container">
          <div className="progress-track">
            <div className="progress-fill" style={{ width: "50%" }}></div>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto no-scrollbar pb-32">
        <div className="px-4 pt-4 pb-2">
          <h1 className="text-dark dark:text-white tracking-tight text-[28px] font-bold leading-tight">What is your diet?</h1>
          <p className="text-primary/70 dark:text-primary/70 text-base mt-2">Choose the plan that fits your lifestyle best. You can change this later.</p>
        </div>

        <section className="px-4 mt-8">
          <h2 className="text-dark dark:text-white text-lg font-bold mb-4">Diet preference</h2>
          <div className="flex gap-3 flex-wrap">
            {dietPreferences.map((d) => (
              <button
                key={d.id}
                type="button"
                onClick={() => setSelectedDiet(d.id)}
                className={`px-4 py-2 rounded-full border transition-all shadow-sm onboard-card ${
                  selectedDiet === d.id ? "border-primary bg-primary/10 text-primary" : "border-transparent bg-surface-light text-foreground"
                }`}
              >
                {d.label}
              </button>
            ))}
          </div>
        </section>
      </div>

      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-background-light via-background-light to-transparent dark:from-background-dark dark:via-background-dark pt-8 pb-8 px-4 z-10">
        <button onClick={() => router.push("/allergies")} className="btn-primary shadow-lg shadow-primary/30 active:scale-[0.98] transition-transform w-full">
          Next Step
        </button>
      </div>
    </div>
  );
}

