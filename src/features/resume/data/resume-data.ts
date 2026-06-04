export type Project = {
  name: string
  details: string[]
}

export type CompanyData = {
  company: string
  description: string
  period: string
  role: string
  projects: Project[]
}

export type StoryCard = {
  id: string
  title: string
  problem: string
  solution: string
  tags: string[]
}

export const companies: CompanyData[] = [
  {
    company: '엑심베이',
    description: '글로벌 결제 서비스 기업',
    period: '2026.03 ~ 재직중',
    role: '풀스택 개발자',
    projects: [
      {
        name: '결제 백오피스 & 어드민',
        details: [
          '프론트엔드 아키텍처 설계 및 초기 구현 주도',
          'Turborepo 모노레포 + ESLint 단방향 의존성 강제',
          'MSW 도메인별 mock 분리, RSA 암호화 시스템 구현',
        ],
      },
      {
        name: '블록체인 지갑 API',
        details: [
          '설계 → 구현 → 테스트 → 문서화 단독 수행 (NestJS)',
          'MPC 동시 서명 문제를 인메모리 락으로 해결',
          '외부 API를 nock으로 격리한 E2E 테스트 환경 구축',
        ],
      },
      {
        name: 'Coinflux 암호화폐 결제',
        details: ['Sandbox 통합 테스트'],
      },
    ],
  },
  {
    company: '파이노버스랩',
    description: 'B2B 결제 솔루션 스타트업',
    period: '2022.08 ~ 2025.07',
    role: '프론트엔드 개발자',
    projects: [
      {
        name: '결제 서비스 & 대시보드',
        details: [
          '첫 FE 개발자로 합류, 결제 서비스 MVP 단독 구현 (회원가입 → 핀번호 → 결제 다단계 플로우)',
          'JSON Server 기반 독립 개발 환경 구축 → 이후 MSW 전환 제안·도입',
          'Playwright E2E 결제 플로우 자동화 + CI 배포 차단 설계',
          'pnpm 모노레포 전환 (공통 UI·API 클라이언트·유틸 패키지 분리)',
          'PDF 완납증명서 (라이브러리 소스 분석 → 행 단위 분할 로직 직접 구현)',
        ],
      },
      {
        name: '외상 결제 데모몰',
        details: [
          'Next.js SSR로 서버 영역까지 직접 구현',
          'MSW 도입하여 모바일 실기기 + 에러 케이스 독립 테스트 환경 확보',
          '비개발자 자동 구동 스크립트',
        ],
      },
      {
        name: '사업자 정보 검증 API',
        details: [
          'BE 리소스 부재 상황에서 자진하여 단독 수행',
          '3레이어 분리 아키텍처 설계 및 각 레이어 테스트',
          '서버리스, 상시 서버 비용 제거',
        ],
      },
      {
        name: '백오피스 리뉴얼',
        details: [
          'Vue → Next.js 전면 리뉴얼',
          'Split Panel UI 제안·구현으로 운영자 동선 개선',
          '달력 기반 수수료 계산기 제안·구현',
        ],
      },
    ],
  },
  {
    company: '제머나이소프트',
    description: '방송·미디어 솔루션 기업',
    period: '2020.06 ~ 2022.04',
    role: '웹 개발자',
    projects: [
      {
        name: '웹 기반 영상 편집 솔루션 (NLE)',
        details: [
          '코어 기능 개발 (타임라인, 드래그, 스냅)',
          'Canvas 타임라인 렌더링, 로그 스케일 줌, 멀티 레이어 멀티 셀렉션',
        ],
      },
      {
        name: '보도정보시스템 고도화',
        details: [
          '원인 분석 → Node.js 버전 통일로 3개월 지연 프로젝트 정상화 (2주 조기 완료)',
          'iOS 키보드 버그 해결',
        ],
      },
      {
        name: 'CMS 재구축',
        details: [
          '아키텍처 재설계 + 24시간 모니터링 개발 (Vue.js, Laravel)',
          'Heap Snapshot으로 메모리 누수 특정·해결',
        ],
      },
    ],
  },
]

export const stories: StoryCard[] = [
  {
    id: 'fe-independence',
    title: '독립 개발 환경',
    problem:
      '백엔드 API 없이는 개발 진행 불가. JSON Server로 1차 해결했으나, localhost 기반이라 모바일 실기기에서 접근하려면 네트워크 설정과 URL 변경이 필요하고, 에러 케이스 검증을 위해 서버를 임의 배포/롤백하는 반복',
    solution:
      'API 인터페이스 선합의(노션 → OpenAPI 레포로 개선) + JSON Server 구축으로 병행 개발 시작. 이후 MSW 도입을 문서로 제안·실행하여 모바일 실기기 + 에러 케이스를 mock 응답 전환만으로 검증. staging QA에서도 재현 불가능한 케이스를 FE 임의 배포 + mock으로 해결. 이후 프로젝트들은 모두 MSW로 시작',
    tags: ['JSON Server', 'MSW', 'OpenAPI', 'Service Worker'],
  },
  {
    id: 'test-stability',
    title: '테스트로 서비스 안정성 확보',
    problem:
      '피처가 늘어나면서 한 곳 수정 시 영향받는 곳을 모두 수동 테스트해야 하는 상황. 시간 소요 + 휴먼 에러로 시나리오 누락 발생. 결제 서비스 특성상 모든 시나리오 검증이 까다로움',
    solution:
      '유닛 테스트로 복잡한 로직(연체 수수료 등) 검증 → 버그 의심 시 빠르게 원인 파악. Playwright E2E로 결제 전체 플로우 자동화 + CI 배포 차단. 같은 원칙을 서버리스 API(3레이어 분리 + 3단계 테스트)와 블록체인 지갑(nock mock + PostgreSQL E2E)에도 적용',
    tags: ['Vitest', 'Playwright', 'Jest', 'CI/CD', 'nock'],
  },
  {
    id: 'monorepo',
    title: '모노레포로 코드 공유 구조화',
    problem:
      '결제 서비스와 대시보드 간 같은 UI·로직이 복사/붙여넣기로 관리되며 정합성 깨짐. 엑심베이에서도 2개 앱이 공통 코드를 공유해야 하는 동일한 상황',
    solution:
      '파이노버스랩: pnpm workspace로 공통 패키지 분리 (당시 Turborepo는 과하다고 판단). 엑심베이: 패키지 7개 규모에서 캐싱/병렬 이점을 고려하여 Turborepo 선택 + ESLint로 의존성 방향(apps → packages 단방향) 자동 강제',
    tags: ['pnpm', 'Turborepo', 'ESLint', 'Vite'],
  },
]

export const simplifiedStories: StoryCard[] = [
  {
    id: 'fe-independence',
    title: '독립 개발 환경',
    problem:
      '• 백엔드 API 없이는 개발 진행 불가로 병목 발생\n• [파이노버스랩] JSON Server의 localhost 한계로 모바일 실기기 테스트 시 네트워크 설정·URL 변경 반복\n• 에러/엣지 케이스 검증을 위해 백엔드 서버를 임의 배포/롤백하는 비효율',
    solution:
      '• API 합의 방식 고도화: 노션 문서 → OpenAPI 레포로 명세 관리 진화\n• [파이노버스랩] MSW 전환: 비교 문서 작성·제안 후 도입하여 모바일 실기기 + 에러 케이스를 mock으로 해결\n• [엑심베이] MSW 도메인별 분리 + 프로덕션 번들 미포함 조건부 격리로 모노레포 다중 앱 확장',
    tags: ['JSON Server', 'MSW', 'OpenAPI', 'Service Worker'],
  },
  {
    id: 'test-stability',
    title: '테스트로 서비스 안정성 확보',
    problem:
      '• 기능이 늘면서 수동 회귀 테스트 시간 증가 + 휴먼 에러로 시나리오 누락 발생\n• 결제 서비스 특성상 모든 시나리오 검증이 까다로움\n• 연체 수수료 등 다변수 계산 로직의 수동 검증 한계',
    solution:
      '• 유닛 테스트: 연체 수수료 등 복잡한 로직 검증 → 버그 의심 시 빠르게 원인 파악\n• [파이노버스랩] Playwright E2E: Cypress와 직접 비교 후 선택 → CI 배포 차단 안전장치 설계\n• [풀스택 확장] 서버리스 API(3레이어 분리 + 각 레이어 테스트)와 블록체인 지갑(nock 격리 + PostgreSQL E2E)에도 동일 원칙 적용',
    tags: ['Vitest', 'Playwright', 'Jest', 'CI/CD', 'nock'],
  },
  {
    id: 'monorepo',
    title: '모노레포로 코드 공유 구조화',
    problem:
      '• 결제 서비스와 대시보드 간 동일 UI·로직이 복사/붙여넣기로 관리되어 일관성 깨짐\n• 엑심베이에서도 2개 앱이 공통 코드를 공유해야 하는 동일한 상황',
    solution:
      '• [파이노버스랩] pnpm workspace로 공통 패키지 분리 (당시 Turborepo는 규모 대비 과하다고 판단)\n• [엑심베이] 패키지 7개 규모에서 캐싱·병렬 이점을 고려하여 Turborepo 선택\n• ESLint로 apps → packages 단방향 의존성 자동 강제, 위반 시 빌드 실패',
    tags: ['pnpm', 'Turborepo', 'ESLint', 'Vite'],
  },
]
