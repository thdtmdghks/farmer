import type { TechCategory } from '@/features/resume/data/resume-fe-data'

type Props = {
  techStack: TechCategory[]
}

export function TechStackSection({ techStack }: Props) {
  return (
    <section className="mb-6 grid grid-cols-2 gap-1.5 rounded-lg border border-gray-200 p-3 text-xs">
      {techStack.map((category) => (
        <div key={category.label}>
          <span className="text-xs font-semibold text-gray-400">
            {category.label}
          </span>
          <p className="mt-0.5 text-gray-700">{category.items}</p>
        </div>
      ))}
    </section>
  )
}
