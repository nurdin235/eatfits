import WelcomeCarousel from "@/components/onboarding/WelcomeCarousel";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-background flex flex-col items-center justify-between py-12 px-6 overflow-hidden">
      
      {/* Top Logo / Brand - Minimalist */}
      <div className="flex flex-col items-center gap-1">
        <h1 className="text-2xl font-bold tracking-tighter text-foreground uppercase">
          EatFit
        </h1>
        <div className="h-1 w-8 bg-primary rounded-full" />
      </div>

      {/* Hero Carousel Area */}
      <section className="w-full flex-1 flex flex-col justify-center">
        <WelcomeCarousel />
      </section>

      {/* Call to Action Section */}
      <div className=" max-w-sm flex flex-col gap-4 mt-8">
        <Link 
          href="/auth" 
          className="w-full btn bg-cta text-white py-4 rounded-lg font-bold text-center shadow-lg hover:brightness-110 active:scale-[0.98] transition-all"
        >
          Get Started
        </Link>
        
        <p className="text-xs text-center text-primary/60">
          Join thousands eating healthier every day.
        </p>
      </div>

    </main>
  );
}