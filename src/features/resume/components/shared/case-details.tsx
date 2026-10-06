import { resumeCases } from '../../data/resume-cases'
import { resumeDetailGroups } from '../../data/resume-detail-groups'
import { profile } from '../../data/resume-v2-data'

type Props = { variant: 'fe' | 'be' }
const compactCases: Record<string, string> = {
  'shared-ui':
    'UI·인증·API 클라이언트를 공유 패키지로 분리했습니다. DataTable은 제네릭과 children 합성 패턴으로 화면별 구성을 지원했습니다. 공유 패키지는 TypeScript 소스를 직접 내보내고 앱의 Vite가 컴파일하도록 해 별도 패키지 빌드 단계를 없앴습니다. ESLint로 앱과 패키지의 참조 방향을 검사하고 HMR로 수정 내용을 확인했습니다.',
  forms:
    '가맹점 정보·결제 설정·정산 계좌의 입력 검증을 폼별 Zod 스키마로 관리했습니다. React Hook Form과 연결하고 필드 간 교차 검증을 적용했습니다.',
  'wallet-test':
    '외부 WaaS에 별도 Sandbox가 없어 nock으로 외부 호출을 격리했습니다. PostgreSQL의 ENUM 등 실제 DB 동작을 검증하기 위해 SQLite 대신 Docker의 PostgreSQL을 사용했습니다. 비동기 영수증 폴링이 트랜잭션 밖에서 실행되므로 롤백 대신 테스트별 TRUNCATE로 데이터를 초기화했습니다.',
}
export function CaseDetails({ variant }: Props) {
  const groups = resumeDetailGroups.map((group, index) => {
    const projects = [...group.projects]
    if (variant === 'be' && index < 2)
      [projects[0], projects[1]] = [projects[1], projects[0]]
    return { ...group, projects }
  })
  const visibleIds =
    variant === 'fe'
      ? ['shared-ui', 'forms', 'qa', 'pdf', 'timeline', 'memory']
      : resumeCases.map((item) => item.id)
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
        {groups.map((group) => (
          <section key={group.company} aria-label={group.company}>
            <header className="border-b-2 border-gray-800 pb-3 print:break-after-avoid">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-xl font-bold text-gray-900">
                  {group.company}
                </h3>
                <p className="text-sm text-gray-600">{group.period}</p>
              </div>
              <p className="mt-1 text-sm text-gray-700">{group.role}</p>
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
                    <p className="mt-1 text-sm text-gray-700">
                      {project.scope}
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-gray-500">
                      {project.stack}
                    </p>
                    {project.contributions.length > 0 && (
                      <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-gray-700">
                        {project.contributions.map((text) => (
                          <li key={text}>{text}</li>
                        ))}
                      </ul>
                    )}
                    <div className="space-y-5">
                      {cases.map((item) => (
                        <section
                          key={item.id}
                          id={item.id}
                          className="mt-4 scroll-mt-6 border-l-2 border-blue-200 pl-4"
                        >
                          <h5 className="text-sm font-semibold text-gray-900 print:break-after-avoid">
                            {item.title}
                          </h5>
                          {compactCases[item.id] ? (
                            <p className="mt-2 text-sm leading-relaxed text-gray-700">
                              {compactCases[item.id]}
                            </p>
                          ) : (
                            <div className="mt-2 space-y-2 text-sm leading-relaxed text-gray-700">
                              <p>{item.problem}</p>
                              <p>{item.implementation}</p>
                              <p className="font-medium text-gray-900">
                                {item.result}
                              </p>
                            </div>
                          )}
                        </section>
                      ))}
                    </div>
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
