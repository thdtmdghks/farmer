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
          프론트엔드가 백엔드에 의존하지 않고 독립적으로 개발·테스트·배포할 수
          있는 환경을 구축하는 것을 중요하게 생각합니다. Mock 환경 설계, 테스트
          자동화, 모노레포 아키텍처를 주도하며 개발 효율과 서비스 안정성을
          동시에 확보해왔습니다.
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
