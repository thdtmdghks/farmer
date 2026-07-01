# 코딩 컨벤션

## 폴더 구조

```
src/
├── main.tsx                ← 진입점 (ReactDOM.createRoot)
├── index.css               ← Tailwind + 테마 + print CSS
├── routeTree.gen.ts        ← TanStack Router 자동 생성 (수동 편집 금지)
├── app/
│   └── app.tsx             ← RouterProvider 설정
├── routes/                 ← 파일 기반 라우팅
│   ├── __root.tsx
│   ├── index.tsx           ← / (랜딩 페이지)
│   └── resume.tsx          ← /resume (이력서 페이지)
├── features/               ← 도메인별 기능 모듈
│   ├── hero/
│   ├── navigation/
│   ├── highlights/
│   ├── showcase/
│   ├── stats/
│   ├── cta/
│   └── resume/             ← 이력서 카드 + SVG 다이어그램
├── components/             ← 공유 컴포넌트
│   ├── ui/                 ← shadcn 컴포넌트
│   ├── animate-on-scroll.tsx
│   └── debug-overlay.tsx
├── hooks/                  ← 공유 커스텀 훅
├── lib/                    ← 유틸리티 (cn 등)
├── config/                 ← 설정값
├── types/                  ← 공유 타입 정의
├── utils/                  ← 유틸리티 함수
└── assets/                 ← 정적 자원
```

## 의존성 방향 (ESLint 자동 강제)

```
shared (components, hooks, lib, types, utils, config)
       ↓
   features/
       ↓
    routes/
       ↓
     app/
```

- `features/` → `shared` import 가능
- `routes/` → `features/`, `shared` import 가능
- `features/` → `app/` import 금지
- `shared` → `features/`, `app/` import 금지
- **feature 간 직접 import 금지** (조합은 routes에서만)

ESLint `import-x/no-restricted-paths`로 자동 강제. 위반 시 빌드 실패.

## 네이밍

| 대상            | 규칙                  | 예시                                                   |
| --------------- | --------------------- | ------------------------------------------------------ |
| 파일/폴더       | KEBAB_CASE            | `hero-section.tsx`, `use-in-view.ts`, `resume-data.ts` |
| 컴포넌트        | PascalCase            | `HeroSection`, `KeywordCardComponent`                  |
| 훅              | camelCase, use 접두사 | `useInView`, `useCountUp`                              |
| 타입/인터페이스 | PascalCase            | `KeywordCard`, `CompanyData`                           |
| 상수            | UPPER_SNAKE_CASE      | `ANIMATION_DURATION`, `OBSERVER_ROOT_MARGIN`           |

ESLint `check-file` 플러그인으로 파일/폴더 네이밍 자동 강제.
`src/routes/`는 TanStack Router 규칙(`__root.tsx` 등)을 따르므로 예외 처리.

## 컴포넌트 패턴

### Feature 컴포넌트

```tsx
// features/hero/components/hero-section.tsx
export function HeroSection() {
  return <section>{/* 섹션 내용 */}</section>
}
```

- feature 내부에 `components/`, `hooks/`, `data/` 하위 구조 가능
- `export function` (default export 사용 안 함)

### 공유 컴포넌트

```tsx
// components/animate-on-scroll.tsx
interface AnimateOnScrollProps {
  children: ReactNode
  animation: 'fade-up' | 'fade-left' | 'fade-right' | 'zoom-in'
  delay?: number
  className?: string
}

export function AnimateOnScroll({ ... }: AnimateOnScrollProps) {
  // ...
}
```

- Props 인터페이스를 컴포넌트 바로 위에 정의
- children이 있으면 `ReactNode` 타입

### 라우트 파일

```tsx
// routes/resume.tsx
import { createFileRoute } from '@tanstack/react-router'
import { ResumePage } from '@/features/resume/components/resume-page'

export const Route = createFileRoute('/resume')({
  component: ResumePage,
})
```

- `createFileRoute`로 라우트 정의
- 실제 UI는 features에서 import

## 스타일

### Tailwind 사용 규칙

- 인라인 Tailwind 클래스 사용 (CSS 파일 분리 안 함)
- 긴 클래스는 `cn()` 유틸로 조건부 결합
- 반복되는 스타일 조합은 컴포넌트로 추출 (`@apply` 사용 안 함)
- 색상은 CSS 변수 참조 (`text-foreground`, `bg-muted` 등)

### 반응형

- 모바일 퍼스트 (`sm:`, `md:`, `lg:` 순서로 확장)
- 브레이크포인트: Tailwind 기본값 사용

## Import 규칙

```tsx
// 1. React (필요 시)
import { useState } from 'react'

// 2. 외부 라이브러리
import { createFileRoute } from '@tanstack/react-router'

// 3. 내부 절대 경로 (@/)
import { cn } from '@/lib/utils'
import { useInView } from '@/hooks/use-in-view'

// 4. 타입 (type-only import)
import type { KeywordCard } from '../data/resume-data'
```

- 절대 경로 `@/*` 사용 (feature 내부는 상대 경로 허용)
- 타입은 `import type` 사용

## 코드 스타일 (Prettier)

- 세미콜론 없음
- 싱글 쿼트
- 탭 너비 2칸
- trailing comma
- Tailwind 클래스 자동 정렬 (`prettier-plugin-tailwindcss`)

## Git

- Husky + lint-staged: 커밋 시 자동 ESLint fix + Prettier format
- staged 파일만 대상 (`*.{ts,tsx}` → eslint + prettier, `*.{json,css,md}` → prettier)
