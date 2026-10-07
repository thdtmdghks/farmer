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
          결제 서비스와 백오피스의 프론트엔드를 구축·운영하고, 가입 기능에
          필요한 Node.js API를 직접 개발·배포했습니다. 외부 연동과 동시성 문제를
          해결하며, API 설계부터 Mock 기반 검증까지 담당합니다.
        </p>
        <dl className="mt-4 space-y-2 border-l-2 border-blue-600 pl-4">
          <div className="text-sm leading-relaxed">
            <dt className="font-semibold text-gray-900">제품 구축·운영</dt>
            <dd className="text-gray-700">
              결제 MVP 출시 · 백오피스 FE 구축·배포·운영
            </dd>
          </div>
          <div className="text-sm leading-relaxed">
            <dt className="font-semibold text-gray-900">
              API 개발로 출시 병목 해소
            </dt>
            <dd className="text-gray-700">
              백엔드 리소스 부족으로 지연된 사업자 검증 Lambda API 개발·배포
            </dd>
          </div>
          <div className="text-sm leading-relaxed">
            <dt className="font-semibold text-gray-900">개발·검증 체계 개선</dt>
            <dd className="text-gray-700">
              회귀 QA 2~3일 → 반나절 · 외부 연동을 격리한 지갑 API E2E
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
