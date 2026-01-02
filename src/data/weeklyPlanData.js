// DEMO DATA — Weekly Meal Plan
// Replace with backend integration later

export const demoWeeklyPlan = {
  monday: {
    date: "May 6",
    breakfast: {
      id: 1,
      name: "Avocado Toast",
      calories: 320,
      time: 10,
      image: "/meals/meal.png",
    },
    lunch: {
      id: 2,
      name: "Quinoa Salad Bowl",
      calories: 450,
      time: 15,
      image: "/meals/meal.png",
    },
    dinner: null, // Empty slot
  },
  tuesday: {
    date: "May 7",
    breakfast: {
      id: 3,
      name: "Overnight Oats",
      calories: 280,
      time: 5,
      image: "/meals/meal.png",
    },
    lunch: null, // Empty slot
    dinner: {
      id: 4,
      name: "Grilled Salmon & Asparagus",
      calories: 520,
      time: 25,
      image: "/meals/kati-kati-chicken-and-fufu-corn.png",
    },
  },
  wednesday: {
    date: "May 8",
    breakfast: {
      id: 5,
      name: "Greek Yogurt Bowl",
      calories: 300,
      time: 5,
      image: "/meals/meal.png",
    },
    lunch: {
      id: 6,
      name: "Mediterranean Wrap",
      calories: 420,
      time: 15,
      image: "/meals/meal.png",
    },
    dinner: {
      id: 7,
      name: "Vegetable Stir Fry",
      calories: 480,
      time: 20,
      image: "/meals/kati-kati-chicken-with-turnip-greens.png",
    },
  },
  thursday: {
    date: "May 9",
    breakfast: {
      id: 8,
      name: "Smoothie Bowl",
      calories: 350,
      time: 10,
      image: "/meals/meal.png",
    },
    lunch: {
      id: 9,
      name: "Lentil Soup",
      calories: 380,
      time: 25,
      image: "/meals/meal.png",
    },
    dinner: null,
  },
  friday: {
    date: "May 10",
    breakfast: {
      id: 10,
      name: "Scrambled Eggs",
      calories: 280,
      time: 10,
      image: "/meals/meal.png",
    },
    lunch: {
      id: 11,
      name: "Caesar Salad",
      calories: 400,
      time: 15,
      image: "/meals/meal.png",
    },
    dinner: {
      id: 12,
      name: "Pasta Primavera",
      calories: 550,
      time: 30,
      image: "/meals/kati-kati-cameroon-1.png",
    },
  },
  saturday: {
    date: "May 11",
    breakfast: null,
    lunch: {
      id: 13,
      name: "Burrito Bowl",
      calories: 520,
      time: 20,
      image: "/meals/meal.png",
    },
    dinner: {
      id: 14,
      name: "Grilled Chicken",
      calories: 480,
      time: 25,
      image: "/meals/kati-kati-chicken-and-fufu-corn.png",
    },
  },
  sunday: {
    date: "May 12",
    breakfast: {
      id: 15,
      name: "Pancakes",
      calories: 380,
      time: 15,
      image: "/meals/meal.png",
    },
    lunch: null,
    dinner: {
      id: 16,
      name: "Roasted Vegetables",
      calories: 420,
      time: 30,
      image: "/meals/kati-kati-chicken-with-turnip-greens.png",
    },
  },
};

export const weeklySummary = {
  weeklyCalories: 8400,
  avgPrepTime: "25 min",
  estimatedCost: "$38",
  dietType: "Vegetarian",
};

// Suggested meals for swap (mock)
export const suggestedMeals = [
  {
    id: 101,
    name: "Chicken Caesar Wrap",
    calories: 450,
    time: 15,
    image: "/meals/meal.png",
  },
  {
    id: 102,
    name: "Veggie Burger",
    calories: 380,
    time: 20,
    image: "/meals/meal.png",
  },
  {
    id: 103,
    name: "Poke Bowl",
    calories: 520,
    time: 15,
    image: "/meals/meal.png",
  },
  {
    id: 104,
    name: "Mushroom Risotto",
    calories: 480,
    time: 30,
    image: "/meals/meal.png",
  },
  {
    id: 105,
    name: "Tofu Stir Fry",
    calories: 420,
    time: 20,
    image: "/meals/meal.png",
  },
];

