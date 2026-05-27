export type KeywordCard = {
  id: string
  keyword: string
  problem: string
  solution: string
  tags: string[]
  category: 'frontend' | 'backend'
  group?: string
}

export type CompanyData = {
  company: string
  description: string
  period: string
  role: string
  summary: string[]
  cards: KeywordCard[]
}

export const companies: CompanyData[] = [
  {
    company: '엑심베이',
    description: '글로벌 결제 서비스 기업',
    period: '2026.03 ~ 재직중',
    role: '프론트엔드 개발자',
    summary: [
      '결제 백오피스 & 어드민 시스템 (RSA 암호화, Zod 검증, shadcn/ui, Vitest, MSW 도메인 분리 모킹)',
      '블록체인 지갑 API + UI 개발 (NestJS, Drizzle, E2E 테스트)',
      'Coinflux 암호화폐 결제 Sandbox 통합 테스트',
    ],
    cards: [
      {
        id: 'turborepo',
        keyword: 'Turborepo 모노레포',
        problem:
          '2개 앱이 인증·UI·API 클라이언트를 공유하면서도 독립 배포 필요',
        solution:
          '공유 패키지를 빌드 없이 소스 export하여 앱 Vite가 직접 컴파일하는 구조로 설계, 의존성 계층 규칙으로 순환 참조 방지',
        tags: ['React 19', 'pnpm', 'Vite 6'],
        category: 'frontend',
      },
      {
        id: 'mpc',
        keyword: '블록체인 지갑 백엔드 + UI',
        problem:
          '동일 키로 동시 서명 요청 시 MPC 프로토콜이 거부, 사용자에게 에러 노출',
        solution:
          'keyId 단위 Promise 체이닝 인메모리 락으로 직렬화, 다른 지갑은 병렬 유지',
        tags: ['NestJS', 'React', 'Drizzle'],
        category: 'backend',
      },
    ],
  },
  {
    company: '파이노버스랩',
    description: 'B2B 결제 솔루션 스타트업',
    period: '2022.08 ~ 2025.07',
    role: '프론트엔드 개발자',
    summary: [
      '결제 서비스 초기 MVP 단독 수행 & 대시보드 (보안 접근 제어, 유효성 검증, S3 템플릿 롤백)',
      '외상 결제 데모몰 (비개발자 자동 구동 스크립트)',
      '사업자 정보 검증 API (서버리스, 3단계 테스트)',
      '백오피스 리뉴얼 (Vue → Next.js, Figma 버전 관리 제안)',
      '슬랙 워크플로우 자동화 제작·배포, GitHub 이슈/PR 생성 간소화 방법 팀 공유',
    ],
    cards: [
      {
        id: 'playwright',
        keyword: 'Vitest + Playwright 테스트 자동화',
        problem:
          '결제 시나리오를 매 배포마다 수동 클릭 검증 → 휴먼 에러 및 장애 리스크',
        solution:
          '단위(Vitest) + E2E(Playwright) 파이프라인을 구축하고 테스트 실패 시 배포를 차단하여, 수동 QA에서 누락되던 예외 케이스를 사전 탐지하고 서비스 안정성을 확보',
        tags: ['Vitest', 'Playwright', 'CI/CD'],
        category: 'frontend',
        group: 'test-zero-incident',
      },
      {
        id: 'serverless',
        keyword: '서버리스 API',
        problem:
          '백엔드 리소스 부재로 직접 구현, 배포 전 Lambda 동작을 로컬에서 검증할 방법 필요',
        solution:
          '3단계 테스트(Jest→SAM→LocalStack)를 구축하여 배포 전 인프라 동작을 검증, 안정적인 운영 달성',
        tags: ['Lambda', 'SAM', 'Docker'],
        category: 'backend',
        group: 'test-zero-incident',
      },
      {
        id: 'pnpm',
        keyword: 'pnpm 모노레포',
        problem:
          '두 앱 간 공통 로직 복사/붙여넣기로 정합성 상실 및 유지보수 저하',
        solution:
          '공통 UI·유틸을 독립 패키지로 분리, 한쪽 수정 시 양쪽 자동 반영',
        tags: ['Vue 3', 'pnpm', 'Vite'],
        category: 'frontend',
      },
      {
        id: 'fe-mock-evolution',
        keyword: 'FE 독립 개발 환경',
        problem:
          'JSON Server는 localhost 한정이라 모바일 실기기 테스트 불가, 매번 배포 대기',
        solution:
          'MSW(Service Worker) 전환으로 배포 없이도 모바일 환경에서 즉시 테스트 가능, 에러·엣지 케이스도 mock 응답 전환만으로 검증',
        tags: ['MSW', 'JSON Server'],
        category: 'frontend',
      },
      {
        id: 'pdf',
        keyword: 'PDF 페이지 분할',
        problem: 'A4 페이지 경계에서 글자가 잘려 출력되는 렌더링 불량',
        solution:
          '라이브러리 소스 분석으로 아이디어를 얻어, 행 단위 분할 지점 계산 로직 직접 구현',
        tags: ['html2canvas', 'jsPDF'],
        category: 'frontend',
      },
      {
        id: 'backoffice-ux',
        keyword: '백오피스 UX 개선',
        problem:
          '상세 확인 시 매번 페이지 이동, 정산 수수료 수작업 계산의 피로도',
        solution:
          'Split Panel UI로 이동 제거 + 달력 기반 수수료 자동 계산기 제안·구현',
        tags: ['Next.js', 'React', 'MUI'],
        category: 'frontend',
      },
    ],
  },
  {
    company: '제머나이소프트',
    description: '방송·미디어 솔루션 기업',
    period: '2020.06 ~ 2022.04',
    role: '웹 개발자',
    summary: [
      '웹 기반 영상 편집 솔루션 NLE (Canvas API, 타임라인 설계)',
      '보도정보시스템 고도화 (Node.js 버전 통일 → 2주 조기 완료)',
      'CMS 재구축 (24시간 모니터링, Vue.js, Laravel)',
    ],
    cards: [
      {
        id: 'log-zoom',
        keyword: '로그 스케일 줌',
        problem:
          '선형 줌 시 눈금 해상도가 균일하게 변해 프레임 단위 정밀 편집 불가',
        solution:
          '로그 함수 기반 줌 배율 적용, 낮은 줌에서 넓은 범위·높은 줌에서 0.03초 단위 정밀 조작',
        tags: ['Canvas API', 'TypeScript'],
        category: 'frontend',
      },
      {
        id: 'memory',
        keyword: '메모리 누수 해결',
        problem:
          '24시간 모니터링 대시보드에서 힙 메모리 누적 → 브라우저 OOM 크래시',
        solution:
          'Heap Snapshot 시간차 비교로 미해제 타이머·리스너 특정, 24h 이상 Flat 유지 달성',
        tags: ['DevTools', 'Vue.js'],
        category: 'frontend',
      },
    ],
  },
]
