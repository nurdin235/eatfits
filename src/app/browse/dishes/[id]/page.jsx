"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

// DEMO DATA — replace with backend later
const demoDishes = {
  "1": {
    name: "Quinoa Veggie Bowl",
    description: "A nourishing bowl packed with vegetables, grains, and healthy fats.",
    calories: 480,
    time: 25,
    difficulty: "Easy",
    diet: "Vegetarian",
    ingredients: [
      { name: "Quinoa", quantity: "1 cup" },
      { name: "Cherry tomatoes", quantity: "½ cup" },
      { name: "Avocado", quantity: "1" },
      { name: "Olive oil", quantity: "1 tbsp" },
    ],
    nutrition: {
      protein: "18g",
      carbs: "55g",
      fats: "14g",
    },
    steps: [
      "Rinse and cook quinoa according to package instructions.",
      "Chop vegetables while quinoa cooks.",
      "Mix all ingredients in a bowl.",
      "Drizzle with olive oil and season.",
    ],
    tips: "This dish keeps well for up to 3 days in the fridge.",
  },
};

export default function DishDetailsPage({ params }) {
  const { id } = params;
  const dishData = demoDishes[id];

  if (!dishData) {
    return <div className="p-4">Dish not found.</div>;
  }

  return (
    <div className="bg-[#D5DDDF] min-h-screen">
      {/* Hero Image Section */}
      <motion.div
        className="relative"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src="/meals/hero-image.jpg"
          alt="Dish Hero"
          width={400}
          height={400}
          className="rounded-lg shadow-lg mx-auto mt-4"
        />
        <div className="absolute top-4 left-4">
          <button className="bg-white p-2 rounded-full shadow-md" onClick={() => history.back()}>
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
        </div>
        <div className="absolute top-4 right-4">
          <button className="bg-white p-2 rounded-full shadow-md">
            <span className="material-symbols-outlined">favorite_border</span>
          </button>
        </div>
      </motion.div>

      {/* Dish Summary Section */}
      <div className="p-4">
        <h1 className="text-2xl font-bold text-[#1B2727]">{dishData.name}</h1>
        <p className="text-[#3C5148] mt-2">{dishData.description}</p>
        <div className="flex justify-between mt-4 text-sm text-[#3C5148]">
          <span>{dishData.calories} Calories</span>
          <span>{dishData.time} mins</span>
          <span>{dishData.difficulty}</span>
          <span>{dishData.diet}</span>
        </div>
      </div>

      {/* Primary Actions */}
      <div className="sticky bottom-0 bg-white p-4 shadow-md flex justify-between">
        <button className="bg-[#6B8E4E] text-white px-4 py-2 rounded-lg">Add to Meal Plan</button>
        <button className="bg-gray-200 px-4 py-2 rounded-lg">Save for Later</button>
      </div>

      {/* Ingredients Section */}
      <div className="p-4">
        <h2 className="text-xl font-bold text-[#1B2727]">Ingredients</h2>
        <ul className="mt-2">
          {dishData.ingredients.map((ingredient, index) => (
            <li key={index} className="flex justify-between py-1">
              <span>{ingredient.quantity}</span>
              <span>{ingredient.name}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Nutrition Section */}
      <div className="p-4">
        <h2 className="text-xl font-bold text-[#1B2727]">Nutrition</h2>
        <div className="flex justify-between mt-2">
          <div className="bg-white p-2 rounded-lg shadow-md text-center">
            <span className="block text-lg font-bold text-[#6B8E4E]">{dishData.nutrition.protein}</span>
            <span className="text-sm text-[#3C5148]">Protein</span>
          </div>
          <div className="bg-white p-2 rounded-lg shadow-md text-center">
            <span className="block text-lg font-bold text-[#6B8E4E]">{dishData.nutrition.carbs}</span>
            <span className="text-sm text-[#3C5148]">Carbs</span>
          </div>
          <div className="bg-white p-2 rounded-lg shadow-md text-center">
            <span className="block text-lg font-bold text-[#6B8E4E]">{dishData.nutrition.fats}</span>
            <span className="text-sm text-[#3C5148]">Fats</span>
          </div>
        </div>
      </div>

      {/* Cooking Steps Section */}
      <div className="p-4">
        <h2 className="text-xl font-bold text-[#1B2727]">Cooking Steps</h2>
        <ol className="mt-2 list-decimal list-inside">
          {dishData.steps.map((step, index) => (
            <li key={index} className="py-1">
              {step}
            </li>
          ))}
        </ol>
      </div>

      {/* Tips Section */}
      {dishData.tips && (
        <div className="p-4">
          <h2 className="text-xl font-bold text-[#1B2727]">Tips</h2>
          <p className="mt-2 text-[#3C5148]">{dishData.tips}</p>
        </div>
      )}
    </div>
  );
}