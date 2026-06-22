export function ResumeCareerPage() {
  return (
    <div className="mx-auto max-w-3xl bg-white p-8 text-sm print:p-6">
      {/* 헤더 */}
      <header className="mb-6">
        <div className="flex items-baseline justify-between">
          <h1 className="text-2xl font-bold text-gray-900">경력 기술서</h1>
          <div className="text-right text-xs text-gray-500">
            <p>송승환 · ghksl4157@gmail.com</p>
            <p>github.com/thdtmdghks</p>
          </div>
        </div>
      </header>

      {/* 엑심베이 */}
      <section className="mb-8 print:break-inside-avoid">
        <div className="mb-1 flex items-baseline justify-between">
          <h2 className="text-lg font-bold text-gray-900">(주)엑심베이</h2>
          <span className="text-xs text-gray-400">
            2026.03 ~ 재직중 · 풀스택 개발자
          </span>
        </div>
        <p className="mb-4 text-xs text-gray-400">글로벌 결제 서비스 기업</p>

        {/* 프로젝트 1 */}
        <div className="mb-6">
          <h3 className="mb-1 font-semibold text-gray-800">
            결제 백오피스 & 어드민 시스템
          </h3>
          <p className="mb-2 text-xs text-gray-400">
            React 19, TypeScript, Vite 6, Turborepo, pnpm workspace, TanStack
            Router/Query, Zustand, shadcn/ui, Tailwind CSS v4, Vitest, MSW 2,
            React Hook Form + Zod, node-forge
          </p>
          <ul className="mb-3 space-y-0.5 text-gray-700">
            <li>
              · 외부 가맹점용 백오피스(Backoffice)와 내부 관리자용 어드민(Admin)
              2개 앱 + 5개 공유 패키지(ui/shared/auth/theme/tsconfig)로 구성된
              Turborepo + pnpm 모노레포 아키텍처 설계 및 구축
            </li>
            <li>
              · node-forge를 활용한 RSA-OAEP 클라이언트 사이드 비밀번호 암호화
              시스템 구현 (공개키 캐싱 + 만료 시 자동 갱신 + 최대 3회 재시도)
            </li>
            <li>
              · MSW 2 기반 API 모킹 아키텍처 설계 (조건부 dynamic import로
              프로덕션 번들 미포함)
            </li>
            <li>
              · Vitest + React Testing Library로 인증 컴포넌트, 스토어, 유틸
              단위 테스트 작성
            </li>
            <li>
              · Zod 스키마 기반 환경변수 런타임 검증 및 폼 유효성 검사 통합
            </li>
          </ul>
          <div className="mb-3 rounded bg-gray-50 p-2 text-xs text-gray-600">
            <span className="font-semibold">Impact:</span> MSW mock으로 백엔드
            개발 완료 전에도 신규 피처 개발·QA를 병행할 수 있는 구조 확립 (배포
            리드타임 단축) / Turborepo 모노레포로 2앱 간 공유 코드를 한 번
            수정으로 동시 반영 (중복 작업 제거) / 공유 패키지 빌드 없이 HMR 즉시
            반영으로 개발 피드백 루프 최소화
          </div>

          <div className="space-y-2.5 border-l-2 border-blue-200 pl-3 text-xs text-gray-600">
            <div>
              <p className="font-semibold text-blue-700">
                고민 1: 공통 로직 공유와 독립 빌드·배포의 양립
              </p>
              <p>
                해결: Turborepo + pnpm workspace 모노레포를 도입하고, 공유
                패키지는 빌드 없이 TypeScript 소스를 그대로 export하여 각 앱의
                Vite가 직접 컴파일하도록 설계. 공유 코드 수정 시 HMR로 즉시
                반영되어 개발 피드백 루프를 최소화하면서도 독립 배포 구조 유지.
              </p>
            </div>
            <div>
              <p className="font-semibold text-blue-700">
                고민 2: 모노레포 패키지 간의 역방향 참조 및 의존성 꼬임
              </p>
              <p>
                해결: ESLint import-x/no-restricted-paths 규칙을 설계하여 apps →
                packages 단방향 흐름만 허용하고, 위반 시 빌드가 실패하도록
                자동화하여 아키텍처 규칙을 도구로 강제.
              </p>
            </div>
            <div>
              <p className="font-semibold text-blue-700">
                고민 3: 결제 도메인의 비밀번호 암호화 시 브라우저-백엔드(Java)
                간 호환성 불일치
              </p>
              <p>
                해결: Web Crypto API의 RSA-OAEP는 MGF1 해시를 SHA-256으로
                고정하지만, 사내 Java 백엔드는 기본값이 SHA-1이라 복호화 실패
                발생. 이를 극복하기 위해 MGF1 해시를 개별 지정할 수 있는
                node-forge 라이브러리를 도입하여 Java 복호화 엔진과 호환성을
                확보하고, 키 만료 감지 시 캐시 무효화 및 재시도(최대 3회) 흐름
                구현.
              </p>
            </div>
            <div>
              <p className="font-semibold text-blue-700">
                고민 4: 백엔드 API 미구현으로 인한 개발 병목과 불필요한 mock
                코드 배포 리스크
              </p>
              <p>
                해결: MSW 2를 도메인별(auth, shared)로 핸들러를 분리 설계하고,
                API URL 환경변수 유무에 따라 활성화되는 `isMockMode` 함수를
                도입. dynamic import를 적용하여 프로덕션 빌드 시에는 모킹 코드와
                라이브러리가 물리적으로 완전히 제외되도록 격리.
              </p>
            </div>
          </div>
        </div>

        {/* 프로젝트 2 */}
        <div className="mb-6">
          <h3 className="mb-1 font-semibold text-gray-800">
            블록체인 지갑 API (coin-wallet-api)
          </h3>
          <p className="mb-2 text-xs text-gray-400">
            NestJS 11, TypeScript, Drizzle ORM, PostgreSQL 16, Vitest,
            supertest, nock, Docker, Swagger, JWT
          </p>
          <ul className="mb-3 space-y-0.5 text-gray-700">
            <li>
              · ABC WaaS 연동 MPC 기반 블록체인 지갑 백엔드 API 설계부터 구현,
              테스트, 문서화까지 단독 수행
            </li>
            <li>
              · 도메인별 모듈 분리 아키텍처 설계 (Auth, Wallet, Transfer, WaaS,
              Token) 및 외부 API 통신 계층(WaaS 모듈) 격리
            </li>
            <li>
              · EVM 네이티브(ETH) 및 ERC-20 토큰(USDT, USDC) 전송, 잔액 조회,
              가스비 추정, 트랜잭션 Receipt Polling 구현
            </li>
            <li>
              · 실제 PostgreSQL + nock HTTP mock 기반 E2E 테스트 환경 구축
              (정상/에러 케이스 분리, TRUNCATE 격리)
            </li>
            <li>
              · ADR(Architecture Decision Records) 11건 작성으로 기술 선택 맥락
              보존
            </li>
          </ul>
          <div className="mb-3 rounded bg-gray-50 p-2 text-xs text-gray-600">
            <span className="font-semibold">Impact:</span> 연속 전송 시 MPC 서명
            충돌을 인메모리 락으로 해결하여 사용자 전송 안정성 확보 / 외부 API를
            nock으로 격리하여 네트워크 상태와 무관한 결정론적 테스트 환경 구축
            (테스트 안정성 확보) / 기술 의사결정 기록 보존을 통한 팀 온보딩
            리소스 절감
          </div>

          <div className="space-y-2.5 border-l-2 border-blue-200 pl-3 text-xs text-gray-600">
            <div>
              <p className="font-semibold text-blue-700">
                고민 1: MPC 분산 키 서명 프로토콜의 동시성 요청 제한 문제
              </p>
              <p>
                해결: 외부 WaaS API의 MPC 프로토콜 특성상 동일 키쉐어로 동시에
                서명 요청이 오면 거부되는 문제를 해결하기 위해, keyId(지갑)
                단위로 서명 요청을 직렬화하는 인메모리 락(SigningLockService)을
                Promise 체이닝 방식으로 구현. 같은 지갑끼리는 순차 실행하고 서로
                다른 지갑은 병렬 처리되도록 설계하여 안전성 확보.
              </p>
            </div>
            <div>
              <p className="font-semibold text-blue-700">
                고민 2: 외부 블록체인 노드 및 API 의존성으로 인한 테스트
                불안정성
              </p>
              <p>
                해결: nock 라이브러리로 외부 API 응답을 정밀 모킹하고, 실제
                PostgreSQL Docker 컨테이너 환경을 활용한 E2E 테스트 전략 수립.
                데이터베이스 TRUNCATE 쿼리로 테스트 간 격리를 보장하여 네트워크
                상태에 영향받지 않는 결정론적 테스트 파이프라인 완성.
              </p>
            </div>
            <div>
              <p className="font-semibold text-blue-700">
                고민 3: 트랜잭션 전송 후 확정(Confirm) 시점 확인의 비동기성 대응
              </p>
              <p>
                해결: 블록체인 트랜잭션 확정까지 수 초~수 분이 걸리는 환경에서,
                외부 콜백이 부재하여 5초 간격 및 5분 타임아웃의 Receipt Polling
                엔진을 구현. transfer_histories 테이블에 pending →
                confirmed/failed 상태 전이를 명시적으로 기록하여 정합성 관리.
              </p>
            </div>
          </div>
        </div>

        {/* 프로젝트 3 */}
        <div className="mb-2">
          <h3 className="mb-1 font-semibold text-gray-800">
            Coinflux 암호화폐 결제 Sandbox 통합 테스트
          </h3>
          <p className="mb-2 text-xs text-gray-400">
            TypeScript, Node.js, Coinflux Sandbox API
          </p>
          <ul className="space-y-0.5 text-gray-700">
            <li>
              · Coinflux 암호화폐 결제 API의 Sandbox 환경에서 실제 결제
              플로우(요청 → 승인 → 콜백) 통합 테스트 수행 및 프로덕션 연동 장애
              사전 차단
            </li>
          </ul>
        </div>
      </section>

      {/* 파이노버스랩 */}
      <section className="mb-8 print:break-inside-avoid">
        <div className="mb-1 flex items-baseline justify-between">
          <h2 className="text-lg font-bold text-gray-900">(주)파이노버스랩</h2>
          <span className="text-xs text-gray-400">
            2022.08 ~ 2025.07 · 프론트엔드 개발자
          </span>
        </div>
        <p className="mb-4 text-xs text-gray-400">B2B 결제 솔루션 스타트업</p>

        {/* 프로젝트 1 */}
        <div className="mb-6">
          <h3 className="mb-1 font-semibold text-gray-800">
            결제 서비스 & 대시보드
          </h3>
          <p className="mb-2 text-xs text-gray-400">
            Vue 3, TypeScript, Vite, Tailwind CSS, Vitest, Playwright, Pinia,
            JSON Server, MSW, html2canvas, jsPDF
          </p>
          <ul className="mb-3 space-y-0.5 text-gray-700">
            <li>
              · 첫 FE 개발자로 합류, 결제 서비스 MVP 단독 구현 (회원가입 →
              핀번호 → 결제 다단계 플로우)
            </li>
            <li>
              · PDF 완납증명서 — html2canvas/jsPDF 라이브러리 소스 분석 후 A4
              페이지 경계 행 분할 로직 직접 구현
            </li>
            <li>
              · MSW 도입으로 백엔드 완성 전 피처 개발 및 에러 케이스 로컬 검증
              독립 환경 구축 (JSON Server 대안 제안)
            </li>
            <li>
              · Playwright E2E 도입으로 결제 핵심 플로우 자동 검증 및 CI 배포
              차단 파이프라인 구현
            </li>
            <li>
              · pnpm workspace 모노레포 아키텍처 전환으로 2개 독립 앱 간 중복
              코드 제거 및 의존성 효율화
            </li>
          </ul>
          <div className="mb-3 rounded bg-gray-50 p-2 text-xs text-gray-600">
            <span className="font-semibold">Impact:</span> MVP 단독 구현으로
            서비스 초기 출시 견인 / MSW로 백엔드 완성 전 피처 개발 및 모바일 QA
            병행 / E2E + CI 도입으로 수동 QA 없이 안정적 배포 완성 / 모노레포
            구축으로 공통 코드 즉시 동기화
          </div>

          <div className="space-y-2.5 border-l-2 border-blue-200 pl-3 text-xs text-gray-600">
            <div>
              <p className="font-semibold text-blue-700">
                고민 1: 결제 위젯 복잡 시나리오의 수동 검증 비용 및 결제 장애
                리스크
              </p>
              <p>
                배경: CTO님의 제안으로 시작했으나 피처 확장에 따라 수동 리그레션
                테스트의 실질적인 피로와 배포 결함 리스크를 체감.
                <br />
                해결: Cypress의 단일 탭 제한이 PG 결제 팝업 테스트의 제약이 됨을
                직접 비교 검증 후 Playwright 채택. 일반/분할/한도초과 등 결제 전
                과정을 E2E 자동 시나리오로 구축하고 CI에 결합하여 수동 검증
                공수를 제거하고 무장애 배포 정착.
              </p>
            </div>
            <div>
              <p className="font-semibold text-blue-700">
                고민 2: 결제 위젯 및 통계 대시보드 간의 중복 코드 및 일관성 상실
              </p>
              <p>
                배경: 마침 패키지 매니저를 pnpm으로 전환하자는 합의가 된
                상황에서 모노레포 구축 최적의 타이밍으로 판단.
                <br />
                해결: pnpm workspace의 심볼릭 링크 구조를 활용하여 공통 UI 및
                비즈니스 로직을 별도 패키지로 분리. 공통 수정이 양쪽 앱에 즉시
                적용되는 단일 레포 구조로 재설계하여 복사/붙여넣기식 유지보수
                비효율 차단.
              </p>
            </div>
            <div>
              <p className="font-semibold text-blue-700">
                고민 3: 완납증명서 PDF 다운로드 시 A4 페이지 경계에서 글자가
                잘려 출력되는 렌더링 불량
              </p>
              <p>
                해결: html2canvas와 jsPDF 라이브러리 내부 렌더링 소스를 분석하여
                페이지 경계 높이를 실시간 계산. A4 단락 경계에서 텍스트 행
                단위로 분할하여 다음 페이지로 개행시키는 로직을 직접 구현해 PDF
                출력물 불량 원천 해결.
              </p>
            </div>
          </div>
        </div>

        {/* 프로젝트 2 */}
        <div className="mb-6">
          <h3 className="mb-1 font-semibold text-gray-800">외상 결제 데모몰</h3>
          <p className="mb-2 text-xs text-gray-400">
            Next.js (SSR), TypeScript, Tailwind CSS, MSW, Zustand, Jest
          </p>
          <ul className="mb-3 space-y-0.5 text-gray-700">
            <li>
              · Next.js SSR로 서버 영역까지 구현하여 영업팀 데모 시연 및 바이어
              미팅용 플랫폼으로 활용
            </li>
            <li>
              · 브라우저 서비스 워커 단에서 API 요청을 가로채는 MSW를 최초
              도입하여 독립 테스트 환경 확보
            </li>
            <li>
              · 비개발자 동료가 로컬에서 즉시 원클릭 구동할 수 있는 자동 구동
              스크립트 작성
            </li>
          </ul>
          <div className="mb-3 rounded bg-gray-50 p-2 text-xs text-gray-600">
            <span className="font-semibold">Impact:</span> 영업팀의 실시간 데모
            미연동 환경 지원으로 비즈니스 영업 활동 지원 / 데모몰에서 검증한 MSW
            효율성을 기반으로 사내 메인 서비스의 MSW 전면 마이그레이션 제안 근거
            확립
          </div>

          <div className="border-l-2 border-blue-200 pl-3 text-xs text-gray-600">
            <p className="font-semibold text-blue-700">
              고민: 로컬 mock 도구(JSON Server)의 실기기 연결 불가 및 에러 상황
              임의 연출을 위한 잦은 백엔드 배포
            </p>
            <p>
              해결: localhost에 묶이는 기존 JSON Server 구조 대신, 서비스 워커를
              통제하는 MSW를 제안·도입. 배포된 서버에서도 mock 응답을 통제할 수
              있어 모바일 단말기 및 외부 QA 채널에서도 즉각적인 에러/엣지 케이스
              재현과 기기 테스트 가능.
            </p>
          </div>
        </div>

        {/* 프로젝트 3 */}
        <div className="mb-6">
          <h3 className="mb-1 font-semibold text-gray-800">
            사업자 정보 검증 서버리스 API
          </h3>
          <p className="mb-2 text-xs text-gray-400">
            Node.js, TypeScript, AWS SAM, LocalStack, Docker, Jest, CloudWatch,
            Secrets Manager
          </p>
          <ul className="mb-3 space-y-0.5 text-gray-700">
            <li>
              · 백엔드 리소스가 전무한 상황에서 실시간 국세청 홈택스 가입 검증
              API 설계, 개발, 배포, 모니터링 단독 수행
            </li>
            <li>
              · AWS Lambda 기반 서버리스 환경을 구성하여 트래픽 대비 비용 효율성
              극대화
            </li>
            <li>
              · LocalStack과 Docker를 연동하여 AWS 인프라 동작을 로컬 머신에서
              가상 검증하는 테스트 환경 확보
            </li>
          </ul>
          <div className="mb-3 rounded bg-gray-50 p-2 text-xs text-gray-600">
            <span className="font-semibold">Impact:</span> 백엔드 개발자 부재로
            정체되던 핵심 회원가입 플로우의 블로킹을 직접 해소 / 상시 고정
            인프라 비용 0원 달성 / 처음 접하는 AWS SAM 스택에서도 3단계 검증
            파이프라인으로 무장애 운영
          </div>

          <div className="border-l-2 border-blue-200 pl-3 text-xs text-gray-600">
            <p className="font-semibold text-blue-700">
              고민: 클라우드 배포 전 가상 서버리스 인프라 환경 검증의 까다로움
            </p>
            <p>
              해결: Lambda 핸들러(입출력) → 서비스(비즈니스 로직) → 외부 API
              호출(홈택스 통신)의 3계층 아키텍처로 분리하여 외부 의존성 없이
              로컬 단위 테스트가 가능하게 구조화. 로컬 환경에 LocalStack을
              띄우고 `Jest 단위 → SAM 이벤트 → LocalStack 통합` 3단계 테스트
              라인을 구축하여 안전하게 프로덕션 배포 완수.
            </p>
          </div>
        </div>

        {/* 프로젝트 4 */}
        <div className="mb-2">
          <h3 className="mb-1 font-semibold text-gray-800">백오피스 리뉴얼</h3>
          <p className="mb-2 text-xs text-gray-400">
            Next.js, React, TypeScript, Tailwind CSS, Vitest, Zustand, MUI
          </p>
          <ul className="mb-3 space-y-0.5 text-gray-700">
            <li>
              · 기존 Vue로 구현된 레거시 어드민을 운영 생산성을 고려해
              Next.js/React 기반 백오피스로 리뉴얼
            </li>
            <li>
              · 가맹점 관리, 정산 처리, 거래 내역 조회 등 내부 어드민 운영 필수
              화면 전체 구현
            </li>
            <li>
              · 정산 연산 정합성을 보장하기 위해 핵심 수수료 계산 유틸에 Vitest
              자동화 검증 구축
            </li>
          </ul>
          <div className="mb-3 rounded bg-gray-50 p-2 text-xs text-gray-600">
            <span className="font-semibold">Impact:</span> 리스트↔상세 이동
            동선을 단축한 Split Panel UI로 운영팀의 수작업 프로세스 획기적 절감
            / 달력 수수료 계산기 도입으로 정산 처리 리드타임 개선
          </div>

          <div className="border-l-2 border-blue-200 pl-3 text-xs text-gray-600">
            <p className="font-semibold text-blue-700">
              고민: 어드민 운영자의 복잡한 거래 상세 정보 대조 동선 및 정산
              연산의 휴먼 에러 리스크
            </p>
            <p>
              해결: 상세 정보를 보기 위해 새 창을 띄워야 했던 동선을 행 클릭 시
              우측에서 슬라이딩 노출되는 분할 패널(Split Panel) UI로 전환하여
              동선 축소. 복잡한 수수료율 자동 대조 연산을 지원하는 달력 기반
              계산기를 적용하여 휴먼 에러 차단.
            </p>
          </div>
        </div>
      </section>

      {/* 제머나이소프트 */}
      <section className="mb-8 print:break-inside-avoid">
        <div className="mb-1 flex items-baseline justify-between">
          <h2 className="text-lg font-bold text-gray-900">
            (주)제머나이소프트
          </h2>
          <span className="text-xs text-gray-400">
            2020.06 ~ 2022.04 · 웹 개발자
          </span>
        </div>
        <p className="mb-4 text-xs text-gray-400">방송·미디어 솔루션 기업</p>

        {/* 프로젝트 1 */}
        <div className="mb-6">
          <h3 className="mb-1 font-semibold text-gray-800">
            웹 기반 영상 편집 솔루션 (NLE)
          </h3>
          <p className="mb-2 text-xs text-gray-400">
            Vue.js, TypeScript, Vuex, Canvas API
          </p>
          <ul className="mb-3 space-y-0.5 text-gray-700">
            <li>
              · 비선형 비디오/오디오 웹 편집기의 트랙 및 레이어 데이터 구조 설계
            </li>
            <li>
              · 드래그, 자석 스냅, 컷 편집 등 코어 편집 인터랙션 UI 컴포넌트
              개발
            </li>
          </ul>
          <div className="mb-3 rounded bg-gray-50 p-2 text-xs text-gray-600">
            <span className="font-semibold">Impact:</span> Canvas 렌더링으로 DOM
            프레임 하락을 방어하여 수십 개 클립 드래그 시에도 부드러운 인터랙션
            완수 / 로그 스케일 줌으로 프레임 단위(0.03초) 정밀 편집 성능 달성
          </div>
          <div className="space-y-2.5 border-l-2 border-blue-200 pl-3 text-xs text-gray-600">
            <div>
              <p className="font-semibold text-blue-700">
                고민 1: 수십 개의 클립 드래그 및 스냅 가이드라인 드로잉 시의
                브라우저 끊김 (프레임 하락)
              </p>
              <p>
                해결: 가이드라인 눈금과 배경 격자 드로잉 시 발생하는 잦은 DOM
                Reflow 부하를 우회하기 위해 Canvas API로 드로잉 계층을 분리.
                개별 클립의 이동 및 멀티 셀렉션만 DOM 구조로 유지하는 하이브리드
                인터랙션 설계를 도입해 성능 병목 해결.
              </p>
            </div>
            <div>
              <p className="font-semibold text-blue-700">
                고민 2: 선형 줌(Linear Zoom) 배율 사용 시의 어색한 타임라인 눈금
                렌더링
              </p>
              <p>
                해결: 눈금 해상도가 정밀 편집 프레임 단위(0.03초)까지 부드럽게
                확대/축소되도록, 인간의 줌 체감 곡선에 최적화된 로그 함수 기반
                타임라인 줌 공식 도입.
              </p>
            </div>
          </div>
        </div>

        {/* 프로젝트 2 */}
        <div className="mb-6">
          <h3 className="mb-1 font-semibold text-gray-800">
            보도정보시스템 고도화
          </h3>
          <p className="mb-2 text-xs text-gray-400">
            JavaScript, Backbone.js, jQuery, Cordova
          </p>
          <ul className="mb-3 space-y-0.5 text-gray-700">
            <li>· 기존 레거시 보도 시스템 분석 및 신규 기사 편집 모듈 개발</li>
            <li>
              · 모바일 하이브리드 앱(Cordova) 환경의 iOS 가상 키보드 UI 레이아웃
              오동작 버그 해결
            </li>
          </ul>
          <div className="mb-3 rounded bg-gray-50 p-2 text-xs text-gray-600">
            <span className="font-semibold">Impact:</span> 스테이지별 Node.js
            엔진 버전 불일치 원인 규명 ➔ v16.x.x 통일로 3개월간 지연되던
            프로젝트 2주 조기 완료 및 빌드/배포 규격 정립
          </div>
          <div className="border-l-2 border-blue-200 pl-3 text-xs text-gray-600">
            <p className="font-semibold text-blue-700">
              고민: 스테이지별 Node.js 엔진 버전 불일치로 인한 원인 불명의
              서드파티 라이브러리 충돌 및 배포 정체
            </p>
            <p>
              해결: 스테이징/로컬/운영 인프라 환경 전체를 실사하여 Node.js 엔진
              버전의 암묵적 불일치 현상 규명. 당시 LTS 버전인 v16.x.x로 통일하여
              라이브러리 내부 오동작 버그를 근본적으로 해소하고 빌드/배포 자동화
              규격 정립.
            </p>
          </div>
        </div>

        {/* 프로젝트 3 */}
        <div className="mb-2">
          <h3 className="mb-1 font-semibold text-gray-800">CMS 재구축</h3>
          <p className="mb-2 text-xs text-gray-400">
            Vue.js (Vue 2), Laravel, MySQL, Tailwind CSS
          </p>
          <ul className="mb-3 space-y-0.5 text-gray-700">
            <li>
              · 노후 레거시 CMS 시스템 재설계 및 24시간 실시간 미디어 송출
              모니터링 대시보드 구축
            </li>
          </ul>
          <div className="mb-3 rounded bg-gray-50 p-2 text-xs text-gray-600">
            <span className="font-semibold">Impact:</span> 크롬 개발자 도구 힙
            프로파일링 분석을 통한 메모리 누수 원인 제거로 24시간 이상 가동
            시에도 OOM(Out Of Memory) 브라우저 셧다운 장애 완전 해결
          </div>
          <div className="border-l-2 border-blue-200 pl-3 text-xs text-gray-600">
            <p className="font-semibold text-blue-700">
              고민: 실시간 스트리밍 모니터링 페이지의 24시간 무중단 가동 시
              메모리 누수로 인한 브라우저 강제 크래시
            </p>
            <p>
              해결: Chrome DevTools Heap Snapshot의 시간차 메모리 할당량을
              프로파일링하여 해제되지 않는 setInterval 참조와 detached DOM
              노드가 원인임을 특정. Vue 2 Life Cycle인 beforeDestroy 단계에서
              수동 타이머 및 이벤트 바인딩 해제를 보장하고, GC(가비지 컬렉터)가
              회수하도록 미사용 객체 참조를 null 처리하여 누수 전면 방어.
            </p>
          </div>
        </div>
      </section>

      {/* 개인 프로젝트 */}
      <section className="mb-8 print:break-inside-avoid">
        <h2 className="mb-5 border-b pb-2 text-xl font-bold text-gray-900">
          개인 프로젝트 (Personal Projects)
        </h2>

        {/* potato */}
        <div className="mb-6">
          <h3 className="mb-1 flex items-center gap-1.5 font-semibold text-gray-800">
            potato{' '}
            <span className="text-xs font-normal text-gray-400">
              (Supabase & Next.js 16 풀스택 플랫폼)
            </span>
          </h3>
          <p className="mb-2 text-xs text-gray-400">
            Next.js 16 (App Router), TypeScript, Supabase (PostgreSQL /
            Storage), Auth.js v5, react-hook-form + Zod, Vitest, Gemini API,
            Discord Webhook, Vercel
          </p>
          <ul className="mb-3 space-y-0.5 text-gray-700">
            <li>
              · 실제 운영 중인 시공사 비즈니스용 홈페이지 및 관리자 전용 CMS
              플랫폼 전체 구축 및 배포
            </li>
            <li>
              · Supabase DB 연동 레이어를 Repository 패턴으로 격리 설계하여
              데이터 커넥션 없이 Mock 데이터로 동작하는 오프라인 모드 확보
            </li>
            <li>
              · Gemini API 멀티모달 이미지 분석 모델을 연동하여 업로드된 시공
              사진 기반의 SEO 최적화 기사 본문 및 제목 자동 작성 모듈 구현
            </li>
            <li>
              · browser-image-compression 유틸리티를 조합하여 브라우저 메모리
              단에서 다중 이미지 WebP 자동 변환 및 200KB 임계값 압축 파이프라인
              설계
            </li>
            <li>
              · Next.js 서버 성능 유지를 위한 Non-blocking 백그라운드 Discord
              실시간 이원화 에러 모니터링 로거 시스템 구현
            </li>
          </ul>
          <div className="mb-3 rounded bg-gray-50 p-2 text-xs text-gray-600">
            <span className="font-semibold">Impact:</span> Supabase 네트워크
            종속성을 제거하여 오프라인 상태에서도 100% 정상 작동하는 빌드/개발
            프로세스(DX) 개선 / Gemini 시공 기사 자동 작성 모듈을 통해 시공사의
            기재 공수 100% 제거 / 업로드 전 Canvas WebP 경량화로 스토리지 사용량
            80% 절감
          </div>

          <div className="space-y-2.5 border-l-2 border-blue-200 pl-3 text-xs text-gray-600">
            <div>
              <p className="font-semibold text-blue-700">
                고민 1: Next.js 빌드 및 로컬 구동 시 Supabase 외부 DB
                장애/미연결로 인한 개발 흐름 정체
              </p>
              <p>
                해결: 데이터 액세스 계층을 추상 인터페이스로 정의하고,
                SupabaseRepository와 MockRepository를 각각 개발. 환경변수 검증
                단계(Zod)를 거쳐 DB 정보가 부재할 경우 dynamic import로 Mock
                객체를 팩토리 주입하여 오프라인에서도 빌드가 차단되지 않도록
                통제.
              </p>
            </div>
            <div>
              <p className="font-semibold text-blue-700">
                고민 2: 시공 이미지 분석 전송 시 외부 LLM API(Gemini) 페이로드
                초과 503 에러 발생
              </p>
              <p>
                해결: 모바일 고화질 원본 사진 fetch 시 Gemini API의 본문 크기
                수용 범위를 초과하는 에러 방지를 위해, 서버 통신 레이어 내에서
                이미지 파일 크기를 연산하여 150KB를 초과할 경우 API 전송
                배열에서 제외하고 템플릿 Fallback으로 즉시 복구 우회 처리.
              </p>
            </div>
            <div>
              <p className="font-semibold text-blue-700">
                고민 3: 정적 페이지의 캐시 유지 성능과 데이터 실시간 반영 간의
                충돌
              </p>
              <p>
                해결: 빈번하게 수정되지 않는 시공 리스트와 고객 리뷰는 SSG(정적
                생성)로 빌드해 LCP 속도를 확보하되, 관리자가 새로운 후기를
                승인하거나 글을 등록하면 Next.js의 On-demand Revalidation을
                트리거하여 정해진 라우트의 CDN 캐시만 무효화하는 온디맨드 ISR
                하이브리드 아키텍처 도입.
              </p>
            </div>
          </div>
        </div>

        {/* farmer */}
        <div className="mb-2">
          <h3 className="mb-1 flex items-center gap-1.5 font-semibold text-gray-800">
            farmer{' '}
            <span className="text-xs font-normal text-gray-400">
              (Bulletproof React 아키텍처 포트폴리오)
            </span>
          </h3>
          <p className="mb-2 text-xs text-gray-400">
            React 19, TypeScript 6, Vite 8, TanStack Router, Tailwind CSS v4,
            shadcn/ui, ESLint Flat Config (import-x, check-file), Husky +
            lint-staged
          </p>
          <ul className="mb-3 space-y-0.5 text-gray-700">
            <li>
              · Bulletproof React 아키텍처 규칙을 정적으로 강제 검증하는 타입
              안전 이력서/경력기술서 통합 웹 클라이언트 구축
            </li>
            <li>
              · ESLint `import-x/no-restricted-paths`를 적용하여 `shared ➔
              features ➔ routes` 간 단방향 의존성을 린트 검사에서 자동 강제
            </li>
            <li>
              · 외부 애니메이션 패키지를 배제하고 Intersection Observer API
              기반의 고성능 `useInView` 커스텀 훅 및 CSS GPU 가속 transition
              조합 구현
            </li>
          </ul>
          <div className="mb-3 rounded bg-gray-50 p-2 text-xs text-gray-600">
            <span className="font-semibold">Impact:</span> 아키텍처 결합 방향을
            문서가 아닌 도구(Lint)로 100% 자동 통제 / 대소문자 명명 불일치로
            macOS 로컬에선 성공하고 Linux CI에선 깨지던 빌드 오류의 원천적 차단
            / 무거운 애니메이션 라이브러리 제거로 번들 사이즈 30KB 절감
          </div>

          <div className="border-l-2 border-blue-200 pl-3 text-xs text-gray-600">
            <p className="font-semibold text-blue-700">
              고민: 대규모 협업이나 시간 경과에 따라 기능 간 복잡하게 얽히는
              순환 참조 및 아키텍처 흐름 붕괴
            </p>
            <p>
              해결: 개발 프로세스의 Husky 훅(lint-staged) 단계에 ESLint Flat
              Config를 심고, feature 모듈 간의 수평 import 및 shared ➔ feature
              방향 역참조를 제한. 위반 시 아예 로컬 커밋 및 빌드가 되지 않도록
              차단하여 "시스템이 수호하는 깨끗한 아키텍처 규칙" 확립.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
