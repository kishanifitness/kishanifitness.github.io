'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

type Transformation = {
  name: string
  beforeImage: string
  afterImage: string
  testimonial: string
}

export function Transformations() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const transformations: Transformation[] = [
    {
      name: 'Mike Johnson',
      beforeImage: '/images/overweight-man-before.png',
      afterImage: '/images/fit-muscular-man-after.jpg',
      testimonial:
        'Working with Kian changed my life. The personalized approach and constant support helped me achieve results I never thought possible.',
    },
    {
      name: 'Sarah Williams',
      beforeImage: '/images/woman-before-fitness.jpg',
      afterImage: '/images/fit-toned-woman-after.jpg',
      testimonial:
        'I finally found a coach who understands my goals and lifestyle. The transformation speaks for itself, but the confidence I gained is priceless.',
    },
    {
      name: 'David Chen',
      beforeImage: '/images/skinny-man-before.png',
      afterImage: '/images/muscular-fit-man-after.jpg',
      testimonial:
        'From skinny to strong in 12 weeks. Kian\'s program gave me the structure and guidance I needed to build serious muscle.',
    },
  ]

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === transformations.length - 1 ? 0 : prev + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? transformations.length - 1 : prev - 1
    )
  }

  const current = transformations[currentIndex]

  return (
    <section id="transformations" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-black mb-4">
          Real Results, Real People
        </h2>
        <p className="text-center text-gray-600 mb-16 text-lg">
          See what's possible with dedicated coaching
        </p>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Transformation Display */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* Before Image */}
              <div className="relative">
                <div className="absolute top-4 left-4 bg-black text-white px-4 py-2 rounded font-bold z-10">
                  BEFORE
                </div>
                <img
                  src={current.beforeImage || "/placeholder.svg"}
                  alt={`${current.name} before`}
                  className="w-full h-[400px] md:h-[500px] object-cover rounded-lg shadow-lg"
                />
              </div>

              {/* After Image */}
              <div className="relative">
                <div className="absolute top-4 left-4 bg-black text-white px-4 py-2 rounded font-bold z-10">
                  AFTER
                </div>
                <img
                  src={current.afterImage || "/placeholder.svg"}
                  alt={`${current.name} after`}
                  className="w-full h-[400px] md:h-[500px] object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>

            {/* Testimonial */}
            <div className="bg-white rounded-lg p-6 md:p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-black mb-3">
                {current.name}
              </h3>
              <p className="text-lg text-gray-700 italic leading-relaxed text-pretty">
                "{current.testimonial}"
              </p>
            </div>

            {/* Navigation Arrows */}
            <div className="flex justify-center gap-4 mt-8">
              <Button
                onClick={prevSlide}
                size="lg"
                variant="outline"
                className="rounded-full w-14 h-14 p-0"
                aria-label="Previous transformation"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button
                onClick={nextSlide}
                size="lg"
                variant="outline"
                className="rounded-full w-14 h-14 p-0"
                aria-label="Next transformation"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-4">
              {transformations.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex ? 'bg-black w-8' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to transformation ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
