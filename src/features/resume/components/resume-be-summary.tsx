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
        <h2 className="text-xl font-bold leading-snug text-gray-900">
          화면부터 API까지 구현해 제품 개발의 병목을 해결합니다.
        </h2>
        <p className="mt-3 text-base leading-relaxed text-gray-800">
          결제 서비스와 백오피스의 프론트엔드를 구축·운영하며, 제품 개발에 필요한
          API까지 직접 구현해왔습니다. 백엔드 리소스 부족으로 지연된 가입 기능을
          위해 Node.js API를 개발·배포했고, 지갑 API MVP에서는 외부 연동과
          동시 요청 처리를 구현하고 테스트 환경을 구성했습니다.
        </p>
        <dl className="mt-4 space-y-2 border-l-2 border-blue-600 pl-4">
          <div className="text-sm leading-relaxed">
            <dt className="font-semibold text-gray-900">API 개발·배포</dt>
            <dd className="text-gray-700">
              백엔드 리소스 부족으로 지연된 가입 기능에 필요한 사업자 검증 API 배포
            </dd>
          </div>
          <div className="text-sm leading-relaxed">
            <dt className="font-semibold text-gray-900">동시 서명 충돌 처리</dt>
            <dd className="text-gray-700">
              단일 프로세스 내 지갑별 요청 직렬화와 지갑 간 병렬 처리 구현
            </dd>
          </div>
          <div className="text-sm leading-relaxed">
            <dt className="font-semibold text-gray-900">반복 가능한 API 검증</dt>
            <dd className="text-gray-700">
              외부 API Mock과 PostgreSQL 테스트 데이터 초기화로 E2E 환경 구성
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
