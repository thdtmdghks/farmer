import { Button } from '@/components/ui/button'

export function HeroSection() {
  return (
    <section className="container mx-auto flex flex-col items-center gap-6 px-4 py-24 text-center">
      <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
        Build Something Amazing
      </h1>
      <p className="text-muted-foreground max-w-2xl text-lg">
        A modern, scalable React application built with Bulletproof React
        architecture, Tailwind CSS, and shadcn/ui.
      </p>
      <div className="flex gap-3">
        <Button size="lg">Get Started</Button>
        <Button variant="outline" size="lg">
          Learn More
        </Button>
      </div>
    </section>
  )
}
