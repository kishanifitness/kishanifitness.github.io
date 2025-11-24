"use client"

import { SignUpForm } from "@/components/sign-up-form"

export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen pt-32 lg:pt-0">
      {/* Desktop: Split-screen layout */}
      <div className="hidden lg:flex lg:min-h-screen">
        {/* Left side: Form with white background (50%) */}
        <div className="lg:w-1/2 bg-white flex items-center justify-center p-12 pt-32">
          <div className="max-w-lg w-full">
            <h1 className="text-5xl xl:text-6xl font-bold text-black mb-4 leading-tight">
              Transform Your Body, Elevate Your Life
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Premium 1-on-1 coaching tailored to your goals. Start your journey today.
            </p>
            <SignUpForm />
          </div>
        </div>

        {/* Right side: Image center-cropped (50%) with zoom effect */}
        <div className="lg:w-1/2 relative overflow-hidden">
          <img
            src="/images/hero-section-image.jpg"
            alt="Kian Ishani - Personal Trainer"
            className="absolute inset-0 w-full h-full object-cover scale-110"
          />
        </div>
      </div>

      {/* Mobile: Form centered on top, image below with opacity */}
      <div className="lg:hidden relative min-h-screen pt-52 pb-16">
        {/* Background image with opacity and zoom */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img src="/images/hero-section-image.jpg" alt="" className="w-full h-full object-cover opacity-30 scale-110" />
        </div>

        {/* Form content centered, no background */}
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-md mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4 leading-tight drop-shadow-sm">
              Transform Your Body, Elevate Your Life
            </h1>
            <p className="text-lg text-gray-800 mb-8 font-semibold drop-shadow-sm">
              Premium 1-on-1 coaching tailored to your goals. Start your journey today.
            </p>
            <SignUpForm />
          </div>
        </div>
      </div>
    </section>
  )
}
