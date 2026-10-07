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
          React·Vue 기반 결제 서비스의 MVP 출시와 백오피스·어드민 구축·운영을
          담당했습니다. 복잡한 화면과 반복 작업을 공통 구조로 정리하고,
          렌더링·메모리 문제의 원인을 추적하며 테스트 자동화로 검증 시간을
          줄였습니다.
        </p>
        <dl className="mt-4 space-y-2 border-l-2 border-blue-600 pl-4">
          <div className="text-sm leading-relaxed">
            <dt className="font-semibold text-gray-900">제품 구축과 공통화</dt>
            <dd className="text-gray-700">
              백오피스·어드민 2개 앱 구축·운영 · 공유 UI로 수정 지점 통합
            </dd>
          </div>
          <div className="text-sm leading-relaxed">
            <dt className="font-semibold text-gray-900">
              브라우저 성능·안정성
            </dt>
            <dd className="text-gray-700">
              Canvas·DOM 렌더링 분리 · 메모리 누수 수정 후 72시간 연속 테스트
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
