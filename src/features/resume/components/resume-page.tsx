import { companies } from '../data/resume-data'
import { CompanySection } from './company-section'

export function ResumePage() {
  return (
    <div className="mx-auto max-w-3xl bg-white p-8 print:p-6">
      {/* 헤더 */}
      <header className="mb-8">
        <div className="flex items-baseline justify-between">
          <h1 className="text-3xl font-bold text-gray-900">송승환</h1>
          <span className="text-sm text-gray-500">ghksl4157@gmail.com</span>
        </div>
        <p className="mt-1 text-lg text-gray-600">프론트엔드 개발자 · 6년차</p>
        <p className="mt-3 leading-relaxed text-gray-500">
          반복되는 문제를 발견하면 구조로 해결하는 프론트엔드 개발자입니다.
          백엔드 의존 없이 개발할 수 있는 Mock 환경, 배포 전 결함을 차단하는
          테스트 자동화, 코드 정합성을 보장하는 모노레포 설계를 주도해왔습니다.
          프론트엔드 영역을 넘어야 할 때도 자연스럽게 움직이며, 한 번 만들어두면
          팀 전체가 이득을 보는 구조를 지향합니다.
        </p>
      </header>

      {/* 범례 */}
      <div className="mb-6 flex gap-4 text-xs text-gray-400">
        <span className="flex items-center gap-1.5">
          <span className="inline-block h-3 w-3 rounded-sm border-l-[3px] border-l-blue-500 bg-blue-50" />
          Frontend
        </span>
        <span className="flex items-center gap-1.5">
          <span className="inline-block h-3 w-3 rounded-sm border-l-[3px] border-l-emerald-500 bg-emerald-50" />
          Backend
        </span>
      </div>

      {/* 회사별 섹션 */}
      {companies.map((company) => (
        <CompanySection key={company.company} data={company} />
      ))}

      {/* 개인 프로젝트 */}
      <section className="mt-8 rounded-lg bg-gray-50 p-6">
        <h2 className="mb-3 text-xl font-bold text-gray-900">개인 프로젝트</h2>
        <div className="space-y-2 text-sm text-gray-600">
          <p>
            <span className="font-semibold text-gray-800">potato</span> —
            Next.js 16 풀스택 CMS, Repository 패턴 + Mock 자동 전환, ADR 13개
            작성
          </p>
          <p>
            <span className="font-semibold text-gray-800">farmer</span> — React
            아키텍처 보일러플레이트, ESLint import 경계 자동 강제, 스크롤
            애니메이션
          </p>
        </div>
        <a
          href="https://github.com/thdtmdghks"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-block text-sm text-blue-500 hover:underline"
        >
          github.com/thdtmdghks
        </a>
      </section>
    </div>
  )
}
