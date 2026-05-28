import type { CompanyData } from '../data/resume-data'

export function CompanySection({ data }: { data: CompanyData }) {
  return (
    <section className="mb-6">
      <div className="mb-1 flex items-baseline justify-between">
        <div className="flex items-baseline gap-2">
          <h2 className="text-lg font-bold text-gray-900">{data.company}</h2>
          <span className="text-sm text-gray-400">{data.description}</span>
        </div>
        <span className="text-sm text-gray-400">{data.period}</span>
      </div>
      <p className="mb-2 text-sm text-gray-500">{data.role}</p>
      <ul className="border-l-2 border-gray-300 pl-3 text-sm leading-relaxed text-gray-500">
        {data.summary.map((item) => (
          <li key={item}>· {item}</li>
        ))}
      </ul>
    </section>
  )
}
