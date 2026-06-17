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
      <section className="mb-8">
        <div className="mb-1 flex items-baseline justify-between">
          <h2 className="text-lg font-bold text-gray-900">(주)엑심베이</h2>
          <span className="text-xs text-gray-400">
            2026.03 ~ 재직중 · 풀스택 개발자
          </span>
        </div>
        <p className="mb-4 text-xs text-gray-400">글로벌 결제 서비스 기업</p>

        {/* 프로젝트 1 */}
        <div className="mb-5">
          <h3 className="mb-1 font-semibold text-gray-800">
            결제 백오피스 & 어드민
          </h3>
          <p className="mb-2 text-xs text-gray-400">
            React 19, TypeScript, Vite 6, Turborepo, pnpm workspace, TanStack
            Router/Query, Zustand, shadcn/ui, Tailwind CSS v4, Vitest, MSW 2,
            React Hook Form + Zod, node-forge
          </p>
          <ul className="mb-2 space-y-0.5 text-gray-700">
            <li>
              · 가맹점 백오피스 + 내부 어드민 2개 앱 + 5개 공유
              패키지(ui/shared/auth/theme/tsconfig) Turborepo 모노레포 아키텍처
              설계 및 구축
            </li>
            <li>
              · MSW 2 도메인별(auth, shared) 핸들러 분리 + 조건부 활성화로
              프로덕션 번들 미포함
            </li>
            <li>
              · node-forge RSA-OAEP 비밀번호 암호화 (공개키 싱글턴 캐싱 + 만료
              시 재발급 + 최대 3회 재시도)
            </li>
            <li>
              · Vitest + React Testing Library 인증 컴포넌트/스토어/유틸 단위
              테스트
            </li>
            <li>· Zod 스키마 기반 환경변수 런타임 검증 + 폼 유효성 통합</li>
          </ul>
          <div className="rounded bg-gray-50 p-2 text-xs text-gray-600">
            <span className="font-semibold">Impact:</span> 백엔드 완료 전에도
            피처 개발·QA 병행 가능한 구조 확립 / 2앱 공유 코드 한 번 수정으로
            동시 반영 / HMR 즉시 반영으로 개발 피드백 루프 최소화
          </div>
          <div className="mt-2 border-l-2 border-blue-200 pl-3 text-xs text-gray-600">
            <p className="font-semibold text-blue-700">
              고민: 패키지 7개에서 역방향 참조로 구조 복잡화 위험
            </p>
            <p>
              해결: ESLint import-x/no-restricted-paths로 apps→packages 단방향만
              허용, 위반 시 빌드 실패하도록 자동화
            </p>
          </div>
        </div>

        {/* 프로젝트 2 */}
        <div className="mb-5">
          <h3 className="mb-1 font-semibold text-gray-800">
            블록체인 지갑 API
          </h3>
          <p className="mb-2 text-xs text-gray-400">
            NestJS 11, TypeScript, Drizzle ORM, PostgreSQL 16, Vitest, nock,
            Docker, Swagger
          </p>
          <ul className="mb-2 space-y-0.5 text-gray-700">
            <li>
              · MPC 기반 블록체인 지갑 백엔드 API 설계→구현→테스트→문서화 단독
              수행
            </li>
            <li>
              · 도메인별 모듈 분리 (Auth, Wallet, Transfer, WaaS, Token) + 외부
              API 통신 계층 격리
            </li>
            <li>
              · EVM 네이티브(ETH) + ERC-20 토큰(USDT, USDC) 전송, 잔액 조회,
              가스비 추정, Receipt Polling
            </li>
            <li>
              · 실제 PostgreSQL + nock mock E2E 테스트 (정상/에러 분리, TRUNCATE
              격리)
            </li>
            <li>· ADR 11건으로 모든 기술 선택 근거 문서화</li>
          </ul>
          <div className="rounded bg-gray-50 p-2 text-xs text-gray-600">
            <span className="font-semibold">Impact:</span> 인메모리 락으로 연속
            전송 시 MPC 서명 충돌 해결 → 사용자 전송 안정성 확보 / nock 격리로
            네트워크 무관 결정론적 테스트 → 안정적 배포
          </div>
          <div className="mt-2 border-l-2 border-blue-200 pl-3 text-xs text-gray-600">
            <p className="font-semibold text-blue-700">
              고민: 동일 키쉐어 동시 서명 시 MPC 프로토콜 거부
            </p>
            <p>
              해결: keyId(지갑) 단위 Promise 체이닝 인메모리 락 — 같은 지갑
              순차, 다른 지갑 병렬
            </p>
          </div>
        </div>

        {/* 프로젝트 3 */}
        <div className="mb-2">
          <h3 className="mb-1 font-semibold text-gray-800">
            Coinflux 암호화폐 결제
          </h3>
          <p className="mb-2 text-xs text-gray-400">
            TypeScript, Node.js, Coinflux Sandbox API
          </p>
          <ul className="space-y-0.5 text-gray-700">
            <li>
              · Sandbox 환경에서 결제 플로우(요청→승인→콜백) 통합 테스트 수행 →
              프로덕션 연동 장애 사전 차단
            </li>
          </ul>
        </div>
      </section>

      {/* 파이노버스랩 */}
      <section className="mb-8">
        <div className="mb-1 flex items-baseline justify-between">
          <h2 className="text-lg font-bold text-gray-900">(주)파이노버스랩</h2>
          <span className="text-xs text-gray-400">
            2022.08 ~ 2025.07 · 프론트엔드 개발자
          </span>
        </div>
        <p className="mb-4 text-xs text-gray-400">B2B 결제 솔루션 스타트업</p>

        {/* 프로젝트 1 */}
        <div className="mb-5">
          <h3 className="mb-1 font-semibold text-gray-800">
            결제 서비스 & 대시보드
          </h3>
          <p className="mb-2 text-xs text-gray-400">
            Vue 3, TypeScript, Vite, Tailwind CSS, Vitest, Playwright, Pinia,
            JSON Server, MSW, html2canvas, jsPDF
          </p>
          <ul className="mb-2 space-y-0.5 text-gray-700">
            <li>
              · 첫 FE 개발자로 합류, 결제 서비스 MVP 단독 구현 (회원가입 →
              핀번호 → 결제 다단계 플로우)
            </li>
            <li>
              · JSON Server 기반 독립 개발 환경 구축 → 이후 MSW 전환 제안·도입
              (비교 문서 직접 작성)
            </li>
            <li>
              · Playwright E2E 결제 핵심 플로우 자동화 + CI 배포 차단 설계
              (Cypress 직접 비교 후 선택)
            </li>
            <li>
              · pnpm workspace 모노레포 전환 (패키지 매니저 비교 글 작성 후 팀
              합의)
            </li>
            <li>
              · PDF 완납증명서 — html2canvas/jsPDF 라이브러리 소스 분석 → A4
              페이지 경계 행 분할 로직 직접 구현
            </li>
          </ul>
          <div className="rounded bg-gray-50 p-2 text-xs text-gray-600">
            <span className="font-semibold">Impact:</span> MVP 단독 구현으로
            서비스 초기 출시 견인 / MSW로 백엔드 완성 전에도 피처 개발·모바일 QA
            병행 / E2E+CI로 수동 QA 없이 안정적 배포 / 모노레포로 공통 코드 즉시
            반영
          </div>
          <div className="mt-2 border-l-2 border-blue-200 pl-3 text-xs text-gray-600">
            <p className="font-semibold text-blue-700">
              고민: 모바일 실기기에서 JSON Server mock 접근 불가
            </p>
            <p>
              해결: MSW(Service Worker) 전환으로 배포된 URL 그대로 모바일에서
              mock 동작. 비교 문서 작성하여 팀 제안 후 도입.
            </p>
          </div>
        </div>

        {/* 프로젝트 2 */}
        <div className="mb-5">
          <h3 className="mb-1 font-semibold text-gray-800">외상 결제 데모몰</h3>
          <p className="mb-2 text-xs text-gray-400">
            Next.js (SSR), TypeScript, Tailwind CSS, MSW, Zustand, Jest
          </p>
          <ul className="mb-2 space-y-0.5 text-gray-700">
            <li>
              · Next.js SSR로 서버 영역까지 직접 구현, 영업팀 데모 시연 활용
            </li>
            <li>
              · MSW 처음 도입하여 모바일 실기기 + 에러 케이스 독립 테스트 환경
              확보
            </li>
            <li>· 비개발자 자동 구동 스크립트 작성</li>
          </ul>
          <div className="rounded bg-gray-50 p-2 text-xs text-gray-600">
            <span className="font-semibold">Impact:</span> 영업팀 즉시 데모 시연
            가능 / MSW 효과 검증 → 결제 서비스 전환 제안의 근거
          </div>
        </div>

        {/* 프로젝트 3 */}
        <div className="mb-5">
          <h3 className="mb-1 font-semibold text-gray-800">
            사업자 정보 검증 서버리스 API
          </h3>
          <p className="mb-2 text-xs text-gray-400">
            Node.js, TypeScript, AWS SAM, LocalStack, Docker, Jest, CloudWatch
          </p>
          <ul className="mb-2 space-y-0.5 text-gray-700">
            <li>
              · BE 리소스 부재 상황에서 자진하여 설계→배포→모니터링 단독 수행
            </li>
            <li>
              · 3레이어 분리: handler(이벤트 파싱) → service(비즈니스 로직) →
              client(홈택스 API)
            </li>
            <li>· Jest 유닛 → SAM 이벤트 → LocalStack 통합 3단계 테스트</li>
          </ul>
          <div className="rounded bg-gray-50 p-2 text-xs text-gray-600">
            <span className="font-semibold">Impact:</span> 가입 플로우 블로킹
            직접 해소 / 서버리스로 상시 서버 비용 제거 / 처음 접하는 기술
            스택에서도 안정적 운영
          </div>
        </div>

        {/* 프로젝트 4 */}
        <div className="mb-2">
          <h3 className="mb-1 font-semibold text-gray-800">백오피스 리뉴얼</h3>
          <p className="mb-2 text-xs text-gray-400">
            Next.js, React, TypeScript, Tailwind CSS, Vitest, Zustand, MUI
          </p>
          <ul className="mb-2 space-y-0.5 text-gray-700">
            <li>· Vue → Next.js/React 전면 리뉴얼</li>
            <li>
              · Split Panel UI 제안·구현 (리스트↔상세 이동 없이 바로 확인)
            </li>
            <li>· 달력 기반 수수료 자동 계산기 제안·구현</li>
          </ul>
          <div className="rounded bg-gray-50 p-2 text-xs text-gray-600">
            <span className="font-semibold">Impact:</span> 운영자 페이지 이동
            동선 절감 / 정산 수작업 속도 개선
          </div>
        </div>
      </section>

      {/* 제머나이소프트 */}
      <section className="mb-8">
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
        <div className="mb-5">
          <h3 className="mb-1 font-semibold text-gray-800">
            웹 기반 영상 편집 솔루션 (NLE)
          </h3>
          <p className="mb-2 text-xs text-gray-400">
            Vue.js, TypeScript, Vuex, Canvas API
          </p>
          <ul className="mb-2 space-y-0.5 text-gray-700">
            <li>· 타임라인·드래그·스냅·멀티 셀렉션 코어 기능 개발</li>
            <li>· 타임라인/레이어 아키텍처 데이터 설계</li>
          </ul>
          <div className="rounded bg-gray-50 p-2 text-xs text-gray-600">
            <span className="font-semibold">Impact:</span> Canvas 렌더링으로 DOM
            프레임 하락 해결 → 부드러운 인터랙션 / 로그 스케일 줌으로 프레임
            단위(0.03초) 정밀 편집 지원
          </div>
          <div className="mt-2 border-l-2 border-blue-200 pl-3 text-xs text-gray-600">
            <p className="font-semibold text-blue-700">
              고민: 수십 개 클립 드래그 시 DOM 갱신으로 프레임 하락
            </p>
            <p>
              해결: 눈금/가이드라인은 Canvas로 렌더링(Reflow 우회), 아이템
              인터랙션은 DOM 유지하는 하이브리드 구조
            </p>
          </div>
        </div>

        {/* 프로젝트 2 */}
        <div className="mb-5">
          <h3 className="mb-1 font-semibold text-gray-800">
            보도정보시스템 고도화
          </h3>
          <p className="mb-2 text-xs text-gray-400">
            JavaScript, Backbone.js, jQuery, Cordova
          </p>
          <ul className="mb-2 space-y-0.5 text-gray-700">
            <li>· 레거시 시스템 분석 및 신규 기능 개발</li>
            <li>· iOS 키보드 버그 해결, 빌드 표준화</li>
          </ul>
          <div className="rounded bg-gray-50 p-2 text-xs text-gray-600">
            <span className="font-semibold">Impact:</span> Node.js 버전 불일치
            근본 원인 추적 → 3개월 지연 프로젝트를 2주 조기 완료
          </div>
        </div>

        {/* 프로젝트 3 */}
        <div className="mb-2">
          <h3 className="mb-1 font-semibold text-gray-800">CMS 재구축</h3>
          <p className="mb-2 text-xs text-gray-400">
            Vue.js (Vue 2), Laravel, MySQL, Tailwind CSS
          </p>
          <ul className="mb-2 space-y-0.5 text-gray-700">
            <li>· 레거시 CMS 아키텍처 재설계 + 24시간 실시간 모니터링 개발</li>
          </ul>
          <div className="rounded bg-gray-50 p-2 text-xs text-gray-600">
            <span className="font-semibold">Impact:</span> Heap Snapshot 시간차
            비교로 메모리 누수(setInterval 미해제 + detached DOM) 근본 원인
            특정·해결 → 24시간 가동 OOM 크래시 해소
          </div>
        </div>
      </section>
    </div>
  )
}
