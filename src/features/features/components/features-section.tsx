import { AnimateOnScroll } from '@/components/animate-on-scroll'

const features = [
  {
    title: 'Lightning Fast Performance',
    description:
      'Built on Vite with optimized code splitting and lazy loading. Every interaction feels instant, every page loads in milliseconds.',
    image: 'https://picsum.photos/800/600?random=10',
  },
  {
    title: 'Scalable Architecture',
    description:
      'Feature-based modular structure with strict unidirectional dependencies. Your codebase stays clean as it grows from prototype to production.',
    image: 'https://picsum.photos/800/600?random=11',
  },
  {
    title: 'Beautiful by Default',
    description:
      'Tailwind CSS v4 with shadcn/ui components give you a polished design system out of the box. Customize everything to match your brand.',
    image: 'https://picsum.photos/800/600?random=12',
  },
]

export function FeaturesSection() {
  return (
    <section>
      {features.map((feature, i) => {
        const isOdd = i % 2 === 0
        return (
          <div
            key={feature.title}
            className="container mx-auto grid items-center gap-12 px-4 py-24 md:grid-cols-2"
          >
            <AnimateOnScroll
              animation={isOdd ? 'fade-right' : 'fade-left'}
              className={isOdd ? '' : 'md:order-last'}
            >
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full rounded-xl shadow-lg"
              />
            </AnimateOnScroll>
            <AnimateOnScroll
              animation={isOdd ? 'fade-left' : 'fade-right'}
              className={isOdd ? '' : 'md:order-first'}
            >
              <h2 className="text-3xl font-bold">{feature.title}</h2>
              <p className="text-muted-foreground mt-4 text-lg">
                {feature.description}
              </p>
            </AnimateOnScroll>
          </div>
        )
      })}
    </section>
  )
}
