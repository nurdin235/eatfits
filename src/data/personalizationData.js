// Personalization data used across onboarding and preference screens

export const dietPreferences = [
  { id: "omnivore", label: "Omnivore" },
  { id: "vegetarian", label: "Vegetarian" },
  { id: "vegan", label: "Vegan" },
  { id: "pescatarian", label: "Pescatarian" },
  { id: "keto", label: "Keto" },
];

export const goals = [
  { id: "weight_loss", label: "Lose weight" },
  { id: "maintenance", label: "Maintain weight" },
  { id: "muscle_gain", label: "Gain muscle" },
  { id: "healthier_eating", label: "Eat healthier" },
];

export const budgets = [
  { id: "low", label: "Low" },
  { id: "medium", label: "Moderate" },
  { id: "high", label: "Flexible" },
];

export const allergies = [
  { id: "nuts", label: "Tree nuts" },
  { id: "gluten", label: "Gluten" },
  { id: "dairy", label: "Dairy" },
  { id: "shellfish", label: "Shellfish" },
  { id: "soy", label: "Soy" },
];

// New: Primary goals tailored for the Step 2 UI
export const primaryGoals = [
  {
    id: "weight",
    title: "Lose weight",
    description: "Reduce body fat and improve fitness.",
    icon: "monitor_weight",
  },
  {
    id: "maintenance",
    title: "Maintain weight",
    description: "Keep a balanced and sustainable routine.",
    icon: "balance",
  },
  {
    id: "muscle",
    title: "Gain muscle",
    description: "Build lean muscle mass.",
    icon: "fitness_center",
  },
  {
    id: "health",
    title: "Eat healthier",
    description: "Improve overall nutrition and wellbeing.",
    icon: "health_and_safety",
  },
];

// Budgets for the Step 2 UI
export const budgetTiers = [
  { id: "low", symbol: "$", label: "Low" },
  { id: "medium", symbol: "$$", label: "Moderate" },
  { id: "high", symbol: "$$$", label: "Flexible" },
];

export default {
  dietPreferences,
  goals,
  budgets,
  allergies,
  primaryGoals,
  budgetTiers,
};