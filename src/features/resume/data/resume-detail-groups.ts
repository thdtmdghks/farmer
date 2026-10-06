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
          'MFA·OTP·TOTP와 세션 충돌을 처리하는 인증 흐름 구현.',
          '백엔드팀과 요청·응답 스키마를 사전 합의하고 MSW로 인증 분기·필터링·페이지네이션 시나리오 구성. Vitest·RTL로 핵심 모듈 검증.',
          'RSA-OAEP 비밀번호 암호화와 공개키 캐싱·만료 시 재발급 흐름 구현. ARIA와 라우트 변경 알림 적용.',
        ],
      },
      {
        title: '블록체인 지갑 UI / API (MVP 완료 · 고객 배포 전)',
        scope: 'React 지갑 화면과 NestJS API 설계·구현·테스트·문서화',
        stack: 'NestJS · PostgreSQL · Drizzle ORM · Vitest · supertest · nock',
        cases: ['wallet-queue', 'wallet-test'],
        contributions: [
          '지갑 생성·조회, EVM·ERC-20 전송과 영수증 폴링 구현. 지갑·트랜잭션 데이터 모델 설계.',
          'Swagger와 ADR로 API 사용 방식과 설계 결정 기록.',
        ],
      },
      {
        title: 'Coinflux 결제 연동 검증',
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
          'MSW 전환을 비교 문서로 제안·실행해 배포 URL에서도 실기기 QA가 가능하도록 개선하고 신규 프로젝트 표준으로 정착.',
          '공통 UI·유틸을 패키지화해 서비스 간 중복 변경 절차 통합. 연체 수수료 계산 로직을 유닛 테스트하고 백엔드팀에 공유.',
        ],
      },
      {
        title: '사업자 정보 검증 API',
        scope: '가입 기능에 필요한 서버리스 API 설계·구현·배포',
        stack: 'Node.js · TypeScript · AWS SAM · LocalStack · Docker · Jest',
        cases: ['serverless'],
        contributions: [],
      },
      {
        title: '백오피스 리뉴얼 및 외상 결제 데모몰',
        scope: 'Next.js 기반 운영 화면과 데모 서비스 개발',
        stack: 'Next.js · React · TypeScript',
        cases: [],
        contributions: [
          '정산 목록·상세 분할 패널과 달력 기반 수수료 자동 계산 구현. 건당 약 1시간 걸리던 수작업 확인·계산을 화면에서 확인하도록 개선하고 정산 연산을 유닛 테스트.',
          '외상 결제 데모몰의 SSR 화면과 API Route 구현, MSW 기반 모바일 QA 환경 구성.',
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
        title: 'CMS 모니터링 & 보도정보시스템',
        scope: '상시 가동 대시보드 개발 및 기존 시스템 유지보수',
        stack: 'Vue · JavaScript · Chrome DevTools · Cordova',
        cases: ['memory'],
        contributions: [
          '배포 서버 간 Node.js 버전 불일치 원인 추적·해결.',
          'Cordova 앱의 iOS 키보드 포커스 문제 대응.',
        ],
      },
    ],
  },
]
