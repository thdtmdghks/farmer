import { profile, certifications } from '@/features/resume/data/resume-v2-data'

// FE 관련 글 우선 정렬
const feArticles = [
  {
    title: 'Next.js SSR vs On-demand ISR 분석 및 적용기',
    url: 'https://app.notion.com/p/seunghwansong/Next-js-SSR-vs-On-demand-ISR-3836441365fb8030a273d282971dc0fc?source=copy_link',
  },
  {
    title: '프론트엔드 고도화 : UI 테스트 도입을 고민하다 - 스토리북',
    url: 'https://www.notion.so/UI-2616441365fb80be87e0c62b978265c4',
  },
  {
    title: 'json-server vs msw',
    url: 'https://www.notion.so/json-server-vs-msw-2616441365fb80c6bb16e90104e5fdde',
  },
  {
    title: '모노레포 순환 의존성 방지 — 단방향 계층 아키텍처 설계',
    url: 'https://app.notion.com/p/383942e7a7ea81129099d368f0878b7e',
  },
  {
    title: 'Github Actions Workflow를 이용한 CD 적용기',
    url: 'https://www.notion.so/Github-Actions-Workflow-CD-2616441365fb80579036f43d009704eb',
  },
  {
    title: '웹 보안 — 주요 공격과 방어',
    url: 'https://www.notion.so/36d6441365fb809d9072f2c90c6bda2f',
  },
  {
    title: 'common js & es module',
    url: 'https://www.notion.so/common-js-es-module-2616441365fb805da502cbffd4dc432e',
  },
  {
    title: '프론트엔드 패키지 매니저',
    url: 'https://www.notion.so/2616441365fb80f7aeb3c08d0918fbe0',
  },
  {
    title: 'jsdom',
    url: 'https://www.notion.so/jsdom-2616441365fb8052bb62c58d91ff48ad',
  },
]

// ─── FE 전용 경력 요약 ───

const feCareerSummary = [
  {
    company: '(주)엑심베이',
    meta: '글로벌 결제 서비스 기업 · 프론트엔드 개발자',
    period: '2026.03 ~ 재직중',
    summary: '결제 백오피스 프론트엔드 아키텍처 설계 및 전체 구현 단독 담당',
    bullets: [
      'React + TypeScript 기반 어드민 2개 앱, 8개 도메인 Feature Slice 설계·구현 (TanStack Router/Query, Zustand)',
      '5단계 인증 플로우 상태 머신 설계 (MFA, OTP, TOTP, 세션 충돌 처리)',
      '제네릭 DataTable 컴포넌트 + children 합성 패턴으로 도메인 무관 재사용 구조',
      '공유 디자인 시스템 패키지 구축 (shadcn/ui, 웹 접근성 준수, HMR 즉시 반영)',
      'MSW 시나리오 기반 Mock — 이메일별 다른 응답, 필터링·페이지네이션 동적 생성',
      'React Hook Form + Zod 활용 필드 간 의존성 검증, 선언형 폼 구조 통합',
      '모노레포(Turborepo) 7개 패키지, ESLint 단방향 의존성 자동 강제',
    ],
  },
  {
    company: '(주)파이노버스랩',
    meta: '핀테크 결제 솔루션 스타트업 · 프론트엔드 개발자',
    period: '2022.08 ~ 2025.07',
    summary: '첫 FE 개발자로 MVP 단독 구축, 이후 2인 FE 파트 리드',
    bullets: [
      'Vue.js + TypeScript + Pinia 기반 결제 서비스 MVP 단독 구축 및 프로덕션 출시',
      '다단계 결제·가입 플로우 상태 설계 — Pinia 스토어에 비즈니스 로직 캡슐화, UI 결합도 제거',
      'Playwright E2E + CI/CD 연계로 핵심 사용자 플로우 자동 검증, 회귀 QA 2~3일→반나절',
      'Next.js SSR 기반 백오피스 리뉴얼 — 달력 UI 수수료 자동 계산, 분할 패널 UX',
      'React 컴포넌트 독립 개발 가능한 MSW Mock 환경 도입 제안·실행 (모바일 실기기 QA 해결)',
      '공통 UI·유틸 패키지 분리 — pnpm workspace 모노레포, PR/배포 2회→1회',
    ],
  },
  {
    company: '(주)제머나이소프트',
    meta: '방송·미디어 솔루션 기업 · 프론트엔드 개발자',
    period: '2020.06 ~ 2022.04',
    summary: '웹 영상 편집기 타임라인 UI/인터랙션 개발 및 성능 최적화',
    bullets: [
      '타임라인 UI 아키텍처 설계 — 드래그, 스냅, 멀티 셀렉션, 로그 스케일 줌 인터랙션 구현',
      'Canvas + DOM 하이브리드 렌더링으로 대량 클립 프레임 드랍 해소 (렌더링 성능 최적화)',
      '24시간 가동 SPA 메모리 누수 분석·해결 (힙 스냅샷 → detached DOM 특정, 72시간+ 무중단)',
    ],
  },
]

const fePersonalProjects = [
  {
    name: 'potato | Next.js 기업 홈페이지',
    repo: 'https://github.com/thdtmdghks/potato',
    bullets: [
      'Next.js App Router + Tailwind CSS 기반 실제 업체용 홈페이지 상용 배포',
      'On-demand ISR + Streaming SSR 적용 — Lighthouse Performance 98 · SEO 100',
      'JSON-LD 구조화 데이터 + 동적 Sitemap으로 네이버 키워드 최상위 달성',
      'Gemini API 연동 이미지 메타데이터 자동 생성 (3단계 Fallback 설계)',
    ],
  },
  {
    name: 'farmer | React 아키텍처 규칙 검증 도구',
    repo: 'https://github.com/thdtmdghks/farmer',
    bullets: [
      'ESLint Flat Config로 React 레이어 간 단방향 의존성 자동 강제 + Git Hook 커밋 차단',
      'Intersection Observer + CSS GPU 가속으로 라이브러리 없는 경량 스크롤 애니메이션 구현',
    ],
  },
]

const feTechStack = [
  { label: 'Core', items: 'TypeScript · JavaScript (ES6+) · HTML · CSS' },
  { label: 'Framework', items: 'React · Next.js · Vue.js' },
  {
    label: 'State / Data',
    items: 'TanStack Query · Zustand · Pinia · TanStack Router',
  },
  {
    label: 'UI / Styling',
    items: 'Tailwind CSS · shadcn/ui · React Hook Form · Zod',
  },
  { label: 'Rendering', items: 'SSR · ISR · Streaming · Canvas API' },
  { label: 'Test', items: 'Vitest · Playwright · React Testing Library · MSW' },
  {
    label: 'Tooling',
    items: 'Turborepo · pnpm workspace · Vite · ESLint · GitHub Actions',
  },
]

// ─── 컴포넌트 ───

export function ResumeFeSummary() {
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
        <p className="mt-1 text-lg text-gray-600">프론트엔드 개발자 · 6년차</p>
      </header>

      {/* 자기소개 */}
      <section className="mb-6 space-y-2">
        <p className="text-base leading-relaxed text-gray-800">
          React와 Next.js 기반으로 사용자 경험과 개발 생산성을 함께 개선하는
          프론트엔드 개발자입니다.
        </p>
        <p className="text-base leading-relaxed text-gray-800">
          컴포넌트 설계부터 디자인 시스템 구축, 테스트 자동화까지 일관된 사용자
          경험과 안정적인 운영을 위한 프론트엔드 구조를 설계해왔습니다.
        </p>
        <p className="text-base leading-relaxed text-gray-800">
          반복되는 문제를 구조적으로 해결하며, 개발 생산성과 서비스 품질이 함께
          향상되는 프론트엔드 개발 환경을 만들어왔습니다.
        </p>
      </section>

      {/* 핵심 메시지 — 스토리 기반 */}
      <section className="mb-6 rounded-lg border border-gray-200 bg-gray-50 p-6">
        <div className="flex items-stretch gap-4">
          <div className="flex-1 rounded-lg border border-indigo-200 bg-white p-4 text-center">
            <p className="text-sm font-bold text-indigo-600">개발 생산성</p>
            <p className="mt-1.5 text-sm text-gray-500">
              병렬 개발 · 공통화
              <br />
              자동화
            </p>
          </div>
          <div className="flex items-center text-lg text-gray-300">→</div>
          <div className="flex-1 rounded-lg border border-emerald-200 bg-white p-4 text-center">
            <p className="text-sm font-bold text-emerald-600">사용자 경험</p>
            <p className="mt-1.5 text-sm text-gray-500">
              컴포넌트 · 상태관리
              <br />
              렌더링 · 성능
            </p>
          </div>
          <div className="flex items-center text-lg text-gray-300">→</div>
          <div className="flex-1 rounded-lg border border-amber-200 bg-white p-4 text-center">
            <p className="text-sm font-bold text-amber-600">서비스 품질</p>
            <p className="mt-1.5 text-sm text-gray-500">
              디자인 시스템
              <br />
              테스트 · 접근성
            </p>
          </div>
        </div>
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
        <div className="mt-1 rounded-lg bg-gray-800 py-3 text-center">
          <p className="text-sm font-bold tracking-wide text-white">
            빠르게 만들고&nbsp;&nbsp;&nbsp;&nbsp;안정적으로 운영
          </p>
        </div>
      </section>

      {/* 경력 요약 */}
      <section className="mb-6">
        <div className="mb-4 flex items-baseline justify-between">
          <h2 className="text-lg font-bold text-gray-900">경력</h2>
          <a
            href="https://thdtmdghks.github.io/farmer/resume-fe-career"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-500 hover:underline"
          >
            프로젝트별 상세 내용 ↗
          </a>
        </div>

        {feCareerSummary.map((company, idx) => (
          <div
            key={company.company}
            className={idx < feCareerSummary.length - 1 ? 'mb-5' : ''}
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

      {/* 개인 프로젝트 */}
      <section className="mb-6">
        <h2 className="mb-3 text-lg font-bold text-gray-900">개인 프로젝트</h2>

        {fePersonalProjects.map((project) => (
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

      {/* 기술 스택 — FE 특화 */}
      <section className="mb-6 grid grid-cols-2 gap-2 rounded-lg border border-gray-200 p-4 text-sm">
        {feTechStack.map((category) => (
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
          {feArticles.map((article) => (
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
