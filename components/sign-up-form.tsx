'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ChevronRight, ChevronLeft } from 'lucide-react'

type FormData = {
  goal: string
  gender: string
  ageGroup: string
  name: string
  email: string
  instagram: string
}

export function SignUpForm() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState<FormData>({
    goal: '',
    gender: '',
    ageGroup: '',
    name: '',
    email: '',
    instagram: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const goals = [
    'Build Muscle',
    'Lose Fat',
    'Get Strong',
    'Athletic Performance',
    'General Fitness',
  ]

  const genders = ['Male', 'Female', 'Other']

  const ageGroups = ['Under 18', '18-21', '22-29', '30+']

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        alert('Thank you! We\'ll contact you within 24 hours.')
        setFormData({
          goal: '',
          gender: '',
          ageGroup: '',
          name: '',
          email: '',
          instagram: '',
        })
        setStep(1)
      } else {
        alert('Something went wrong. Please try again.')
      }
    } catch (error) {
      console.error('[v0] Form submission error:', error)
      alert('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const progress = (step / 4) * 100

  return (
    <div className="space-y-6">
      {/* Progress Bar */}
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className="bg-black h-2 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Step 1: Fitness Goals */}
        {step === 1 && (
          <div className="space-y-4 animate-fadeIn">
            <h3 className="text-2xl font-bold text-black md:text-black text-shadow-sm">
              What's your primary goal?
            </h3>
            <div className="grid grid-cols-1 gap-3">
              {goals.map((goal) => (
                <button
                  key={goal}
                  type="button"
                  onClick={() => {
                    setFormData({ ...formData, goal })
                    setStep(2)
                  }}
                  className={`p-4 rounded-lg border-2 transition-all font-semibold text-left ${
                    formData.goal === goal
                      ? 'border-black bg-black text-white'
                      : 'border-gray-800 bg-white/90 hover:border-black text-black md:border-gray-300 md:bg-transparent'
                  }`}
                >
                  {goal}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Gender */}
        {step === 2 && (
          <div className="space-y-4 animate-fadeIn">
            <h3 className="text-2xl font-bold text-black text-shadow-sm">Select your gender</h3>
            <div className="grid grid-cols-1 gap-3">
              {genders.map((gender) => (
                <button
                  key={gender}
                  type="button"
                  onClick={() => {
                    setFormData({ ...formData, gender })
                    setStep(3)
                  }}
                  className={`p-4 rounded-lg border-2 transition-all font-semibold ${
                    formData.gender === gender
                      ? 'border-black bg-black text-white'
                      : 'border-gray-800 bg-white/90 hover:border-black text-black md:border-gray-300 md:bg-transparent'
                  }`}
                >
                  {gender}
                </button>
              ))}
            </div>
            <Button
              type="button"
              variant="outline"
              onClick={() => setStep(1)}
              className="w-full border-2 border-gray-800 bg-white/90 hover:bg-white md:border-gray-300 md:bg-transparent"
            >
              <ChevronLeft className="mr-2 h-4 w-4" /> Back
            </Button>
          </div>
        )}

        {/* Step 3: Age Group */}
        {step === 3 && (
          <div className="space-y-4 animate-fadeIn">
            <h3 className="text-2xl font-bold text-black text-shadow-sm">Select your age group</h3>
            <div className="grid grid-cols-2 gap-3">
              {ageGroups.map((age) => (
                <button
                  key={age}
                  type="button"
                  onClick={() => {
                    setFormData({ ...formData, ageGroup: age })
                    setStep(4)
                  }}
                  className={`p-4 rounded-lg border-2 transition-all font-semibold ${
                    formData.ageGroup === age
                      ? 'border-black bg-black text-white'
                      : 'border-gray-800 bg-white/90 hover:border-black text-black md:border-gray-300 md:bg-transparent'
                  }`}
                >
                  {age}
                </button>
              ))}
            </div>
            <Button
              type="button"
              variant="outline"
              onClick={() => setStep(2)}
              className="w-full border-2 border-gray-800 bg-white/90 hover:bg-white md:border-gray-300 md:bg-transparent"
            >
              <ChevronLeft className="mr-2 h-4 w-4" /> Back
            </Button>
          </div>
        )}

        {/* Step 4: Contact Info */}
        {step === 4 && (
          <div className="space-y-4 animate-fadeIn">
            <h3 className="text-2xl font-bold text-black text-shadow-sm">
              Let's get in touch
            </h3>
            <div className="space-y-4">
              <div>
                <Label htmlFor="name" className="text-black font-semibold text-shadow-sm">
                  Full Name *
                </Label>
                <Input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="mt-1 bg-white/95 border-gray-800 md:bg-transparent md:border-gray-300"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-black font-semibold text-shadow-sm">
                  Email *
                </Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="mt-1 bg-white/95 border-gray-800 md:bg-transparent md:border-gray-300"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <Label htmlFor="instagram" className="text-black font-semibold text-shadow-sm">
                  Instagram Username
                </Label>
                <Input
                  id="instagram"
                  type="text"
                  value={formData.instagram}
                  onChange={(e) =>
                    setFormData({ ...formData, instagram: e.target.value })
                  }
                  className="mt-1 bg-white/95 border-gray-800 md:bg-transparent md:border-gray-300"
                  placeholder="@username"
                />
              </div>
            </div>
            <div className="flex gap-3">
              <Button
                type="button"
                variant="outline"
                onClick={() => setStep(3)}
                className="flex-1 border-2 border-gray-800 bg-white/90 hover:bg-white md:border-gray-300 md:bg-transparent"
              >
                <ChevronLeft className="mr-2 h-4 w-4" /> Back
              </Button>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 bg-black text-white hover:bg-gray-800"
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        )}
      </form>
    </div>
  )
}
