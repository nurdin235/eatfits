"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { sampleDishes, filterOptions } from "@/data/mealsData";

export default function BrowseMealsPage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDiet, setSelectedDiet] = useState(null);
  const [favorites, setFavorites] = useState(new Set());

  const toggleFavorite = (mealId) => {
    setFavorites((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(mealId)) {
        newSet.delete(mealId);
      } else {
        newSet.add(mealId);
      }
      return newSet;
    });
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Top Navigation */}
      <div className="sticky top-0 z-30 bg-background border-b border-dark/10">
        <div className="px-4 pt-4 pb-3">
          <div className="flex items-center justify-between mb-3">
            <button
              onClick={() => router.back()}
              className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-primary/10 transition-colors"
              aria-label="Back"
            >
              <span className="material-symbols-outlined text-2xl text-foreground">arrow_back</span>
            </button>
            <button
              className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-primary/10 transition-colors"
              aria-label="Notifications"
            >
              <span className="material-symbols-outlined text-2xl text-foreground">notifications</span>
            </button>
          </div>
          
          <div className="mb-4">
            <h1 className="text-foreground text-[28px] font-bold tracking-tight mb-2">
              Browse Meals
            </h1>
            <p className="text-primary/70 text-base">
              Discover complete meal plans tailored to your preferences.
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative mb-4">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-primary/60 text-xl">
              search
            </span>
            <input
              type="text"
              placeholder="Search meals or cuisines"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-dark/10 bg-surface-light text-foreground placeholder:text-primary/50 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
            />
          </div>
        </div>
      </div>

      {/* Meal Cards */}
      <div className="px-4 pt-6 pb-6 space-y-4">
        {sampleDishes.map((meal) => (
          <div
            key={meal.id}
            className="bg-white rounded-2xl shadow-sm border border-dark/10 overflow-hidden"
          >
            {/* Image Section */}
            <div className="relative w-full h-48 bg-background-light rounded-t-2xl overflow-hidden">
              <Image
                src={meal.image}
                alt={meal.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              
              {/* Badge */}
              {meal.badges && meal.badges.length > 0 && (
                <div className="absolute bottom-3 left-3">
                  <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-foreground/90 text-white text-xs font-bold">
                    {meal.badges[0]}
                  </span>
                </div>
              )}

              {/* Favorite Icon */}
              <button
                onClick={() => toggleFavorite(meal.id)}
                className="absolute top-3 right-3 w-10 h-10 flex items-center justify-center rounded-full bg-white/90 backdrop-blur-sm hover:bg-white transition-colors"
                aria-label="Toggle favorite"
              >
                <span
                  className={`material-symbols-outlined text-xl ${
                    favorites.has(meal.id) ? "text-cta fill-1" : "text-foreground"
                  }`}
                >
                  favorite
                </span>
              </button>
            </div>

            {/* Content Section */}
            <div className="p-4 rounded-b-2xl">
              <h3 className="text-foreground text-lg font-bold mb-1">{meal.name}</h3>
              <p className="text-primary/70 text-sm mb-3">{meal.description}</p>

              {/* Details */}
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-primary text-lg">local_fire_department</span>
                  <span className="text-foreground text-sm font-medium">{meal.calories} kcal</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-primary text-lg">schedule</span>
                  <span className="text-foreground text-sm font-medium">{meal.prepTime} min</span>
                </div>
              </div>

              {/* Add to Plan Button */}
              <button
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-primary text-white font-semibold hover:bg-primary/90 active:scale-[0.98] transition-all shadow-sm"
              >
                <span className="material-symbols-outlined text-xl">add</span>
                <span>Add to Plan</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

