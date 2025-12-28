"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { dietPreferences, allergies } from "@/data/personalizationData";

export default function Step3Diet() {
  const router = useRouter();
  const [selectedDiet, setSelectedDiet] = useState("omnivore");
  const [selectedAllergies, setSelectedAllergies] = useState([]);

  const toggleAllergy = (id) => {
    setSelectedAllergies((prev) => (prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]));
  };

  return (
    <div className="screen-wrapper">
      <div className="shrink-0 bg-background-light dark:bg-background-dark z-20">
        <div className="flex items-center p-4 pb-2 justify-between">
          <button
            onClick={() => router.back()}
            className="flex size-10 items-center justify-center rounded-full hover:bg-gray-200 dark:hover:bg-white/10 transition-colors"
            aria-label="Back"
          >
            <span className="material-symbols-outlined text-2xl dark:text-white">arrow_back</span>
          </button>
          <div className="text-sm font-semibold text-gray-500 dark:text-gray-400">Step 3 of 4</div>
          <div className="w-10"></div>
        </div>

        <div className="progress-container">
          <div className="progress-track">
            <div className="progress-fill" style={{ width: "75%" }}></div>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto no-scrollbar pb-32">
        <div className="px-4 pt-4 pb-2">
          <h1 className="text-dark dark:text-white tracking-tight text-[28px] font-bold leading-tight">Tell us what you eat.</h1>
          <p className="text-gray-600 dark:text-gray-400 text-base mt-2">Choose your diet preference and any allergies so we can tailor meals.</p>
        </div>

        <section className="px-4 mt-6">
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

        <section className="px-4 mt-8">
          <h2 className="text-dark dark:text-white text-lg font-bold mb-4">Allergies</h2>
          <div className="grid grid-cols-2 gap-3">
            {allergies.map((a) => {
              const isActive = selectedAllergies.includes(a.id);
              return (
                <label key={a.id} className={`relative cursor-pointer group h-14 flex items-center gap-3 rounded-xl p-3 transition-all onboard-card ${isActive ? "border-primary bg-primary/10 dark:bg-primary/20" : "border-transparent"}`}>
                  <input type="checkbox" className="sr-only" checked={isActive} onChange={() => toggleAllergy(a.id)} />
                  <div className={`flex size-10 items-center justify-center rounded-full transition-colors ${isActive ? "bg-white text-primary" : "bg-[#f0f2ef] text-gray-600 dark:bg-neutral-700"}`}>
                    <span className="material-symbols-outlined text-[18px]">{isActive ? "report_problem" : "warning"}</span>
                  </div>
                  <div className="flex flex-col flex-1">
                    <span className="font-medium text-dark dark:text-white">{a.label}</span>
                  </div>
                  {isActive && <span className="material-symbols-outlined text-primary fill-1">check_circle</span>}
                </label>
              );
            })}
          </div>
        </section>
      </div>

      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-background-light via-background-light to-transparent dark:from-background-dark dark:via-background-dark pt-8 pb-6 px-4 z-10">
        <button onClick={() => router.push("/onboarding/step-4")} className="btn-primary shadow-lg shadow-primary/30 active:scale-[0.98] transition-transform">
          Next Step
        </button>
      </div>
    </div>
  );
}
