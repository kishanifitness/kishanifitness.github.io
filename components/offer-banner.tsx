"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

export function OfferBanner() {
  const DEADLINE = "2025-12-31T23:59:59"
  const SPOTS_LEFT = 13

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [isExpired, setIsExpired] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date()
      const deadlineDate = new Date(DEADLINE)
      const difference = deadlineDate.getTime() - now.getTime()

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
        const minutes = Math.floor((difference / 1000 / 60) % 60)
        const seconds = Math.floor((difference / 1000) % 60)

        setTimeLeft({ days, hours, minutes, seconds })
        setIsExpired(false)
      } else {
        setIsExpired(true)
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  if (isExpired) {
    return null
  }

  const scrollToHero = () => {
    const element = document.getElementById("hero")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="fixed top-16 left-0 right-0 z-40 bg-black text-white py-2 md:py-3 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-2 md:gap-4">
          <div className="flex items-center gap-2 md:gap-3 text-xs md:text-base">
            <span className="font-bold">LIMITED OFFER</span>
            <span className="hidden md:inline">|</span>
            <span className="text-gray-300">{SPOTS_LEFT} spots left</span>
          </div>

          <div className="flex items-center gap-2 md:gap-3">
            <div className="flex items-center gap-1 md:gap-2 font-mono text-xs md:text-base">
              <span className="bg-white text-black px-1.5 md:px-2 py-0.5 md:py-1 rounded font-bold">
                {String(timeLeft.days).padStart(2, "0")}
              </span>
              <span>:</span>
              <span className="bg-white text-black px-1.5 md:px-2 py-0.5 md:py-1 rounded font-bold">
                {String(timeLeft.hours).padStart(2, "0")}
              </span>
              <span>:</span>
              <span className="bg-white text-black px-1.5 md:px-2 py-0.5 md:py-1 rounded font-bold">
                {String(timeLeft.minutes).padStart(2, "0")}
              </span>
              <span>:</span>
              <span className="bg-white text-black px-1.5 md:px-2 py-0.5 md:py-1 rounded font-bold">
                {String(timeLeft.seconds).padStart(2, "0")}
              </span>
            </div>

            <Button
              onClick={scrollToHero}
              size="sm"
              className="bg-white text-black hover:bg-gray-200 text-xs md:text-sm px-2 md:px-4"
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
