export function Resume1V2Summary() {
  return (
    <>
      {/* 헤더 */}
      <header className="mb-8">
        <div className="flex items-baseline justify-between">
          <h1 className="text-3xl font-bold text-gray-900">송승환</h1>
          <div className="text-right text-sm text-gray-500">
            <p>ghksl4157@gmail.com</p>
            <a
              href="https://github.com/thdtmdghks"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              github.com/thdtmdghks
            </a>
          </div>
        </div>
        <p className="mt-1 text-lg text-gray-600">소프트웨어 개발자 · 6년차</p>
        <div className="mt-3 flex flex-wrap gap-2 text-xs font-semibold text-indigo-700">
          <span className="rounded-md bg-indigo-50 px-2.5 py-1 ring-1 ring-indigo-700/10">
            독립 개발 환경
          </span>
          <span className="rounded-md bg-indigo-50 px-2.5 py-1 ring-1 ring-indigo-700/10">
            테스트 자동화
          </span>
          <span className="rounded-md bg-indigo-50 px-2.5 py-1 ring-1 ring-indigo-700/10">
            규칙 자동 강제
          </span>
        </div>
      </header>

      {/* 자기소개 */}
      <section className="mb-8">
        <p className="leading-relaxed text-gray-700">
          프론트엔드와 백엔드의 영역을 가리지 않고 문제를 해결하며, 팀의 개발
          병목을 제거하고 배포 안정성을 확보하는 데 몰입하는 소프트웨어 개발자
          송승환입니다.
        </p>

        <p className="mt-5 leading-relaxed text-gray-700">
          외부에 의존하지 않는 독립적인 개발 환경과 자동화된 검증 시스템을
          기반으로, 빠르고 안정적인 서비스 개발 환경을 구축하는 것을 추구합니다.
        </p>

        <div className="mt-5 space-y-4">
          {/* 독립 개발 환경 */}
          <div className="rounded-lg border-l-4 border-l-indigo-300 bg-gray-50 py-3 pr-4 pl-4">
            <p className="text-sm font-semibold text-gray-900">
              독립적인 개발 환경 구축
            </p>
            <p className="mt-1 text-sm text-gray-700">
              Mock 서버를 적극 활용해 백엔드 API 명세 완료 시점부터 병행 개발이
              가능한 구조를 만듭니다.
            </p>
            <ul className="mt-1.5 space-y-1 pl-2 text-sm text-gray-600">
              <li>→ json server 도입 및 msw 전환 주도</li>
              <li>→ 모노레포 독립 mock 환경 설계</li>
              <li>→ 인터페이스 추상화를 통한 외부 환경 격리 및 확장성 확보</li>
            </ul>
          </div>

          {/* 배포 자동화 */}
          <div className="rounded-lg border-l-4 border-l-emerald-300 bg-gray-50 py-3 pr-4 pl-4">
            <p className="text-sm font-semibold text-gray-900">
              배포 자동화와 품질 검증
            </p>
            <p className="mt-1 text-sm text-gray-700">
              테스트 자동화 파이프라인을 설계·구축해 수동 QA 리스크를 최소화하고
              안정적으로 배포할 수 있는 시스템을 추구합니다.
            </p>
            <ul className="mt-1.5 space-y-1 pl-2 text-sm text-gray-600">
              <li>→ E2E 테스트 기반의 결함 코드 배포 자동 차단</li>
              <li>→ 로컬 가상 클라우드 환경 기반의 통합 테스트 설계</li>
              <li>→ 복잡한 정산 로직 검증을 위한 유닛 테스트 수립</li>
            </ul>
          </div>

          {/* 규칙 자동 강제 */}
          <div className="rounded-lg border-l-4 border-l-amber-300 bg-gray-50 py-3 pr-4 pl-4">
            <p className="text-sm font-semibold text-gray-900">
              규칙의 자동 강제
            </p>
            <p className="mt-1 text-sm text-gray-700">
              아키텍처나 코딩 표준을 말로 전파하기보다 시스템으로 자동 강제되는
              환경을 지향합니다.
            </p>
            <ul className="mt-1.5 space-y-1 pl-2 text-sm text-gray-600">
              <li>→ 프로젝트 내 단방향 의존성 규칙 강제</li>
              <li>
                → Git 훅을 활용한 아키텍처 규칙 위반 코드의 커밋 자동 차단
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 경력 요약 */}
      <section className="mb-8 rounded-lg bg-gray-50 p-6">
        <h2 className="mb-5 text-xl font-bold text-gray-900">경력 요약</h2>

        {/* 엑심베이 */}
        <div className="mb-6">
          <div className="mb-1 flex items-baseline justify-between">
            <div className="flex items-baseline gap-2">
              <h3 className="text-lg font-bold text-gray-900">(주)엑심베이</h3>
              <span className="text-sm text-gray-400">
                글로벌 결제 서비스 기업 · 풀스택 개발자
              </span>
            </div>
            <span className="text-sm text-gray-400">2026.03 ~ 재직중</span>
          </div>
          <p className="pl-1 text-sm text-gray-500">
            결제 백오피스 시스템 구축 및 블록체인 지갑 API 개발
          </p>
          <ul className="mt-2 space-y-2 border-l-2 border-gray-200 pl-4 text-sm text-gray-600">
            <li>
              · Turborepo 모노레포 아키텍처 구축 및 ESLint 규칙 강제로 레이어 간
              의존성 제거 및 무결성 확보
            </li>
            <li>
              · MSW 기반 독립 Mock 환경 구축으로 백엔드 API 미완성 상태에서 피처
              개발 및 QA 병행 구조 확보
            </li>
            <li>
              · nock 및 DB 격리를 적용한 E2E 테스트 파이프라인 구축으로 외부
              의존성 없는 신뢰성 높은 검증 환경 확보
            </li>
            <li>
              · Zod 스키마 기반의 환경변수 및 데이터 검증 구조 구축으로 런타임
              에러 사전 차단
            </li>
            <li>
              · 동일 지갑 동시 요청 시 발생하는 MPC 서명 병목을 지갑 단위 비동기
              큐 구현으로 해결
            </li>
          </ul>
        </div>

        {/* 파이노버스랩 */}
        <div className="mb-6">
          <div className="mb-1 flex items-baseline justify-between">
            <div className="flex items-baseline gap-2">
              <h3 className="text-lg font-bold text-gray-900">
                (주)파이노버스랩
              </h3>
              <span className="text-sm text-gray-400">
                핀테크 결제 솔루션 스타트업 · 프론트엔드 개발자
              </span>
            </div>
            <span className="text-sm text-gray-400">2022.08 ~ 2025.07</span>
          </div>
          <p className="pl-1 text-sm text-gray-500">
            핀테크 스타트업 첫 프론트엔드 개발자로 합류하여 결제 서비스 MVP 개발
            및 프론트엔드 파트 리드 수행
          </p>
          <ul className="mt-2 space-y-2 border-l-2 border-gray-200 pl-4 text-sm text-gray-600">
            <li>
              · 결제 서비스 초기 기획 및 MVP 개발을 주도하여 성공적인 프로덕션
              출시 견인
            </li>
            <li>
              · 정산 어드민의 Next.js 리뉴얼 및 수수료 자동 대조 연산 적용으로
              정산 수동 공수 제거
            </li>
            <li>
              · JSON Server에서 MSW로 Mock 환경 마이그레이션을 주도하여 모바일
              실기기 QA 제약 해결
            </li>
            <li>
              · AWS SAM 기반 서버리스 API 구축 및 LocalStack 연동으로 인프라
              무장애 운영 환경 확보
            </li>
            <li>
              · Playwright E2E 테스트 및 Jest/Vitest 기반 유닛 테스트 자동 검증
              CI/CD 파이프라인 구축
            </li>
            <li>
              · pnpm workspace 모노레포 구축으로 공통 컴포넌트 독립 패키지화 및
              의존성 꼬임 방지
            </li>
            <li>
              · PR/이슈 템플릿 표준화를 통한 협업 프로세스 가이드라인 확립
            </li>
          </ul>
        </div>

        {/* 제머나이소프트 */}
        <div>
          <div className="mb-1 flex items-baseline justify-between">
            <div className="flex items-baseline gap-2">
              <h3 className="text-lg font-bold text-gray-900">
                (주)제머나이소프트
              </h3>
              <span className="text-sm text-gray-400">
                방송·미디어 솔루션 기업 · 웹 개발자
              </span>
            </div>
            <span className="text-sm text-gray-400">2020.06 ~ 2022.04</span>
          </div>
          <p className="pl-1 text-sm text-gray-500">
            웹 기반 영상 편집기 및 방송 시스템 개발
          </p>
          <ul className="mt-2 space-y-2 border-l-2 border-gray-200 pl-4 text-sm text-gray-600">
            <li>
              · Canvas API와 DOM 하이브리드 렌더링 도입으로 대량의 미디어 클립
              조작 타임라인 성능 극복
            </li>
            <li>
              · 배포 서버 간 Node.js 빌드 버전 표준화를 통해 버전 불일치로 인한
              빌드 오동작 해결
            </li>
            <li>
              · Chrome DevTools 힙 스냅샷 분석을 통해 24시간 가동 모니터링
              시스템의 메모리 누수 해결
            </li>
          </ul>
        </div>
      </section>

      {/* 개인 프로젝트 */}
      <section className="mb-8">
        <h2 className="mb-4 text-xl font-bold text-gray-900">
          개인 프로젝트 요약
        </h2>

        <div className="mb-4 rounded-lg border border-gray-200 p-5">
          <h3 className="font-bold text-gray-900">
            <a
              href="https://github.com/thdtmdghks/potato"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-blue-600 hover:text-blue-500"
            >
              potato | 기업 홈페이지 및 CMS 구축
              <svg
                className="h-3.5 w-3.5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </h3>
          <ul className="mt-2 space-y-1.5 pl-4 text-sm text-gray-600">
            <li>
              · 실제 업체용 홈페이지 설계·개발 및 상용 배포 (시공 사례, 리뷰,
              어드민 CMS)
            </li>
            <li>
              · Repository 패턴 인터페이스 도입을 통해 Supabase 네트워크 장애
              시에도 정상 빌드 및 구동되는 독립 개발 환경 확보
            </li>
            <li>
              · Gemini API 페이로드 한도 초과 및 분석 에러에 대응하는 3단계
              Fallback 메타데이터 자동 생성 로직 설계
            </li>
            <li>
              · On-demand ISR 기반 실시간 캐시 무효화 및 JSON-LD 구조화 데이터
              적용으로 SEO 최적화
            </li>
          </ul>
        </div>

        <div className="rounded-lg border border-gray-200 p-5">
          <h3 className="font-bold text-gray-900">
            <a
              href="https://github.com/thdtmdghks/farmer"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-blue-600 hover:text-blue-500"
            >
              farmer | React 아키텍처 규칙 검증 도구
              <svg
                className="h-3.5 w-3.5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </h3>
          <ul className="mt-2 space-y-1.5 pl-4 text-sm text-gray-600">
            <li>
              · ESLint Flat Config 정적 분석 규칙 설정을 통한 레이어 간 단방향
              의존성 자동 강제
            </li>
            <li>
              · Husky Git Hook 연계를 통한 아키텍처 규칙 위반 코드 커밋 자동
              차단
            </li>
            <li>
              · Intersection Observer API 및 CSS GPU 가속을 활용해 라이브러리
              의존성 없는 경량 스크롤 애니메이션 구현
            </li>
          </ul>
        </div>
      </section>

      {/* 기술 스택 */}
      <div className="mb-8 grid grid-cols-2 gap-3 rounded-lg border border-gray-200 bg-white p-5 text-sm">
        <div>
          <span className="text-xs font-semibold text-gray-400">Language</span>
          <p className="mt-0.5 text-gray-700">TypeScript · JavaScript (ES6+)</p>
        </div>
        <div>
          <span className="text-xs font-semibold text-gray-400">Frontend</span>
          <p className="mt-0.5 text-gray-700">
            React · Vue.js · Next.js · Tailwind CSS · shadcn/ui
          </p>
        </div>
        <div>
          <span className="text-xs font-semibold text-gray-400">Backend</span>
          <p className="mt-0.5 text-gray-700">NestJS · Node.js · PostgreSQL</p>
        </div>
        <div>
          <span className="text-xs font-semibold text-gray-400">Test</span>
          <p className="mt-0.5 text-gray-700">
            Vitest · Playwright · MSW · Jest · supertest · nock
          </p>
        </div>
        <div>
          <span className="text-xs font-semibold text-gray-400">Infra</span>
          <p className="mt-0.5 text-gray-700">
            Docker · AWS SAM / Lambda · GitHub Actions (CI/CD)
          </p>
        </div>
        <div>
          <span className="text-xs font-semibold text-gray-400">Tooling</span>
          <p className="mt-0.5 text-gray-700">
            Turborepo 모노레포 · pnpm workspace · ESLint 규칙 자동화 · ADR
            (Architecture Decision Record)
          </p>
        </div>
      </div>

      {/* 자격증 */}
      <section className="mb-8 rounded-lg bg-gray-50 p-6">
        <h2 className="mb-2 text-xl font-bold text-gray-900">자격증</h2>
        <p className="text-sm text-gray-600">
          정보처리기사{' '}
          <span className="text-gray-400">· 한국산업인력공단 · 2019.05</span>
        </p>
      </section>

      {/* 작성한 글 */}
      <section className="rounded-lg bg-gray-50 p-6">
        <h2 className="mb-3 text-xl font-bold text-gray-900">작성한 글</h2>
        <ul className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-xs">
          <li>
            <a
              href="https://app.notion.com/p/383942e7a7ea81129099d368f0878b7e"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              모노레포 순환 의존성 방지 — 단방향 계층 아키텍처 설계
            </a>
          </li>
          <li>
            <a
              href="https://app.notion.com/p/NestJS-E2E-383942e7a7ea81d99429d7a0e41285ec"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              NestJS 외부 의존 없는 개발 환경 + E2E 테스트 파이프라인
            </a>
          </li>
          <li>
            <a
              href="https://app.notion.com/p/seunghwansong/Next-js-SSR-vs-On-demand-ISR-3836441365fb8030a273d282971dc0fc?source=copy_link"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Next.js SSR vs On-demand ISR 분석 및 적용기
            </a>
          </li>
          <li>
            <a
              href="https://www.notion.so/UI-2616441365fb80be87e0c62b978265c4"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              프론트엔드 고도화 : UI 테스트 도입을 고민하다 - 스토리북
            </a>
          </li>
          <li>
            <a
              href="https://www.notion.so/json-server-vs-msw-2616441365fb80c6bb16e90104e5fdde"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              json-server vs msw
            </a>
          </li>
          <li>
            <a
              href="https://www.notion.so/Github-Actions-Workflow-CD-2616441365fb80579036f43d009704eb"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Github Actions Workflow를 이용한 CD 적용기
            </a>
          </li>
          <li>
            <a
              href="https://www.notion.so/36d6441365fb809d9072f2c90c6bda2f"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              웹 보안 — 주요 공격과 방어
            </a>
          </li>
          <li>
            <a
              href="https://www.notion.so/Circuit-Breaker-2616441365fb80099adec23a8d99d7ca"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Circuit Breaker
            </a>
          </li>
          <li>
            <a
              href="https://www.notion.so/2616441365fb80f7aeb3c08d0918fbe0"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              프론트엔드 패키지 매니저
            </a>
          </li>
          <li>
            <a
              href="https://www.notion.so/common-js-es-module-2616441365fb805da502cbffd4dc432e"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              common js & es module
            </a>
          </li>
          <li>
            <a
              href="https://www.notion.so/jsdom-2616441365fb8052bb62c58d91ff48ad"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              jsdom
            </a>
          </li>
        </ul>
      </section>
    </>
  )
}
