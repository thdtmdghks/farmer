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
        <div className="flex items-baseline justify-between">
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
        <p className="mt-1 text-lg text-gray-600">{profile.title}</p>
      </header>

      {/* 자기소개 */}
      <section className="mb-6 space-y-2">
        <p className="text-base leading-relaxed text-gray-800">
          반복되는 서비스 병목을 구조적으로 해결하고, 프론트엔드부터
          API·인프라까지 필요한 영역을 직접 설계·구축해온 웹 개발자입니다.
        </p>
        <p className="text-base leading-relaxed text-gray-800">
          대규모 레거시 시스템 재구축부터 서비스 초기 기획, 설계, 개발, 출시까지
          다양한 환경에서 전 과정을 경험했습니다. Mock 기반 독립 개발 환경을 팀
          표준으로 정착시키고, 테스트 자동화와 모노레포 구성을 통해 개발
          생산성과 서비스 안정성을 함께 높여왔습니다.
        </p>
      </section>

      {/* 핵심 메시지 — BE 카드 */}
      <section className="mb-6">
        <div className="flex items-stretch gap-4">
          <div className="flex-1 rounded-lg border border-indigo-200 bg-indigo-50/30 p-5 text-center">
            <p className="text-base font-bold text-indigo-600">
              독립 개발 환경
            </p>
            <p className="mt-1.5 text-sm text-gray-500">Mock · MSW · nock</p>
            <p className="mt-1 text-sm font-medium text-gray-700">
              외부 의존 없이 빠른 개발 착수
            </p>
          </div>
          <div className="flex items-center text-lg text-gray-300">→</div>
          <div className="flex-1 rounded-lg border border-emerald-200 bg-emerald-50/30 p-5 text-center">
            <p className="text-base font-bold text-emerald-600">유닛 테스트</p>
            <p className="mt-1.5 text-sm text-gray-500">Vitest · Jest</p>
            <p className="mt-1 text-sm font-medium text-gray-700">
              버그 부담↓ 빠른 수정·개발
            </p>
          </div>
          <div className="flex items-center text-lg text-gray-300">→</div>
          <div className="flex-1 rounded-lg border border-amber-200 bg-amber-50/30 p-5 text-center">
            <p className="text-base font-bold text-amber-600">통합 검증</p>
            <p className="mt-1.5 text-sm text-gray-500">E2E · CI/CD</p>
            <p className="mt-1 text-sm font-medium text-gray-700">
              품질 검증 자동화, 빠른 배포
            </p>
          </div>
        </div>
        <div className="mt-4 flex justify-center">
          <svg
            className="h-6 w-6 text-gray-400"
            viewBox="0 0 16 16"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M8 11l5-5H3l5 5z" />
          </svg>
        </div>
        <div className="mt-1 rounded-lg bg-gray-800 py-2.5 text-center">
          <p className="text-sm font-bold tracking-wide text-white">
            개발 속도 ↑&nbsp;&nbsp;·&nbsp;&nbsp;배포 안정성 ↑
          </p>
        </div>
      </section>

      <CareerSection
        companies={beCareerSummary}
        detailLink="https://thdtmdghks.github.io/farmer/resume-be-career"
      />

      <PersonalProjectsSection projects={bePersonalProjects} />

      <TechStackSection techStack={beTechStack} />

      <CredentialsSection certifications={certifications} articles={articles} />
    </>
  )
}
