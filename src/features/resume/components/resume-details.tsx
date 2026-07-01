import { profile } from '@/features/resume/data/resume-v2-data'

export function ResumeDetails() {
  return (
    <>
      {/* 상세 경력 헤더 */}
      <header className="mb-8">
        <div className="flex items-baseline justify-between">
          <h2 className="text-2xl font-bold text-gray-900">상세 경력기술서</h2>
          <div className="text-right text-sm text-gray-500">
            <p>{profile.email}</p>
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

      <p className="mb-8 border-l-4 border-gray-300 pl-4 text-base text-gray-800">
        요약 이력서에 기재한 프로젝트의 기술적 의사결정과 문제 해결 과정을
        정리했습니다.
      </p>

      <section>
        {/* ───── 엑심베이 ───── */}
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
            결제 서비스 개발팀. 백오피스 프론트엔드 아키텍처 설계 및 블록체인
            지갑 API 개발 전담
          </p>

          {/* 결제 백오피스 */}
          <div className="mt-4 rounded-lg border border-gray-200 p-5">
            <h4 className="font-bold text-gray-800">
              📌 결제 백오피스 & 어드민 시스템
            </h4>
            <p className="mt-1 text-xs text-gray-400">
              React, TypeScript, Turborepo, pnpm workspace, TanStack
              Router/Query, Zustand, shadcn/ui, MSW, Zod
            </p>

            <ul className="mt-3 list-disc space-y-1.5 pl-8 text-sm text-gray-700">
              <li className="font-medium">
                FE 단독. 아키텍처 설계 및 전체 구현
              </li>
              <li>
                7개 패키지·2개 앱 규모 모노레포 아키텍처 설계 — 공유 코드 단일
                소스로 멀티 앱 일관성 확보
              </li>
              <li>
                ESLint로 apps → packages 단방향 의존성 자동 강제, 위반 시 빌드
                실패 처리하여{' '}
                <span className="font-semibold">순환 참조 0건</span> 유지
              </li>
              <li>
                MSW 기반 독립 Mock 환경 설계 — 백엔드 완성 전 피처 개발·모바일
                QA 병행 가능한 구조 확보
              </li>
              <li>
                인증·스토어·유틸 핵심 모듈에 Vitest + RTL 유닛 테스트 적용 —
                리팩토링 시 회귀 버그 사전 감지
              </li>
              <li>
                Zod 스키마로 환경변수·폼 입력을 런타임 검증하는 구조 통합 — 타입
                안전 + 런타임 에러 사전 차단
              </li>
            </ul>
          </div>

          {/* 블록체인 지갑 API */}
          <div className="mt-4 rounded-lg border border-gray-200 p-5">
            <h4 className="font-bold text-gray-800">📌 블록체인 지갑 API</h4>
            <p className="mt-1 text-xs text-gray-400">
              NestJS, TypeScript, Drizzle ORM, PostgreSQL, Vitest, supertest,
              nock, Docker, Swagger
            </p>

            <ul className="mt-3 list-disc space-y-1.5 pl-8 text-sm text-gray-700">
              <li className="font-medium">
                단독 전담. 설계→구현→테스트→문서화
              </li>
              <li>
                외부 API를 nock으로 격리 + DB를 테스트마다 초기화하여
                네트워크·테스트넷 상태 무관한 결정론적 E2E 환경 확보
              </li>
              <li>
                EVM 코인·ERC-20 토큰의 트랜잭션 전송 및 영수증 폴링 모듈 개발로
                온체인 전송 프로세스 안정화
              </li>
              <li>
                주요 설계 결정에 ADR 문서화를 적용하여 &quot;왜 이
                구조인지&quot; 히스토리 투명화
              </li>
            </ul>

            {/* 문제/해결 */}
            <div className="mt-3 pl-3">
              <p className="text-sm font-semibold text-gray-700">
                [문제와 해결]
              </p>
              <div className="mt-2 pl-4 text-sm text-gray-700">
                <p className="font-medium">
                  동일 지갑 동시 서명 요청 시 MPC 서명 거부
                </p>
                <p className="mt-1 text-gray-600">
                  <span className="mr-1 text-red-400">▸</span>
                  MPC 프로토콜 특성상 동일 지갑에 동시 서명이 유입되면 서명
                  단계에서 거부 발생
                </p>
                <p className="mt-1">
                  <span className="mr-1 text-emerald-500">▸</span>
                  지갑 ID를 키로 하는 Promise 체인 큐를 구현 — 동일 지갑은 순차,
                  다른 지갑은 병렬 처리하여 서명 거부 예방
                </p>
              </div>
            </div>
          </div>

          {/* 기타 기여 */}
          <div className="mt-4 pl-1">
            <p className="text-sm font-semibold text-gray-700">기타 기여</p>
            <ul className="mt-1.5 space-y-1 pl-3 text-sm text-gray-600">
              <li>
                · Coinflux Sandbox 통합 테스트 — 암호화폐 결제 요청·승인·콜백
                시나리오 검증
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
            첫 FE 개발자로 합류, 결제 MVP 0→1 구현 후 2인 프론트엔드 파트 리드
          </p>

          {/* 결제 서비스 */}
          <div className="mt-4 rounded-lg border border-gray-200 p-5">
            <h4 className="font-bold text-gray-800">
              📌 결제 서비스 & 사용자 대시보드
            </h4>
            <p className="mt-1 text-xs text-gray-400">
              Vue.js, TypeScript, Playwright, Pinia, MSW, pnpm workspace,
              html2canvas, jsPDF
            </p>

            <ul className="mt-3 list-disc space-y-1.5 pl-8 text-sm text-gray-700">
              <li className="font-medium">
                MVP 단독 구축. 이후 FE 1명 추가 합류하여 파트 리드
              </li>
              <li>
                Playwright E2E + CI/CD 연계로 결제 핵심 플로우 자동 검증 — 회귀
                QA <span className="font-semibold">2~3일 → 반나절</span> 단축,
                결함 배포 원천 차단
              </li>
              <li>
                JSON Server → MSW 전환을 비교 문서 작성 후 팀에 제안·실행 —
                모바일 실기기 + 배포 환경에서도 Mock QA 가능하게 개선
              </li>
              <li>
                pnpm workspace 모노레포 전환으로 공통 변경 시 PR/배포{' '}
                <span className="font-semibold">2회 → 1회</span>
                통합, 서비스 간 코드 중복 제거
              </li>
            </ul>

            {/* 문제/해결 */}
            <div className="mt-3 pl-3">
              <p className="text-sm font-semibold text-gray-700">
                [문제와 해결]
              </p>
              <div className="mt-2 pl-4 text-sm text-gray-700">
                <p className="font-medium">PDF 페이지 경계에서 텍스트 잘림</p>
                <p className="mt-1 text-gray-600">
                  <span className="mr-1 text-red-400">▸</span>
                  html2canvas + jsPDF로 PDF 생성 시 A4 경계면에서 행·텍스트가
                  쪼개지는 결함
                </p>
                <p className="mt-1">
                  <span className="mr-1 text-emerald-500">▸</span>
                  라이브러리 내부 소스 분석 후 DOM 순회하며 A4 높이 경계 도달
                  요소를 감지, 동적 여백 삽입으로 다음 페이지로 넘기는 분할 로직
                  직접 구현
                </p>
              </div>
            </div>
          </div>

          {/* 서버리스 API */}
          <div className="mt-4 rounded-lg border border-gray-200 p-5">
            <h4 className="font-bold text-gray-800">
              📌 사업자 정보 검증 API (서버리스)
            </h4>
            <p className="mt-1 text-xs text-gray-400">
              Node.js, TypeScript, AWS SAM, LocalStack, Docker, Jest
            </p>

            <ul className="mt-3 list-disc space-y-1.5 pl-8 text-sm text-gray-700">
              <li className="font-medium">
                BE 리소스 부재로 가입 플로우 블로킹 — AWS Lambda 기반 서버리스
                API를 인프라 설계부터 배포까지 자진하여 단독 수행
              </li>
              <li>
                컨트롤러/서비스/레포지토리 3계층 분리 + Jest 유닛 테스트, SAM
                CLI 이벤트 테스트, LocalStack 통합 테스트로{' '}
                <span className="font-semibold">장애 0건</span> 운영
              </li>
            </ul>

            {/* 문제/해결 */}
            <div className="mt-3 pl-3">
              <p className="text-sm font-semibold text-gray-700">
                [문제와 해결]
              </p>
              <div className="mt-2 pl-4 text-sm text-gray-700">
                <p className="font-medium">
                  로컬에서의 클라우드 인프라 검증 한계
                </p>
                <p className="mt-1 text-gray-600">
                  <span className="mr-1 text-red-400">▸</span>
                  Lambda 기반이라 코드 수정마다 AWS 배포가 필요해 피드백 루프가
                  매우 긴 문제
                </p>
                <p className="mt-1">
                  <span className="mr-1 text-emerald-500">▸</span>
                  LocalStack + Docker로 로컬에 Lambda/API Gateway 환경을
                  재현하여 배포 없이 통합 검증 가능한 구조 확보
                </p>
              </div>
            </div>
          </div>

          {/* 기타 기여 */}
          <div className="mt-4 pl-1">
            <p className="text-sm font-semibold text-gray-700">기타 기여</p>
            <ul className="mt-1.5 space-y-1 pl-3 text-sm text-gray-600">
              <li>
                · 백오피스 리뉴얼 — Vue → Next.js 전면 재구축, 달력 기반 수수료
                자동 계산 기능 개발
              </li>
              <li>
                · 외상 결제 데모몰 — Next.js SSR 및 API Route 구현, MSW 기반
                모바일 QA 환경 구축
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
                방송·미디어 솔루션 기업 · 웹 개발자
              </span>
            </div>
            <span className="text-sm text-gray-400">2020.06 ~ 2022.04</span>
          </div>
          <p className="mt-1 text-sm text-gray-700">
            웹 영상 편집기 타임라인 성능 최적화 및 보도/CMS 시스템 고도화
          </p>

          {/* 영상 편집기 */}
          <div className="mt-4 rounded-lg border border-gray-200 p-5">
            <h4 className="font-bold text-gray-800">
              📌 웹 기반 영상 편집 솔루션
            </h4>
            <p className="mt-1 text-xs text-gray-400">
              Vue.js, TypeScript, Vuex, Canvas API
            </p>

            <ul className="mt-3 list-disc space-y-1.5 pl-8 text-sm text-gray-700">
              <li className="font-medium">타임라인 코어 기능 전담</li>
              <li>
                타임라인 UI 아키텍처 설계 + 드래그·스냅·멀티 셀렉션 핵심
                인터랙션 구현
              </li>
              <li>
                DOM만으로는 클립 증가 시 프레임 드랍 발생 — Canvas + DOM
                하이브리드 렌더링으로 해소
              </li>
              <li>
                로그 함수 기반 줌 배율로 사용자 체감 줌 곡선 매칭, 정밀 편집
                환경 개선
              </li>
            </ul>
          </div>

          {/* CMS + 보도시스템 */}
          <div className="mt-4 rounded-lg border border-gray-200 p-5">
            <h4 className="font-bold text-gray-800">
              📌 CMS 재구축 & 보도정보시스템
            </h4>
            <p className="mt-1 text-xs text-gray-400">
              Vue.js, Laravel, JavaScript, Backbone.js, Cordova
            </p>

            <ul className="mt-3 list-disc space-y-1.5 pl-8 text-sm text-gray-700">
              <li className="font-medium">유지보수 및 모니터링 개발</li>
              <li>
                24시간 가동 모니터링 대시보드 개발 — 16시간 후 OOM 발생 문제를
                힙 스냅샷 분석으로 원인 특정(setInterval 미해제),{' '}
                <span className="font-semibold">72시간+ 무중단</span>
                가동 확인
              </li>
              <li>
                배포 서버 간 Node.js 버전 불일치 근본 원인 추적 → 3개월 지연
                프로젝트를 투입 후{' '}
                <span className="font-semibold">2주 조기 완료</span>
              </li>
              <li>
                Cordova 기반 모바일 앱 iOS 키보드 포커스 버그 해결 등 크로스
                플랫폼 이슈 대응
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
