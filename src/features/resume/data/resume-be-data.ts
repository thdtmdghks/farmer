import type { CareerCompany, PersonalProject, TechCategory } from './resume-fe-data'

// ─── BE(풀스택) 경력 요약 ───

export const beCareerSummary: CareerCompany[] = [
  {
    company: '(주)엑심베이',
    meta: '글로벌 결제 서비스 기업 · 프론트엔드 개발자',
    period: '2026.03 ~ 2026.07',
    summary: '백오피스 FE 구축·배포·운영 및 지갑 API MVP 개발 전담',
    projects: [
      {
        name: '블록체인 지갑 API (MVP 완료 · 고객 배포 전)',
        bullets: [
          'NestJS 지갑 생성·조회·전송 API와 PostgreSQL 지갑·트랜잭션 모델 설계',
          '단일 프로세스의 지갑 ID별 메모리 큐로 서명 요청 직렬화 및 실패 시 예외 처리',
          '외부 API Mock과 테스트별 DB 초기화로 반복 가능한 E2E 환경 구성',
        ],
        links: [
          {
            id: 'wallet-queue',
            label: '지갑별 동시성 처리',
          },
          {
            id: 'wallet-test',
            label: '외부 연동 검증',
          },
        ],
      },
      {
        name: '결제 백오피스 & 어드민',
        bullets: [
          'React 기반 두 앱의 인증·입력 화면 구현과 공유 UI 패키지 설계',
          '백엔드팀과 API 스키마를 사전 합의하고 MSW로 인증·목록 시나리오 구성',
        ],
        links: [
          {
            id: 'shared-ui',
            label: 'FE 구현 범위',
          },
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
        name: '사업자 정보 검증 API',
        bullets: [
          '백엔드 리소스 부족으로 지연된 가입 기능을 위해 Lambda API 설계·구현·배포',
          '공공 API 응답 정규화와 예외 처리, LocalStack 기반 로컬 통합 검증 구성',
        ],
        links: [
          {
            id: 'serverless',
            label: '서버리스 API 개발',
          },
        ],
      },
      {
        name: '결제 서비스 & 사용자 대시보드',
        bullets: [
          'MVP 출시 후 Playwright·CI로 핵심 흐름을 자동 검증해 수동 회귀 테스트 부담 감소',
          '공통 UI·유틸을 패키지화해 서비스 간 중복 수정 절차 통합',
        ],
        links: [
          {
            id: 'qa',
            label: 'QA 자동화',
          },
          {
            id: 'pdf',
            label: 'PDF 문제 해결',
          },
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
          '여러 렌더링 방식을 비교·테스트해 정적 요소는 Canvas, 편집 인터랙션은 DOM으로 구현',
          '힙 스냅샷으로 미해제 타이머를 찾아 메모리 누수 수정, 72시간 이상 연속 가동 테스트로 확인',
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

// ─── 풀스택 개인 프로젝트 ───

export const bePersonalProjects: PersonalProject[] = [
  {
    name: 'potato | Next.js 기업 홈페이지',
    repo: 'https://github.com/thdtmdghks/potato',
    bullets: [
      '시공사례 관리·고객 후기 작성/승인 기능을 갖춘 Next.js 업체 홈페이지 개발·배포',
      '서버·클라이언트·공용 영역과 Repository 경계를 설계하고 DB 없이 개발 가능한 Mock 구현체 구성',
      'On-demand ISR로 콘텐츠 변경을 페이지에 반영',
    ],
  },
  {
    name: 'farmer | 의존성 규칙을 적용한 React 보일러플레이트',
    repo: 'https://github.com/thdtmdghks/farmer',
    bullets: [
      'ESLint로 레이어 간 의존성 규칙을 검사하고 Git Hook으로 커밋 시 검증',
    ],
  },
]

// ─── BE 기술 스택 ───

export const beTechStack: TechCategory[] = [
  {
    label: 'Frontend',
    items: 'TypeScript · React · Next.js · Vue.js · Tailwind CSS · Vite',
  },
  {
    label: 'Backend',
    items: 'NestJS · Node.js · PostgreSQL · Drizzle ORM · AWS Lambda/SAM',
  },
  {
    label: 'Test',
    items: 'Vitest · Playwright · Jest · MSW · nock · supertest',
  },
  {
    label: 'Tooling',
    items: 'Turborepo · pnpm workspace · Docker · ESLint · CI/CD',
  },
]
