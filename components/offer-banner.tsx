'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'

export function OfferBanner() {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 12,
    minutes: 30,
    seconds: 45,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev

        if (seconds > 0) {
          seconds--
        } else if (minutes > 0) {
          minutes--
          seconds = 59
        } else if (hours > 0) {
          hours--
          minutes = 59
          seconds = 59
        } else if (days > 0) {
          days--
          hours = 23
          minutes = 59
          seconds = 59
        }

        return { days, hours, minutes, seconds }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const scrollToHero = () => {
    const element = document.getElementById('hero')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="fixed top-16 left-0 right-0 z-40 bg-black text-white py-2 md:py-3 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-2 md:gap-4">
          <div className="flex items-center gap-2 md:gap-3 text-xs md:text-base">
            <span className="font-bold">LIMITED OFFER</span>
            <span className="hidden md:inline">|</span>
            <span className="text-gray-300">3 spots left</span>
          </div>
          
          <div className="flex items-center gap-2 md:gap-3">
            <div className="flex items-center gap-1 md:gap-2 font-mono text-xs md:text-base">
              <span className="bg-white text-black px-1.5 md:px-2 py-0.5 md:py-1 rounded font-bold">
                {String(timeLeft.days).padStart(2, '0')}
              </span>
              <span>:</span>
              <span className="bg-white text-black px-1.5 md:px-2 py-0.5 md:py-1 rounded font-bold">
                {String(timeLeft.hours).padStart(2, '0')}
              </span>
              <span>:</span>
              <span className="bg-white text-black px-1.5 md:px-2 py-0.5 md:py-1 rounded font-bold">
                {String(timeLeft.minutes).padStart(2, '0')}
              </span>
              <span>:</span>
              <span className="bg-white text-black px-1.5 md:px-2 py-0.5 md:py-1 rounded font-bold">
                {String(timeLeft.seconds).padStart(2, '0')}
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
