import { profile } from '@/features/resume/data/resume-v2-data'

export function ResumeFeDetails() {
  return (
    <>
      {/* 상세 경력 헤더 */}
      <header className="mb-8">
        <div className="flex items-baseline justify-between">
          <h2 className="text-2xl font-bold text-gray-900">상세 경력기술서</h2>
          <div className="text-right text-sm text-gray-500">
            <p>{profile.email}</p>
            <a
              href="https://thdtmdghks.github.io/farmer/resume-fe"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              thdtmdghks.github.io/farmer/resume-fe
            </a>
          </div>
        </div>
      </header>

      <p className="mb-8 border-l-4 border-gray-300 pl-4 text-base text-gray-800">
        요약 이력서에 기재한 프로젝트의 프론트엔드 설계 과정과 문제 해결 경험을
        정리했습니다.
      </p>

      <section>
        {/* ───── 엑심베이 ───── */}
        <div className="mb-8">
          <div className="flex items-baseline justify-between">
            <div className="flex items-baseline gap-2">
              <h3 className="text-lg font-bold text-gray-900">(주)엑심베이</h3>
              <span className="text-sm text-gray-500">
                글로벌 결제 서비스 기업 · 프론트엔드 개발자
              </span>
            </div>
            <span className="text-sm text-gray-400">2026.03 ~ 재직중</span>
          </div>
          <p className="mt-1 text-sm text-gray-700">
            결제 백오피스 프론트엔드 아키텍처 설계 및 전체 구현 단독 담당
          </p>

          {/* 결제 백오피스 */}
          <div className="mt-4 rounded-lg border border-gray-200 p-5">
            <h4 className="font-bold text-gray-800">
              📌 결제 백오피스 & 어드민 시스템
            </h4>
            <p className="mt-1 text-xs text-gray-400">
              React, TypeScript, Turborepo, TanStack Router/Query, Zustand,
              shadcn/ui, MSW, React Hook Form, Zod
            </p>

            <ul className="mt-3 list-disc space-y-1.5 pl-8 text-sm text-gray-700">
              <li className="font-medium">
                FE 단독. 2개 앱, 8개 도메인, 22개 라우트 규모의 아키텍처 설계 및
                전체 구현
              </li>
              <li>
                도메인 간 코드 결합을 방지하기 위해 Feature-Sliced Design 적용 —
                도메인별 관심사 응집, TanStack Router 파일 기반 타입 안전 라우팅
              </li>
              <li>
                MFA·OTP·TOTP·세션 충돌 등 복합 인증 시나리오를 안정적으로
                처리하기 위해 5단계 상태 머신 설계
              </li>
              <li>
                도메인마다 반복되는 테이블 UI를 재사용하기 위해 제네릭 DataTable
                컴포넌트 + children 합성 패턴 설계
              </li>
              <li>
                2개 앱 간 UI 불일치를 방지하기 위해 shadcn/ui 기반 공유 디자인
                시스템 패키지 구축 (웹 접근성 ARIA, 라우트 변경 알림 포함)
              </li>
              <li>
                복잡한 입력 폼의 검증 로직 분산을 해결하기 위해 React Hook Form
                + Zod 필드 간 교차 검증으로 선언형 구조 통합
              </li>
              <li>
                백엔드 API 없이 화면 개발·QA를 진행하기 위해 MSW 시나리오 기반
                Mock 구축 — 이메일별 인증 분기(MFA, 잠금, TOTP 미설정), 동적
                데이터 생성 및 필터링·페이지네이션
              </li>
              <li>
                리팩토링 시 UI 회귀를 방지하기 위해 Vitest + RTL 유닛 테스트를
                feature별 소스 옆 테스트 배치로 구성
              </li>
              <li>
                공통 코드 수정 시 중복 작업을 제거하기 위해 모노레포(Turborepo)
                7개 패키지 구조 설계, ESLint로 단방향 의존성 자동 강제
              </li>
            </ul>

            {/* 문제/해결 */}
            <div className="mt-3 pl-3">
              <p className="text-sm font-semibold text-gray-700">
                [문제와 해결]
              </p>
              <div className="mt-2 space-y-4 pl-4 text-sm text-gray-700">
                <div>
                  <p className="font-medium">
                    멀티 앱 간 UI 일관성 유지 어려움
                  </p>
                  <p className="mt-1 text-gray-600">
                    <span className="mr-1 text-red-400">▸</span>
                    가맹점 백오피스와 내부 어드민 2개 앱에서 동일 컴포넌트를
                    각각 구현하면 디자인 불일치 및 수정 시 2배 작업 발생
                  </p>
                  <p className="mt-1">
                    <span className="mr-1 text-emerald-500">▸</span>
                    공유 디자인 시스템 패키지로 분리하여 한 번 수정으로 양쪽
                    앱에 즉시 반영. HMR 설정으로 빌드 없이 실시간 확인 가능
                  </p>
                  <p className="mt-1 text-sm font-semibold text-gray-800">
                    → 동일 수정 사항을 한 곳에서 관리하는 구조 확보
                  </p>
                </div>
                <div>
                  <p className="font-medium">
                    복잡한 결제 폼에서 입력 검증 로직이 컴포넌트마다 분산
                  </p>
                  <p className="mt-1 text-gray-600">
                    <span className="mr-1 text-red-400">▸</span>
                    가맹점 정보, 결제 설정, 정산 계좌 등 다수의 입력 폼에서 검증
                    로직이 각 컴포넌트에 흩어져 유지보수 어려움
                  </p>
                  <p className="mt-1">
                    <span className="mr-1 text-emerald-500">▸</span>
                    React Hook Form + Zod 스키마로 선언형 검증 구조 통합 — 폼별
                    스키마만 정의하면 검증이 자동 동작하는 구조로 일원화
                  </p>
                  <p className="mt-1 text-sm font-semibold text-gray-800">
                    → 신규 폼 추가 시 스키마 정의만으로 검증 완료, 수정 포인트
                    최소화
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 기타 프로젝트 */}
          <div className="mt-4 pl-1">
            <p className="text-sm font-semibold text-gray-700">기타 프로젝트</p>
            <ul className="mt-1.5 space-y-1 pl-3 text-sm text-gray-600">
              <li>
                · 블록체인 지갑 UI — React 기반 지갑 생성·전송·조회 화면 개발
              </li>
              <li>
                · 블록체인 지갑 API 단독 설계·구현 (NestJS, E2E 테스트) —
                프론트엔드 연동 대상 API를 직접 개발
              </li>
            </ul>
          </div>
        </div>

        {/* ───── 파이노버스랩 ───── */}
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
            첫 FE 개발자로 MVP 단독 구축, 이후 2인 FE 파트 리드
          </p>

          {/* 결제 서비스 */}
          <div className="mt-4 rounded-lg border border-gray-200 p-5">
            <h4 className="font-bold text-gray-800">
              📌 결제 서비스 & 사용자 대시보드
            </h4>
            <p className="mt-1 text-xs text-gray-400">
              Vue.js, TypeScript, Pinia, Playwright, MSW, pnpm workspace,
              html2canvas, jsPDF
            </p>

            <ul className="mt-3 list-disc space-y-1.5 pl-8 text-sm text-gray-700">
              <li className="font-medium">
                MVP 단독 구축. 이후 FE 1명 추가 합류하여 파트 리드
              </li>
              <li>
                복잡한 다단계 결제·가입 플로우를 안정적으로 관리하기 위해 Pinia
                스토어에 비즈니스 로직 캡슐화 — UI와 상태 제어 분리로 유지보수성
                확보
              </li>
              <li>
                수동 회귀 테스트의 시간 소요와 누락을 해결하기 위해 Playwright
                E2E로 핵심 사용자 플로우(가입→결제→완료) 자동 검증 — CI/CD
                연계로 결함 배포 원천 차단, 회귀 QA
                <span className="font-semibold"> 2~3일 → 반나절</span>
              </li>
              <li>
                백엔드 완성 전에도 화면 개발·QA를 진행하기 위해 MSW Mock 환경
                도입을 비교 문서 작성 후 팀에 제안·실행 — 모바일 실기기 QA 해결
              </li>
              <li>
                서비스 간 동일 UI의 중복 구현을 제거하기 위해 공통 컴포넌트·유틸
                독립 패키지 분리 (pnpm workspace) — PR/배포
                <span className="font-semibold"> 2회 → 1회</span> 통합
              </li>
            </ul>

            {/* 문제/해결 */}
            <div className="mt-3 pl-3">
              <p className="text-sm font-semibold text-gray-700">
                [문제와 해결]
              </p>
              <div className="mt-2 space-y-4 pl-4 text-sm text-gray-700">
                <div>
                  <p className="font-medium">
                    PDF 렌더링 시 페이지 경계에서 콘텐츠 잘림
                  </p>
                  <p className="mt-1 text-gray-600">
                    <span className="mr-1 text-red-400">▸</span>
                    html2canvas + jsPDF로 완납증명서 PDF 생성 시 A4 경계면에서
                    표 행·텍스트가 쪼개져 사용자에게 잘못된 문서 전달
                  </p>
                  <p className="mt-1">
                    <span className="mr-1 text-emerald-500">▸</span>
                    라이브러리 내부 소스 분석 후 DOM을 순회하며 A4 높이 경계에
                    도달한 요소를 감지, 동적 여백을 삽입하여 다음 페이지로
                    넘기는 분할 로직 직접 구현
                  </p>
                </div>
                <div>
                  <p className="font-medium">모바일 실기기에서 Mock QA 불가</p>
                  <p className="mt-1 text-gray-600">
                    <span className="mr-1 text-red-400">▸</span>
                    JSON Server가 localhost에 바인딩되어 모바일 실기기 테스트
                    불가, 에러 케이스 검증을 위해 백엔드 배포에 의존
                  </p>
                  <p className="mt-1">
                    <span className="mr-1 text-emerald-500">▸</span>
                    MSW(Service Worker)로 전환하여 배포된 URL에서도 Mock 동작 —
                    모바일·에러 시나리오를 프론트엔드만으로 즉시 검증 가능
                  </p>
                  <p className="mt-1 text-sm font-semibold text-gray-800">
                    → 백엔드 개발 일정과 독립적으로 화면 개발 및 QA 가능
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 백오피스 리뉴얼 */}
          <div className="mt-4 rounded-lg border border-gray-200 p-5">
            <h4 className="font-bold text-gray-800">📌 백오피스 리뉴얼</h4>
            <p className="mt-1 text-xs text-gray-400">
              Next.js, React, TypeScript, Tailwind CSS, Zustand, Vitest
            </p>

            <ul className="mt-3 list-disc space-y-1.5 pl-8 text-sm text-gray-700">
              <li>
                Vue 레거시를 Next.js로 전면 재구축 — SSR 적용으로 초기 로딩 속도
                개선
              </li>
              <li>
                분할 패널 UI 도입으로 정산 목록과 상세를 동시 확인할 수 있는 UX
                설계
              </li>
              <li>
                달력 기반 수수료 자동 계산 UI — 운영팀 수동 검증 공수 제거
              </li>
            </ul>
          </div>

          {/* 기타 프로젝트 */}
          <div className="mt-4 pl-1">
            <p className="text-sm font-semibold text-gray-700">기타 프로젝트</p>
            <ul className="mt-1.5 space-y-1 pl-3 text-sm text-gray-600">
              <li>
                · 외상 결제 데모몰 — Next.js SSR 화면 + API Route 구현, MSW 기반
                모바일 QA 환경 구축
              </li>
              <li>
                · 사업자 정보 검증 서버리스 API — 프론트엔드 가입 플로우 블로킹
                해소를 위해 자진하여 Lambda API 단독 설계·배포
              </li>
            </ul>
          </div>
        </div>

        {/* ───── 제머나이소프트 ───── */}
        <div>
          <div className="flex items-baseline justify-between">
            <div className="flex items-baseline gap-2">
              <h3 className="text-lg font-bold text-gray-900">
                (주)제머나이소프트
              </h3>
              <span className="text-sm text-gray-500">
                방송·미디어 솔루션 기업 · 프론트엔드 개발자
              </span>
            </div>
            <span className="text-sm text-gray-400">2020.06 ~ 2022.04</span>
          </div>
          <p className="mt-1 text-sm text-gray-700">
            웹 영상 편집기 타임라인 UI/인터랙션 개발 및 렌더링 성능 최적화
          </p>

          {/* 영상 편집기 */}
          <div className="mt-4 rounded-lg border border-gray-200 p-5">
            <h4 className="font-bold text-gray-800">
              📌 웹 기반 영상 편집기 (NLE)
            </h4>
            <p className="mt-1 text-xs text-gray-400">
              Vue.js, TypeScript, Vuex, Canvas API
            </p>

            <ul className="mt-3 list-disc space-y-1.5 pl-8 text-sm text-gray-700">
              <li className="font-medium">타임라인 코어 UI/인터랙션 전담</li>
              <li>
                타임라인 UI 아키텍처 설계 — 멀티 레이어 클립의 드래그, 스냅
                바인딩, 멀티 셀렉션 인터랙션 구현
              </li>
              <li>
                로그 함수 기반 줌 배율 구현 — 사용자 체감 줌 곡선을 매칭하여
                정밀 편집 UX 개선
              </li>
            </ul>

            {/* 문제/해결 */}
            <div className="mt-3 pl-3">
              <p className="text-sm font-semibold text-gray-700">
                [문제와 해결]
              </p>
              <div className="mt-2 pl-4 text-sm text-gray-700">
                <p className="font-medium">대량 클립 렌더링 시 프레임 드랍</p>
                <p className="mt-1 text-gray-600">
                  <span className="mr-1 text-red-400">▸</span>
                  DOM만으로 수백 개 미디어 클립을 렌더링하면 브라우저 프레임
                  하락이 체감될 수준으로 발생
                </p>
                <p className="mt-1">
                  <span className="mr-1 text-emerald-500">▸</span>
                  정적 요소는 Canvas로, 인터랙티브 요소만 DOM으로 렌더링하는
                  하이브리드 구조를 설계하여 프레임 드랍 해소
                </p>
                <p className="mt-1 text-sm font-semibold text-gray-800">
                  → 대량 데이터에서도 부드러운 편집 경험 유지
                </p>
              </div>
            </div>
          </div>

          {/* CMS */}
          <div className="mt-4 rounded-lg border border-gray-200 p-5">
            <h4 className="font-bold text-gray-800">
              📌 CMS 모니터링 대시보드
            </h4>
            <p className="mt-1 text-xs text-gray-400">Vue.js, JavaScript</p>

            <ul className="mt-3 list-disc space-y-1.5 pl-8 text-sm text-gray-700">
              <li>24시간 상시 가동 SPA 대시보드 개발</li>
            </ul>

            {/* 문제/해결 */}
            <div className="mt-3 pl-3">
              <p className="text-sm font-semibold text-gray-700">
                [문제와 해결]
              </p>
              <div className="mt-2 pl-4 text-sm text-gray-700">
                <p className="font-medium">
                  장시간 가동 시 SPA 메모리 누수로 브라우저 OOM
                </p>
                <p className="mt-1 text-gray-600">
                  <span className="mr-1 text-red-400">▸</span>약 16시간 후 힙
                  메모리 누적으로 브라우저 강제 종료 — 24시간 상시 가동이
                  불가능한 상태
                </p>
                <p className="mt-1">
                  <span className="mr-1 text-emerald-500">▸</span>
                  Chrome DevTools 힙 스냅샷 시간차 비교로 컴포넌트 해제 시
                  setInterval 미정리 → detached DOM 누적 특정. 화면 전환 시
                  타이머·리스너 일괄 정리 구조 설계하여
                  <span className="font-semibold"> 72시간+ 무중단</span> 확인
                </p>
                <p className="mt-1 text-sm font-semibold text-gray-800">
                  → 장시간 운영 가능한 모니터링 환경 확보
                </p>
              </div>
            </div>
          </div>

          {/* 기타 프로젝트 */}
          <div className="mt-4 pl-1">
            <p className="text-sm font-semibold text-gray-700">기타 프로젝트</p>
            <ul className="mt-1.5 space-y-1 pl-3 text-sm text-gray-600">
              <li>
                · 보도정보시스템 — Node.js 빌드 버전 표준화로 3개월 지연
                프로젝트를 투입 후 2주 조기 완료
              </li>
              <li>
                · Cordova 기반 모바일 앱 iOS 키보드 포커스 버그 해결 등 크로스
                플랫폼 이슈 대응
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
