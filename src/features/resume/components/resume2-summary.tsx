import {
  profile,
  techStack,
  certifications,
  articles,
} from '@/features/resume/data/resume-v2-data'

// ─── 경력 요약 데이터 (임팩트 강한 것만, 비대칭 배분) ───

const careerSummary = [
  {
    company: '(주)엑심베이',
    meta: '글로벌 결제 서비스 기업 · 풀스택 개발자',
    period: '2026.03 ~ 재직중',
    summary: '결제 백오피스 시스템 구축 및 블록체인 지갑 API 개발',
    bullets: [
      '결제 백오피스 & 어드민 모노레포 설계 및 FE 전체 구현 (Turborepo, MSW, ESLint 규칙 자동화)',
      '블록체인 지갑 API 단독 개발 (NestJS, 인메모리 서명 큐, nock E2E 테스트)',
    ],
  },
  {
    company: '(주)파이노버스랩',
    meta: '핀테크 결제 솔루션 스타트업 · 프론트엔드 개발자',
    period: '2022.08 ~ 2025.07',
    summary: '첫 FE 개발자로 합류, 결제 서비스 0→1 구축 후 2인 FE 파트 리드',
    bullets: [
      '결제 서비스 MVP 단독 구축 & 프로덕션 출시 (Playwright E2E → QA 2~3일→반나절)',
      '사업자 정보 검증 서버리스 API 단독 개발 (AWS Lambda, 3계층 테스트, 장애 0건)',
      '모노레포 전환 (공통 코드 패키지 분리, PR/배포 2회→1회 통합)',
      '백오피스 리뉴얼 (Vue → Next.js, 달력 기반 수수료 자동 계산)',
      'MSW 도입 제안·실행 (비교 문서 작성 → 모바일 실기기 QA 해결)',
    ],
  },
  {
    company: '(주)제머나이소프트',
    meta: '방송·미디어 솔루션 기업 · 웹 개발자',
    period: '2020.06 ~ 2022.04',
    summary: '웹 영상 편집기 타임라인 성능 최적화 및 보도/CMS 시스템 고도화',
    bullets: [
      '웹 영상 편집기 타임라인 코어 (Canvas 하이브리드 렌더링, 프레임 드랍 해소)',
      '보도정보시스템 (Node.js 버전 표준화 → 3개월 지연 프로젝트 2주 조기 완료)',
      'CMS 모니터링 (힙 스냅샷 → OOM 해결, 16시간→72시간+ 무중단)',
    ],
  },
]

const personalProjectsSummary = [
  {
    name: 'potato | 기업 홈페이지 및 CMS',
    repo: 'https://github.com/thdtmdghks/potato',
    bullets: [
      '실제 업체용 홈페이지 설계·개발·상용 배포 (Next.js, Supabase, Gemini API)',
      'Supabase 미연결 시 Mock으로 자동 전환. DB 없이 개발/빌드 가능 (Repository 패턴)',
      'SEO 최적화 (On-demand ISR, JSON-LD — Lighthouse SEO 100 · Performance 98 · 네이버 키워드 최상위)',
    ],
  },
  {
    name: 'farmer | React 아키텍처 규칙 검증 도구',
    repo: 'https://github.com/thdtmdghks/farmer',
    bullets: [
      '레이어 간 단방향 의존성 자동 강제 + 위반 시 커밋 차단 (ESLint Flat Config, Git Hook)',
    ],
  },
]

// ─── 컴포넌트 ───

export function Resume2Summary() {
  return (
    <>
      {/* 헤더 */}
      <header className="mb-6">
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
          문제를 구조적으로 해결하고, 개발 생산성과 안정적인 배포를 위한 기반을
          만드는 웹 개발자입니다.
        </p>
        <p className="text-base leading-relaxed text-gray-800">
          대규모 레거시 CMS 재구축부터 서비스 초기 기획, 설계, 개발, 출시까지 전
          과정을 경험하며 다양한 환경에서 서비스의 기반을 구축해왔습니다.
        </p>
        <p className="text-base leading-relaxed text-gray-800">
          Mock 기반 병렬 개발 환경 구축, 테스트 자동화, 모노레포 구성을 통해
          개발 생산성과 서비스 안정성을 함께 높여왔으며, 이를 통해 비즈니스
          성장에 기여합니다.
        </p>
      </section>

      {/* 핵심 메시지 — 시각적 플로우 */}
      <section className="mb-6 rounded-lg border border-gray-200 bg-gray-50 p-6">
        <div className="flex items-stretch gap-4">
          {/* Mock */}
          <div className="flex-1 rounded-lg border border-indigo-200 bg-white p-4 text-center">
            <p className="text-sm font-bold text-indigo-600">Mock 개발 환경</p>
            <p className="mt-1.5 text-sm text-gray-500">
              외부 의존 없이
              <br />
              빠른 개발 착수
            </p>
          </div>
          {/* 화살표 */}
          <div className="flex items-center text-lg text-gray-300">→</div>
          {/* 유닛 테스트 */}
          <div className="flex-1 rounded-lg border border-emerald-200 bg-white p-4 text-center">
            <p className="text-sm font-bold text-emerald-600">유닛 테스트</p>
            <p className="mt-1.5 text-sm text-gray-500">
              버그 부담↓
              <br />
              빠른 수정·개발
            </p>
          </div>
          {/* 화살표 */}
          <div className="flex items-center text-lg text-gray-300">→</div>
          {/* E2E */}
          <div className="flex-1 rounded-lg border border-amber-200 bg-white p-4 text-center">
            <p className="text-sm font-bold text-amber-600">E2E 자동화</p>
            <p className="mt-1.5 text-sm text-gray-500">
              품질 검증 자동화
              <br />
              빠른 배포
            </p>
          </div>
        </div>
        {/* 수렴 화살표 */}
        <div className="mt-5 flex justify-center">
          <svg
            className="h-7 w-7 text-gray-400"
            viewBox="0 0 16 16"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M8 11l5-5H3l5 5z" />
          </svg>
        </div>
        {/* 결론 */}
        <div className="mt-1 rounded-lg bg-gray-800 py-3 text-center">
          <p className="text-sm font-bold tracking-wide text-white">
            개발 속도 ↑&nbsp;&nbsp;&nbsp;&nbsp;배포 안정성 ↑
          </p>
        </div>
      </section>

      {/* 경력 요약 */}
      <section className="mb-6">
        <div className="mb-4 flex items-baseline justify-between">
          <h2 className="text-lg font-bold text-gray-900">경력</h2>
          <a
            href="https://thdtmdghks.github.io/farmer/resume-career"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-500 hover:underline"
          >
            프로젝트별 상세 내용 ↗
          </a>
        </div>

        {careerSummary.map((company, idx) => (
          <div
            key={company.company}
            className={idx < careerSummary.length - 1 ? 'mb-5' : ''}
          >
            <div className="flex items-baseline justify-between">
              <div className="flex items-baseline gap-2">
                <h3 className="text-base font-bold text-gray-900">
                  {company.company}
                </h3>
                <span className="text-xs text-gray-400">{company.meta}</span>
              </div>
              <span className="text-xs text-gray-400">{company.period}</span>
            </div>
            <p className="mt-0.5 text-sm text-gray-500">{company.summary}</p>
            <ul className="mt-1.5 space-y-1 border-l-2 border-gray-200 pl-3 text-sm text-gray-600">
              {company.bullets.map((b) => (
                <li key={b}>· {b}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* 개인 프로젝트 — 최소화 */}
      <section className="mb-6">
        <h2 className="mb-3 text-lg font-bold text-gray-900">개인 프로젝트</h2>

        {personalProjectsSummary.map((project) => (
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
      <section className="mb-6 grid grid-cols-2 gap-2 rounded-lg border border-gray-200 p-4 text-sm">
        {techStack.map((category) => (
          <div key={category.label}>
            <span className="text-xs font-semibold text-gray-400">
              {category.label}
            </span>
            <p className="mt-0.5 text-gray-700">{category.items}</p>
          </div>
        ))}
      </section>

      {/* 자격증 + 작성한 글 — 한 줄로 */}
      <section className="mb-4">
        <div className="flex items-baseline gap-6 text-sm">
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
