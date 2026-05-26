# 이력서 키워드 카드 — HTML 시각화 설계안

## 목표

12개 키워드 카드를 회사별 섹션으로 그룹핑하여, PDF 출력 시 한눈에 스캔 가능한 레이아웃으로 구현.

---

## 라우트 구조

```
src/routes/resume.tsx    ← 새 페이지 추가 (/resume)
src/features/resume/
├── components/
│   ├── resume-page.tsx          ← 전체 레이아웃 (A4 비율, print 최적화)
│   ├── company-section.tsx      ← 회사 헤더 + 카드 그리드
│   └── keyword-card.tsx         ← 개별 키워드 카드
└── data/
    └── resume-data.ts           ← 12개 카드 데이터 (타입 + 배열)
```

---

## 카드 디자인

```
┌─────────────────────────────┐
│  🏷️ [기술 키워드]            │  ← 볼드, text-lg
│                             │
│  한 줄 요약 텍스트           │  ← text-sm, muted
│  (최대 2줄)                  │
│                             │
│  ┌───┐ ┌───┐ ┌───┐         │  ← 관련 기술 태그 (선택)
│  │Vue│ │TS │ │Vite│         │
│  └───┘ └───┘ └───┘         │
└─────────────────────────────┘
```

---

## 전체 레이아웃

```
┌─────────────────────────────────────────────────────────────┐
│  송승환 — 프론트엔드 개발자                                    │
│  각 환경에서 의존성 없이 독립적인 구조를 만드는 6년 차 개발자     │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ■ 엑심베이 (2025.03 ~ 재직중)                               │
│  ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐              │
│  │Turborepo│ │RSA-OAEP│ │ MSW 2  │ │MPC지갑 │              │
│  │모노레포 │ │암호화  │ │도메인  │ │풀스택  │              │
│  │        │ │        │ │모킹    │ │        │              │
│  └────────┘ └────────┘ └────────┘ └────────┘              │
│                                                             │
│  ■ 파이노버스랩 (2022.08 ~ 2025.07)                         │
│  ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐  │
│  │Playwri-│ │ pnpm   │ │JSON→   │ │  PDF   │ │서버리스│  │
│  │ght E2E │ │모노레포│ │MSW전환 │ │페이지  │ │API    │  │
│  │        │ │        │ │        │ │분할    │ │        │  │
│  └────────┘ └────────┘ └────────┘ └────────┘ └────────┘  │
│                                                             │
│  ■ 제머나이소프트 (2020.06 ~ 2022.04)                        │
│  ┌────────┐ ┌────────┐ ┌────────┐                          │
│  │Canvas  │ │로그스케│ │메모리  │                          │
│  │렌더링  │ │일 줌   │ │누수해결│                          │
│  └────────┘ └────────┘ └────────┘                          │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## 기술 구현 계획

### 스타일링

- Tailwind CSS v4 (farmer 기존 설정 활용)
- `@media print` 로 A4 최적화 (여백, 페이지 브레이크)
- 다크모드 불필요 (PDF 출력 = 라이트 모드 고정)

### 컴포넌트 설계

```tsx
// resume-data.ts
type KeywordCard = {
  keyword: string // "Turborepo 모노레포"
  summary: string // "2앱 + 5패키지, 빌드 없이 HMR 즉시 반영"
  tags?: string[] // ["React 19", "pnpm", "Vite 6"]
  category?: 'frontend' | 'backend' | 'infra' // 카드 색상 구분용
}

type CompanySection = {
  company: string // "엑심베이"
  period: string // "2025.03 ~ 재직중"
  role: string // "프론트엔드 개발자"
  cards: KeywordCard[]
}
```

### 카드 시각적 구분

- `frontend` → 파란 계열 좌측 보더
- `backend` → 초록 계열 좌측 보더
- `infra` → 보라 계열 좌측 보더

이렇게 하면 "이 사람 프론트엔드 중심이구나"가 색상 비율로도 즉시 전달됨.

### PDF 출력

- 브라우저 `Ctrl+P` → PDF 저장 (별도 라이브러리 불필요)
- `@media print`에서 배경색/보더 강제 출력: `-webkit-print-color-adjust: exact`
- 페이지 브레이크: 회사 섹션 단위로 `break-inside: avoid`

### 애니메이션 (웹 전용, print 시 비활성)

- farmer 기존 `AnimateOnScroll` 컴포넌트 활용
- 카드가 뷰포트에 들어올 때 fade-up
- `@media print`에서는 opacity: 1, transform: none 고정

---

## 작업 순서

1. `src/features/resume/data/resume-data.ts` — 12개 카드 데이터 정의
2. `src/features/resume/components/keyword-card.tsx` — 단일 카드 컴포넌트
3. `src/features/resume/components/company-section.tsx` — 회사 그룹 + 카드 그리드
4. `src/features/resume/components/resume-page.tsx` — 전체 페이지 조합
5. `src/routes/resume.tsx` — 라우트 등록
6. print CSS 추가 (index.css 또는 별도 파일)

---

## 대안 검토

| 방식                         | 채택 여부 | 이유                                       |
| ---------------------------- | --------- | ------------------------------------------ |
| 별도 HTML 파일 (farmer 외부) | ❌        | farmer의 Tailwind/컴포넌트 재사용 불가     |
| farmer 내 라우트 추가        | ✅        | 기존 인프라 활용, 빌드/배포 통합           |
| Next.js로 별도 프로젝트      | ❌        | 과잉, 정적 페이지 하나에 프레임워크 불필요 |
