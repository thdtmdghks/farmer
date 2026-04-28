import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

export function CtaSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 text-center">
        <Separator className="mb-12" />
        <h2 className="mb-4 text-3xl font-bold">Ready to Get Started?</h2>
        <p className="text-muted-foreground mb-8">
          Start building your next project with a solid foundation.
        </p>
        <Button size="lg">Start Now</Button>
      </div>
    </section>
  )
}
