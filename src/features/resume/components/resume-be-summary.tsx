import {
  profile,
  certifications,
  articles,
} from '@/features/resume/data/resume-v2-data'
import {
  beCareerSummary,
  bePersonalProjects,
  beTechStack,
} from '@/features/resume/data/resume-be-data'
import {
  CareerSection,
  TechStackSection,
  PersonalProjectsSection,
  CredentialsSection,
} from './shared'

export function ResumeBeSummary() {
  return (
    <>
      {/* 헤더 */}
      <header className="mb-4">
        <div className="flex flex-wrap items-baseline justify-between gap-3">
          <h1 className="text-3xl font-bold text-gray-900">{profile.name}</h1>
          <div className="text-right text-sm text-gray-500">
            <p>{profile.email}</p>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              {profile.githubLabel}
            </a>
          </div>
        </div>
        <p className="mt-1 text-lg text-gray-600">
          프론트엔드 중심 Node.js 풀스택 개발자 · 6년차
        </p>
      </header>

      <section className="mb-6" aria-label="소개와 대표 경험">
        <p className="text-base leading-relaxed text-gray-800">
          프론트엔드 제품 개발을 기반으로 Node.js API까지 직접
          설계·구현해왔습니다. 결제 화면, 외부 API 연동과 동시성 문제를 해결하고
          반복 가능한 검증 환경을 구축합니다.
        </p>
        <dl className="mt-4 space-y-2 border-l-2 border-blue-600 pl-4">
          <div className="text-sm leading-relaxed">
            <dt className="font-semibold text-gray-900">제품 개발 책임</dt>
            <dd className="text-gray-700">
              결제 MVP 출시 · 백오피스 FE 구축·배포·운영
            </dd>
          </div>
          <div className="text-sm leading-relaxed">
            <dt className="font-semibold text-gray-900">Node.js API 설계</dt>
            <dd className="text-gray-700">
              NestJS 지갑 API MVP 완료 · 지갑별 동시 서명 처리
            </dd>
          </div>
          <div className="text-sm leading-relaxed">
            <dt className="font-semibold text-gray-900">출시 병목 해소</dt>
            <dd className="text-gray-700">
              가입에 필요한 사업자 검증 Lambda API 개발·배포
            </dd>
          </div>
        </dl>
      </section>

      <CareerSection
        companies={beCareerSummary}
        detailLink={`${import.meta.env.BASE_URL}resume-be-career`}
      />

      <PersonalProjectsSection projects={bePersonalProjects} />

      <TechStackSection techStack={beTechStack} />

      <CredentialsSection
        certifications={certifications}
        articles={articles.filter((article) =>
          ['NestJS', '모노레포', 'Circuit Breaker'].some((keyword) =>
            article.title.includes(keyword),
          ),
        )}
      />
    </>
  )
}
