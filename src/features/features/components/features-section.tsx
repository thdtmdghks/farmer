import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const items = [
  {
    title: 'Feature-Based Architecture',
    description:
      'Organized by features for scalability and clear separation of concerns.',
  },
  {
    title: 'Type-Safe',
    description:
      'Built with TypeScript for reliable refactoring and fewer runtime errors.',
  },
  {
    title: 'Modern Styling',
    description:
      'Tailwind CSS v4 with shadcn/ui components for rapid, consistent UI development.',
  },
] as const

export function FeaturesSection() {
  return (
    <section className="bg-muted/50 py-24">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold">Features</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {items.map((item) => (
            <Card key={item.title}>
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
