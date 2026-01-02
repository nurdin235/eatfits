import OnboardingCarousel from "@/components/OnboardingCarousel";
import Button from "@/components/ui/Button";

export default function OnboardingPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-start px-4 pt-8 pb-12 bg-background-light">
      <div className="w-full max-w-md">
        <div className="flex items-center justify-between mb-4">
          <button className="text-xl">←</button>
          <div className="text-sm text-primary/60">Step 1 of 4</div>
        </div>

        <OnboardingCarousel interval={2500} />

        <div className="mt-8 px-2">
          <Button variant="cta" className="w-full">Next Step</Button>
        </div>
      </div>
    </main>
  );
}
