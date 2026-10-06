import { articles, type ArticleLink } from './resume-v2-data'

// ─── 타입 ───

export type ProjectGroup = {
  name: string
  bullets: string[]
  links?: { id: string; label: string }[]
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
    period: '2026.03 ~ 2026.07',
    summary: '백오피스·어드민 2개 앱, 8개 도메인의 FE 구축·배포·운영 담당',
    projects: [
      {
        name: '결제 백오피스 & 어드민',
        bullets: [
          'MFA·OTP·TOTP와 세션 충돌을 처리하는 다단계 인증 흐름 설계',
          'DataTable 합성 패턴과 폼 스키마로 반복되는 테이블·입력 화면 구성',
          '공유 UI 패키지로 두 앱의 수정 지점을 통합하고 ESLint로 의존성 규칙 검사',
        ],
        links: [
          {
            id: 'shared-ui',
            label: '공통 UI 설계',
          },
          {
            id: 'forms',
            label: '폼 검증',
          },
        ],
      },
      {
        name: '추가 기여',
        bullets: [
          'MSW 인증 시나리오와 Vitest·RTL로 인증·스토어·유틸 검증',
          'React 지갑 UI와 NestJS API MVP 개발 완료(고객 배포 전)',
        ],
      },
    ],
  },
  {
    company: '(주)파이노버스랩',
    meta: '핀테크 결제 솔루션 스타트업 · 프론트엔드 개발자',
    period: '2022.08 ~ 2025.07',
    summary:
      '첫 FE로 결제 MVP 구축·출시, 이후 2인 FE 팀에서 개발·검증 체계 개선 주도',
    projects: [
      {
        name: '결제 서비스 & 사용자 대시보드',
        bullets: [
          'Pinia에 결제·가입 상태 제어를 캡슐화하고 UI와 비즈니스 로직 분리',
          '가입·결제 핵심 흐름을 Playwright와 CI로 검증해 회귀 QA 2~3일 → 반나절',
          'PDF 페이지 경계에서 표 행이 잘리는 문제를 DOM 경계 감지와 여백 삽입으로 해결',
        ],
        links: [
          {
            id: 'qa',
            label: '회귀 QA 단축',
          },
          {
            id: 'pdf',
            label: 'PDF 분할 해결',
          },
        ],
      },
      {
        name: '개발 체계 및 운영 화면 개선',
        bullets: [
          'MSW를 신규 프로젝트 Mock 표준으로 정착시키고 공통 코드 패키지화로 중복 변경 절차 통합',
          '정산 목록·상세 분할 패널과 달력 수수료 계산으로 건당 약 1시간의 수작업 검증을 화면 확인으로 전환',
        ],
      },
    ],
  },
  {
    company: '(주)제머나이소프트',
    meta: '방송·미디어 솔루션 기업 · 웹 개발자',
    period: '2020.06 ~ 2022.04',
    summary: '영상 편집기 타임라인 UI·인터랙션 전담 및 CMS 모니터링 개발',
    projects: [
      {
        name: '영상 편집기 & CMS 모니터링',
        bullets: [
          '드래그·스냅·멀티 셀렉션과 로그 함수 기반 줌 구현',
          '정적 요소는 Canvas, 인터랙티브 요소는 DOM으로 분리해 대량 클립 렌더링 개선',
          '힙 스냅샷으로 타이머 미정리를 찾아 수정하고 72시간 이상 연속 가동 확인',
        ],
        links: [
          {
            id: 'timeline',
            label: '타임라인 렌더링',
          },
          {
            id: 'memory',
            label: '메모리 누수 분석',
          },
        ],
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
      'On-demand ISR로 콘텐츠 갱신, JSON-LD와 동적 sitemap으로 검색 메타데이터 구성',
      'Gemini API 연동 메타데이터 자동 생성 (이미지 과대·API 에러 시 단계적 Fallback)',
    ],
  },
  {
    name: 'farmer | React 아키텍처 규칙 검증 도구',
    repo: 'https://github.com/thdtmdghks/farmer',
    bullets: [
      'ESLint Flat Config로 React 레이어 간 단방향 의존성 자동 강제 + Git Hook 커밋 차단',
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

  return [...prioritized, ...rest].slice(0, 3)
}
