import { ClipboardList, MessageCircle, Phone } from 'lucide-react'

export function HowItWorks() {
  const steps = [
    {
      icon: ClipboardList,
      title: 'Complete the Form',
      description: 'Kickstart your journey by sharing your goals and preferences',
    },
    {
      icon: MessageCircle,
      title: 'Wait to be Contacted',
      description: 'Expect a text within 24 hours to schedule your consultation',
    },
    {
      icon: Phone,
      title: 'Quick 15-Min Call',
      description: 'Discuss your goals and create your personalized plan',
    },
  ]

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-black mb-16">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-black text-white mb-4">
                <step.icon size={32} />
              </div>
              <div className="text-6xl font-bold text-gray-200 -mt-2 mb-2">
                {index + 1}
              </div>
              <h3 className="text-xl font-bold text-black">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
