// DEMO DATA — Dish Details
// Replace with backend integration later

export const dishDetails = {
  1: {
    id: 1,
    name: "Quinoa Veggie Bowl",
    description: "A nourishing bowl packed with fresh vegetables, fluffy grains, and healthy fats. Perfect for a quick lunch or dinner.",
    image: "/meals/meal.png",
    calories: 480,
    prepTime: 25,
    difficulty: "Easy",
    diet: "Vegetarian",
    ingredients: [
      { name: "Quinoa", quantity: "1 cup" },
      { name: "Cherry tomatoes", quantity: "1/2 cup" },
      { name: "Avocado", quantity: "1 whole" },
      { name: "Lemon dressing", quantity: "2 tbsp" },
    ],
    nutrition: {
      protein: "18g",
      carbs: "55g",
      fats: "14g",
    },
    steps: [
      "Rinse the grains: Rinse quinoa thoroughly in a fine mesh strainer until water runs clear.",
      "Cook Quinoa: Boil water and cook quinoa for 15 minutes or until fluffy. Let it sit for 5 minutes.",
      "Prepare Veggies: Chop cherry tomatoes into halves and slice the avocado.",
    ],
    tip: "This dish keeps well for up to 3 days in the fridge. Store dressing separately.",
  },
  2: {
    id: 2,
    name: "Creamy Avocado Toast",
    description: "Rich omega-3 breakfast with poached egg and fresh herbs.",
    image: "/meals/meal.png",
    calories: 420,
    prepTime: 20,
    difficulty: "Easy",
    diet: "Vegetarian",
    ingredients: [
      { name: "Bread", quantity: "2 slices" },
      { name: "Avocado", quantity: "1 whole" },
      { name: "Egg", quantity: "1" },
      { name: "Lemon", quantity: "1/2" },
      { name: "Salt & Pepper", quantity: "to taste" },
    ],
    nutrition: {
      protein: "15g",
      carbs: "35g",
      fats: "22g",
    },
    steps: [
      "Toast the bread until golden brown.",
      "Mash avocado with lemon juice, salt, and pepper.",
      "Poach the egg in simmering water for 3-4 minutes.",
      "Spread avocado on toast and top with poached egg.",
    ],
    tip: "Best served immediately while toast is warm.",
  },
  3: {
    id: 3,
    name: "Kati Kati Chicken and Fufu",
    description: "Traditional Cameroonian dish with grilled chicken and corn fufu.",
    image: "/meals/kati-kati-chicken-and-fufu-corn.png",
    calories: 580,
    prepTime: 45,
    difficulty: "Medium",
    diet: "Omnivore",
    ingredients: [
      { name: "Chicken", quantity: "500g" },
      { name: "Corn flour", quantity: "2 cups" },
      { name: "Onions", quantity: "2 medium" },
      { name: "Tomatoes", quantity: "3 medium" },
      { name: "Spices", quantity: "to taste" },
    ],
    nutrition: {
      protein: "45g",
      carbs: "65g",
      fats: "18g",
    },
    steps: [
      "Marinate chicken with spices and let sit for 30 minutes.",
      "Grill chicken until cooked through and golden.",
      "Prepare fufu by mixing corn flour with boiling water.",
      "Serve chicken with fufu and sauce.",
    ],
    tip: "Marinate overnight for best flavor.",
  },
};

// Get dish by ID
export const getDishById = (id) => {
  return dishDetails[id] || dishDetails[1]; // Default to first dish if not found
};

