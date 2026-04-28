# Bulletproof Landing

[Bulletproof React](https://github.com/alan2207/bulletproof-react) 아키텍처를 기반으로 구축된 React 정적 랜딩 페이지 프로젝트입니다.

## 기술 스택

| 영역          | 기술                  | 버전 |
| ------------- | --------------------- | ---- |
| UI 라이브러리 | React                 | 19   |
| 언어          | TypeScript            | 6    |
| 빌드 도구     | Vite                  | 8    |
| 스타일링      | Tailwind CSS          | 4    |
| UI 컴포넌트   | shadcn/ui (Base Nova) | -    |
| 라우팅        | TanStack Router       | 1    |
| 린팅          | ESLint (Flat Config)  | 10   |
| 포맷팅        | Prettier              | 3    |
| Git Hooks     | Husky + lint-staged   | 9/16 |

## 시작하기

```bash
# 의존성 설치
pnpm install

# 개발 서버 실행
pnpm dev

# 프로덕션 빌드
pnpm build

# 빌드 결과 미리보기
pnpm preview

# 린트 검사
pnpm lint

# 코드 포맷팅
pnpm format
```

## 프로젝트 구조

```
src/
├── app/                          # 🔵 애플리케이션 레이어
│   └── app.tsx                   #    루트 컴포넌트 (라우터 생성 + 타입 등록)
│
├── routes/                       # 🔴 TanStack Router 파일 기반 라우트
│   ├── __root.tsx                #    루트 레이아웃
│   └── index.tsx                 #    랜딩 페이지 (/)
│
├── components/                   # 🟢 공유 컴포넌트
│   └── ui/                       #    shadcn/ui 컴포넌트 (button, card, input 등)
│
├── features/                     # 🟡 기능 단위 모듈
│   ├── hero/components/          #    Hero 섹션
│   ├── navigation/components/    #    Navbar, Footer
│   ├── features/components/      #    Feature 카드 섹션
│   └── cta/components/           #    CTA 섹션
│
├── assets/                       # 정적 파일 (이미지, 폰트 등)
├── config/                       # 환경 변수, 사이트 설정
├── hooks/                        # 공유 커스텀 훅
├── lib/                          # 라이브러리 래퍼 (cn 유틸리티 등)
├── types/                        # 공유 타입 정의
├── utils/                        # 공유 유틸리티 함수
├── routeTree.gen.ts              # 자동 생성 (수정 금지)
├── index.css                     # Tailwind CSS 엔트리 + 테마 변수
└── main.tsx                      # 앱 진입점
```

## 설계 원칙

이 프로젝트는 [Bulletproof React](https://github.com/alan2207/bulletproof-react)의 핵심 원칙을 따릅니다.

### 1. 단방향 의존성 흐름

코드의 의존 방향은 항상 한 방향으로만 흐릅니다.

```
shared (components, hooks, lib, utils, types, config)
  ↓
features (hero, navigation, cta ...)
  ↓
app / routes
```

- `shared` → 어디서든 import 가능
- `features` → `shared`만 import 가능 (다른 feature나 app은 불가)
- `app` / `routes` → `shared`와 `features` 모두 import 가능

이 규칙은 ESLint `import-x/no-restricted-paths`로 **자동 강제**됩니다. 위반 시 린트 에러가 발생합니다.

### 2. Feature 기반 모듈화

UI를 기능 단위(feature)로 분리합니다. 각 feature는 독립적이며, 필요한 것만 포함합니다.

```
src/features/hero/
└── components/
    └── hero-section.tsx
```

feature가 복잡해지면 아래처럼 확장할 수 있습니다.

```
src/features/contact/
├── components/
│   └── contact-form.tsx
├── hooks/
├── types/
└── utils/
    └── validation.ts
```

**핵심 규칙**: feature 간 직접 import는 금지됩니다. feature를 조합하는 것은 반드시 `routes/`에서만 합니다.

```tsx
// ✅ routes/index.tsx — 여기서 feature를 조합
import { Navbar } from '@/features/navigation/components/navbar'
import { HeroSection } from '@/features/hero/components/hero-section'

// ❌ features/hero/components/hero-section.tsx — feature 간 직접 import 금지
import { Navbar } from '@/features/navigation/components/navbar' // ESLint 에러!
```

### 3. 페이지 = Feature 조합

각 페이지(route)는 독립적인 feature들을 조합하여 구성합니다.

```tsx
// src/routes/index.tsx
export const Route = createFileRoute('/')({
  component: LandingPage,
})

function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar /> {/* navigation feature */}
      <main className="flex-1">
        <HeroSection /> {/* hero feature */}
        <FeaturesSection /> {/* features feature */}
        <CtaSection /> {/* cta feature */}
      </main>
      <Footer /> {/* navigation feature */}
    </div>
  )
}
```

## 라우팅 (TanStack Router)

이 프로젝트는 **TanStack Router의 파일 기반 라우팅**을 사용합니다.

### 라우트 파일 규칙

`src/routes/` 디렉토리의 파일이 곧 라우트입니다.

| 파일                | URL 경로         | 설명          |
| ------------------- | ---------------- | ------------- |
| `__root.tsx`        | -                | 루트 레이아웃 |
| `index.tsx`         | `/`              | 랜딩 페이지   |
| `about.tsx`         | `/about`         | 소개 페이지   |
| `posts/$postId.tsx` | `/posts/:postId` | 동적 라우트   |

`routeTree.gen.ts`는 Vite 플러그인이 자동 생성합니다. **직접 수정하지 마세요.**

### 새 페이지 추가하기

`src/routes/`에 파일을 만들면 끝입니다. 라우터 설정을 수동으로 수정할 필요가 없습니다.

```tsx
// src/routes/about.tsx
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: AboutPage,
})

function AboutPage() {
  return <div>소개 페이지</div>
}
```

파일을 저장하면 `routeTree.gen.ts`가 자동으로 업데이트되고, `/about` 경로가 즉시 활성화됩니다.

### 타입 안전한 네비게이션

TanStack Router는 존재하지 않는 경로로의 이동을 컴파일 타임에 차단합니다.

```tsx
import { Link } from '@tanstack/react-router'

<Link to="/">홈</Link>           // ✅ 존재하는 경로
<Link to="/abut">소개</Link>     // ❌ 컴파일 에러 — 오타 즉시 감지
```

## 코드 컨벤션

### 네이밍

| 대상      | 규칙       | 예시                                     |
| --------- | ---------- | ---------------------------------------- |
| 파일/폴더 | kebab-case | `hero-section.tsx`, `use-media-query.ts` |
| 컴포넌트  | PascalCase | `HeroSection`, `Navbar`                  |
| 함수/변수 | camelCase  | `siteConfig`, `formatDate`               |

파일/폴더 네이밍은 ESLint `check-file` 플러그인으로 자동 강제됩니다.
(`src/routes/`는 TanStack Router 규칙을 따르므로 예외)

### Import 경로

절대 경로 `@/*`를 사용합니다. 상대 경로(`../../`)는 같은 feature 내부에서만 허용합니다.

```tsx
// ✅ 절대 경로
import { Button } from '@/components/ui/button'
import { siteConfig } from '@/config/site'

// ❌ 깊은 상대 경로
import { Button } from '../../../components/ui/button'
```

### 코드 스타일

Prettier가 자동으로 관리합니다.

- 세미콜론 없음
- 싱글 쿼트
- 탭 너비 2칸
- trailing comma 사용
- Tailwind 클래스 자동 정렬 (`prettier-plugin-tailwindcss`)

### Git 커밋

커밋 시 Husky + lint-staged가 자동으로 실행됩니다.

- `*.{ts,tsx}` → ESLint 자동 수정 + Prettier 포맷팅
- `*.{json,css,md}` → Prettier 포맷팅

## 새 Feature 추가하기

1. `src/features/` 아래에 feature 폴더를 생성합니다.

```bash
mkdir -p src/features/pricing/components
```

2. feature 컴포넌트를 작성합니다.

```tsx
// src/features/pricing/components/pricing-section.tsx
import { Card, CardHeader, CardTitle } from '@/components/ui/card'

export function PricingSection() {
  return (
    <section className="py-24">
      <Card>
        <CardHeader>
          <CardTitle>요금제</CardTitle>
        </CardHeader>
      </Card>
    </section>
  )
}
```

3. 라우트 파일에서 조합합니다.

```tsx
// src/routes/index.tsx
import { PricingSection } from '@/features/pricing/components/pricing-section'
```

## shadcn/ui 컴포넌트 추가

```bash
pnpm dlx shadcn@latest add dialog       # 단일 컴포넌트
pnpm dlx shadcn@latest add tabs badge    # 여러 컴포넌트
```

추가된 컴포넌트는 `src/components/ui/`에 소스 코드로 설치되며, 자유롭게 커스터마이징할 수 있습니다.
