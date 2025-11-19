import { OfferBanner } from '@/components/offer-banner'
import { HeroSection } from '@/components/hero-section'
import { HowItWorks } from '@/components/how-it-works'
import { WhyTrainWithKian } from '@/components/why-train-with-kian'
import { WorkoutVideos } from '@/components/workout-videos'
import { Programs } from '@/components/programs'
import { Transformations } from '@/components/transformations'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <OfferBanner />
      <Header />
      <HeroSection />
      <HowItWorks />
      <WhyTrainWithKian />
      <WorkoutVideos />
      <Programs />
      <Transformations />
      <Footer />
    </main>
  )
}