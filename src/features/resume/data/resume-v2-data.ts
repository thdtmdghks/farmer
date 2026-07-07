// ─── 타입 ───

export type ArticleLink = {
  title: string
  url: string
}

// ─── 프로필 ───

export const profile = {
  name: '송승환',
  title: '웹 개발자 · 6년차',
  email: 'ghksl4157@gmail.com',
  github: 'https://github.com/thdtmdghks',
  githubLabel: 'github.com/thdtmdghks',
}

// ─── 자격증 ───

export const certifications = [
  { name: '정보처리기사', issuer: '한국산업인력공단', date: '2019.05' },
]

// ─── 작성한 글 ───

export const articles: ArticleLink[] = [
  // Architecture
  {
    title: '모노레포 순환 의존성 방지 — 단방향 계층 아키텍처 설계',
    url: 'https://app.notion.com/p/383942e7a7ea81129099d368f0878b7e',
  },
  // Testing / Mock
  {
    title: 'NestJS 외부 의존 없는 개발 환경 + E2E 테스트 파이프라인',
    url: 'https://app.notion.com/p/NestJS-E2E-383942e7a7ea81d99429d7a0e41285ec',
  },
  {
    title: '프론트엔드 고도화 : UI 테스트 도입을 고민하다 - 스토리북',
    url: 'https://www.notion.so/UI-2616441365fb80be87e0c62b978265c4',
  },
  {
    title: 'json-server vs msw',
    url: 'https://www.notion.so/json-server-vs-msw-2616441365fb80c6bb16e90104e5fdde',
  },
  // Next.js / React
  {
    title: 'Next.js SSR vs On-demand ISR 분석 및 적용기',
    url: 'https://app.notion.com/p/seunghwansong/Next-js-SSR-vs-On-demand-ISR-3836441365fb8030a273d282971dc0fc?source=copy_link',
  },
  {
    title: 'common js & es module',
    url: 'https://www.notion.so/common-js-es-module-2616441365fb805da502cbffd4dc432e',
  },
  // CI/CD
  {
    title: 'Github Actions Workflow를 이용한 CD 적용기',
    url: 'https://www.notion.so/Github-Actions-Workflow-CD-2616441365fb80579036f43d009704eb',
  },
  // Backend / Infra
  {
    title: 'Circuit Breaker',
    url: 'https://www.notion.so/Circuit-Breaker-2616441365fb80099adec23a8d99d7ca',
  },
  // 기타
  {
    title: '웹 보안 — 주요 공격과 방어',
    url: 'https://www.notion.so/36d6441365fb809d9072f2c90c6bda2f',
  },
  {
    title: '프론트엔드 패키지 매니저',
    url: 'https://www.notion.so/2616441365fb80f7aeb3c08d0918fbe0',
  },
  {
    title: 'jsdom',
    url: 'https://www.notion.so/jsdom-2616441365fb8052bb62c58d91ff48ad',
  },
]
