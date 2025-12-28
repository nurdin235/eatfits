"use client";
import React, { useState } from 'react';
import { SignupForm } from '@/components/onboarding/auth/SignupForm';
import { LoginForm } from '@/components/onboarding/auth/LoginForm';
import { SocialAuth } from '@/components/onboarding/auth/SocialAuth';
import { useRouter } from 'next/navigation';

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(false);
  const router = useRouter();

  const handleAction = () => {
    // Logic: Signup -> Step 4 | Login -> Step 2
    if (isLogin) {
      router.push('/onboarding/step-2');
    } else {
      router.push('/onboarding/step-4');
    }
  };

  return (
    <div className="screen-wrapper">
      {/* Top Nav */}
      <div className="flex items-center p-4 justify-between bg-transparent z-10 sticky top-0">
        <button onClick={() => router.back()} aria-label="Go back" className="flex items-center gap-2 px-3 py-2 rounded-full hover:bg-gray-200 dark:hover:bg-surface-dark transition-colors text-primary dark:text-white font-medium">
          <span className="material-symbols-outlined">arrow_back</span>
          <span className="text-sm">Back</span>
        </button>
      </div>

      {/* Progress Bar (Only show for Signup) */}
      {!isLogin && (
        <div className="progress-container">
          <div className="flex justify-between items-center">
            <p className="font-medium text-sm tracking-wide uppercase">Step 1 of 4</p>
            <p className="text-gray-400 text-xs font-medium">25% Completed</p>
          </div>
          <div className="progress-track">
            <div className="progress-fill" style={{ width: '25%' }}></div>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-6 pb-24 pt-4 text-gray-900 dark:text-white">
        <div className="pb-6">
          <h1 className="text-gray-900 dark:text-white tracking-tight text-[32px] font-bold leading-tight mb-3">
            {isLogin ? "Welcome back" : "Create your profile"}
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-base">
            {isLogin ? "Sign in to access your meal plans." : "Join EatFit to start your journey towards healthier eating."}
          </p>
        </div>

        {/* Dynamic Form Render */}
        {isLogin ? <LoginForm /> : <SignupForm />}

        <SocialAuth />

        <div className="text-center pb-8">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <button 
              onClick={() => setIsLogin(!isLogin)} 
              className="text-primary font-semibold hover:underline"
            >
              {isLogin ? "Sign up" : "Log in"}
            </button>
          </p>
        </div>
      </div>

      {/* Sticky Footer */}
      <div className="p-6 bg-background-light dark:bg-background-dark border-t border-gray-100 dark:border-gray-800 sticky bottom-0">
        <button onClick={handleAction} aria-label={isLogin ? "Login" : "Continue"} className="btn-cta flex items-center justify-center gap-2">
          <span className="text-sm font-semibold">{isLogin ? "Login" : "Continue"}</span>
          <span className="material-symbols-outlined text-xl text-white" aria-hidden="true">arrow_forward</span>
        </button>
      </div>
    </div>
  );
}