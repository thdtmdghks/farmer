import { AnimateOnScroll } from '@/components/animate-on-scroll'

const images = Array.from({ length: 6 }, (_, i) => ({
  src: `https://picsum.photos/600/400?random=${20 + i}`,
  alt: `Showcase ${i + 1}`,
}))

export function ShowcaseSection() {
  return (
    <section className="bg-muted/50 py-24">
      <div className="container mx-auto px-4">
        <AnimateOnScroll animation="fade-up">
          <h2 className="mb-12 text-center text-3xl font-bold">Showcase</h2>
        </AnimateOnScroll>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((img, i) => (
            <AnimateOnScroll key={img.src} animation="fade-up" delay={i * 100}>
              <img
                src={img.src}
                alt={img.alt}
                className="w-full rounded-xl shadow-md"
              />
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
