"use client"

import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useRef, useEffect } from "react"

export function Programs() {
  const [expandedWeek, setExpandedWeek] = useState<number | null>(null)

  // VIDEO THUMBNAIL REFS & STATE
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const [videoPoster, setVideoPoster] = useState("")

  useEffect(() => {
    const video = videoRef.current
    const canvas = canvasRef.current
    if (!video || !canvas) return

    const captureThumbnail = () => {
      canvas.width = video.videoWidth
      canvas.height = video.videoHeight

      const ctx = canvas.getContext("2d")
      if (!ctx) return

      ctx.drawImage(video, 0, 0, canvas.width, canvas.height)
      setVideoPoster(canvas.toDataURL("image/jpeg"))
    }

    video.addEventListener("loadeddata", captureThumbnail)

    return () => {
      video.removeEventListener("loadeddata", captureThumbnail)
    }
  }, [])

  const scrollToHero = () => {
    const element = document.getElementById("hero")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const programInclusions = [
    {
      title: "Weekly 1-on-1 coaching sessions",
      description:
        "Get personalized attention and guidance from your dedicated coach every week to ensure you stay on track.",
    },
    {
      title: "Weekly check-ins & progress tracking",
      description: "Monitor your transformation with detailed weekly assessments and adjustments to your plan.",
    },
    {
      title: "Personalized workout plans tailored to you",
      description: "Custom routines designed specifically for your fitness level, goals, and available equipment.",
    },
    {
      title: "Custom nutrition & meal guidance",
      description: "Flexible meal plans that fit your lifestyle, preferences, and dietary needs for optimal results.",
    },
    {
      title: "Form review videos for perfect technique",
      description:
        "Submit your workout videos and receive detailed feedback to master proper form and prevent injuries.",
    },
    {
      title: "24/7 messaging support",
      description: "Get answers to your questions anytime, anywhere with unlimited access to your coach.",
    },
    {
      title: "Access to private community",
      description: "Connect with like-minded individuals on the same journey for motivation and support.",
    },
    {
      title: "Supplement recommendations",
      description: "Science-backed supplement guidance to maximize your results and optimize recovery.",
    },
    {
      title: "Monthly body composition analysis",
      description: "Track your muscle gain and fat loss progress with detailed monthly assessments.",
    },
    {
      title: "Accountability & motivation system",
      description: "Stay consistent with our proven system designed to keep you motivated and accountable.",
    },
    {
      title: "Exercise library with video demos",
      description: "Access hundreds of exercise demonstrations to ensure you are performing each movement correctly.",
    },
    {
      title: "Lifetime program access",
      description: "Keep your program forever and revisit it anytime to maintain your results.",
    },
  ]

  const featuredProgram = {
    title: "10-Week Lean Muscle Program",
    originalPrice: 150,
    price: 98,
    description: "Build lean muscle and shed fat with our most comprehensive program",
    weeks: [
      { week: 1, title: "Foundation", focus: "Movement patterns & form" },
      { week: 2, title: "Strength Building", focus: "Progressive overload begins" },
      { week: 3, title: "Hypertrophy Phase", focus: "Muscle growth focus" },
      { week: 4, title: "Deload Week", focus: "Recovery & adaptation" },
      { week: 5, title: "Power Development", focus: "Explosive movements" },
      { week: 6, title: "Muscle Endurance", focus: "Higher volume training" },
      { week: 7, title: "Peak Strength", focus: "Maximum intensity" },
      { week: 8, title: "Metabolic Conditioning", focus: "Fat loss acceleration" },
      { week: 9, title: "Final Push", focus: "All-out effort" },
      { week: 10, title: "Transformation Week", focus: "Reveal your results" },
    ],
  }

  const comingSoonPrograms = [
    {
      title: "Goddess Glow",
      subtitle: "8-Week Sculpting Program",
      description: "For women looking to tone and define",
      status: "COMING SOON",
    },
    {
      title: "Alpha Build",
      subtitle: "12-Week Mass Gain Program",
      description: "Maximum muscle growth for serious lifters",
      status: "COMING SOON",
    },
  ]

  const oneOnOneProgram = {
    title: "1-on-1 In-Person Training",
    subtitle: "Personalized Sessions",
    description:
      "Get dedicated one-on-one coaching with personalized attention tailored to your specific goals and fitness level.",
    status: "ONGOING",
    highlights: [
      "Customized workout plans in real-time",
      "Direct form correction and guidance",
      "Flexible scheduling to fit your lifestyle",
      "Immediate feedback and adjustments",
      "Location: Las Vegas & Southern California",
    ],
  }

  return (
    <section id="programs" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-2">
          Build Your Perfect Body
        </h2>
        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
          Choose the program that matches your goals
        </p>

        <div className="max-w-5xl mx-auto">
          <div className="bg-black text-white rounded-xl overflow-hidden shadow-xl mb-8">
            <div className="p-6 pb-4">
              <div className="inline-block bg-white text-black text-xs font-bold px-3 py-1 rounded-full mb-3">
                FEATURED PROGRAM
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-2">{featuredProgram.title}</h3>
              <p className="text-gray-300 text-lg">{featuredProgram.description}</p>
            </div>

            {/* Full width video with dynamic thumbnail */}
            <div className="relative w-full bg-black">
              <video
                ref={videoRef}
                controls
                preload="metadata"
                poster={videoPoster}
                className="w-full h-auto object-contain"
              >
                <source src="/videos/coach-intro.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <canvas ref={canvasRef} className="hidden" />
            </div>

            {/* Pricing and CTA below video */}
            <div className="p-8">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="flex items-baseline gap-3">
                  <span className="text-5xl font-bold">${featuredProgram.price}</span>
                  <span className="text-2xl text-gray-400 line-through">${featuredProgram.originalPrice}</span>
                  <span className="bg-green-500 text-white text-sm font-bold px-3 py-1 rounded-full">Save $52</span>
                </div>

                <Button
                  onClick={scrollToHero}
                  className="w-full sm:w-auto bg-white text-black hover:bg-gray-100 font-bold py-6 px-12 text-lg rounded-lg transition-all"
                >
                  Get Started Now
                </Button>
              </div>
            </div>
          </div>

          {/* Program Inclusions */}
          <div className="bg-white rounded-xl p-8 shadow-lg mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-black mb-6">
              What You Get When You Sign Up:
            </h3>
            <div className="space-y-4">
              {programInclusions.map((inclusion, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="bg-black rounded-full p-1 mt-1 flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <span className="font-bold text-black">{inclusion.title}</span>{" "}
                    <span className="text-gray-700">{inclusion.description}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 1-on-1 Program */}
          <div className="bg-black text-white rounded-xl p-8 shadow-xl mb-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex-1">
                <div className="inline-block bg-white text-black text-xs font-bold px-3 py-1 rounded-full mb-3">
                  {oneOnOneProgram.status}
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-2">{oneOnOneProgram.title}</h3>
                <p className="text-gray-300 text-lg mb-6">{oneOnOneProgram.description}</p>
                <div className="space-y-2 mb-6">
                  {oneOnOneProgram.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-white" />
                      <span className="text-white">{highlight}</span>
                    </div>
                  ))}
                </div>
                <Button
                  onClick={scrollToHero}
                  className="bg-white text-black hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-all"
                >
                  Inquire Now
                </Button>
              </div>
            </div>
          </div>

          {/* More Programs Coming Soon */}
          <div>
            <h3 className="text-2xl font-bold text-center text-black mb-2">
              More Programs Coming Soon
            </h3>
            <p className="text-center text-gray-600 mb-6">
              Exciting new programs launching soon. Stay tuned!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {comingSoonPrograms.map((program, index) => (
                <div
                  key={index}
                  className="relative bg-gray-100 rounded-xl p-6 shadow-xl overflow-hidden group hover:shadow-2xl transition-all border border-gray-200"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-black opacity-5 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-500"></div>
                  <div className="relative z-10">
                    <div className="inline-block bg-black text-white text-xs font-bold px-2 py-1 rounded-full mb-3">
                      {program.status}
                    </div>
                    <h4 className="text-2xl font-bold text-black mb-1">{program.title}</h4>
                    <p className="text-xs text-gray-600 font-semibold mb-3 uppercase tracking-wide">
                      {program.subtitle}
                    </p>
                    <p className="text-gray-700 mb-4 leading-relaxed">{program.description}</p>
                    <Button
                      onClick={scrollToHero}
                      className="w-full bg-black text-white hover:bg-gray-800 font-bold py-3 rounded-lg transition-all"
                    >
                      Get Notified
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
