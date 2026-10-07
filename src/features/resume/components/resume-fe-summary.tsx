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
          반복되는 구현과 검증 병목을 공통 구조·Mock·자동화로 개선합니다. AI
          활용 개발에서도 설계와 코드 검토를 바탕으로 작업 규칙을 보완합니다.
        </p>
        <dl className="mt-4 space-y-2 border-l-2 border-blue-600 pl-4">
          <div className="text-sm leading-relaxed">
            <dt className="font-semibold text-gray-900">
              반복 구현을 줄이는 구조
            </dt>
            <dd className="text-gray-700">
              백오피스·어드민 2개 앱의 공유 UI · 의존성 규칙 검사
            </dd>
          </div>
          <div className="text-sm leading-relaxed">
            <dt className="font-semibold text-gray-900">
              화면 특성에 맞는 설계
            </dt>
            <dd className="text-gray-700">
              영상 편집기 타임라인 · Canvas와 DOM 렌더링
            </dd>
          </div>
          <div className="text-sm leading-relaxed">
            <dt className="font-semibold text-gray-900">반복 가능한 검증</dt>
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
