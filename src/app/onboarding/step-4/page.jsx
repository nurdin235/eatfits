"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function Step4Complete() {
  const router = useRouter();

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
          <div className="text-sm font-semibold text-gray-500 dark:text-gray-400">Step 4 of 4</div>
          <div className="w-10"></div>
        </div>

        <div className="progress-container">
          <div className="progress-track">
            <div className="progress-fill" style={{ width: "100%" }}></div>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto no-scrollbar pb-32">
        <div className="px-4 pt-8 pb-2 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 dark:bg-primary/20 mb-6">
            <span className="material-symbols-outlined text-4xl text-primary">check_circle</span>
          </div>
          <h1 className="text-dark dark:text-white tracking-tight text-[28px] font-bold leading-tight">
            You're all set!
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-base mt-3 max-w-xl mx-auto">
            We’ve picked meal plans and preferences for you — you can review or start exploring EatFit now.
          </p>
        </div>

        <section className="px-6 mt-8">
          <div className="grid gap-3">
            <button
              onClick={() => router.push("/")}
              className="btn-primary"
            >
              Open EatFit
            </button>
            <button
              onClick={() => router.push("/onboarding/step-3")}
              className="btn btn-primary btn-cta bg-surface-light text-dark"
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
