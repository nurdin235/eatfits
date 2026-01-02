"use client";

import { usePathname } from "next/navigation";
import BottomNav from "./BottomNav";

export default function BottomNavWrapper() {
  const pathname = usePathname();
  
  // Hide BottomNav on onboarding/auth pages (but show on /complete)
  const hideOnRoutes = [
    "/auth",
    "/goals",
    "/diets",
    "/allergies",
    "/planetary",
    "/onboarding",
    "/setup",
  ];
  
  const shouldHide = hideOnRoutes.some(route => pathname?.startsWith(route));
  
  if (shouldHide) {
    return null;
  }
  
  return <BottomNav />;
}

