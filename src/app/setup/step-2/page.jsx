"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { dietTypes, allergyOptions } from "@/data/setupData";

export default function SetupStep2() {
  const router = useRouter();
  const [dietType, setDietType] = useState([]);
  const [allergies, setAllergies] = useState([]);
  const [dislikes, setDislikes] = useState("");
  const [dislikeInput, setDislikeInput] = useState("");

  const toggleDiet = (id) => {
    setDietType((prev) =>
      prev.includes(id) ? prev.filter((d) => d !== id) : [...prev, id]
    );
  };

  const toggleAllergy = (id) => {
    setAllergies((prev) =>
      prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]
    );
  };

  const addDislike = () => {
    if (dislikeInput.trim() && !dislikes.includes(dislikeInput.trim())) {
      setDislikes((prev) =>
        prev ? `${prev}, ${dislikeInput.trim()}` : dislikeInput.trim()
      );
      setDislikeInput("");
    }
  };

  const removeDislike = (item) => {
    const items = dislikes.split(",").map((i) => i.trim()).filter((i) => i !== item);
    setDislikes(items.join(", "));
  };

  const handleNext = () => {
    // DEMO DATA
    const data = {
      dietType,
      allergies,
      dislikes: dislikes.split(",").map((d) => d.trim()).filter(Boolean),
    };
    console.log("Step 2 Data:", data);
    router.push("/setup/step-3");
  };

  const canProceed = dietType.length > 0;
  const dislikeItems = dislikes ? dislikes.split(",").map((d) => d.trim()).filter(Boolean) : [];

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
          <div className="text-sm font-semibold text-primary/60">Step 2 of 6</div>
          <div className="w-10"></div>
        </div>

        <div className="progress-container">
          <div className="progress-track">
            <motion.div
              className="progress-fill"
              initial={{ width: "17%" }}
              animate={{ width: "33%" }}
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
            Dietary Preferences
          </h1>
          <p className="text-primary/70 text-base mb-6">
            Select all that apply to help us tailor your meals.
          </p>

          {/* Diet Types */}
          <section className="mb-8">
            <h2 className="text-foreground text-lg font-bold mb-4">Diet Type</h2>
            <div className="grid grid-cols-2 gap-3">
              {dietTypes.map((diet) => {
                const isSelected = dietType.includes(diet.id);
                return (
                  <button
                    key={diet.id}
                    type="button"
                    onClick={() => toggleDiet(diet.id)}
                    className={`relative flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all ${
                      isSelected
                        ? "border-primary bg-primary/10"
                        : "border-dark/10 bg-surface-light hover:border-primary/50"
                    }`}
                  >
                    <span className={`material-symbols-outlined text-3xl ${
                      isSelected ? "text-primary" : "text-primary/60"
                    }`}>
                      {diet.icon}
                    </span>
                    <span className={`text-sm font-semibold ${
                      isSelected ? "text-primary" : "text-foreground"
                    }`}>
                      {diet.label}
                    </span>
                    {isSelected && (
                      <span className="absolute top-2 right-2 material-symbols-outlined text-primary fill-1 text-lg">
                        check_circle
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </section>

          {/* Allergies */}
          <section className="mb-8">
            <h2 className="text-foreground text-lg font-bold mb-4">Allergies</h2>
            <div className="grid grid-cols-2 gap-3">
              {allergyOptions.map((allergy) => {
                const isSelected = allergies.includes(allergy.id);
                return (
                  <label
                    key={allergy.id}
                    className={`relative flex items-center gap-3 p-3 rounded-xl border-2 cursor-pointer transition-all ${
                      isSelected
                        ? "border-primary bg-primary/10"
                        : "border-dark/10 bg-surface-light"
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={isSelected}
                      onChange={() => toggleAllergy(allergy.id)}
                      className="sr-only"
                    />
                    <span className={`material-symbols-outlined ${
                      isSelected ? "text-primary" : "text-primary/60"
                    }`}>
                      {allergy.icon}
                    </span>
                    <span className={`flex-1 font-medium ${
                      isSelected ? "text-primary" : "text-foreground"
                    }`}>
                      {allergy.label}
                    </span>
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

          {/* Disliked Ingredients */}
          <section className="mb-4">
            <h2 className="text-foreground text-lg font-bold mb-4">Disliked Ingredients</h2>
            <div className="flex gap-2 mb-3">
              <input
                type="text"
                value={dislikeInput}
                onChange={(e) => setDislikeInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && addDislike()}
                placeholder="e.g., Mushrooms, Cilantro"
                className="form-input flex-1"
              />
              <button
                type="button"
                onClick={addDislike}
                className="px-4 py-3 rounded-xl bg-primary text-white font-semibold hover:bg-primary/90 transition-colors"
              >
                Add
              </button>
            </div>
            {dislikeItems.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {dislikeItems.map((item, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm"
                  >
                    {item}
                    <button
                      type="button"
                      onClick={() => removeDislike(item)}
                      className="material-symbols-outlined text-sm hover:text-cta"
                    >
                      close
                    </button>
                  </span>
                ))}
              </div>
            )}
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

