import { Button } from '@/components/ui/button'
import { AnimateOnScroll } from '@/components/animate-on-scroll'

export function CtaSection() {
  return (
    <section className="relative overflow-hidden py-32">
      <img
        src="https://picsum.photos/1920/800?random=30"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 container mx-auto px-4">
        <AnimateOnScroll animation="zoom-in" className="text-center text-white">
          <h2 className="text-4xl font-bold">Ready to Get Started?</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
            Join thousands of developers building better applications with
            modern tools and best practices.
          </p>
          <div className="mt-8">
            <Button size="lg">Start Building Now</Button>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
