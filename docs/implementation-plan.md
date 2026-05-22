# 구현 계획

## 전제

- 기존 코드를 전부 밀고 새로 구현 (git history는 유지)
- 문서 참조: `docs/` 내 6개 설계 문서

## 단계

### Step 1: 프로젝트 정리

1. TanStack Router 제거 (`src/routes/`, `src/routeTree.gen.ts`, `.tanstack/`)
2. 기존 features/ 전체 삭제
3. `src/components/debug-overlay.tsx` 삭제
4. `package.json`에서 `@tanstack/react-router`, `@tanstack/router-plugin` 제거
5. `vite.config.ts`에서 tanstackRouter 플러그인 제거
6. `eslint.config.js`에서 routes/ 예외 규칙 제거
7. `.prettierignore`에서 `routeTree.gen.ts` 제거
8. `pnpm install` → `pnpm build` 확인

### Step 2: 폴더 구조 생성

```
src/
├── main.tsx              (유지)
├── index.css             (유지, print CSS 추가)
├── app.tsx               (재작성)
├── sections/
│   ├── hero.tsx
│   ├── summary.tsx
│   ├── decisions.tsx
│   └── contact.tsx
├── components/
│   ├── ui/               (유지)
│   ├── animate-on-scroll.tsx  (유지)
│   ├── section-heading.tsx    (신규)
│   ├── navbar.tsx             (신규)
│   └── dark-mode-toggle.tsx   (신규)
├── hooks/
│   ├── use-in-view.ts    (유지)
│   ├── use-count-up.ts   (유지)
│   └── use-dark-mode.ts  (신규)
├── data/
│   └── resume.ts         (신규)
├── types/
│   └── resume.ts         (신규)
└── config/
    ├── animation.ts      (유지)
    └── site.ts           (수정)
```

### Step 3: 데이터 레이어

1. `types/resume.ts` — 타입 정의 (data-structure.md 참조)
2. `data/resume.ts` — 이력서 데이터 (data-structure.md 예시 참조)

### Step 4: 공통 컴포넌트

1. `components/navbar.tsx` — sticky, 다크모드 토글
2. `components/dark-mode-toggle.tsx` — 시스템 기본 + localStorage 저장
3. `hooks/use-dark-mode.ts` — 다크모드 상태 관리
4. `components/section-heading.tsx` — 섹션 제목 공통 컴포넌트

### Step 5: 섹션 구현 (section-specs.md 참조)

1. `sections/hero.tsx` — 이름, 소개, 연락처 아이콘
2. `sections/summary.tsx` — 세로 타임라인
3. `sections/decisions.tsx` — 프로젝트별 선택지 카드 그리드
4. `sections/contact.tsx` — 연락처 + 카피라이트

### Step 6: 조합 + 스타일

1. `app.tsx` — 섹션 조합
2. `index.css` — `@media print` CSS 추가
3. `config/site.ts` — 사이트명 변경

### Step 7: ESLint 규칙 업데이트

- `import-x/no-restricted-paths` zones를 새 폴더 구조에 맞게 수정
- routes/ 예외 규칙 제거

### Step 8: 빌드 + 배포

1. `pnpm build` 확인
2. GitHub Actions workflow 작성 (gh-pages 배포)
3. push → 배포 확인

## 참조 문서

| 단계     | 참조                                             |
| -------- | ------------------------------------------------ |
| Step 1~2 | `docs/tech-stack.md`                             |
| Step 3   | `docs/data-structure.md`                         |
| Step 4~5 | `docs/section-specs.md`, `docs/design-system.md` |
| Step 6   | `docs/design-system.md`                          |
| Step 7   | `docs/coding-conventions.md`                     |
| Step 8   | `docs/decisions.md` (ADR-007)                    |
