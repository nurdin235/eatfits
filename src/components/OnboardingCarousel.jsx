"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { onboardingSlides } from "@/personalizationData.js/onboardingData";

export default function WelcomeCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % onboardingSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const currentSlide = onboardingSlides[index];

  return (
    <div className="flex flex-col items-center w-full max-w-md mx-auto">
      {/* 🖼️ Image Section */}
      <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
        {/* Static Shadow - Grounds the bowl */}
        <div className="absolute bottom-6 w-3/5 h-6 bg-dark/10 blur-2xl rounded-[100%] z-0" />
        
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 1.1, y: -10 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="relative z-10 w-full h-full"
          >
            {/* Subtle Float Micro-interaction */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full h-full bg-background-light flex items-center justify-center"
            >
              {/* Normalize image path (strip leading ../ or public/) to ensure correct public URL */}
              {/** @type {string} */}
              {(() => {
                const raw = currentSlide.image || "";
                const normalized = raw
                  .replace(/^(\.\.\/)+/, "")
                  .replace(/^\.\//, "")
                  .replace(/^public\//, "")
                  .replace(/^\/+/, "");
                const src = "/" + normalized;

                return (
                  <>
                    <img
                      src={src}
                      alt={currentSlide.title}
                      className="object-contain max-w-full max-h-full z-10"
                      loading="eager"
                      decoding="sync"
                    />

                    <Image
                      src={src}
                      alt={currentSlide.title}
                      fill
                      unoptimized
                      priority
                      className="object-contain z-20"
                    />
                  </>
                );
              })()}
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 📝 Content Section */}
      <div className="mt-8 text-center px-4 h-28">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold text-foreground mb-2">
              {currentSlide.title}
            </h2>
            <p className="text-primary/90 text-sm md:text-base leading-relaxed max-w-[280px] mx-auto">
              {currentSlide.description}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 🔘 Navigation Indicators */}
      {/* <div className="flex gap-2 mt-4">
        {onboardingSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              i === index ? "w-8 bg-cta" : "w-2 bg-accent/40"
            }`}
          />
        ))}
      </div> */}
    </div>
  );
}