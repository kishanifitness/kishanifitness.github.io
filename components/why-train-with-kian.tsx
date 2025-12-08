export function WhyTrainWithKian() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-black mb-16">
          Train With KISHANI
        </h2>

        {/* Block 1 */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="space-y-6">
            <img
              src="/images/train-with-kian-1.jpg"
              alt="Kian training"
              className="w-full h-[900px] md:h-[1000px] object-cover rounded-lg shadow-lg"
            />
            <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed text-pretty">
              "I've been in your shoes, frustrated with slow progress, unsure which path works, and craving results that actually stick. That experience fueled my approach: a system built around your life, your goals, and your schedule, helping you push past plateaus and reach your potential."
            </blockquote>
          </div>
        </div>

        {/* Block 2 */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Text on left for desktop */}
            <div className="order-2 lg:order-1">
              <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed text-pretty">
                "Your goals are unique, and so is my coaching. Work with me 1-on-1 to create a program that fits your body, lifestyle, and mindset. Together, we'll build strength, confidence, and habits that last, not just a quick transformation, but a sustainable one."
              </blockquote>
            </div>
            
            {/* Image on right for desktop, on top for mobile */}
            <div className="order-1 lg:order-2">
              <img
                src="/images/train-with-kian-2.jpg"
                alt="Kian with client"
                className="w-full h-[400px] md:h-[500px] object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
