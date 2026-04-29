import { AnimateOnScroll } from '@/components/animate-on-scroll'
import { useInView } from '@/hooks/use-in-view'
import { useCountUp } from '../hooks/use-count-up'

const stats = [
  { value: 10000, label: 'Users', suffix: '+' },
  { value: 500, label: 'Projects', suffix: '+' },
  { value: 99, label: 'Satisfaction', suffix: '%' },
  { value: 24, label: 'Support', suffix: '/7' },
]

function StatItem({
  value,
  label,
  suffix,
  isActive,
}: {
  value: number
  label: string
  suffix: string
  isActive: boolean
}) {
  const count = useCountUp(value, isActive)
  return (
    <div className="text-center">
      <p className="text-4xl font-bold">
        {count.toLocaleString()}
        {suffix}
      </p>
      <p className="text-muted-foreground mt-2">{label}</p>
    </div>
  )
}

export function StatsSection() {
  const { ref, isInView } = useInView()

  return (
    <section ref={ref} className="bg-background py-24">
      <div className="container mx-auto px-4">
        <AnimateOnScroll animation="fade-up">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat) => (
              <StatItem key={stat.label} {...stat} isActive={isInView} />
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
