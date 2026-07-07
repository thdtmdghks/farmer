import {
  profile,
  certifications,
  articles,
} from '@/features/resume/data/resume-v2-data'
import {
  beCareerSummary,
  bePersonalProjects,
  beTechStack,
} from '@/features/resume/data/resume-be-data'

// ─── 컴포넌트 ───

export function ResumeBeSummary() {
  return (
    <>
      {/* 헤더 */}
      <header className="mb-4">
        <div className="flex items-baseline justify-between">
          <h1 className="text-3xl font-bold text-gray-900">{profile.name}</h1>
          <div className="text-right text-sm text-gray-500">
            <p>{profile.email}</p>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              {profile.githubLabel}
            </a>
          </div>
        </div>
        <p className="mt-1 text-lg text-gray-600">{profile.title}</p>
      </header>

      {/* 자기소개 */}
      <section className="mb-6 space-y-2">
        <p className="text-base leading-relaxed text-gray-800">
          반복되는 서비스 병목을 구조적으로 해결하고, 프론트엔드부터
          API·인프라까지 필요한 영역을 직접 설계·구축해온 웹 개발자입니다.
        </p>
        <p className="text-base leading-relaxed text-gray-800">
          대규모 레거시 시스템 재구축부터 서비스 초기 기획, 설계, 개발, 출시까지
          다양한 환경에서 전 과정을 경험했습니다. Mock 기반 독립 개발 환경을 팀
          표준으로 정착시키고, 테스트 자동화와 모노레포 구성을 통해 개발
          생산성과 서비스 안정성을 함께 높여왔습니다.
        </p>
      </section>

      {/* 핵심 메시지 */}
      <section className="mb-6">
        <div className="flex items-stretch gap-4">
          <div className="flex-1 rounded-lg border border-indigo-200 bg-indigo-50/30 p-5 text-center">
            <p className="text-base font-bold text-indigo-600">
              독립 개발 환경
            </p>
            <p className="mt-1.5 text-sm text-gray-500">Mock · MSW · nock</p>
            <p className="mt-1 text-sm font-medium text-gray-700">
              외부 의존 없이 빠른 개발 착수
            </p>
          </div>
          <div className="flex items-center text-lg text-gray-300">→</div>
          <div className="flex-1 rounded-lg border border-emerald-200 bg-emerald-50/30 p-5 text-center">
            <p className="text-base font-bold text-emerald-600">유닛 테스트</p>
            <p className="mt-1.5 text-sm text-gray-500">Vitest · Jest</p>
            <p className="mt-1 text-sm font-medium text-gray-700">
              버그 부담↓ 빠른 수정·개발
            </p>
          </div>
          <div className="flex items-center text-lg text-gray-300">→</div>
          <div className="flex-1 rounded-lg border border-amber-200 bg-amber-50/30 p-5 text-center">
            <p className="text-base font-bold text-amber-600">통합 검증</p>
            <p className="mt-1.5 text-sm text-gray-500">E2E · CI/CD</p>
            <p className="mt-1 text-sm font-medium text-gray-700">
              품질 검증 자동화, 빠른 배포
            </p>
          </div>
        </div>
        <div className="mt-4 flex justify-center">
          <svg
            className="h-6 w-6 text-gray-400"
            viewBox="0 0 16 16"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M8 11l5-5H3l5 5z" />
          </svg>
        </div>
        <div className="mt-1 rounded-lg bg-gray-800 py-2.5 text-center">
          <p className="text-sm font-bold tracking-wide text-white">
            개발 속도 ↑&nbsp;&nbsp;·&nbsp;&nbsp;배포 안정성 ↑
          </p>
        </div>
      </section>

      {/* 경력 요약 */}
      <section className="mb-6 rounded-lg bg-gray-50 p-6">
        <div className="mb-4 flex items-baseline justify-between">
          <h2 className="text-lg font-bold text-gray-900">경력</h2>
          <a
            href="https://thdtmdghks.github.io/farmer/resume-be-career"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-500 hover:underline"
          >
            프로젝트별 상세 내용 ↗
          </a>
        </div>

        {beCareerSummary.map((company, idx) => (
          <div
            key={company.company}
            className={idx < beCareerSummary.length - 1 ? 'mb-8' : ''}
          >
            <div className="mb-1 flex items-baseline justify-between">
              <div className="flex items-baseline gap-2">
                <h3 className="text-lg font-bold text-gray-900">
                  {company.company}
                </h3>
                <span className="text-sm text-gray-400">{company.meta}</span>
              </div>
              <span className="text-sm text-gray-400">{company.period}</span>
            </div>
            <p className="pl-1 text-sm text-gray-500">- {company.summary}</p>
            {company.projects.map((project) => (
              <div key={project.name} className="mt-3 pl-1">
                <p className="text-sm font-bold text-gray-800">
                  {project.name}
                </p>
                <ul className="mt-1.5 space-y-1 border-l-2 border-gray-200 pl-4 text-sm text-gray-600">
                  {project.bullets.map((b) => (
                    <li key={b}>· {b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ))}
      </section>

      {/* 개인 프로젝트 — 최소화 */}
      <section className="mb-6">
        <h2 className="mb-3 text-lg font-bold text-gray-900">개인 프로젝트</h2>

        {bePersonalProjects.map((project) => (
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

      {/* 기술 스택 */}
      <section className="mb-6 grid grid-cols-2 gap-1.5 rounded-lg border border-gray-200 p-3 text-xs">
        {beTechStack.map((category) => (
          <div key={category.label}>
            <span className="text-xs font-semibold text-gray-400">
              {category.label}
            </span>
            <p className="mt-0.5 text-gray-700">{category.items}</p>
          </div>
        ))}
      </section>

      {/* 학력 · 자격증 */}
      <section className="mb-4">
        <div className="flex items-baseline gap-6 text-sm">
          <div>
            <span className="font-semibold text-gray-900">학력</span>
            <span className="ml-2 text-gray-600">
              대구가톨릭대학교 컴퓨터공학과
              <span className="text-gray-400"> · 2019 졸업</span>
            </span>
          </div>
          <div>
            <span className="font-semibold text-gray-900">자격증</span>
            {certifications.map((cert) => (
              <span key={cert.name} className="ml-2 text-gray-600">
                {cert.name}
                <span className="text-gray-400">
                  {' '}
                  · {cert.issuer} · {cert.date}
                </span>
              </span>
            ))}
          </div>
        </div>
      </section>

      <section>
        <h2 className="mb-2 text-sm font-semibold text-gray-900">작성한 글</h2>
        <ul className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs">
          {articles.map((article) => (
            <li key={article.url}>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                {article.title}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
