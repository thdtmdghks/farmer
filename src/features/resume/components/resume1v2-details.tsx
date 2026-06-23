export function Resume1V2Details() {
  return (
    <>
      <hr className="my-12 border-gray-300" />

      {/* 상세 경력 헤더 */}
      <header className="mb-8">
        <div className="flex items-baseline justify-between">
          <h2 className="text-2xl font-bold text-gray-900">상세 경력기술서</h2>
          <div className="text-right text-sm text-gray-500">
            <p>ghksl4157@gmail.com</p>
            <a
              href="https://thdtmdghks.github.io/farmer/resume"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              thdtmdghks.github.io/farmer/resume
            </a>
          </div>
        </div>
      </header>

      {/* 실무 경력 상세 */}
      <section>
        {/* 엑심베이 */}
        <div className="mb-8">
          <div className="flex items-baseline justify-between">
            <div className="flex items-baseline gap-2">
              <h3 className="text-lg font-bold text-gray-900">(주)엑심베이</h3>
              <span className="text-sm text-gray-500">
                글로벌 결제 서비스 기업 · 풀스택 개발자
              </span>
            </div>
            <span className="text-sm text-gray-400">2026.03 ~ 재직중</span>
          </div>
          <p className="mt-1 text-sm text-gray-700">
            결제 서비스 개발팀 풀스택 개발자. 결제 백오피스 시스템 구축 및
            블록체인 지갑 API 개발 전담
          </p>

          {/* 결제 백오피스 */}
          <div className="mt-4 rounded-lg border border-gray-200 p-5">
            <h4 className="font-bold text-gray-800">
              📌 결제 백오피스 & 어드민 시스템
            </h4>
            <p className="mt-1 text-sm text-gray-400">
              React, TypeScript, Vite, Turborepo, pnpm workspace, TanStack
              Router/Query, Zustand, shadcn/ui, Tailwind CSS, Vitest, MSW, React
              Hook Form, Zod, node-forge
            </p>

            <div className="mt-3 pl-3">
              <p className="text-sm font-semibold text-gray-700">
                [역할과 한 일]
              </p>
              <ul className="mt-2 list-disc space-y-1.5 pl-8 text-sm text-gray-700">
                <li>
                  Turborepo 기반 모노레포 아키텍처 설계 및 구축으로 공유 패키지
                  분리 및 멀티 애플리케이션 개발 생산성 개선
                </li>
                <li>
                  ESLint 정적 분석 규칙 설정을 통한 레이어 간 단방향 의존성 흐름
                  강제 및 순환 참조 차단으로 아키텍처 무결성 확보
                </li>
                <li>
                  API 명세 확정 단계에서 백엔드팀과 요청/응답 스키마 선제 조율을
                  통해 병목 없는 병렬 개발 프로세스 확립
                </li>
                <li>
                  MSW 기반 독립 Mock 개발 환경 설계 및 구축으로 백엔드 API
                  미완성 상태에서 피처 개발 및 모바일 QA 병행 환경 확보
                </li>
                <li>
                  Vitest 및 React Testing Library 기반 유닛 테스트 환경 구축으로
                  인증 컴포넌트, 전역 스토어, 공통 유틸의 코드 안정성 확보
                </li>
                <li>
                  Zod 스키마 기반의 런타임 환경변수 및 입력 폼 데이터 유효성
                  검증 구조 통합으로 런타임 에러 사전 차단 및 데이터 신뢰성 강화
                </li>
                <li>
                  node-forge를 활용한 RSA-OAEP 클라이언트 비밀번호 암호화 로직
                  구현으로 공개키 싱글턴 캐싱 및 만료 감지 시 캐시 무효화와
                  재발급 흐름 구축
                </li>
                <li>
                  shadcn/ui 기반 공유 디자인 시스템 패키지 구축 및 웹 접근성
                  표준 준수를 통한 사용성 개선
                </li>
                <li>
                  공유 패키지 수정 시 즉각적인 HMR 반영 설정으로 빌드 없는
                  실시간 화면 갱신 개발 피드백 루프 최소화
                </li>
              </ul>
            </div>
          </div>

          {/* 블록체인 지갑 API */}
          <div className="mt-4 rounded-lg border border-gray-200 p-5">
            <h4 className="font-bold text-gray-800">
              📌 블록체인 지갑 API (coin-wallet-api)
            </h4>
            <p className="mt-1 text-sm text-gray-400">
              NestJS, TypeScript, Drizzle ORM, PostgreSQL, Vitest, supertest,
              nock, Docker, Swagger, JWT
            </p>

            <div className="mt-3 pl-3">
              <p className="text-sm font-semibold text-gray-700">
                [역할과 한 일]
              </p>
              <ul className="mt-2 list-disc space-y-1.5 pl-8 text-sm text-gray-700">
                <li>
                  MPC 분산 키 서명 기반 블록체인 지갑 백엔드 API 설계, 구현 및
                  Swagger 문서화로 지갑 도메인 개발 전담
                </li>
                <li>
                  EVM 계열 코인 및 ERC-20 토큰의 트랜잭션 전송 및 영수증 폴링
                  모듈 개발을 통한 온체인 전송 프로세스 안정화
                </li>
                <li>
                  nock 및 DB 격리를 적용한 E2E 테스트 파이프라인 구축으로 외부
                  API 및 테스트넷 지연에 영향받지 않는 결정론적 테스트 환경 확보
                </li>
                <li>
                  Docker Compose를 활용한 로컬 개발 환경 구축으로 개발자 환경
                  세팅 시간 단축 및 로컬 검증 편의성 개선
                </li>
                <li>
                  주요 아키텍처 결정 사항에 대한 ADR 수립 및 문서화를 통한 기술
                  도입 및 설계 히스토리 투명화
                </li>
                <li>
                  외부 API 호출 제한을 고려한 온체인 트랜잭션 상태 폴링 스케줄링
                  및 예외 처리 구현으로 트랜잭션 추적 누수 방지
                </li>
              </ul>
            </div>

            <div className="mt-3 pl-3">
              <p className="text-sm font-semibold text-gray-700">
                [문제와 해결]
              </p>
              <div className="mt-2 space-y-4 pl-4 text-sm text-gray-700">
                <div>
                  <p className="font-medium text-gray-700">
                    동일 지갑 동시 서명 요청 시 MPC 프로토콜 서명 거부
                  </p>
                  <p className="mt-1 text-gray-600">
                    <span className="mr-1 text-red-400">▸</span>분산 키 MPC 서명
                    모듈 특성상, 동일 지갑에 대해 동시에 서명 요청이 유입되면
                    서명 단계에서 병목이 발생하여 전송 요청이 거부되는 문제가
                    있었습니다.
                  </p>
                  <p className="mt-1">
                    <span className="mr-1 text-emerald-500">▸</span>지갑 단위로
                    전송 요청을 비동기 대기열 형태로 직렬화하여 순차 처리하는
                    모듈을 구현했습니다. 요청 유입 시 해당 지갑을 키로 하는
                    Promise 체인에 비동기 작업을 순차적으로 연결하여 동일 지갑은
                    순차, 다른 지갑은 병렬 처리되도록 동시성을 통제하여 서명
                    거부 에러를 예방했습니다.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Coinflux */}
          <div className="mt-4 rounded-lg border border-gray-200 p-5">
            <h4 className="font-bold text-gray-800">
              📌 Coinflux 암호화폐 결제 Sandbox 통합 테스트
            </h4>
            <p className="mt-1 text-sm text-gray-400">
              TypeScript, Node.js, Coinflux Sandbox API
            </p>

            <div className="mt-3 pl-3">
              <p className="text-sm font-semibold text-gray-700">
                [역할과 한 일]
              </p>
              <ul className="mt-2 list-disc space-y-1.5 pl-8 text-sm text-gray-700">
                <li>
                  Sandbox 결제 환경에서 요청, 승인, 콜백 과정 통합 검증을 통해
                  프로덕션 연동 장애 요인 사전 차단
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 파이노버스랩 */}
        <div className="mb-8">
          <div className="flex items-baseline justify-between">
            <div className="flex items-baseline gap-2">
              <h3 className="text-lg font-bold text-gray-900">
                (주)파이노버스랩
              </h3>
              <span className="text-sm text-gray-500">
                핀테크 결제 솔루션 스타트업 · 프론트엔드 개발자
              </span>
            </div>
            <span className="text-sm text-gray-400">2022.08 ~ 2025.07</span>
          </div>
          <p className="mt-1 text-sm text-gray-700">
            핀테크 스타트업 첫 FE 개발자로 합류, 결제 MVP 구현 후 2인 프론트엔드
            파트 리드
          </p>

          {/* 결제 서비스 */}
          <div className="mt-4 rounded-lg border border-gray-200 p-5">
            <h4 className="font-bold text-gray-800">
              📌 결제 서비스 & 사용자 대시보드 개발
            </h4>
            <p className="mt-1 text-sm text-gray-400">
              Vue.js, TypeScript, Vite, Tailwind CSS, Vitest, Playwright, Pinia,
              JSON Server, MSW, html2canvas, jsPDF, pnpm workspace
            </p>

            <div className="mt-3 pl-3">
              <p className="text-sm font-semibold text-gray-700">
                [역할과 한 일]
              </p>
              <ul className="mt-2 list-disc space-y-1.5 pl-8 text-sm text-gray-700">
                <li>
                  신규 PG 결제 서비스 초기 기획 참여, MVP 개발 및 프로덕션
                  출시로 신규 결제 서비스 성공적 시장 진입에 기여
                </li>
                <li>
                  Pinia 스토어 내에 다단계 결제 및 가입 비즈니스 로직과 유효성
                  검증 단계 캡슐화로 UI 컴포넌트와 상태 제어 로직의 결합도 제거
                </li>
                <li>
                  Playwright E2E 자동 테스트 구축 및 CI/CD 연계로 결제 시나리오
                  자동 검증 및 결함 코드의 배포 원천 차단
                </li>
                <li>
                  백엔드팀과 API 요청/응답 스키마 선제 합의 및 JSON Server Mock
                  구축을 통해 백엔드 API 완성 전 피처 개발 및 화면 병행 개발
                  환경 확보
                </li>
                <li>
                  pnpm workspace 기반 모노레포 구축으로 공통 UI 컴포넌트 및 유틸
                  독립 패키지화로 서비스 간 중복 코드 비대화 해소 및 의존성 꼬임
                  방지
                </li>
                <li>
                  Figma 내 시안 리뷰용/구현 예정용 버저닝 관리 체계 도입으로
                  기획, 디자인, 개발 간 소통 혼선 제거
                </li>
                <li>
                  AWS S3 이메일 템플릿 배포 자동 버저닝 및 롤백 스크립트
                  구축으로 마케팅 메일 배포 안정성 확보
                </li>
                <li>
                  슬랙 워크플로우를 활용한 데일리 업무 알림 프로세스 자동화로
                  반복 업무 수동 공수 제거
                </li>
                <li>
                  Git PR 및 이슈 템플릿 표준화 도입으로 개발팀 내 협업
                  가이드라인 확립 및 리뷰 프로세스 효율화
                </li>
              </ul>
            </div>

            <div className="mt-3 pl-3">
              <p className="text-sm font-semibold text-gray-700">
                [문제와 해결]
              </p>
              <div className="mt-2 space-y-4 pl-4 text-sm text-gray-700">
                <div>
                  <p className="font-medium text-gray-700">
                    JSON Server의 모바일 실기기 연동 한계
                  </p>
                  <p className="mt-1 text-gray-600">
                    <span className="mr-1 text-red-400">▸</span>로컬 JSON Server
                    기반 Mock 환경은 localhost에 바인딩되어 모바일 실기기
                    테스트가 어려웠고, 배포된 테스트 환경에서는 Mock이 동작하지
                    않아 에러/엣지 케이스 검증 시 실제 백엔드 배포에 의존해야
                    하는 비효율이 발생했습니다.
                  </p>
                  <p className="mt-1">
                    <span className="mr-1 text-emerald-500">▸</span>JSON
                    Server와 MSW의 장단점을 비교 분석한 문서를 작성하여 팀에
                    공유하고 전환을 제안했습니다. MSW는 브라우저 Service
                    Worker로 동작하여 배포된 URL에서도 Mock이 적용되므로, 모바일
                    단말기와 테스트 환경에서 즉시 예외 시나리오를 테스트할 수
                    있게 되었습니다.
                  </p>
                </div>
                <div>
                  <p className="font-medium text-gray-700">
                    PDF 페이지 경계 텍스트 잘림
                  </p>
                  <p className="mt-1 text-gray-600">
                    <span className="mr-1 text-red-400">▸</span>html2canvas와
                    jsPDF로 PDF를 생성할 때 A4 세로 경계면에서 표의 행이나
                    텍스트가 쪼개져 렌더링되는 결함이 발생했습니다.
                  </p>
                  <p className="mt-1">
                    <span className="mr-1 text-emerald-500">▸</span>두
                    라이브러리의 내부 소스를 분석하여 페이지 분할 메커니즘을
                    파악한 뒤, DOM을 순회하며 A4 높이 경계에 도달한 요소를
                    실시간 감지하고 잘릴 위험이 있는 행이나 문장에 동적으로
                    여백을 부여해 다음 페이지로 개행시키는 분할 지점 연산 로직을
                    직접 구현했습니다.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 외상 결제 데모몰 */}
          <div className="mt-4 rounded-lg border border-gray-200 p-5">
            <h4 className="font-bold text-gray-800">
              📌 외상 결제 데모몰 개발
            </h4>
            <p className="mt-1 text-sm text-gray-400">
              Next.js (SSR), TypeScript, Tailwind CSS, MSW, Zustand, Jest
            </p>

            <div className="mt-3 pl-3">
              <p className="text-sm font-semibold text-gray-700">
                [역할과 한 일]
              </p>
              <ul className="mt-2 list-disc space-y-1.5 pl-8 text-sm text-gray-700">
                <li>
                  Next.js SSR 데모 결제 서비스의 화면 및 API Route 설계/개발로
                  영업 시연용 데모 결제 서비스 구축에 기여
                </li>
                <li>
                  Jest 기반 핵심 데이터 연산 모듈 단위 테스트 적용으로 결제 계산
                  오동작 방지
                </li>
                <li>
                  MSW 도입을 통한 배포 환경 내 Mock 동작 구현으로 모바일 및 외부
                  QA 링크 예외 시나리오 검증 활성화
                </li>
              </ul>
            </div>
          </div>

          {/* 사업자 정보 검증 API */}
          <div className="mt-4 rounded-lg border border-gray-200 p-5">
            <h4 className="font-bold text-gray-800">
              📌 사업자 정보 검증 API 개발 (서버리스)
            </h4>
            <p className="mt-1 text-sm text-gray-400">
              Node.js, TypeScript, AWS SAM, LocalStack, Docker, Jest, CloudWatch
            </p>

            <div className="mt-3 pl-3">
              <p className="text-sm font-semibold text-gray-700">
                [역할과 한 일]
              </p>
              <ul className="mt-2 list-disc space-y-1.5 pl-8 text-sm text-gray-700">
                <li>
                  AWS Lambda 기반 서버리스 아키텍처 설계 및 AWS SAM을 활용한
                  단독 개발/배포로 가입 프로세스 병목 해소 및 무장애 운영 달성
                </li>
                <li>
                  레이어드 아키텍처 도입 및 모듈화로 코드의 역할과 책임을
                  격리하여 로컬 독립 테스트 용이성 확보
                </li>
              </ul>
            </div>

            <div className="mt-3 pl-3">
              <p className="text-sm font-semibold text-gray-700">
                [문제와 해결]
              </p>
              <div className="mt-2 space-y-4 pl-4 text-sm text-gray-700">
                <div>
                  <p className="font-medium text-gray-700">
                    로컬에서의 클라우드 인프라 검증 한계
                  </p>
                  <p className="mt-1 text-gray-600">
                    <span className="mr-1 text-red-400">▸</span>백엔드 리소스
                    부재로 가입 플로우가 블로킹되어 있었고, Lambda 기반이라
                    코드를 수정할 때마다 AWS에 배포해야 하는 긴 피드백 루프가
                    문제였습니다.
                  </p>
                  <p className="mt-1">
                    <span className="mr-1 text-emerald-500">▸</span>FE
                    개발자로서 병목을 자진 해소하기 위해 인프라 설계부터
                    배포까지 단독 수행했습니다. 코드를 핸들러/서비스/외부
                    클라이언트 3계층으로 분리하여 외부 의존 없이 비즈니스 로직만
                    단위 테스트 가능하게 구조화하고, LocalStack + Docker로 실제
                    Lambda/API Gateway를 로컬에 재현하여 배포 없이도 통합 검증이
                    가능한 환경을 구축했습니다.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 백오피스 리뉴얼 */}
          <div className="mt-4 rounded-lg border border-gray-200 p-5">
            <h4 className="font-bold text-gray-800">📌 백오피스 리뉴얼</h4>
            <p className="mt-1 text-sm text-gray-400">
              Next.js, React, TypeScript, Tailwind CSS, Vitest, Zustand, MUI
            </p>

            <div className="mt-3 pl-3">
              <p className="text-sm font-semibold text-gray-700">
                [역할과 한 일]
              </p>
              <ul className="mt-2 list-disc space-y-1.5 pl-8 text-sm text-gray-700">
                <li>
                  레거시 어드민의 Next.js 기반 리뉴얼 및 분할 패널 UI 도입으로
                  정산 처리 및 상세 데이터 검토 동선 개선
                </li>
                <li>
                  달력 UI 기반 자동 계산 수수료 대조 연산 적용으로 수동 계산
                  공수 제거 및 정산 작업 속도 개선
                </li>
                <li>
                  유닛 테스트 기반 정산 연산 무결성 검증 로직 구축으로 정산액
                  계산 오류 사전 차단
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 제머나이소프트 */}
        <div>
          <div className="flex items-baseline justify-between">
            <div className="flex items-baseline gap-2">
              <h3 className="text-lg font-bold text-gray-900">
                (주)제머나이소프트
              </h3>
              <span className="text-sm text-gray-500">
                방송·미디어 솔루션 기업 · 웹 개발자
              </span>
            </div>
            <span className="text-sm text-gray-400">2020.06 ~ 2022.04</span>
          </div>
          <p className="mt-1 text-sm text-gray-700">
            웹 기반 영상 편집기(NLE) 타임라인 성능 최적화 및 보도/CMS 시스템
            고도화 전담
          </p>

          {/* 웹 기반 영상 편집 솔루션 */}
          <div className="mt-4 rounded-lg border border-gray-200 p-5">
            <h4 className="font-bold text-gray-800">
              📌 웹 기반 영상 편집 솔루션
            </h4>
            <p className="mt-1 text-sm text-gray-400">
              Vue.js, TypeScript, Vuex, Canvas API
            </p>

            <div className="mt-3 pl-3">
              <p className="text-sm font-semibold text-gray-700">
                [역할과 한 일]
              </p>
              <ul className="mt-2 list-disc space-y-1.5 pl-8 text-sm text-gray-700">
                <li>
                  웹 영상 편집기 타임라인 UI 및 데이터 아키텍처 설계로 편집기
                  프레임워크 기초 설계
                </li>
                <li>
                  클립 드래그 앤 드롭, 스냅 바인딩 등 핵심 인터랙션 구현으로
                  타임라인 기본 편집 사용성 확보
                </li>
                <li>
                  Canvas API와 HTML DOM 하이브리드 렌더링 도입으로 대량의 미디어
                  클립 조작 시 발생하는 브라우저 프레임 하락 현상 극복
                </li>
                <li>
                  로그 함수 기반 타임라인 줌 배율 구현으로 사용자 체감 줌 곡선
                  매칭을 통한 정밀한 편집 지점 조절 환경 개선
                </li>
              </ul>
            </div>
          </div>

          {/* 보도정보시스템 */}
          <div className="mt-4 rounded-lg border border-gray-200 p-5">
            <h4 className="font-bold text-gray-800">
              📌 보도정보시스템 고도화 및 유지보수
            </h4>
            <p className="mt-1 text-sm text-gray-400">
              JavaScript, Backbone.js, jQuery, Cordova
            </p>

            <div className="mt-3 pl-3">
              <p className="text-sm font-semibold text-gray-700">
                [역할과 한 일]
              </p>
              <ul className="mt-2 list-disc space-y-1.5 pl-8 text-sm text-gray-700">
                <li>
                  지상파 방송사 보도 레거시 시스템 유지보수 및 신규 피처 개발로
                  라이브 시스템 안정 운영
                </li>
                <li>
                  배포 서버 간 Node.js 빌드 버전 표준화를 통해 버전 불일치로
                  인한 빌드 오동작 해결 및 프로젝트 정상화 (2주 조기 배포 달성)
                </li>
              </ul>
            </div>
          </div>

          {/* CMS */}
          <div className="mt-4 rounded-lg border border-gray-200 p-5">
            <h4 className="font-bold text-gray-800">
              📌 CMS 재구축 및 송출 모니터링 개선
            </h4>
            <p className="mt-1 text-sm text-gray-400">
              Vue.js, Laravel, MySQL, Tailwind CSS
            </p>

            <div className="mt-3 pl-3">
              <p className="text-sm font-semibold text-gray-700">
                [역할과 한 일]
              </p>
              <ul className="mt-2 list-disc space-y-1.5 pl-8 text-sm text-gray-700">
                <li>
                  노후 레거시 CMS 시스템 아키텍처 분석, 구조 재설계 및 실시간
                  모니터링 대시보드 구축으로 모니터링 편의성 강화
                </li>
              </ul>
            </div>

            <div className="mt-3 pl-3">
              <p className="text-sm font-semibold text-gray-700">
                [문제와 해결]
              </p>
              <div className="mt-2 space-y-4 pl-4 text-sm text-gray-700">
                <div>
                  <p className="font-medium text-gray-700">
                    모니터링 대시보드 장기 가동 시 브라우저 멈춤
                  </p>
                  <p className="mt-1 text-gray-600">
                    <span className="mr-1 text-red-400">▸</span>24시간 상시
                    가동되어야 하는 모니터링 대시보드에서 약 20시간 이후
                    브라우저 힙 메모리가 지속 누적되다 OOM으로 강제 종료되는
                    현상이 발생했습니다.
                  </p>
                  <p className="mt-1">
                    <span className="mr-1 text-emerald-500">▸</span>Chrome
                    DevTools의 힙 스냅샷을 시간차로 캡처해 비교 분석한 결과,
                    컴포넌트 소멸 시 setInterval 타이머 참조가 해제되지 않아
                    해당 컴포넌트 전체가 GC에 의해 회수되지 못하고 detached DOM
                    노드가 지속 누적되는 것을 특정했습니다. 화면 해제 시점에
                    타이머 및 이벤트 리스너의 일괄 정리와 참조 무효화 구조를
                    설계하여 메모리 누수를 해결했습니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
