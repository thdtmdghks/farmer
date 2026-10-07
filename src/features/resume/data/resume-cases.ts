export const resumeCases = [
  {
    id: 'shared-ui',
    company: '엑심베이',
    title: '두 앱의 공통 UI와 도메인별 화면 구성',
    scope: '결제 백오피스·어드민 / FE 단독 / 2개 앱·8개 도메인·22개 라우트',
    stack: 'React · TypeScript · Turborepo · shadcn/ui',
    problem:
      '두 앱에서 사용하는 공통 UI를 한 곳에서 관리하고, 도메인별 화면 차이도 수용할 구조가 필요했습니다.',
    implementation:
      '모노레포에 공유 패키지 5개와 도구 설정 2개를 구성했습니다. DataTable은 제네릭과 children 합성 패턴으로 설계해 화면별 구성을 조합하도록 했습니다. 패키지 간 의존성 규칙은 ESLint로 검사했습니다.',
    result:
      '공통 UI를 한 곳에서 수정해 두 앱에 반영하는 개발 구조를 마련했습니다.',
  },
  {
    id: 'forms',
    company: '엑심베이',
    title: '여러 입력 폼의 검증 규칙 통합',
    scope: '가맹점 정보·결제 설정·정산 계좌 입력 화면',
    stack: 'React Hook Form · Zod',
    problem:
      '폼별 검증 로직이 컴포넌트에 흩어져 수정 지점을 파악하기 어려웠습니다.',
    implementation:
      '폼별 Zod 스키마와 필드 간 교차 검증을 정의하고 React Hook Form에 연결했습니다.',
    result: '입력 검증 규칙을 스키마에서 관리하도록 통합했습니다.',
  },
  {
    id: 'qa',
    company: '파이노버스랩',
    title: '핵심 흐름 자동 검증으로 회귀 QA 단축',
    scope:
      '결제 서비스·사용자 대시보드 / MVP 단독 구축·출시 후 2인 FE 팀에서 개발 주도',
    stack: 'Vue · TypeScript · Pinia · Playwright · MSW',
    problem:
      '결제 서비스 변경 시 전체 회귀 QA에 2~3일이 소요됐고 핵심 사용자 흐름의 검증 누락 가능성이 있었습니다.',
    implementation:
      'Cypress와 비교 후 Playwright를 선택했습니다. 가입·결제·완료 흐름을 E2E로 구성하고 CI에 연결했습니다.',
    result: '회귀 QA를 2~3일에서 반나절로 단축했습니다.',
  },
  {
    id: 'pdf',
    company: '파이노버스랩',
    title: 'PDF 페이지 경계의 표 행 잘림 해결',
    scope: '결제 완납증명서 PDF 생성',
    stack: 'html2canvas · jsPDF · DOM API',
    problem:
      '기존 PDF 라이브러리가 표의 한 행이 페이지 사이에서 잘리지 않아야 한다는 요구를 충족하지 못했습니다. html2canvas와 jsPDF를 조합한 뒤에도 A4 경계에서 행과 텍스트가 잘렸습니다.',
    implementation:
      '두 라이브러리의 소스 코드를 읽어 렌더링 구조를 확인했습니다. DOM을 순회해 A4 높이 경계에 도달한 요소를 감지하고, 동적 여백을 삽입해 다음 페이지로 넘기는 로직을 구현했습니다.',
    result: '페이지 경계에서 표 행이 분할되는 문제를 해결했습니다.',
  },
  {
    id: 'timeline',
    company: '제머나이소프트',
    title: '대량 클립의 렌더링과 편집 인터랙션',
    scope: '웹 영상 편집기 / 타임라인 코어 UI·인터랙션 전담',
    stack: 'Vue · TypeScript · Vuex · Canvas API',
    problem:
      '수백 개 클립을 DOM으로 렌더링할 때 프레임 하락이 체감됐습니다. 편집 화면에는 드래그·스냅·멀티 셀렉션도 필요했습니다.',
    implementation:
      '정적 요소를 Canvas로, 인터랙티브 요소를 DOM으로 분리했습니다. 드래그·스냅·멀티 셀렉션과 로그 함수 기반의 줌 조절을 구현했습니다.',
    result:
      '대량 클립의 프레임 저하을 개선하고 정밀 편집에 필요한 인터랙션을 구현했습니다.',
  },
  {
    id: 'memory',
    company: '제머나이소프트',
    title: '장시간 가동 후 발생하던 브라우저 OOM 추적',
    scope: '24시간 상시 가동 CMS 모니터링 대시보드',
    stack: 'Vue · JavaScript · Chrome DevTools',
    problem:
      '장시간 가동 후 힙 메모리가 누적돼 브라우저가 종료되면서 상시 모니터링이 중단됐습니다.',
    implementation:
      '시간 간격을 두고 수집한 힙 스냅샷을 비교해 컴포넌트 해제 시 정리되지 않은 setInterval과 detached DOM 누적을 특정했습니다. 화면 전환 시 타이머와 리스너를 정리하도록 수정했습니다.',
    result:
      '수정 후 72시간 이상 연속 가동 테스트에서 중단 없이 동작함을 확인했습니다.',
  },
  {
    id: 'wallet-queue',
    company: '엑심베이',
    title: '동일 지갑의 동시 서명 요청 직렬화',
    scope: '블록체인 지갑 API / 설계·구현·테스트·문서화 단독 담당',
    stack: 'NestJS · TypeScript · Drizzle ORM · PostgreSQL',
    problem:
      '연동한 MPC 서명 환경에서 동일 지갑에 동시 요청이 들어오면 서명이 거부됐습니다.',
    implementation:
      '지갑 ID별 Promise Queue를 구현했습니다. 동일 지갑의 요청은 순서대로 처리하고, 서로 다른 지갑의 요청은 병렬로 처리하도록 구성했습니다.',
    result:
      '동일 지갑의 동시 서명 충돌을 예방하면서 지갑 간 병렬 처리를 유지했습니다.',
  },
  {
    id: 'wallet-test',
    company: '엑심베이',
    title: '외부 연동을 격리한 지갑 API E2E',
    scope: '지갑 생성·조회·EVM 및 ERC-20 전송·영수증 폴링 API',
    stack: 'Vitest · supertest · nock · PostgreSQL',
    problem:
      '실제 외부 API와 테스트넷 상태에 의존하면 동일한 조건으로 API를 반복 검증하기 어려웠습니다.',
    implementation:
      'nock으로 외부 API를 격리하고 테스트마다 DB를 초기화했습니다.',
    result:
      '외부 네트워크와 테스트넷 상태에 의존하지 않는 반복 가능한 E2E 검증 환경을 구성했습니다.',
  },
  {
    id: 'serverless',
    company: '파이노버스랩',
    title: '가입 기능의 병목을 해소한 서버리스 API',
    scope: '사업자 정보 검증 API / 설계·구현·배포 담당',
    stack: 'Node.js · TypeScript · AWS SAM · LocalStack · Jest',
    problem:
      '백엔드 리소스 부족으로 사업자 검증이 필요한 가입 기능 개발이 지연됐습니다. 외부 API 연동을 배포 전에 검증할 수 있는 로컬 환경도 필요했습니다.',
    implementation:
      'Lambda API를 직접 개발해 공공 API 연동, 요청 검증, 응답 정규화와 예외 처리를 구현했습니다. 핸들러·서비스·외부 클라이언트를 분리하고 Jest, SAM CLI, LocalStack·Docker로 검증 환경을 구성했습니다.',
    result:
      '가입에 필요한 검증 API를 배포했습니다. 로컬 Lambda·API Gateway 환경에서 배포 전 통합 검증이 가능해졌습니다.',
  },
]
