import { companies, highlightedStories } from '../data/resume-data'
import { CompanySection } from './company-section'
import { SimplifiedStoryCardComponent } from './simplified-story-card'

export function ResumePage() {
  return (
    <div className="mx-auto max-w-3xl bg-white p-8 print:p-6">
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
            독립 개발 환경 설계
          </span>
          <span className="rounded-md bg-indigo-50 px-2.5 py-1 ring-1 ring-indigo-700/10">
            테스트 자동화
          </span>
          <span className="rounded-md bg-indigo-50 px-2.5 py-1 ring-1 ring-indigo-700/10">
            모노레포 아키텍처
          </span>
        </div>
        <p className="mt-3 leading-relaxed text-gray-500">
          팀의 개발 병목을 제거하고 배포 안정성을 확보하는 소프트웨어
          개발자입니다. Mock 환경으로 백엔드 의존 없이 병행 개발하고, 테스트
          자동화로 수동 QA 없이 안전하게 배포할 수 있는 구조를 만듭니다. 영역을
          가리지 않고 빠르게 기능을 만들면서도 품질이 무너지지 않는 환경을
          추구합니다.
        </p>
      </header>

      {/* 스토리 카드 */}
      <div className="mb-10">
        <div className="grid grid-cols-1 gap-5">
          {highlightedStories.map((story) => (
            <SimplifiedStoryCardComponent key={story.id} story={story} />
          ))}
        </div>
      </div>

      {/* 경력 */}
      <div className="mb-10 rounded-lg bg-gray-50 p-6">
        <h2 className="mb-5 text-xl font-bold text-gray-900">경력</h2>
        {companies.map((company) => (
          <CompanySection key={company.company} data={company} />
        ))}
      </div>

      {/* 개인 프로젝트 */}
      <section className="mb-8 rounded-lg bg-gray-50 p-6">
        <h2 className="mb-4 text-xl font-bold text-gray-900">개인 프로젝트</h2>
        <div className="space-y-3">
          <div>
            <a
              href="https://github.com/thdtmdghks/potato"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-blue-500 hover:underline"
            >
              potato
            </a>
            <ul className="mt-1 border-l-2 border-gray-300 pl-3 text-sm text-gray-500">
              <li>
                · Next.js App Router 및 Supabase 기반의 풀스택 비즈니스 플랫폼
                및 관리자 CMS
              </li>
              <li>
                · Repository 패턴으로 DB 의존성을 격리하여 오프라인 Mock ➔
                Supabase 자동 스위칭 구현
              </li>
              <li>
                · Gemini API 멀티모달 이미지 분석을 활용한 SEO 최적화 시공 설명
                자동 생성 구현
              </li>
              <li>
                ·{' '}
                <a
                  href="https://app.notion.com/p/seunghwansong/Next-js-SSR-vs-On-demand-ISR-3836441365fb8030a273d282971dc0fc?source=copy_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-blue-500 hover:underline"
                >
                  [지식 공유] Next.js SSR vs On-demand ISR 분석 및 적용기 ➔
                </a>
              </li>
            </ul>
          </div>
          <div>
            <a
              href="https://github.com/thdtmdghks/farmer"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-blue-500 hover:underline"
            >
              farmer
            </a>
            <ul className="mt-1 border-l-2 border-gray-300 pl-3 text-sm text-gray-500">
              <li>
                · Bulletproof React 아키텍처를 도입한 타입 안전 프론트엔드
                포트폴리오
              </li>
              <li>
                · ESLint Flat Config(import-x) 기반 단방향 의존성 흐름 및
                KEBAB_CASE 네이밍 규칙 자동화 강제
              </li>
              <li>
                · Framer Motion 없이 브라우저 API(Intersection Observer)를
                커스텀화한 고성능 UI 애니메이션 구현
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 기술 스택 */}
      <div className="mb-8 grid grid-cols-2 gap-3 rounded-lg border border-gray-200 bg-white p-5 text-sm">
        <div>
          <span className="text-xs font-semibold text-gray-400">Language</span>
          <p className="mt-0.5 text-gray-700">TypeScript · JavaScript</p>
        </div>
        <div>
          <span className="text-xs font-semibold text-gray-400">Frontend</span>
          <p className="mt-0.5 text-gray-700">
            React · Vue.js · Next.js · Tailwind CSS
          </p>
        </div>
        <div>
          <span className="text-xs font-semibold text-gray-400">Backend</span>
          <p className="mt-0.5 text-gray-700">NestJS · Node.js · PostgreSQL</p>
        </div>
        <div>
          <span className="text-xs font-semibold text-gray-400">Test</span>
          <p className="mt-0.5 text-gray-700">
            Vitest · Playwright · MSW · Jest
          </p>
        </div>
        <div>
          <span className="text-xs font-semibold text-gray-400">Infra</span>
          <p className="mt-0.5 text-gray-700">
            Docker · AWS Lambda/SAM · GitHub Actions
          </p>
        </div>
        <div>
          <span className="text-xs font-semibold text-gray-400">Tooling</span>
          <p className="mt-0.5 text-gray-700">
            Turborepo 모노레포 · ESLint 규칙 자동화 · ADR
          </p>
        </div>
      </div>

      {/* 자격증 */}
      <section className="mb-8 rounded-lg bg-gray-50 p-6">
        <h2 className="mb-2 text-xl font-bold text-gray-900">자격증</h2>
        <p className="text-sm text-gray-600">
          정보처리기사 <span className="text-gray-400">· 2019.05</span>
        </p>
      </section>

      {/* 작성한 글 */}
      <section className="rounded-lg bg-gray-50 p-6">
        <h2 className="mb-3 text-xl font-bold text-gray-900">작성한 글</h2>
        <ul className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-xs">
          <li>
            <a
              href="https://app.notion.com/p/seunghwansong/Next-js-SSR-vs-On-demand-ISR-3836441365fb8030a273d282971dc0fc?source=copy_link"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-blue-500 hover:underline"
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
    </div>
  )
}
