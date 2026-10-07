import type { CareerCompany } from '@/features/resume/data/resume-fe-data'

type Props = {
  companies: CareerCompany[]
  detailLink: string
}

export function CareerSection({ companies, detailLink }: Props) {
  return (
    <section className="mb-6 rounded-lg bg-gray-50 p-4 sm:p-6">
      <div className="mb-4 flex flex-wrap items-baseline justify-between gap-2">
        <h2 className="text-lg font-bold text-gray-900">경력</h2>
        <a
          href={detailLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-blue-500 hover:underline"
        >
          상세 경력기술서 ↗
        </a>
      </div>

      {companies.map((company, idx) => (
        <div
          key={company.company}
          className={idx < companies.length - 1 ? 'mb-8' : ''}
        >
          <div className="mb-1 flex flex-wrap items-baseline justify-between gap-2">
            <div className="flex flex-wrap items-baseline gap-2">
              <h3 className="text-lg font-bold text-gray-900">
                {company.company}
              </h3>
              <span className="text-sm text-gray-500">{company.meta}</span>
            </div>
            <span className="text-sm text-gray-500">{company.period}</span>
          </div>
          <p className="pl-1 text-sm leading-relaxed text-gray-700">
            - {company.summary}
          </p>
          {company.projects.map((project) => (
            <div key={project.name} className="mt-3 pl-1">
              <p className="text-sm font-bold text-gray-800">{project.name}</p>
              <ul className="mt-1.5 space-y-2 border-l-2 border-gray-200 pl-4 text-sm leading-relaxed text-gray-700">
                {project.bullets.map((b) => (
                  <li key={b}>· {b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ))}
    </section>
  )
}
