// ─── 타입 정의 ───

export type Metric = {
  before?: string
  after: string
  label: string
}

export type Bullet = {
  text: string
  metric?: Metric
}

export type ProblemSolution = {
  title: string
  problem: string
  solution: string
  metric?: Metric
}

export type ProjectV2 = {
  name: string
  techStack: string
  bullets: Bullet[]
  problemSolutions?: ProblemSolution[]
}

export type CompanyV2 = {
  company: string
  description: string
  period: string
  role: string
  summary: string
  highlights: Bullet[] // 경력 요약용 (임팩트 중심 3~5개)
  projects: ProjectV2[]
}

export type PersonalProjectV2 = {
  name: string
  repo: string
  bullets: Bullet[]
}

export type TechCategory = {
  label: string
  items: string
}

export type ArticleLink = {
  title: string
  url: string
}

// ─── 프로필 ───

export const profile = {
  name: '송승환',
  title: '소프트웨어 개발자 · 6년차',
  email: 'ghksl4157@gmail.com',
  github: 'https://github.com/thdtmdghks',
  githubLabel: 'github.com/thdtmdghks',
  keywords: ['개발 병목 제거', '배포 안정성 확보', '데이터 기반 검증'],
}

// ─── 자기소개 ───

export const introduction = {
  headline:
    '백엔드 완성을 기다리지 않고, 수동 QA에 의존하지 않고, 아키텍처 규칙을 말로 전파하지 않습니다.',
  body: '시스템으로 해결할 수 있는 문제를 사람에게 맡기지 않는 방향으로 일합니다. 핀테크 스타트업의 첫 프론트엔드 개발자로 0→1 서비스를 구축한 뒤, 풀스택으로 영역을 확장하며 팀의 개발 병목을 구조적으로 제거해왔습니다.',
  strengths: [
    {
      title: '개발 병목 제거',
      color: 'indigo' as const,
      description:
        '백엔드 API 미완성 상태에서도 스프린트 2~3주 선행 개발이 가능한 구조를 설계합니다.',
      details: [
        '→ Mock 서버 도입 및 MSW 전환 주도로 백엔드 의존 제거',
        '→ 모노레포 독립 Mock 환경 설계로 멀티 앱 병렬 개발',
        '→ 인터페이스 추상화를 통한 외부 환경 격리',
      ],
    },
    {
      title: '배포 안정성 확보',
      color: 'emerald' as const,
      description:
        '수동 QA 2~3일을 반나절로 단축하고, 결함 코드의 배포를 원천 차단합니다.',
      details: [
        '→ E2E 테스트 기반 결함 코드 배포 자동 차단',
        '→ 서버리스 API 장애 0건 운영 (LocalStack 기반 로컬 검증)',
        '→ 복잡한 정산 로직 유닛 테스트로 계산 오류 사전 차단',
      ],
    },
    {
      title: '규칙의 자동 강제',
      color: 'amber' as const,
      description:
        '아키텍처 규칙을 시스템으로 강제하여 도입 후 순환 참조 0건을 유지합니다.',
      details: [
        '→ ESLint 정적 분석으로 레이어 간 단방향 의존성 자동 강제',
        '→ Git 훅 연계로 아키텍처 위반 코드 커밋 자동 차단',
      ],
    },
  ],
}

// ─── 경력 ───

export const companies: CompanyV2[] = [
  {
    company: '(주)엑심베이',
    description: '글로벌 결제 서비스 기업',
    period: '2026.03 ~ 재직중',
    role: '풀스택 개발자',
    summary: '결제 백오피스 시스템 구축 및 블록체인 지갑 API 개발',
    highlights: [
      {
        text: '7개 패키지 Turborepo 모노레포 설계로 공통 변경 시 중복 PR/배포 제거',
        metric: {
          before: '동일 변경 2회 PR·배포',
          after: '1회로 통합',
          label: '배포 효율',
        },
      },
      {
        text: 'MSW 기반 독립 Mock 환경 구축으로 백엔드 일정 무관 피처 개발 및 QA 병행',
      },
      {
        text: 'nock + DB 격리 E2E 테스트 파이프라인 구축으로 외부 의존 없는 결정론적 검증 환경 확보',
      },
      {
        text: '지갑 단위 비동기 큐 구현으로 MPC 동시 서명 병목 해결',
      },
      {
        text: 'ESLint 의존성 규칙 강제 도입 후 순환 참조 0건 유지',
        metric: { after: '순환 참조 0건', label: '아키텍처 무결성' },
      },
    ],
    projects: [
      {
        name: '결제 백오피스 & 어드민 시스템',
        techStack:
          'React, TypeScript, Vite, Turborepo, pnpm workspace, TanStack Router/Query, Zustand, shadcn/ui, Tailwind CSS, Vitest, MSW, React Hook Form, Zod, node-forge',
        bullets: [
          {
            text: 'Turborepo 기반 모노레포 아키텍처 설계·구축 (7개 패키지, 2개 앱)으로 공통 UI 변경 시 PR/리뷰/배포 1회로 통합',
            metric: {
              before: '수정→PR→배포 ×2회',
              after: '1회로 통합',
              label: '배포 효율',
            },
          },
          {
            text: 'ESLint 정적 분석으로 레이어 간 단방향 의존성 자동 강제 — 도입 후 순환 참조 0건 유지',
            metric: { after: '순환 참조 0건', label: '아키텍처 무결성' },
          },
          {
            text: 'API 명세 확정 단계에서 백엔드팀과 요청/응답 스키마 선제 조율 → 병목 없는 병렬 개발 프로세스 확립',
          },
          {
            text: 'MSW 기반 독립 Mock 환경 설계로 백엔드 API 미완성 상태에서 피처 개발 및 모바일 QA 병행',
          },
          {
            text: 'Vitest + RTL 기반 유닛 테스트 환경 구축으로 인증·스토어·유틸 코드 안정성 확보',
          },
          {
            text: 'Zod 스키마 기반 런타임 환경변수 및 입력 폼 검증 구조 통합으로 런타임 에러 사전 차단',
          },
          {
            text: 'RSA-OAEP 클라이언트 암호화 + 공개키 싱글턴 캐싱 및 만료 감지 시 캐시 무효화/재발급 흐름 구축',
          },
          {
            text: 'shadcn/ui 기반 공유 디자인 시스템 패키지 구축 및 웹 접근성 표준 준수',
          },
          {
            text: '공유 패키지 수정 시 즉각 HMR 반영 설정으로 빌드 없는 실시간 피드백 루프 확보',
          },
        ],
        problemSolutions: [],
      },
      {
        name: '블록체인 지갑 API (coin-wallet-api)',
        techStack:
          'NestJS, TypeScript, Drizzle ORM, PostgreSQL, Vitest, supertest, nock, Docker, Swagger, JWT',
        bullets: [
          {
            text: 'MPC 분산 키 서명 기반 블록체인 지갑 백엔드 API 설계→구현→테스트→문서화 단독 수행',
          },
          {
            text: 'EVM 계열 코인 및 ERC-20 토큰 트랜잭션 전송·영수증 폴링 모듈 개발로 온체인 전송 안정화',
          },
          {
            text: 'nock + DB 격리 E2E 테스트 파이프라인 구축으로 외부 API·테스트넷 지연 무관한 결정론적 테스트 환경 확보',
          },
          {
            text: 'Docker Compose 로컬 개발 환경 구축으로 개발자 환경 세팅 시간 단축',
          },
          {
            text: 'ADR 문서화를 통한 기술 도입 및 설계 히스토리 투명화',
          },
          {
            text: '외부 API 호출 제한 대응 폴링 스케줄링 및 예외 처리로 트랜잭션 추적 누수 방지',
          },
        ],
        problemSolutions: [
          {
            title: '동일 지갑 동시 서명 요청 시 MPC 프로토콜 서명 거부',
            problem:
              '분산 키 MPC 서명 모듈 특성상, 동일 지갑에 동시 서명 요청이 유입되면 서명 단계에서 병목이 발생하여 전송 요청이 거부되는 문제.',
            solution:
              '지갑 단위 비동기 대기열(Promise 체인)을 구현하여 동일 지갑은 순차, 다른 지갑은 병렬 처리되도록 동시성을 통제. 서명 거부 에러 예방.',
          },
        ],
      },
      {
        name: 'Coinflux 암호화폐 결제 Sandbox 통합 테스트',
        techStack: 'TypeScript, Node.js, Coinflux Sandbox API',
        bullets: [
          {
            text: 'Sandbox 환경에서 요청→승인→콜백 과정 통합 검증으로 프로덕션 연동 장애 요인 사전 차단',
          },
        ],
        problemSolutions: [],
      },
    ],
  },
  {
    company: '(주)파이노버스랩',
    description: '핀테크 결제 솔루션 스타트업',
    period: '2022.08 ~ 2025.07',
    role: '프론트엔드 개발자',
    summary:
      '첫 프론트엔드 개발자로 합류하여 결제 서비스 0→1 구축 및 2인 FE 파트 리드',
    highlights: [
      {
        text: '결제 서비스 MVP 0→1 구축 및 프로덕션 출시 주도',
      },
      {
        text: 'MSW 전환으로 백엔드 대기 없이 스프린트 2~3주 선행 개발 구조 확보',
        metric: {
          before: '백엔드 완성 대기',
          after: '2~3주 선행 개발',
          label: '병렬 개발',
        },
      },
      {
        text: 'Playwright E2E + CI 연계로 수동 회귀 QA 2~3일 → 반나절 단축',
        metric: { before: '2~3일', after: '반나절', label: 'QA 기간' },
      },
      {
        text: '정산 어드민 리뉴얼 — 달력 UI 자동 계산 도입으로 건당 1시간 수작업 제거',
        metric: {
          before: '건당 1시간',
          after: '즉시 확인',
          label: '정산 검증',
        },
      },
      {
        text: '서버리스 API 단독 설계·배포로 가입 블로킹 해소 (장애 0건 운영)',
        metric: { after: '장애 0건', label: '운영 안정성' },
      },
    ],
    projects: [
      {
        name: '결제 서비스 & 사용자 대시보드',
        techStack:
          'Vue.js, TypeScript, Vite, Tailwind CSS, Vitest, Playwright, Pinia, JSON Server, MSW, html2canvas, jsPDF, pnpm workspace',
        bullets: [
          {
            text: '신규 PG 결제 서비스 초기 기획 참여 및 MVP 개발·프로덕션 출시로 서비스 시장 진입 주도',
          },
          {
            text: 'Pinia 스토어 내 다단계 결제/가입 로직 캡슐화로 UI와 상태 제어 결합도 제거',
          },
          {
            text: 'Playwright E2E 자동 테스트 + CI/CD 연계로 회귀 QA 2~3일 → 반나절 단축, 결함 배포 원천 차단',
            metric: { before: '2~3일', after: '반나절', label: 'QA 기간' },
          },
          {
            text: 'JSON Server Mock 구축 → MSW 전환 주도로 백엔드 대기 없이 스프린트 2~3주 선행 개발 가능한 구조 확보',
            metric: {
              before: '백엔드 완성 대기',
              after: '2~3주 선행 개발',
              label: '병렬 개발',
            },
          },
          {
            text: 'pnpm workspace 모노레포 구축으로 공통 컴포넌트 독립 패키지화 및 의존성 꼬임 방지',
          },
          {
            text: 'Figma 시안 버저닝 관리 체계 도입으로 기획-디자인-개발 간 소통 혼선 제거',
          },
          {
            text: 'S3 이메일 템플릿 버전 관리 체계 도입으로 배포 확인 10분 → 1분 단축',
            metric: { before: '10분', after: '1분', label: '배포 확인' },
          },
          {
            text: '슬랙 워크플로우 기반 데일리 업무 알림 자동화로 반복 수동 공수 제거',
          },
          {
            text: 'PR/이슈 템플릿 표준화로 협업 가이드라인 확립 및 리뷰 프로세스 효율화',
          },
        ],
        problemSolutions: [
          {
            title: 'JSON Server의 모바일 실기기 연동 한계',
            problem:
              '로컬 JSON Server는 localhost 바인딩이라 모바일 실기기 테스트 불가. 배포 환경에서 Mock 미동작으로 에러 케이스 검증 시 실제 백엔드 배포에 의존하는 비효율.',
            solution:
              'JSON Server와 MSW 비교 분석 문서를 작성하여 팀에 공유·제안 후 전환. MSW는 Service Worker로 동작하여 배포 URL에서도 Mock 적용 — 모바일/배포 환경 QA 즉시 가능.',
          },
          {
            title: 'PDF 페이지 경계 텍스트 잘림',
            problem:
              'html2canvas + jsPDF로 PDF 생성 시 A4 경계면에서 표 행·텍스트가 쪼개져 렌더링되는 결함.',
            solution:
              '두 라이브러리 내부 소스 분석 후 DOM 순회하며 A4 높이 경계 도달 요소를 실시간 감지, 잘릴 위험 있는 행에 동적 여백을 부여해 다음 페이지로 개행하는 분할 로직 직접 구현.',
          },
        ],
      },
      {
        name: '외상 결제 데모몰',
        techStack:
          'Next.js (SSR), TypeScript, Tailwind CSS, MSW, Zustand, Jest',
        bullets: [
          {
            text: 'Next.js SSR 데모 결제 서비스 화면 및 API Route 설계/개발로 영업팀 시연용 데모 구축',
          },
          {
            text: 'Jest 기반 핵심 계산 모듈 단위 테스트로 결제 계산 오동작 방지',
          },
          {
            text: 'MSW 도입으로 별도 서버 없이 모바일·에러 케이스 즉시 검증 가능',
          },
        ],
        problemSolutions: [],
      },
      {
        name: '사업자 정보 검증 API (서버리스)',
        techStack:
          'Node.js, TypeScript, AWS SAM, LocalStack, Docker, Jest, CloudWatch',
        bullets: [
          {
            text: 'BE 리소스 부족 상황에서 직무 경계를 넘어 AWS Lambda 서버리스 API 단독 설계·배포로 가입 블로킹 해소',
          },
          {
            text: '3계층 분리(핸들러/서비스/클라이언트) + 각 레이어 독립 테스트로 안정적 운영',
            metric: { after: '장애 0건', label: '운영 안정성' },
          },
        ],
        problemSolutions: [
          {
            title: '로컬에서의 클라우드 인프라 검증 한계',
            problem:
              'Lambda 기반이라 코드 수정마다 AWS 배포 필요 — 긴 피드백 루프. BE 리소스 부재로 가입 플로우 블로킹.',
            solution:
              'FE 개발자로서 인프라 설계~배포 단독 수행. 코드를 3계층 분리하여 비즈니스 로직 단위 테스트 가능하게 구조화 + LocalStack + Docker로 Lambda/API Gateway를 로컬 재현하여 배포 없이 통합 검증.',
          },
        ],
      },
      {
        name: '백오피스 리뉴얼',
        techStack:
          'Next.js, React, TypeScript, Tailwind CSS, Vitest, Zustand, MUI',
        bullets: [
          {
            text: '레거시 어드민 Next.js 리뉴얼 + 분할 패널 UI 도입으로 정산 처리 동선 개선',
          },
          {
            text: '달력 UI 기반 자동 수수료 대조 연산 도입으로 건당 1시간 수작업 → 즉시 확인',
            metric: {
              before: '건당 1시간',
              after: '즉시 확인',
              label: '정산 검증',
            },
          },
          {
            text: '유닛 테스트 기반 정산 연산 무결성 검증으로 정산액 계산 오류 사전 차단',
          },
        ],
        problemSolutions: [],
      },
    ],
  },
  {
    company: '(주)제머나이소프트',
    description: '방송·미디어 솔루션 기업',
    period: '2020.06 ~ 2022.04',
    role: '웹 개발자',
    summary:
      '웹 기반 영상 편집기(NLE) 타임라인 성능 최적화 및 보도/CMS 시스템 고도화',
    highlights: [
      {
        text: 'Canvas + DOM 하이브리드 렌더링으로 타임라인 프레임 드랍 해소',
      },
      {
        text: 'Node.js 빌드 버전 표준화로 3개월 지연 프로젝트 투입 후 2주 조기 완료',
        metric: {
          before: '3개월 지연',
          after: '투입 후 2주 조기 완료',
          label: '일정 정상화',
        },
      },
      {
        text: '힙 스냅샷 분석으로 24시간 모니터링 OOM 해결 (16시간 → 72시간+ 무중단)',
        metric: {
          before: '16시간 후 OOM',
          after: '72시간+ 무중단',
          label: '가동 시간',
        },
      },
    ],
    projects: [
      {
        name: '웹 기반 영상 편집 솔루션',
        techStack: 'Vue.js, TypeScript, Vuex, Canvas API',
        bullets: [
          {
            text: '타임라인 UI 및 데이터 아키텍처 설계로 편집기 프레임워크 기초 구축',
          },
          {
            text: '클립 드래그 앤 드롭, 스냅 바인딩 등 핵심 인터랙션 구현',
          },
          {
            text: 'Canvas + HTML DOM 하이브리드 렌더링 도입으로 대량 미디어 클립 조작 시 프레임 드랍 해소',
          },
          {
            text: '로그 함수 기반 줌 배율로 사용자 체감 줌 곡선 매칭 및 정밀 편집 환경 개선',
          },
        ],
        problemSolutions: [],
      },
      {
        name: '보도정보시스템 고도화 및 유지보수',
        techStack: 'JavaScript, Backbone.js, jQuery, Cordova',
        bullets: [
          {
            text: '지상파 방송사 보도 레거시 시스템 유지보수 및 신규 피처 개발',
          },
          {
            text: '배포 서버 간 Node.js 빌드 버전 표준화로 3개월 지연 프로젝트를 투입 후 2주 조기 완료',
            metric: {
              before: '3개월 지연',
              after: '2주 조기 완료',
              label: '일정 정상화',
            },
          },
        ],
        problemSolutions: [],
      },
      {
        name: 'CMS 재구축 및 송출 모니터링 개선',
        techStack: 'Vue.js, Laravel, MySQL, Tailwind CSS',
        bullets: [
          {
            text: '노후 CMS 아키텍처 분석·재설계 및 실시간 모니터링 대시보드 구축',
          },
        ],
        problemSolutions: [
          {
            title: '모니터링 대시보드 장기 가동 시 브라우저 OOM',
            problem:
              '24시간 상시 가동 대시보드에서 약 16시간 후 힙 메모리 누적 → OOM 강제 종료.',
            solution:
              'Chrome DevTools 힙 스냅샷 시간차 비교로 setInterval 미해제 → detached DOM 누적 특정. 화면 해제 시 타이머·리스너 일괄 정리 구조 설계하여 72시간+ 무중단 가동 확인.',
            metric: {
              before: '16시간 후 OOM',
              after: '72시간+ 무중단',
              label: '가동 시간',
            },
          },
        ],
      },
    ],
  },
]

// ─── 개인 프로젝트 ───

export const personalProjects: PersonalProjectV2[] = [
  {
    name: 'potato | 기업 홈페이지 및 CMS 구축',
    repo: 'https://github.com/thdtmdghks/potato',
    bullets: [
      {
        text: '실제 업체용 홈페이지 설계·개발 및 상용 배포 (시공 사례, 리뷰, 어드민 CMS)',
      },
      {
        text: 'Repository 패턴 인터페이스 도입으로 Supabase 장애 시에도 정상 빌드·구동되는 독립 개발 환경 확보',
      },
      {
        text: 'Gemini API 한도 초과 대응 3단계 Fallback 메타데이터 자동 생성 로직 설계',
      },
      {
        text: 'On-demand ISR + JSON-LD 구조화 데이터 적용으로 SEO 최적화',
        metric: {
          after: 'Lighthouse SEO 100 · Performance 98 · 네이버 키워드 최상위',
          label: 'SEO 성과',
        },
      },
    ],
  },
  {
    name: 'farmer | React 아키텍처 규칙 검증 도구',
    repo: 'https://github.com/thdtmdghks/farmer',
    bullets: [
      {
        text: 'ESLint Flat Config 정적 분석으로 레이어 간 단방향 의존성 자동 강제',
      },
      {
        text: 'Husky Git Hook 연계로 아키텍처 규칙 위반 코드 커밋 자동 차단',
      },
      {
        text: 'Intersection Observer + CSS GPU 가속으로 라이브러리 의존 없는 경량 스크롤 애니메이션 구현',
      },
    ],
  },
]

// ─── 기술 스택 ───

export const techStack: TechCategory[] = [
  { label: 'Language', items: 'TypeScript · JavaScript (ES6+)' },
  {
    label: 'Frontend',
    items: 'React · Vue.js · Next.js · Tailwind CSS · shadcn/ui',
  },
  { label: 'Backend', items: 'NestJS · Node.js · PostgreSQL' },
  {
    label: 'Test',
    items: 'Vitest · Playwright · MSW · Jest · supertest · nock',
  },
  {
    label: 'Infra',
    items: 'Docker · AWS SAM / Lambda · GitHub Actions (CI/CD)',
  },
  {
    label: 'Tooling',
    items: 'Turborepo 모노레포 · pnpm workspace · ESLint 규칙 자동화 · ADR',
  },
]

// ─── 자격증 ───

export const certifications = [
  { name: '정보처리기사', issuer: '한국산업인력공단', date: '2019.05' },
]

// ─── 작성한 글 ───

export const articles: ArticleLink[] = [
  {
    title: '모노레포 순환 의존성 방지 — 단방향 계층 아키텍처 설계',
    url: 'https://app.notion.com/p/383942e7a7ea81129099d368f0878b7e',
  },
  {
    title: 'NestJS 외부 의존 없는 개발 환경 + E2E 테스트 파이프라인',
    url: 'https://app.notion.com/p/NestJS-E2E-383942e7a7ea81d99429d7a0e41285ec',
  },
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
    title: 'Github Actions Workflow를 이용한 CD 적용기',
    url: 'https://www.notion.so/Github-Actions-Workflow-CD-2616441365fb80579036f43d009704eb',
  },
  {
    title: '웹 보안 — 주요 공격과 방어',
    url: 'https://www.notion.so/36d6441365fb809d9072f2c90c6bda2f',
  },
  {
    title: 'Circuit Breaker',
    url: 'https://www.notion.so/Circuit-Breaker-2616441365fb80099adec23a8d99d7ca',
  },
  {
    title: '프론트엔드 패키지 매니저',
    url: 'https://www.notion.so/2616441365fb80f7aeb3c08d0918fbe0',
  },
  {
    title: 'common js & es module',
    url: 'https://www.notion.so/common-js-es-module-2616441365fb805da502cbffd4dc432e',
  },
  {
    title: 'jsdom',
    url: 'https://www.notion.so/jsdom-2616441365fb8052bb62c58d91ff48ad',
  },
]
