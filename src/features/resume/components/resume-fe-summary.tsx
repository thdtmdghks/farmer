import { profile, certifications } from '@/features/resume/data/resume-v2-data'
import {
  feCareerSummary,
  fePersonalProjects,
  feTechStack,
  getFeArticles,
} from '@/features/resume/data/resume-fe-data'
import {
  CareerSection,
  TechStackSection,
  PersonalProjectsSection,
  CredentialsSection,
} from './shared'

export function ResumeFeSummary() {
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
        <p className="mt-1 text-lg text-gray-600">프론트엔드 개발자 · 6년차</p>
      </header>

      <section className="mb-6" aria-label="소개와 대표 경험">
        <p className="text-base leading-relaxed text-gray-800">
          React·Vue 기반 결제 서비스와 백오피스를 설계하고 출시·운영했습니다.
          복잡한 화면과 렌더링 문제를 해결하고, 테스트 자동화로 팀의 검증 시간을
          줄여왔습니다.
        </p>
        <dl className="mt-4 space-y-2 border-l-2 border-blue-600 pl-4">
          <div className="text-sm leading-relaxed">
            <dt className="font-semibold text-gray-900">제품 개발 책임</dt>
            <dd className="text-gray-700">
              결제 MVP 출시 · 백오피스·어드민 2개 앱 구축·운영
            </dd>
          </div>
          <div className="text-sm leading-relaxed">
            <dt className="font-semibold text-gray-900">복잡한 UI 구현</dt>
            <dd className="text-gray-700">
              영상 편집기 타임라인 · Canvas와 DOM 렌더링
            </dd>
          </div>
          <div className="text-sm leading-relaxed">
            <dt className="font-semibold text-gray-900">검증 시간 단축</dt>
            <dd className="text-gray-700">회귀 QA 2~3일 → 반나절</dd>
          </div>
        </dl>
      </section>

      <CareerSection
        companies={feCareerSummary}
        detailLink={`${import.meta.env.BASE_URL}resume-career`}
      />

      <PersonalProjectsSection projects={fePersonalProjects} />

      <TechStackSection techStack={feTechStack} />

      <CredentialsSection
        certifications={certifications}
        articles={getFeArticles()}
      />
    </>
  )
}
