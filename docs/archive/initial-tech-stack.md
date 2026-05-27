# 기술 스택 및 의존성 정리

## 핵심 스택

| 영역        | 기술                     | 버전       |
| ----------- | ------------------------ | ---------- |
| UI          | React                    | ^19.2.5    |
| 언어        | TypeScript               | ~6.0.2     |
| 빌드        | Vite                     | ^8.0.10    |
| 스타일      | Tailwind CSS             | ^4.2.4     |
| UI 컴포넌트 | shadcn/ui (base-ui 기반) | ^4.5.0     |
| 폰트        | Geist Variable           | ^5.2.8     |
| 아이콘      | lucide-react             | ^1.11.0    |
| 린팅        | ESLint (Flat Config)     | ^10.2.1    |
| 포맷팅      | Prettier                 | ^3.8.3     |
| Git Hooks   | Husky + lint-staged      | 9.x / 16.x |

## 제거

| 패키지                  | 이유                       |
| ----------------------- | -------------------------- |
| @tanstack/react-router  | 싱글 페이지, 라우팅 불필요 |
| @tanstack/router-plugin | 위와 동일                  |

`@base-ui/react`는 유지. Button의 접근성(aria) 처리를 해주므로 가치 있음.

## 추가

없음. 스크롤 애니메이션, 다이어그램 모두 네이티브 CSS/SVG로 구현.

## TanStack Router 제거 시 변경사항

1. `src/routes/`, `src/routeTree.gen.ts`, `.tanstack/` 삭제
2. `app.tsx` — RouterProvider 제거, 직접 렌더링
3. `vite.config.ts` — tanstackRouter 플러그인 제거
4. `eslint.config.js` — routes/ 예외 규칙 제거

## 폴더 구조

```
src/
├── main.tsx
├── index.css
├── app.tsx
├── sections/           ← hero, summary, decisions, contact
├── components/         ← ui/, animate-on-scroll, section-heading
├── hooks/              ← use-in-view, use-count-up
├── data/               ← resume.ts
├── types/              ← resume.ts
└── config/             ← animation.ts, site.ts
```

## 빌드 명령

```bash
pnpm dev      # 개발 서버
pnpm build    # tsc -b && vite build
pnpm lint     # ESLint
pnpm format   # Prettier
```
