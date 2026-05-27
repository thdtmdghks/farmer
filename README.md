# Farmer — Bulletproof React 아키텍처 포트폴리오

[Bulletproof React](https://github.com/alan2207/bulletproof-react)(⭐35k) 아키텍처를 실제 적용한 개인 포트폴리오.
ESLint로 의존성 방향과 네이밍 컨벤션을 자동 강제하여, 규칙 위반 시 빌드가 실패합니다.

> React 19 · TypeScript 6 · Vite 8 · TanStack Router · Tailwind CSS 4 · shadcn/ui

<!-- 🔗 [Live Demo](https://your-url.github.io/farmer) -->

## 주요 특징

- **단방향 의존성 흐름** — `shared → features → routes` 방향만 허용, ESLint `import-x/no-restricted-paths`로 자동 강제
- **Feature 간 직접 import 금지** — feature 조합은 반드시 routes에서만
- **파일/폴더 KEBAB_CASE 강제** — `eslint-plugin-check-file`로 네이밍 컨벤션 자동 검증
- **Intersection Observer 스크롤 애니메이션** — 커스텀 훅 `useInView` + easeOutQuad 이징
- **TanStack Router 파일 기반 라우팅** — 타입 안전 네비게이션 (존재하지 않는 경로 컴파일 에러)
- **@media print PDF 대응** — 브라우저 인쇄로 PDF 생성 (웹과 항상 동기화)

## 기술 스택

| 분류      | 기술                                                     |
| --------- | -------------------------------------------------------- |
| UI        | React 19 + TypeScript 6 (strict)                         |
| Build     | Vite 8                                                   |
| Routing   | TanStack Router (파일 기반)                              |
| Styling   | Tailwind CSS 4 + shadcn/ui                               |
| Animation | Intersection Observer + CSS transition (라이브러리 없음) |
| Lint      | ESLint Flat Config (import-x, check-file, prettier)      |
| Deploy    | GitHub Pages + GitHub Actions                            |
| Git Hooks | Husky + lint-staged                                      |

## 아키텍처

```
src/
├── app/              # 루트 컴포넌트 (라우터 생성)
├── routes/           # 페이지 = feature 조합
│   ├── index.tsx     # / (랜딩 페이지)
│   └── resume.tsx    # /resume (이력서 카드)
├── features/         # 기능 단위 모듈 (독립적)
│   ├── hero/
│   ├── navigation/
│   ├── features/
│   ├── stats/
│   ├── showcase/
│   ├── cta/
│   └── resume/       # 이력서 키워드 카드 + SVG 다이어그램
├── components/       # 공유 UI (shadcn/ui + 커스텀)
├── hooks/            # 공유 훅 (useInView)
├── config/           # 사이트 설정, 애니메이션 설정
└── lib/              # 유틸리티 (cn)
```

### 의존성 규칙 (ESLint 자동 강제)

```
components, hooks, lib, config (shared)
  ↓ import 가능
features (독립 모듈)
  ↓ import 가능
routes (페이지 조합)
```

위반 시 `eslint` 에러 발생 → CI에서 빌드 실패.

## 기술적 도전

### ESLint로 아키텍처 규칙 자동 강제

Bulletproof React의 의존성 방향 규칙을 문서가 아닌 도구로 강제. `import-x/no-restricted-paths`로 feature 간 직접 import를 차단하여, 코드 리뷰 없이도 아키텍처 위반을 빌드 단계에서 잡습니다.

### 네이티브 API 우선 (외부 라이브러리 없음)

필요한 애니메이션이 fade/zoom 4종뿐이라 Framer Motion(+30KB) 대신 IntersectionObserver + CSS transition으로 구현. GPU 가속으로 성능 우수하고 번들 크기 절감.

### 타입 안전 라우팅

TanStack Router의 파일 기반 라우팅으로 존재하지 않는 경로 참조 시 컴파일 에러 발생. 런타임 404 대신 개발 시점에 잡음.

## 시작하기

```bash
pnpm install
pnpm dev        # 개발 서버
pnpm build      # 프로덕션 빌드 (tsc + vite)
pnpm lint       # 아키텍처 규칙 포함 린트
pnpm format     # Prettier 포맷
```

## 설계 문서

- [`docs/decisions.md`](docs/decisions.md) — 기술 결정 기록
- [`docs/coding-conventions.md`](docs/coding-conventions.md) — 코딩 컨벤션
- [`docs/scroll-animation-spec.md`](docs/scroll-animation-spec.md) — 스크롤 애니메이션 스펙
- [`docs/design-system.md`](docs/design-system.md) — 디자인 시스템
- [`docs/resume-card-design.md`](docs/resume-card-design.md) — 이력서 카드 레이아웃 설계
- [`docs/archive/`](docs/archive/) — 초기 설계 문서 (참고용)
