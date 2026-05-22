# 개발 스펙: Intersection Observer 스크롤 애니메이션 랜딩 페이지

## 개요

Intersection Observer API를 활용하여 사용자가 스크롤할 때 각 섹션이 뷰포트에 진입하면 애니메이션이 트리거되는 랜딩 페이지를 구현한다. 감지 영역을 뷰포트보다 줄여서(rootMargin 음수) 화면 중앙 근처에서 발동하며, 디버그 오버레이로 감지 영역 경계를 시각적으로 확인할 수 있다.

## 기술 환경

- **프로젝트 경로**: `/Users/a-26-001/Workspace/farmer`
- **패키지 매니저**: pnpm
- **프레임워크**: React 19 + TypeScript 6 + Vite 8
- **스타일링**: Tailwind CSS v4 + shadcn/ui (Base Nova)
- **라우팅**: TanStack Router (파일 기반, `src/routes/`)
- **아키텍처**: Bulletproof React (단방향 의존성, feature 기반 모듈화)
- **이미지**: picsum.photos placeholder 서비스 (외부 URL, 로컬 다운로드 없음)
- **빌드 명령**: `pnpm build` (tsc -b && vite build)
- **린트 명령**: `pnpm lint`

## 아키텍처 규칙 (반드시 준수)

1. **단방향 의존성**: `shared (components, hooks, lib, config) -> features -> app/routes`
2. **feature 간 교차 import 금지**: feature끼리 직접 import하지 않는다. 조합은 `src/routes/`에서만.
3. **파일/폴더 네이밍**: kebab-case (`src/routes/`는 TanStack Router 규칙 예외)
4. **절대 경로**: `@/*` alias 사용 (예: `@/hooks/use-in-view`)
5. **새 의존성 추가 금지**: 기존 패키지만 사용. Intersection Observer는 브라우저 네이티브 API.

## 공유 설정값

모든 Task에서 동일한 rootMargin 값을 사용해야 한다. `src/config/animation.ts`에 정의하고 import하여 사용.

```ts
// src/config/animation.ts
export const OBSERVER_ROOT_MARGIN = '-120px 0px'
export const ANIMATION_DURATION = '0.7s'
export const ANIMATION_EASING = 'cubic-bezier(0.16, 1, 0.3, 1)'
```

`OBSERVER_ROOT_MARGIN: '-120px 0px'`은 뷰포트 상하 120px씩 줄인 영역에서만 감지한다는 의미.

## 페이지 섹션 구성 (위에서 아래 순서)

| 순서 | 섹션       | 애니메이션             | 설명                               |
| ---- | ---------- | ---------------------- | ---------------------------------- |
| 1    | Navbar     | 스크롤 반응            | 스크롤 시 배경 투명->불투명 전환   |
| 2    | Hero       | fade-up                | 풀스크린, 배경 이미지              |
| 3    | Feature #1 | fade-right / fade-left | [이미지 \| 텍스트]                 |
| 4    | Feature #2 | fade-left / fade-right | [텍스트 \| 이미지]                 |
| 5    | Feature #3 | fade-right / fade-left | [이미지 \| 텍스트]                 |
| 6    | Showcase   | stagger                | 이미지 그리드 6장, 순차 등장       |
| 7    | Stats      | 카운트업               | 숫자 4개, 뷰포트 진입 시 0->목표값 |
| 8    | CTA        | zoom-in                | 배경 이미지, 최종 행동 유도        |
| 9    | Footer     | 없음                   | 기존 유지                          |

## 디버그 오버레이 동작

화면에 Intersection Observer 감지 영역 경계를 시각적으로 표시한다.

- 뷰포트 상단/하단 120px 영역에 반투명 빨간 오버레이
- 경계에 빨간 점선
- 경계선 위에 "감지 영역" 라벨 텍스트
- 우하단 고정 토글 버튼으로 켜기/끄기
- 기본 상태: 숨김
- `pointer-events-none`으로 오버레이가 클릭을 방해하지 않도록
- 토글 버튼만 `pointer-events-auto`

---

## Task 1: 애니메이션 공유 설정 + useInView 훅

### 목적

Intersection Observer를 래핑하는 재사용 가능한 커스텀 훅과 공유 설정값 생성.

### 생성 파일

- `src/config/animation.ts`
- `src/hooks/use-in-view.ts`

### src/config/animation.ts 스펙

```ts
export const OBSERVER_ROOT_MARGIN = '-120px 0px'
export const ANIMATION_DURATION = '0.7s'
export const ANIMATION_EASING = 'cubic-bezier(0.16, 1, 0.3, 1)'
```

### src/hooks/use-in-view.ts 스펙

- `useInView(options?)` 훅
- options:
  - `threshold`: number (기본값 0.1)
  - `rootMargin`: string (기본값 `OBSERVER_ROOT_MARGIN`에서 가져옴)
  - `once`: boolean (기본값 true, 한번 트리거 후 관찰 해제)
- 반환값: `{ ref: RefObject<HTMLDivElement>, isInView: boolean }`
- `once: true`일 때 isInView가 true가 되면 observer.unobserve 호출
- `once: false`일 때 뷰포트 진입/이탈에 따라 isInView 토글

### 검증

- `pnpm build` 통과

---

## Task 2: AnimateOnScroll 공유 컴포넌트

### 목적

useInView를 감싸서 선언적으로 스크롤 애니메이션을 적용하는 래퍼 컴포넌트.

### 생성 파일

- `src/components/animate-on-scroll.tsx`

### Props

```ts
interface AnimateOnScrollProps {
  children: ReactNode
  animation: 'fade-up' | 'fade-left' | 'fade-right' | 'zoom-in'
  delay?: number // ms 단위, 기본값 0
  className?: string
}
```

### 동작

- 뷰포트 밖 (isInView=false): `opacity: 0` + 각 animation에 따른 transform
  - `fade-up`: `translateY(40px)`
  - `fade-left`: `translateX(-40px)`
  - `fade-right`: `translateX(40px)`
  - `zoom-in`: `scale(0.9)`
- 뷰포트 안 (isInView=true): `opacity: 1` + `translate(0)` / `scale(1)`
- transition: `ANIMATION_DURATION` + `ANIMATION_EASING` (config에서 import)
- delay는 `transition-delay` inline style로 적용

### 구현 방식

- CSS transition 기반 (keyframe 아님)
- inline style로 opacity, transform, transition, transitionDelay 적용
- Tailwind 클래스는 레이아웃/간격에만 사용

### 검증

- `pnpm build` 통과

---

## Task 3: 디버그 오버레이 컴포넌트

### 목적

Intersection Observer 감지 영역을 시각적으로 표시하여 사용자가 애니메이션 트리거 지점을 눈으로 확인할 수 있게 한다.

### 생성 파일

- `src/components/debug-overlay.tsx`

### 수정 파일

- `src/routes/__root.tsx`

### debug-overlay.tsx 스펙

- `OBSERVER_ROOT_MARGIN`에서 상하 px값을 파싱하여 오버레이 위치 계산
- 구성 요소:
  1. 상단 반투명 영역: `fixed top-0 left-0 right-0 h-[120px]` + `bg-red-500/10`
  2. 하단 반투명 영역: `fixed bottom-0 left-0 right-0 h-[120px]` + `bg-red-500/10`
  3. 상단 경계선: `fixed top-[120px]` + `border-b-2 border-dashed border-red-500/60`
  4. 하단 경계선: `fixed bottom-[120px]` + `border-t-2 border-dashed border-red-500/60`
  5. 경계선 위에 "감지 영역" 라벨 텍스트
- 전체에 `pointer-events-none`, `z-[9999]`
- 토글 버튼: 우하단 고정, `pointer-events-auto`, 텍스트 "감지 영역"
- 상태: `useState`로 표시/숨김 관리, 기본값 `false` (숨김)

### \_\_root.tsx 수정 내용

```tsx
import { createRootRoute, Outlet } from '@tanstack/react-router'
import { DebugOverlay } from '@/components/debug-overlay'

export const Route = createRootRoute({
  component: () => (
    <>
      <Outlet />
      <DebugOverlay />
    </>
  ),
})
```

### 검증

- `pnpm build` 통과
- 토글 버튼 클릭 시 오버레이 표시/숨김 동작

---

## Task 4: Hero feature 리뉴얼

### 목적

기존 단순 텍스트 Hero를 풀스크린 배경 이미지 + fade-up 애니메이션으로 교체.

### 수정 파일

- `src/features/hero/components/hero-section.tsx` (전체 교체)

### 스펙

- `min-h-screen` 풀스크린 높이
- 배경 이미지: `https://picsum.photos/1920/1080?random=1` (img 태그, object-cover, absolute)
- 배경 위에 반투명 오버레이 (`bg-black/50`)
- 중앙 정렬 콘텐츠 (relative, z-10):
  - 헤드라인: 큰 텍스트 (text-5xl sm:text-7xl, font-bold, text-white)
  - 서브타이틀: 2줄 설명 (text-lg, text-white/80)
  - CTA 버튼 2개 (기존 Button 컴포넌트 사용)
- `<AnimateOnScroll animation="fade-up">`으로 콘텐츠 영역 감싸기
- 텍스트 내용은 자유롭게 작성 (영문 OK)

### 검증

- `pnpm build` 통과

---

## Task 5: Features feature 리뉴얼

### 목적

기존 카드 3개 그리드를 이미지+텍스트 교차 레이아웃 3개 섹션으로 교체.

### 수정 파일

- `src/features/features/components/features-section.tsx` (전체 교체)

### 스펙

- 3개 섹션을 하나의 컴포넌트에서 렌더링 (배열 map)
- 각 섹션: 2컬럼 그리드 (`md:grid-cols-2`), `py-24`, `gap-12`
- 홀수 섹션 (1, 3): [이미지 | 텍스트]
- 짝수 섹션 (2): [텍스트 | 이미지] (md:order-first / md:order-last로 순서 변경)
- 이미지: `<img src="https://picsum.photos/800/600?random=N" />`, `rounded-xl`, `shadow-lg`
- 텍스트: 제목 (text-3xl font-bold) + 설명 2~3줄 (text-muted-foreground)
- 애니메이션:
  - 이미지: `<AnimateOnScroll animation="fade-right">` (홀수) / `"fade-left"` (짝수)
  - 텍스트: `<AnimateOnScroll animation="fade-left">` (홀수) / `"fade-right"` (짝수)
- 데이터 배열 예시:
  ```ts
  const features = [
    {
      title: '...',
      description: '...',
      image: 'https://picsum.photos/800/600?random=10',
    },
    {
      title: '...',
      description: '...',
      image: 'https://picsum.photos/800/600?random=11',
    },
    {
      title: '...',
      description: '...',
      image: 'https://picsum.photos/800/600?random=12',
    },
  ]
  ```

### 검증

- `pnpm build` 통과

---

## Task 6: Showcase feature 추가 (이미지 갤러리 그리드)

### 목적

이미지 6장을 그리드로 배치하고 순차적으로 등장하는 stagger 애니메이션 적용.

### 생성 파일

- `src/features/showcase/components/showcase-section.tsx`

### 스펙

- 섹션 제목: "Showcase" 또는 "Gallery" (text-3xl font-bold, 중앙 정렬)
- 6장 이미지 그리드: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`, `gap-6`
- 이미지: `https://picsum.photos/600/400?random=N` (N=20~25), `rounded-xl`, `shadow-md`
- 각 이미지를 `<AnimateOnScroll animation="fade-up" delay={index * 100}>`으로 감싸기
  - 첫 번째: delay=0, 두 번째: delay=100, ..., 여섯 번째: delay=500
- 배경: `bg-muted/50`, `py-24`

### 검증

- `pnpm build` 통과

---

## Task 7: Stats feature 추가 (숫자 카운트업)

### 목적

뷰포트 진입 시 숫자가 0에서 목표값까지 올라가는 카운트업 애니메이션.

### 생성 파일

- `src/features/stats/hooks/use-count-up.ts`
- `src/features/stats/components/stats-section.tsx`

### use-count-up.ts 스펙

```ts
function useCountUp(
  target: number,
  isActive: boolean,
  duration?: number,
): number
```

- `isActive`가 true가 되면 0에서 target까지 duration(기본 2000ms) 동안 증가
- `requestAnimationFrame` 기반
- easeOutQuad 이징 적용
- 반환값: 현재 표시할 숫자 (정수)

### stats-section.tsx 스펙

- `useInView`로 섹션 전체의 뷰포트 진입 감지
- 4개 통계 항목, 가로 배치 (`grid-cols-2 md:grid-cols-4`)
- 각 항목: 큰 숫자 (text-4xl font-bold) + 라벨 (text-muted-foreground)
- 데이터 예시:
  ```ts
  const stats = [
    { value: 10000, label: 'Users', suffix: '+' },
    { value: 500, label: 'Projects', suffix: '+' },
    { value: 99, label: 'Satisfaction', suffix: '%' },
    { value: 24, label: 'Support', suffix: '/7' },
  ]
  ```
- `<AnimateOnScroll animation="fade-up">`으로 전체 감싸기
- 배경: 기본 (bg-background), `py-24`

### 검증

- `pnpm build` 통과

---

## Task 8: CTA feature 리뉴얼

### 목적

기존 단순 CTA를 배경 이미지 + zoom-in 애니메이션으로 교체.

### 수정 파일

- `src/features/cta/components/cta-section.tsx` (전체 교체)

### 스펙

- 배경 이미지: `https://picsum.photos/1920/800?random=30`, absolute + object-cover
- 반투명 오버레이 (`bg-black/60`)
- 콘텐츠 (relative, z-10, text-center, text-white):
  - 헤드라인 (text-4xl font-bold)
  - 설명 1~2줄
  - CTA 버튼 (Button 컴포넌트)
- `<AnimateOnScroll animation="zoom-in">`으로 콘텐츠 감싸기
- `py-32` 이상으로 충분한 높이

### 검증

- `pnpm build` 통과

---

## Task 9: Navbar 스크롤 반응

### 목적

스크롤 위치에 따라 Navbar 배경을 투명에서 불투명으로 전환.

### 수정 파일

- `src/features/navigation/components/navbar.tsx`

### 스펙

- `useState` + `useEffect`로 scroll 이벤트 감지
- 스크롤 Y > 50px: 배경 불투명 (`bg-background/95 border-b border-border/40`)
- 스크롤 Y <= 50px: 배경 투명 (`bg-transparent border-transparent`)
- `transition-colors duration-300`으로 부드러운 전환
- scroll 이벤트에 `passive: true` 옵션
- 기존 sticky + backdrop-blur 유지

### 검증

- `pnpm build` 통과

---

## Task 10: 랜딩 페이지 조합 + 최종 빌드 검증

### 목적

모든 feature를 랜딩 페이지에 조합하고 빌드/린트 통과 확인.

### 수정 파일

- `src/routes/index.tsx`

### 스펙

```tsx
import { createFileRoute } from '@tanstack/react-router'
import { Navbar } from '@/features/navigation/components/navbar'
import { HeroSection } from '@/features/hero/components/hero-section'
import { FeaturesSection } from '@/features/features/components/features-section'
import { ShowcaseSection } from '@/features/showcase/components/showcase-section'
import { StatsSection } from '@/features/stats/components/stats-section'
import { CtaSection } from '@/features/cta/components/cta-section'
import { Footer } from '@/features/navigation/components/footer'

export const Route = createFileRoute('/')({
  component: LandingPage,
})

function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <ShowcaseSection />
        <StatsSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  )
}
```

### 검증

- `pnpm build` 통과 (에러 0)
- `pnpm lint` 통과 (에러 0)
- 전체 페이지 스크롤 시 모든 애니메이션 정상 동작
- 디버그 오버레이 토글 정상 동작

---

## 파일 변경 요약

| 구분   | 파일 경로                                               |
| ------ | ------------------------------------------------------- |
| NEW    | `src/config/animation.ts`                               |
| NEW    | `src/hooks/use-in-view.ts`                              |
| NEW    | `src/components/animate-on-scroll.tsx`                  |
| NEW    | `src/components/debug-overlay.tsx`                      |
| NEW    | `src/features/showcase/components/showcase-section.tsx` |
| NEW    | `src/features/stats/hooks/use-count-up.ts`              |
| NEW    | `src/features/stats/components/stats-section.tsx`       |
| MODIFY | `src/routes/__root.tsx`                                 |
| MODIFY | `src/routes/index.tsx`                                  |
| MODIFY | `src/features/hero/components/hero-section.tsx`         |
| MODIFY | `src/features/features/components/features-section.tsx` |
| MODIFY | `src/features/cta/components/cta-section.tsx`           |
| MODIFY | `src/features/navigation/components/navbar.tsx`         |
| KEEP   | `src/features/navigation/components/footer.tsx`         |

## Task 의존성 순서

```
Task 1 (config + useInView)
  |
  v
Task 2 (AnimateOnScroll)       <- Task 1 필요
  |
  v
Task 3 (DebugOverlay)          <- Task 1 필요
  |
  v
Task 4~8 (각 feature)          <- Task 2 필요, 서로 독립적이므로 병렬 가능
  |
  v
Task 9 (Navbar)                <- 독립적, 언제든 가능
  |
  v
Task 10 (조합 + 검증)          <- 모든 Task 완료 후
```
