import { createFileRoute } from '@tanstack/react-router'
import { Navbar } from '@/features/navigation/components/navbar'
import { HeroSection } from '@/features/hero/components/hero-section'
import { FeaturesSection } from '@/features/features/components/features-section'
import { CtaSection } from '@/features/cta/components/cta-section'
import { Footer } from '@/features/navigation/components/footer'

export const Route = createFileRoute('/')({
  component: LandingPage,
})

function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  )
}
