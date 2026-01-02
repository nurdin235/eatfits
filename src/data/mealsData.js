// Sample meals data for Browse Dishes page

export const sampleDishes = [
  {
    id: 1,
    name: "Creamy Avocado Toast",
    description: "Rich omega-3 breakfast with poached egg.",
    image: "/meals/meal.png",
    calories: 420,
    prepTime: 20,
    badges: ["HIGH PROTEIN"],
    diet: "keto",
    isFavorite: false,
  },
  {
    id: 2,
    name: "Kati Kati Chicken and Fufu",
    description: "Traditional Cameroonian dish with grilled chicken.",
    image: "/meals/kati-kati-chicken-and-fufu-corn.png",
    calories: 580,
    prepTime: 45,
    badges: ["HIGH PROTEIN", "TRADITIONAL"],
    diet: "omnivore",
    isFavorite: false,
  },
  {
    id: 3,
    name: "Kati Kati Chicken with Turnip Greens",
    description: "Grilled chicken served with fresh turnip greens.",
    image: "/meals/kati-kati-chicken-with-turnip-greens.png",
    calories: 520,
    prepTime: 40,
    badges: ["HIGH PROTEIN"],
    diet: "omnivore",
    isFavorite: false,
  },
  {
    id: 4,
    name: "Kati Kati Cameroon",
    description: "Authentic Cameroonian grilled chicken specialty.",
    image: "/meals/kati-kati-cameroon-1.png",
    calories: 550,
    prepTime: 50,
    badges: ["TRADITIONAL"],
    diet: "omnivore",
    isFavorite: false,
  },
];

export const filterOptions = {
  diets: ["Keto", "Vegetarian", "Vegan", "Omnivore", "Pescatarian"],
  calories: ["Under 300", "300-500", "500-700", "700+"],
  prepTime: ["Under 15 min", "15-30 min", "30-45 min", "45+ min"],
};

