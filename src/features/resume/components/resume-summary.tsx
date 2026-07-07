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
    summary:
      '백오피스 FE 아키텍처와 블록체인 지갑 API를 전담, 화면부터 API 설계·테스트까지 수행',
    projects: [
      {
        name: '결제 백오피스 & 어드민 (FE 단독)',
        bullets: [
          'Turborepo 모노레포 7개 패키지 설계, ESLint 단방향 의존성 강제',
          'MSW Mock + Vitest 테스트 + React Hook Form + Zod 폼 검증',
          '다단계 인증 플로우 설계 (MFA, OTP, TOTP, 세션 충돌 처리)',
        ],
      },
      {
        name: '블록체인 지갑 API (단독)',
        bullets: [
          'NestJS 기반 지갑 생성·전송·조회 API 설계·구현·문서화',
          'Drizzle ORM + PostgreSQL 데이터 모델링, Swagger + ADR 문서화',
          'nock + DB 격리 E2E, Promise Queue로 동시 서명 문제 해결',
        ],
      },
    ],
  },
  {
    company: '(주)파이노버스랩',
    meta: '핀테크 결제 솔루션 스타트업 · 프론트엔드 개발자',
    period: '2022.08 ~ 2025.07',
    summary:
      '첫 FE 개발자로 MVP 구축, 백엔드·QA 병목을 Mock·테스트·서버리스 API로 직접 해소',
    projects: [
      {
        name: '결제 서비스 & 대시보드 (MVP 단독 → 파트 리드)',
        bullets: [
          'Cypress 비교 후 Playwright 선택, CI 연계로 QA 2~3일→반나절',
          '연체 수수료 계산 로직 유닛 테스트 — 버그 0건, 백엔드팀에서 동일 로직 채택',
          'JSON Server → MSW 전환 제안, 신규 프로젝트 Mock 표준 정착',
          '규모에 맞춰 pnpm workspace 선택, PR/배포 2회→1회',
          'PDF 완납증명서 — 라이브러리 소스 분석 후 페이지 분할 로직 직접 구현',
        ],
      },
      {
        name: '사업자 정보 검증 Serverless API (단독)',
        bullets: [
          'AWS Lambda 기반 API 설계·배포로 가입 블로킹 해소',
          '외부 공공 API 연동, 요청 검증·응답 정규화, LocalStack 기반 통합 테스트',
        ],
      },
      {
        name: '기타',
        bullets: [
          '백오피스 리뉴얼 (Vue → Next.js, 달력 수수료 자동 계산)',
          '외상 결제 데모몰 (Next.js SSR + MSW 모바일 QA)',
        ],
      },
    ],
  },
  {
    company: '(주)제머나이소프트',
    meta: '방송·미디어 솔루션 기업 · 웹 개발자',
    period: '2020.06 ~ 2022.04',
    summary: '웹 영상 편집기 타임라인 성능 최적화 및 보도/CMS 시스템 고도화',
    projects: [
      {
        name: '웹 영상 편집기 (타임라인 코어 전담)',
        bullets: [
          'Canvas + DOM 하이브리드 렌더링, 프레임 드랍 해소',
          '드래그, 스냅, 멀티 셀렉션, 로그 스케일 줌 인터랙션 구현',
        ],
      },
      {
        name: 'CMS 모니터링',
        bullets: ['힙 스냅샷 → OOM 해결, 72시간+ 무중단'],
      },
      {
        name: '기타',
        bullets: ['보도정보시스템 — 3개월 지연 프로젝트 2주 조기 완료'],
      },
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

export function ResumeSummary() {
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
            href="https://thdtmdghks.github.io/farmer/resume-general-career"
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
            className={idx < careerSummary.length - 1 ? 'mb-8' : ''}
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
