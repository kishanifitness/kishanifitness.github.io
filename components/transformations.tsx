"use client"

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"

type Transformation = {
  name: string
  image: string
  testimonial: string
  stats?: string
}

export function Transformations() {
  const transformations: Transformation[] = [
    {
      name: "",
      image: "/images/client-transformations-1.jpeg",
      testimonial: "Testimonial"
    },
    {
      name: "",
      image: "/images/client-transformations-2.jpeg",
      testimonial: "Testimonial"
    },
    {
      name: "",
      image: "/images/client-transformations-3.jpeg",
      testimonial: "Testimonial"
    },
    {
      name: "",
      image: "/images/client-transformations-4.jpeg",
      testimonial: "Testimonial"
    },
    {
      name: "Client",
      image: "/images/client-transformations-5.jpeg",
      testimonial: "Kian's guidance helped me break through plateaus and reach goals I'd been chasing for years.",
    },
  ]

  return (
    <section id="transformations" className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4 uppercase tracking-tight">
            Client Transformations
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Real people. Real results. See what's possible when you commit to the process.
          </p>
        </div>

        <div className="relative">
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full max-w-6xl mx-auto"
          >
            <CarouselContent className="-ml-4 items-stretch py-10">
              {transformations.map((item, index) => {
                const hasTextContent = item.name || item.testimonial

                return (
                  <CarouselItem key={index} className="pl-4 basis-[90%] md:basis-[75%] lg:basis-[70%]">
                    <div className="relative group transition-all duration-300 transform h-full">
                      <Card className="border-none bg-white rounded-3xl overflow-hidden h-full flex flex-col">
                        <CardContent className="p-0 flex flex-col h-full">
                          <div
                            className={
                              hasTextContent
                                ? "relative aspect-[4/3] md:aspect-[16/9] overflow-hidden shrink-0"
                                : "relative w-full h-full overflow-hidden"
                            }
                          >
                            <img
                              src={item.image || "/placeholder.svg"}
                              alt={`${item.name || "Client"} transformation`}
                              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105 max-h-[500px] md:max-h-[600px]"
                            />
                          </div>

                          {hasTextContent && (
                            <div className="p-6 md:p-8 flex flex-col flex-grow">
                              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4 gap-2">
                                {item.name && <h3 className="font-bold text-2xl text-black">{item.name}</h3>}
                              </div>
                              {item.testimonial && (
                                <p className="text-gray-600 text-base leading-relaxed italic flex-grow">
                                  "{item.testimonial}"
                                </p>
                              )}
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                )
              })}
            </CarouselContent>

            <CarouselPrevious className="left-2 md:left-[-60px] h-10 w-10 md:h-14 md:w-14 border-2 border-black bg-white/80 md:bg-transparent hover:bg-black hover:text-white transition-colors z-10" />
            <CarouselNext className="right-2 md:right-[-60px] h-10 w-10 md:h-14 md:w-14 border-2 border-black bg-white/80 md:bg-transparent hover:bg-black hover:text-white transition-colors z-10" />
          </Carousel>
        </div>
      </div>
    </section>
  )
}
