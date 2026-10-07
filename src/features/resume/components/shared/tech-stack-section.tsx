import type { TechCategory } from '@/features/resume/data/resume-fe-data'

type Props = {
  techStack: TechCategory[]
}

export function TechStackSection({ techStack }: Props) {
  return (
    <section className="mb-6 rounded-lg border border-gray-200 p-3 print:break-inside-avoid">
      <h2 className="mb-3 text-base font-bold text-gray-900">기술 스택</h2>
      <div className="grid grid-cols-1 gap-3 text-sm sm:grid-cols-2 print:grid-cols-2">
        {techStack.map((category) => (
          <div key={category.label}>
            <span className="font-semibold text-gray-600">
              {category.label}
            </span>
            <p className="mt-0.5 text-gray-700">{category.items}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
