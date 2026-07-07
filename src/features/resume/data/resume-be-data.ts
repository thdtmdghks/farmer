import type { CareerCompany, TechCategory } from './resume-fe-data'

// ─── BE(풀스택) 경력 요약 ───

export const beCareerSummary: CareerCompany[] = [
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

// ─── BE 개인 프로젝트 (FE와 동일) ───

export { fePersonalProjects as bePersonalProjects } from './resume-fe-data'

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
