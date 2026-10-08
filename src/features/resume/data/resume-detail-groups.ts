export const resumeDetailGroups = [
  {
    company: '(주)엑심베이',
    period: '2026.03 ~ 2026.07',
    role: '프론트엔드 개발자 · 백오피스 FE와 지갑 API 전담',
    projects: [
      {
        title: '결제 백오피스 & 어드민',
        scope:
          '2개 앱·8개 도메인·22개 라우트의 FE 설계·구현 단독 담당, 구축 후 배포·운영',
        stack:
          'React · TypeScript · TanStack Router/Query · Zustand · Turborepo',
        cases: ['shared-ui', 'forms'],
        contributions: [
          '다중 요소 인증(MFA) 흐름과 세션 충돌 처리 구현.',
          '백엔드팀과 요청·응답 스키마를 사전 합의하고 MSW로 인증 분기·필터링·페이지네이션을 구현해 독립 개발 환경 구성.',
          '인증 흐름·상태 관리·공통 유틸의 동작을 확인하는 자동화 테스트 작성(Vitest·RTL).',
          'RSA-OAEP 비밀번호 암호화와 공개키 캐싱·만료 시 재발급 흐름 구현.',
          '웹 접근성을 위해 ARIA 속성과 라우트 변경 알림 적용.',
        ],
      },
      {
        title: '블록체인 지갑 UI / API (MVP 완료 · 고객 배포 전)',
        showInFe: false,
        scope: 'React 지갑 화면과 NestJS API 설계·구현·테스트·문서화',
        stack: 'NestJS · PostgreSQL · Drizzle ORM · Vitest · supertest · nock',
        cases: ['wallet-queue', 'wallet-test'],
        contributions: [
          '지갑 생성·조회, EVM·ERC-20 전송과 영수증 폴링 구현.',
          'PostgreSQL 지갑·트랜잭션 데이터 모델 설계.',
          'Swagger로 API 사용 방식을 문서화하고 ADR에 설계 결정과 근거 기록.',
          'AI 활용 개발을 위한 코딩 컨벤션·에이전트 규칙을 정립하고, 코드 검토에서 발견한 문제를 반영해 보완.',
        ],
      },
      {
        title: 'Coinflux 결제 연동 검증',
        showInFe: false,
        scope: '별도 Sandbox에서 결제 요청·승인·콜백 시나리오 통합 검증',
        stack: 'TypeScript · Node.js · Coinflux Sandbox API',
        cases: [],
        contributions: [],
      },
    ],
  },
  {
    company: '(주)파이노버스랩',
    period: '2022.08 ~ 2025.07',
    role: '프론트엔드 개발자 · 첫 FE로 MVP 구축·출시, 이후 2인 FE 팀에서 개발·검증 체계 개선 주도',
    projects: [
      {
        title: '결제 서비스 & 사용자 대시보드',
        scope: '가입·결제 흐름 구현부터 회귀 검증 체계 개선까지 담당',
        stack:
          'Vue · TypeScript · Pinia · Playwright · MSW · html2canvas · jsPDF',
        cases: ['qa', 'pdf'],
        contributions: [
          'Pinia에 결제·가입 상태 제어를 캡슐화하고 UI와 비즈니스 로직 분리.',
          '기존 Mock 방식과 MSW를 비교해 전환을 제안·실행. 배포 환경에서도 실기기 QA가 가능하도록 구성하고 신규 프로젝트의 Mock 표준으로 정착.',
          '공통 UI·유틸을 공유 패키지로 옮겨 여러 서비스에서 각각 수정하던 작업을 줄임.',
          '연체 수수료 계산 로직을 유닛 테스트하고 백엔드팀에 공유.',
        ],
      },
      {
        title: '사업자 정보 검증 API',
        showInFe: false,
        scope: '가입 기능에 필요한 서버리스 API 설계·구현·배포',
        stack: 'Node.js · TypeScript · AWS SAM · LocalStack · Docker · Jest',
        cases: ['serverless'],
        contributions: [],
      },
      {
        title: '백오피스 리뉴얼',
        scope: 'Next.js 기반 정산·수수료 조회 화면 개발',
        stack: 'Next.js · React · TypeScript',
        cases: [],
        contributions: [
          '정산 목록과 상세를 함께 확인할 수 있는 분할 패널 구현.',
          '당일 기준으로만 제공하던 수수료를 다른 날짜로도 조회할 수 있도록, 기준일을 선택하는 달력 UI를 직접 제안·구현.',
          '수수료 계산 로직은 유닛 테스트로 검증.',
        ],
      },
      {
        title: '외상 결제 데모몰',
        scope: 'Next.js 기반 데모 서비스 개발',
        stack: 'Next.js · React · TypeScript · MSW',
        cases: [],
        contributions: [
          'SSR 화면과 API Route 구현.',
          'MSW 기반 모바일 QA 환경 구성.',
        ],
      },
    ],
  },
  {
    company: '(주)제머나이소프트',
    period: '2020.06 ~ 2022.04',
    role: '웹 개발자 · 영상 편집기 타임라인 및 방송 시스템 개발',
    projects: [
      {
        title: '웹 영상 편집기',
        scope: '타임라인 코어 UI·인터랙션 전담',
        stack: 'Vue · TypeScript · Vuex · Canvas API',
        cases: ['timeline'],
        contributions: [],
      },
      {
        title: 'CMS 모니터링',
        scope: '상시 가동 모니터링 대시보드 개발',
        stack: 'Vue · JavaScript · Chrome DevTools',
        cases: ['memory'],
        contributions: [],
      },
      {
        title: '방송 시스템 운영·유지보수',
        scope: '배포 환경 및 Cordova 앱 문제 대응',
        stack: 'Node.js · Cordova',
        cases: [],
        contributions: [
          '배포 서버 간 Node.js 버전 불일치 원인 추적·해결.',
          'Cordova 앱의 iOS 키보드 포커스 문제 대응.',
        ],
      },
    ],
  },
]
