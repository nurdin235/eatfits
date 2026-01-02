"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function CompletePage() {
  const router = useRouter();

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
          <div className="text-sm font-semibold text-primary/60 dark:text-primary/60">Step 6 of 6</div>
          <div className="w-10"></div>
        </div>

        <div className="progress-container">
          <div className="progress-track">
            <div className="progress-fill" style={{ width: "100%" }}></div>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto no-scrollbar pb-24">
        <div className="px-4 pt-8 pb-2 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 dark:bg-primary/20 mb-6">
            <span className="material-symbols-outlined text-4xl text-primary">check_circle</span>
          </div>
          <h1 className="text-dark dark:text-white tracking-tight text-[28px] font-bold leading-tight">
            You're all set!
          </h1>
          <p className="text-primary/70 dark:text-primary/70 text-base mt-3 max-w-xl mx-auto">
            Your personalized meal plan is ready. We've curated recipes that match your goals and preferences.
          </p>
        </div>

        <section className="px-6 mt-8">
          <div className="grid gap-3">
            <button
              onClick={() => router.push("/")}
              className="btn-primary shadow-lg shadow-primary/30 active:scale-[0.98] transition-transform"
            >
              Go to Dashboard
            </button>
            <button
              onClick={() => router.push("/goals")}
              className="btn bg-surface-light text-foreground border border-dark/10 hover:bg-primary/5 active:scale-[0.98] transition-transform"
              aria-label="Review preferences"
            >
              Review preferences
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

