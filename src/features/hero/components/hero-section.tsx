import { Button } from '@/components/ui/button'
import { AnimateOnScroll } from '@/components/animate-on-scroll'

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <img
        src="https://picsum.photos/1920/1080?random=1"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50" />
      <AnimateOnScroll
        animation="fade-up"
        className="relative z-10 px-4 text-center"
      >
        <h1 className="text-5xl font-bold tracking-tight text-white sm:text-7xl">
          Build Something Amazing
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80">
          A modern, scalable React application built with Bulletproof React
          architecture. Scroll down to explore beautiful animations.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button size="lg">Get Started</Button>
          <Button
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white/10"
          >
            Learn More
          </Button>
        </div>
      </AnimateOnScroll>
    </section>
  )
}
