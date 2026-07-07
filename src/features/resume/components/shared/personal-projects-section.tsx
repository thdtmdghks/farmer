import type { PersonalProject } from '@/features/resume/data/resume-fe-data'

type Props = {
  projects: PersonalProject[]
}

export function PersonalProjectsSection({ projects }: Props) {
  return (
    <section className="mb-6">
      <h2 className="mb-3 text-lg font-bold text-gray-900">개인 프로젝트</h2>

      {projects.map((project) => (
        <div key={project.name} className="mb-3 last:mb-0">
          <h3 className="text-sm font-bold text-gray-900">
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-500"
              aria-label={`${project.name} GitHub 저장소`}
            >
              {project.name} ↗
            </a>
          </h3>
          <ul className="mt-1 space-y-0.5 pl-3 text-sm text-gray-600">
            {project.bullets.map((b) => (
              <li key={b}>· {b}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  )
}
