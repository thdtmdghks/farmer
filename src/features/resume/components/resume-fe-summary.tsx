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

      <section className="mb-6 print:mb-4" aria-label="소개와 대표 경험">
        <h2 className="text-xl leading-snug font-bold text-gray-900">
          제품을 만드는 데서 그치지 않고, 개발 과정까지 개선합니다.
        </h2>
        <p className="mt-3 text-base leading-relaxed text-gray-800 print:mt-2 print:text-sm">
          결제 서비스의 MVP 출시부터 백오피스·어드민 구축·운영까지 담당한
          프론트엔드 개발자입니다. 사용자의 수작업을 줄이는 UI를 직접 제안하고,
          두 앱에서 함께 쓰는 공통 UI를 설계했습니다. 반복되는 수동 검증은 E2E
          테스트로 자동화하며 제품과 개발 과정을 함께 개선해왔습니다.
        </p>
        <dl className="mt-4 space-y-2 border-l-2 border-blue-600 pl-4 print:mt-3 print:space-y-1">
          <div className="text-sm leading-relaxed">
            <dt className="font-semibold text-gray-900">공통 UI 설계</dt>
            <dd className="text-gray-700">
              백오피스·어드민 2개 앱의 공통 UI를 공유 패키지로 통합
            </dd>
          </div>
          <div className="text-sm leading-relaxed">
            <dt className="font-semibold text-gray-900">회귀 QA 단축</dt>
            <dd className="text-gray-700">
              가입·결제 E2E 도입으로 회귀 QA 부담 감소
            </dd>
          </div>
          <div className="text-sm leading-relaxed">
            <dt className="font-semibold text-gray-900">
              브라우저 안정성 개선
            </dt>
            <dd className="text-gray-700">
              CMS 메모리 누수 수정 후 72시간 이상 연속 가동 테스트에서 무중단
              동작 확인
            </dd>
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
