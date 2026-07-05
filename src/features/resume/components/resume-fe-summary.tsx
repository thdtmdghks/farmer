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
    projects: [
      {
        name: '결제 백오피스 & 어드민 (FE 단독, 2개 앱, 8개 도메인)',
        bullets: [
          'React + TypeScript 기반 Feature Slice 설계·구현 (TanStack Router/Query, Zustand)',
          '다단계 인증 플로우 설계 (MFA, OTP, TOTP, 세션 충돌 처리)',
          '제네릭 DataTable + 합성 패턴, React Hook Form + Zod 선언형 폼 검증',
          '모노레포(Turborepo) 공유 UI 패키지로 2개 앱 UI 표준화 + ESLint 의존성 강제',
          'MSW 시나리오 Mock + Vitest 유닛 테스트 + Playwright E2E',
        ],
      },
      {
        name: '블록체인 지갑 UI / API',
        bullets: ['React UI + NestJS API 단독 설계·구현·테스트·문서화'],
      },
    ],
  },
  {
    company: '(주)파이노버스랩',
    meta: '핀테크 결제 솔루션 스타트업 · 프론트엔드 개발자',
    period: '2022.08 ~ 2025.07',
    summary:
      '첫 FE 개발자로 개발 환경부터 테스트 체계까지 구축, 이후 FE 파트 리드',
    projects: [
      {
        name: '결제 서비스 & 대시보드 (MVP 단독 → 파트 리드)',
        bullets: [
          'Vue.js + Pinia 기반 다단계 결제 플로우 설계·구현, 프로덕션 출시',
          'Playwright E2E + CI/CD 연계로 회귀 QA 2~3일→반나절',
          '연체 수수료 계산 로직 유닛 테스트 — 버그 0건, 백엔드팀에서 동일 로직 그대로 채택',
          'JSON Server 독립 개발 환경 구축 → MSW 전환 제안·실행 (모바일 실기기 QA 해결)',
          'pnpm workspace 모노레포 전환, PR/배포 2회→1회',
          'PDF 완납증명서 — 라이브러리 소스 분석 후 페이지 분할 로직 직접 구현',
        ],
      },
      {
        name: '백오피스 리뉴얼',
        bullets: ['Next.js SSR 재구축, 달력 UI 수수료 자동 계산, 분할 패널 UX'],
      },
      {
        name: '기타',
        bullets: [
          '외상 결제 데모몰 (Next.js SSR + MSW 모바일 QA)',
          '서버리스 API 단독 설계·배포·모니터링 — 가입 블로킹 해소, 장애 0건',
        ],
      },
    ],
  },
  {
    company: '(주)제머나이소프트',
    meta: '방송·미디어 솔루션 기업 · 프론트엔드 개발자',
    period: '2020.06 ~ 2022.04',
    summary: '웹 영상 편집기 타임라인 UI/인터랙션 개발 및 성능 최적화',
    projects: [
      {
        name: '웹 영상 편집기 (타임라인 코어 전담)',
        bullets: [
          'Canvas + DOM 하이브리드 렌더링으로 대량 클립 프레임 드랍 해소',
          '드래그, 스냅, 멀티 셀렉션, 로그 스케일 줌 인터랙션 구현',
        ],
      },
      {
        name: 'CMS 모니터링',
        bullets: ['24시간 가동 SPA 메모리 누수 분석·해결 (72시간+ 무중단)'],
      },
      {
        name: '기타',
        bullets: ['보도정보시스템 — 3개월 지연 프로젝트 2주 조기 완료'],
      },
    ],
  },
]

const fePersonalProjects = [
  {
    name: 'potato | Next.js 기업 홈페이지',
    repo: 'https://github.com/thdtmdghks/potato',
    bullets: [
      'Next.js App Router + Tailwind CSS 기반 실제 업체용 홈페이지 상용 배포',
      'On-demand ISR + JSON-LD — Lighthouse SEO 100 · Performance 98 · 네이버 키워드 최상위',
      'Gemini API 연동 메타데이터 자동 생성 (이미지 과대·API 에러 시 단계적 Fallback)',
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
  {
    label: 'Core',
    items: 'TypeScript · JavaScript · React · Next.js · Vue.js',
  },
  {
    label: 'State / UI',
    items:
      'TanStack Query · Zustand · Pinia · Tailwind CSS · shadcn/ui · React Hook Form · Zod',
  },
  {
    label: 'Test',
    items: 'Vitest · Playwright · React Testing Library · MSW · Jest',
  },
  {
    label: 'Tooling',
    items: 'Turborepo · pnpm workspace · Vite · ESLint · CI/CD · Docker',
  },
]

// ─── 컴포넌트 ───

export function ResumeFeSummary() {
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
        <p className="mt-1 text-lg text-gray-600">프론트엔드 개발자 · 6년차</p>
      </header>

      {/* 자기소개 */}
      <section className="mb-6 space-y-2">
        <p className="text-base leading-relaxed text-gray-800">
          React와 Next.js 기반으로 사용자 경험과 개발 생산성을 함께 개선하는
          프론트엔드 개발자입니다.
        </p>
        <p className="text-base leading-relaxed text-gray-800">
          컴포넌트 설계부터 공유 UI 패키지 구축, 테스트 자동화까지 지속적으로
          확장 가능한 프론트엔드 구조를 설계해왔습니다.
        </p>
        <p className="text-base leading-relaxed text-gray-800">
          반복되는 문제를 구조적으로 해결하며, 개발 생산성과 서비스 품질이 함께
          향상되는 프론트엔드 개발 환경을 만들어왔습니다.
        </p>
      </section>

      {/* 핵심 메시지 — 스토리 기반 */}
      <section className="mb-6">
        <div className="flex items-stretch gap-4">
          <div className="flex-1 rounded-lg border border-indigo-200 bg-indigo-50/30 p-5 text-center">
            <p className="text-base font-bold text-indigo-600">
              개발이 멈추지 않는 환경
            </p>
            <p className="mt-1.5 text-sm text-gray-500">
              Mock · 병렬 개발
              <br />
              자동화
            </p>
          </div>
          <div className="flex items-center text-lg text-gray-300">→</div>
          <div className="flex-1 rounded-lg border border-emerald-200 bg-emerald-50/30 p-5 text-center">
            <p className="text-base font-bold text-emerald-600">
              확장 가능한 구조
            </p>
            <p className="mt-1.5 text-sm text-gray-500">
              컴포넌트 · 상태관리
              <br />
              공유 UI
            </p>
          </div>
          <div className="flex items-center text-lg text-gray-300">→</div>
          <div className="flex-1 rounded-lg border border-amber-200 bg-amber-50/30 p-5 text-center">
            <p className="text-base font-bold text-amber-600">안정적인 운영</p>
            <p className="mt-1.5 text-sm text-gray-500">
              테스트 · 성능
              <br />
              접근성
            </p>
          </div>
        </div>
      </section>

      {/* 경력 요약 */}
      <section className="mb-6 rounded-lg bg-gray-50 p-6">
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

        {feCareerSummary.map((company, idx) => (
          <div
            key={company.company}
            className={idx < feCareerSummary.length - 1 ? 'mb-8' : ''}
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
      <section className="mb-6 grid grid-cols-2 gap-1.5 rounded-lg border border-gray-200 p-3 text-xs">
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
