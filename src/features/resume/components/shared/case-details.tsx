import { resumeCases } from '../../data/resume-cases'
import { resumeDetailGroups } from '../../data/resume-detail-groups'
import { profile } from '../../data/resume-v2-data'

type Props = { variant: 'fe' | 'be' }
export function CaseDetails({ variant }: Props) {
  const visibleIds =
    variant === 'fe'
      ? ['shared-ui', 'forms', 'qa', 'pdf', 'timeline', 'memory']
      : resumeCases.map((item) => item.id)
  const groups = resumeDetailGroups.map((group, index) => {
    const projects = group.projects.filter(
      (project) =>
        variant === 'be' ||
        project.cases.some((id) => visibleIds.includes(id)) ||
        project.stack.includes('Next.js'),
    )
    if (variant === 'be' && index < 2)
      [projects[0], projects[1]] = [projects[1], projects[0]]
    return { ...group, projects }
  })
  const summary = `${import.meta.env.BASE_URL}${variant === 'fe' ? 'resume' : 'resume-be'}`
  return (
    <>
      <header className="mb-6 border-b border-gray-200 pb-5">
        <p className="text-sm text-gray-600">
          {profile.name} · {variant === 'fe' ? '프론트엔드' : 'Node.js 풀스택'}
        </p>
        <h2 className="mt-1 text-2xl font-bold text-gray-900">
          상세 경력기술서
        </h2>
        <a
          href={summary}
          className="mt-3 inline-block text-sm text-blue-700 underline underline-offset-4"
        >
          요약 이력서로 돌아가기
        </a>
      </header>
      <nav
        aria-label="회사별 주요 사례"
        className="mb-8 rounded-lg bg-gray-50 p-4 print:hidden"
      >
        <p className="font-semibold text-gray-900">회사별 주요 사례</p>
        <ul className="mt-3 space-y-3 text-sm">
          {groups.map((group) => (
            <li key={group.company}>
              <p className="font-medium text-gray-800">{group.company}</p>
              <ul className="mt-1 flex flex-wrap gap-x-4 gap-y-2">
                {group.projects
                  .flatMap((project) => project.cases)
                  .filter((id) => visibleIds.includes(id) && id !== 'forms')
                  .map((id) => {
                    const item = resumeCases.find((entry) => entry.id === id)!
                    return (
                      <li key={id}>
                        <a
                          href={`#${id}`}
                          className="text-blue-700 underline underline-offset-4"
                        >
                          {item.title}
                        </a>
                      </li>
                    )
                  })}
              </ul>
            </li>
          ))}
        </ul>
      </nav>
      <div className="space-y-10">
        {groups.map((group, index) => (
          <section key={group.company} aria-label={group.company}>
            <header className="border-b-2 border-gray-800 pb-3 print:break-inside-avoid print:break-after-avoid">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-xl font-bold text-gray-900">
                  {group.company}
                </h3>
                <p className="text-sm text-gray-600">{group.period}</p>
              </div>
              <p className="mt-1 text-sm text-gray-700">
                {variant === 'fe' && index === 0
                  ? '프론트엔드 개발자 · 백오피스·어드민 FE 전담'
                  : group.role}
              </p>
            </header>
            <div className="space-y-7">
              {group.projects.map((project) => {
                const cases = project.cases
                  .filter((id) => visibleIds.includes(id))
                  .map((id) => resumeCases.find((item) => item.id === id)!)
                return (
                  <article key={project.title} className="pt-5">
                    <h4 className="text-base font-bold text-gray-900 print:break-after-avoid">
                      {project.title}
                    </h4>
                    <p className="mt-1 text-sm text-gray-700 print:break-after-avoid">
                      {project.scope}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-gray-600 print:break-after-avoid">
                      {project.stack}
                    </p>
                    <div className="space-y-5">
                      {cases.map((item) => (
                        <section
                          key={item.id}
                          id={item.id}
                          className="mt-4 scroll-mt-6 border-l-2 border-blue-200 pl-3 sm:pl-4 print:break-inside-avoid"
                        >
                          <h5 className="text-sm font-semibold text-gray-900 print:break-after-avoid">
                            {item.title}
                          </h5>
                          <div className="mt-2 space-y-2 text-sm leading-relaxed text-gray-700">
                            <p>{item.problem}</p>
                            <p>{item.implementation}</p>
                            <p className="font-medium text-gray-900">
                              {item.result}
                            </p>
                          </div>
                        </section>
                      ))}
                    </div>
                    {project.contributions.length > 0 && (
                      <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-gray-700">
                        {project.contributions.map((text) => (
                          <li key={text} className="print:break-inside-avoid">
                            {text}
                          </li>
                        ))}
                      </ul>
                    )}
                  </article>
                )
              })}
            </div>
          </section>
        ))}
      </div>
    </>
  )
}
