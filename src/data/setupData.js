// DEMO DATA — User Setup Flow Options
// Replace with backend integration later

export const ageRanges = [
  { id: "18-24", label: "18–24" },
  { id: "25-34", label: "25–34" },
  { id: "35-44", label: "35–44" },
  { id: "45-54", label: "45–54" },
  { id: "55-64", label: "55–64" },
  { id: "65+", label: "65+" },
];

export const genderOptions = [
  { id: "male", label: "Male" },
  { id: "female", label: "Female" },
  { id: "non-binary", label: "Non-binary" },
  { id: "prefer-not-to-say", label: "Prefer not to say" },
];

export const dietTypes = [
  { id: "omnivore", label: "Omnivore", icon: "restaurant" },
  { id: "vegetarian", label: "Vegetarian", icon: "eco" },
  { id: "vegan", label: "Vegan", icon: "spa" },
  { id: "pescatarian", label: "Pescatarian", icon: "set_meal" },
  { id: "keto", label: "Keto", icon: "fitness_center" },
  { id: "halal", label: "Halal", icon: "mosque" },
];

export const allergyOptions = [
  { id: "nuts", label: "Nuts", icon: "warning" },
  { id: "dairy", label: "Dairy", icon: "warning" },
  { id: "eggs", label: "Eggs", icon: "warning" },
  { id: "gluten", label: "Gluten", icon: "warning" },
  { id: "shellfish", label: "Shellfish", icon: "warning" },
  { id: "soy", label: "Soy", icon: "warning" },
];

export const healthGoals = [
  { id: "lose-weight", label: "Lose weight", icon: "monitor_weight", description: "Reduce body fat" },
  { id: "maintain-weight", label: "Maintain weight", icon: "balance", description: "Keep current weight" },
  { id: "gain-muscle", label: "Gain muscle", icon: "fitness_center", description: "Build muscle mass" },
  { id: "eat-healthier", label: "Eat healthier", icon: "health_and_safety", description: "Improve nutrition" },
];

export const activityLevels = [
  { id: "low", label: "Low", description: "Little to no exercise" },
  { id: "moderate", label: "Moderate", description: "Exercise 1–3 times/week" },
  { id: "high", label: "High", description: "Exercise 4+ times/week" },
];

export const cookingTimeOptions = [
  { id: "quick", label: "Quick", description: "≤20 min", icon: "timer" },
  { id: "balanced", label: "Balanced", description: "20–40 min", icon: "schedule" },
  { id: "no-limit", label: "No limit", description: "Any time", icon: "all_inclusive" },
];

// Default demo user profile structure
export const defaultUserProfile = {
  firstName: "",
  ageRange: "",
  gender: "",
  dietType: [],
  allergies: [],
  dislikes: [],
  goal: "",
  activityLevel: "",
  weeklyBudget: 50,
  cookingTime: "",
  householdSize: 1,
  sameMeals: true,
};

