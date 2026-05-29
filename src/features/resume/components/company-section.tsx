import type { CompanyData } from '../data/resume-data'

export function CompanySection({ data }: { data: CompanyData }) {
  return (
    <section className="mb-6">
      <div className="mb-1 flex items-baseline justify-between">
        <div className="flex items-baseline gap-2">
          <h2 className="text-lg font-bold text-gray-900">{data.company}</h2>
          <span className="text-sm text-gray-400">
            {data.description} · {data.role}
          </span>
        </div>
        <span className="text-sm text-gray-400">{data.period}</span>
      </div>
      <div className="space-y-2.5">
        {data.projects.map((project) => (
          <div key={project.name}>
            <p className="text-sm font-semibold text-gray-700">
              {project.name}
            </p>
            <ul className="mt-0.5 border-l-2 border-gray-200 pl-3 text-sm text-gray-500">
              {project.details.map((detail) => (
                <li key={detail}>· {detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
