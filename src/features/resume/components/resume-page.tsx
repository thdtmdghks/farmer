import { companies } from '../data/resume-data'
import { CompanySection } from './company-section'
import { ExternalLink } from 'lucide-react'

// Simple inline SVG GitHub icon to avoid dependency version mismatch
function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  )
}

export function ResumePage() {
  return (
    <div className="min-h-screen bg-slate-50 px-4 py-12 dark:bg-slate-950 print:bg-white print:px-0 print:py-0">
      <div className="mx-auto max-w-3xl rounded-2xl border border-slate-100 bg-white p-10 shadow-md print:rounded-none print:border-none print:p-0 print:shadow-none">
        {/* 헤더 */}
        <header className="mb-8">
          <div className="flex items-baseline justify-between">
            <h1 className="text-3xl font-bold text-gray-900">송승환</h1>
            <a
              href="mailto:ghksl4157@gmail.com"
              className="text-sm text-gray-500 transition-colors hover:text-blue-600"
            >
              ghksl4157@gmail.com
            </a>
          </div>
          <p className="mt-1 text-lg text-gray-600">
            프론트엔드 개발자 · 6년차
          </p>
          <p className="mt-3 leading-relaxed text-gray-500">
            반복되는 문제를 발견하면 구조로 해결하는 프론트엔드 개발자입니다.
            백엔드 의존 없이 개발할 수 있는 Mock 환경, 배포 전 결함을 차단하는
            테스트 자동화, 코드 정합성을 보장하는 모노레포 설계를
            주도해왔습니다. 코드뿐 아니라 팀의 업무 프로세스에서도 반복을 줄이는
            도구를 만들어 공유합니다. 프론트엔드 영역을 넘어야 할 때도
            자연스럽게 움직이며, 한 번 만들어두면 팀 전체가 이득을 보는 구조를
            지향합니다.
          </p>
        </header>

        {/* 기술 스택 */}
        <div className="mb-6 grid grid-cols-2 gap-3 rounded-lg border border-gray-200 bg-white p-5 text-sm">
          <div>
            <span className="text-xs font-semibold text-gray-400">
              Language
            </span>
            <p className="mt-0.5 text-gray-700">TypeScript · JavaScript</p>
          </div>
          <div>
            <span className="text-xs font-semibold text-gray-400">
              Frontend
            </span>
            <p className="mt-0.5 text-gray-700">
              React · Vue.js · Next.js · Tailwind CSS
            </p>
          </div>
          <div>
            <span className="text-xs font-semibold text-gray-400">Backend</span>
            <p className="mt-0.5 text-gray-700">
              NestJS · Node.js · PostgreSQL
            </p>
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
            <span className="text-xs font-semibold text-gray-400">설계</span>
            <p className="mt-0.5 text-gray-700">
              Turborepo 모노레포 · ESLint 규칙 자동화 · ADR
            </p>
          </div>
        </div>

        {/* 회사별 섹션 */}
        {companies.map((company) => (
          <CompanySection key={company.company} data={company} />
        ))}

        {/* 자격증 */}
        <section className="mt-8 rounded-lg bg-gray-50 p-6">
          <h2 className="mb-2 text-xl font-bold text-gray-900">자격증</h2>
          <p className="text-sm text-gray-600">
            정보처리기사 <span className="text-gray-400">· 2019.05</span>
          </p>
        </section>

        {/* 개인 프로젝트 */}
        <section className="mt-8 rounded-lg bg-gray-50 p-6">
          <h2 className="mb-4 text-xl font-bold text-gray-900">
            개인 프로젝트
          </h2>
          <div className="space-y-3">
            <div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-gray-800">potato</span>
                <a
                  href="https://github.com/thdtmdghks/potato"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-blue-500 hover:underline"
                >
                  <GithubIcon className="h-3.5 w-3.5" />
                  github
                </a>
              </div>
              <ul className="mt-1 border-l-2 border-gray-300 pl-3 text-sm text-gray-500">
                <li>· Next.js 16 App Router 기반 풀스택 CMS</li>
                <li>
                  · Repository 패턴으로 DB 의존성 추상화, DB 없이 개발·빌드 가능
                </li>
                <li>· ADR 13개로 기술 선택 근거 문서화</li>
              </ul>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-gray-800">farmer</span>
                <a
                  href="https://github.com/thdtmdghks/farmer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-blue-500 hover:underline"
                >
                  <GithubIcon className="h-3.5 w-3.5" />
                  github
                </a>
              </div>
              <ul className="mt-1 border-l-2 border-gray-300 pl-3 text-sm text-gray-500">
                <li>· Bulletproof React 아키텍처 보일러플레이트</li>
                <li>
                  · ESLint로 단방향 의존성 흐름(shared → features → routes) 자동
                  강제
                </li>
                <li>· 파일/폴더 KEBAB_CASE 네이밍 자동 검증</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 작성한 글 */}
        <section className="mt-8 rounded-lg bg-gray-50 p-6">
          <h2 className="mb-3 text-xl font-bold text-gray-900">작성한 글</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="https://www.notion.so/UI-2616441365fb80be87e0c62b978265c4"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-blue-500 hover:underline"
              >
                <span>
                  프론트엔드 고도화 : UI 테스트 도입을 고민하다 - 스토리북
                </span>
                <ExternalLink className="h-3 w-3 shrink-0 text-gray-400" />
              </a>
            </li>
            <li>
              <a
                href="https://www.notion.so/json-server-vs-msw-2616441365fb80c6bb16e90104e5fdde"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-blue-500 hover:underline"
              >
                <span>json-server vs msw</span>
                <ExternalLink className="h-3 w-3 shrink-0 text-gray-400" />
              </a>
            </li>
            <li>
              <a
                href="https://www.notion.so/Github-Actions-Workflow-CD-2616441365fb80579036f43d009704eb"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-blue-500 hover:underline"
              >
                <span>Github Actions Workflow를 이용한 CD 적용기</span>
                <ExternalLink className="h-3 w-3 shrink-0 text-gray-400" />
              </a>
            </li>
            <li>
              <a
                href="https://www.notion.so/36d6441365fb809d9072f2c90c6bda2f"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-blue-500 hover:underline"
              >
                <span>웹 보안 — 주요 공격과 방어</span>
                <ExternalLink className="h-3 w-3 shrink-0 text-gray-400" />
              </a>
            </li>
            <li>
              <a
                href="https://www.notion.so/Circuit-Breaker-2616441365fb80099adec23a8d99d7ca"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-blue-500 hover:underline"
              >
                <span>Circuit Breaker</span>
                <ExternalLink className="h-3 w-3 shrink-0 text-gray-400" />
              </a>
            </li>
            <li>
              <a
                href="https://www.notion.so/2616441365fb80f7aeb3c08d0918fbe0"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-blue-500 hover:underline"
              >
                <span>프론트엔드 패키지 매니저</span>
                <ExternalLink className="h-3 w-3 shrink-0 text-gray-400" />
              </a>
            </li>
            <li>
              <a
                href="https://www.notion.so/common-js-es-module-2616441365fb805da502cbffd4dc432e"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-blue-500 hover:underline"
              >
                <span>common js & es module</span>
                <ExternalLink className="h-3 w-3 shrink-0 text-gray-400" />
              </a>
            </li>
            <li>
              <a
                href="https://www.notion.so/jsdom-2616441365fb8052bb62c58d91ff48ad"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-blue-500 hover:underline"
              >
                <span>jsdom</span>
                <ExternalLink className="h-3 w-3 shrink-0 text-gray-400" />
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  )
}
