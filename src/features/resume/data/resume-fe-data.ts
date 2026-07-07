import { articles, type ArticleLink } from './resume-v2-data'

// ─── 타입 ───

export type ProjectGroup = {
  name: string
  bullets: string[]
}

export type CareerCompany = {
  company: string
  meta: string
  period: string
  summary: string
  projects: ProjectGroup[]
}

export type PersonalProject = {
  name: string
  repo: string
  bullets: string[]
}

export type TechCategory = {
  label: string
  items: string
}

// ─── FE 경력 요약 ───

export const feCareerSummary: CareerCompany[] = [
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
          '7개 패키지 규모에 맞춰 Turborepo를 선택, 공유 UI 패키지로 2개 앱 UI 표준화 + ESLint 의존성 강제',
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
          'Cypress와 비교 검토 후 Playwright를 선택, CI 연계로 회귀 QA 2~3일→반나절',
          '연체 수수료 계산 로직 유닛 테스트 — 버그 0건, 백엔드팀에서 동일 로직 그대로 채택',
          'JSON Server → MSW 전환을 비교 문서로 제안·실행, 이후 신규 프로젝트의 Mock 개발 표준으로 정착',
          '규모에 맞춰 pnpm workspace를 선택해 공통 UI·유틸 패키지화, PR/배포 2회→1회',
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

// ─── FE 개인 프로젝트 ───

export const fePersonalProjects: PersonalProject[] = [
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

// ─── FE 기술 스택 ───

export const feTechStack: TechCategory[] = [
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

// ─── FE 작성한 글 (FE 우선 순서) ───

export function getFeArticles(): ArticleLink[] {
  const feFirst = [
    'Next.js SSR vs On-demand ISR',
    '프론트엔드 고도화',
    'json-server vs msw',
    '모노레포 순환 의존성',
    'Github Actions',
  ]

  const prioritized = feFirst
    .map((keyword) => articles.find((a) => a.title.includes(keyword)))
    .filter(Boolean) as ArticleLink[]

  const rest = articles.filter((a) => !prioritized.includes(a))

  return [...prioritized, ...rest]
}
