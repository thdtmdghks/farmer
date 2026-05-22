# 코딩 컨벤션

## 폴더 구조

```
src/
├── main.tsx                ← 진입점 (ReactDOM.createRoot)
├── index.css               ← Tailwind + 테마 + print CSS
├── app.tsx                 ← 섹션 조합
├── sections/               ← 페이지 섹션 컴포넌트
├── components/             ← 공유 컴포넌트
│   └── ui/                 ← shadcn 컴포넌트
├── hooks/                  ← 커스텀 훅
├── data/                   ← 이력서 데이터 (상수 + 타입)
├── types/                  ← 공유 타입 정의
└── config/                 ← 설정값
```

## 의존성 방향

```
config, types, data
       ↓
    hooks
       ↓
  components
       ↓
   sections
       ↓
   app.tsx
```

- `sections/` → `components/`, `hooks/`, `data/`, `config/`, `types/` import 가능
- `components/` → `hooks/`, `config/`, `types/` import 가능
- `sections/` 간 교차 import 금지
- `components/` → `sections/` import 금지

ESLint `import-x/no-restricted-paths`로 자동 강제.

## 네이밍

| 대상            | 규칙                  | 예시                                                  |
| --------------- | --------------------- | ----------------------------------------------------- |
| 파일/폴더       | kebab-case            | `hero.tsx`, `use-in-view.ts`, `animate-on-scroll.tsx` |
| 컴포넌트        | PascalCase            | `Hero`, `DecisionCard`, `AnimateOnScroll`             |
| 훅              | camelCase, use 접두사 | `useInView`, `useCountUp`                             |
| 타입/인터페이스 | PascalCase            | `Decision`, `Project`, `Experience`                   |
| 상수            | UPPER_SNAKE_CASE      | `ANIMATION_DURATION`, `OBSERVER_ROOT_MARGIN`          |
| 데이터 배열     | camelCase 복수형      | `experiences`, `decisions`, `projects`                |

ESLint `check-file` 플러그인으로 파일/폴더 네이밍 자동 강제.

## 컴포넌트 패턴

### 섹션 컴포넌트

```tsx
// sections/hero.tsx
export function Hero() {
  return (
    <section id="hero" className="...">
      {/* 섹션 내용 */}
    </section>
  )
}
```

- 최상위 태그는 `<section>` + `id` 속성 (앵커 네비게이션용)
- 데이터는 `data/`에서 import
- 한 파일에 한 섹션

### 공유 컴포넌트

```tsx
// components/animate-on-scroll.tsx
interface AnimateOnScrollProps {
  children: ReactNode
  animation: 'fade-up' | 'fade-left' | 'fade-right' | 'zoom-in'
  delay?: number
  className?: string
}

export function AnimateOnScroll({
  children,
  animation,
  delay = 0,
  className,
}: AnimateOnScrollProps) {
  // ...
}
```

- Props 인터페이스를 컴포넌트 바로 위에 정의
- `export function` (default export 사용 안 함)
- children이 있으면 `ReactNode` 타입

### 데이터 파일

```tsx
// data/resume.ts
import type { Experience, Decision } from '@/types/resume'

export const experiences: Experience[] = [
  // ...
]

export const decisions: Decision[] = [
  // ...
]
```

- 타입은 `types/`에서 import
- `as const` 또는 명시적 타입 배열로 선언
- 데이터 파일에 로직 없음 (순수 상수)

## 스타일

### Tailwind 사용 규칙

- 인라인 Tailwind 클래스 사용 (CSS 파일 분리 안 함)
- 긴 클래스는 `cn()` 유틸로 조건부 결합
- 반복되는 스타일 조합은 컴포넌트로 추출 (유틸 클래스 @apply 사용 안 함)
- 색상은 CSS 변수 참조 (`text-foreground`, `bg-muted` 등)

### 반응형

- 모바일 퍼스트 (`sm:`, `md:`, `lg:` 순서로 확장)
- 브레이크포인트: Tailwind 기본값 사용 (sm:640, md:768, lg:1024)

### 다크모드

- CSS 변수 기반 (`.dark` 클래스 토글)
- 컴포넌트에서 `dark:` variant 직접 사용 최소화 → CSS 변수로 처리

## Import 규칙

```tsx
// 1. React (필요 시)
import { useState } from 'react'

// 2. 외부 라이브러리
import { cva } from 'class-variance-authority'

// 3. 내부 절대 경로 (@/)
import { cn } from '@/lib/utils'
import { useInView } from '@/hooks/use-in-view'
import { experiences } from '@/data/resume'

// 4. 타입 (type-only import)
import type { Decision } from '@/types/resume'
```

- 절대 경로 `@/*` 사용
- 타입은 `import type` 사용
- 그룹 간 빈 줄 (Prettier가 자동 정렬)

## 코드 스타일 (Prettier)

- 세미콜론 없음
- 싱글 쿼트
- 탭 너비 2칸
- trailing comma
- Tailwind 클래스 자동 정렬

## Git 커밋

- Husky + lint-staged: 커밋 시 자동 린트/포맷
- 커밋 메시지: 자유 형식 (commitlint 미적용)
