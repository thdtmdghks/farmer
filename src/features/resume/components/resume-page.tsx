import { companies, simplifiedStories } from '../data/resume-data'
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
        <p className="mt-3 leading-relaxed text-gray-500">
          의존성 없는 독립적인 개발 환경과 안정적인 서비스를 중요하게 생각하는
          소프트웨어 개발자입니다. Mock 기반 독립 개발 환경을 구축하고, 테스트
          자동화로 배포 전 결함을 차단하며, 모노레포로 코드 정합성을
          확보해왔습니다.
        </p>
      </header>

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

      {/* 경력 */}
      <div className="mb-10 rounded-lg bg-gray-50 p-6">
        <h2 className="mb-5 text-xl font-bold text-gray-900">경력</h2>
        {companies.map((company) => (
          <CompanySection key={company.company} data={company} />
        ))}
      </div>

      {/* 스토리 카드 */}
      <div className="mb-10">
        <div className="grid grid-cols-1 gap-5">
          {simplifiedStories.map((story) => (
            <SimplifiedStoryCardComponent key={story.id} story={story} />
          ))}
        </div>
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
              <li>· Next.js App Router 기반 기업 홈페이지 (SEO 최적화)</li>
              <li>
                · Repository 패턴으로 DB 의존성 추상화, DB 없이 개발·빌드 가능
              </li>
              <li>· ADR로 기술 선택 근거 문서화</li>
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
                · ESLint로 단방향 의존성 흐름(shared → features → app) 자동 강제
              </li>
              <li>· 파일/폴더 KEBAB_CASE 네이밍 자동 검증</li>
            </ul>
          </div>
        </div>
      </section>

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
        <ul className="space-y-1.5 text-sm">
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
