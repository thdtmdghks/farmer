# 섹션별 상세 스펙

## 공통

- 모든 섹션: `<section id="섹션명">` + `py-20 sm:py-32`
- 컨테이너: `max-w-3xl mx-auto px-4 sm:px-6`
- 스크롤 애니메이션: `AnimateOnScroll` 래핑 (섹션 진입 시 fade-up)

---

## 1. Hero

### 레이아웃

```
┌─────────────────────────────────────┐
│          (상단 여백)                 │
│                                     │
│         송승환                       │  ← text-5xl sm:text-7xl, font-bold
│         Frontend Developer          │  ← text-xl, text-muted-foreground
│                                     │
│         한 줄 소개 텍스트            │  ← text-base, text-muted-foreground
│                                     │
│         [📧] [📱] [GitHub]          │  ← 아이콘 링크 (lucide)
│                                     │
│          (하단 여백)                 │
└─────────────────────────────────────┘
```

### 스펙

- 높이: `min-h-[70vh]` + `flex items-center justify-center`
- 텍스트 정렬: 중앙
- 연락처 아이콘: `lucide-react` (Mail, Phone, Github)
- 아이콘 크기: `size-5`, 호버 시 `text-primary` 전환
- 애니메이션: fade-up (페이지 로드 시 즉시, 스크롤 트리거 아님)
- 다크모드 토글: 우측 상단 고정 (`fixed top-4 right-4`)

### 인쇄 시

- 높이 제한 해제, 상단 정렬
- 아이콘 대신 텍스트로 연락처 표시

---

## 2. Summary

### 레이아웃

```
┌─────────────────────────────────────┐
│  경력 요약                           │  ← section-heading
│                                     │
│  ┌─────────────────────────────┐    │
│  │ 엑심베이                     │    │
│  │ 프론트엔드 개발자             │    │
│  │ 2025.03 – 현재              │    │
│  │ 블록체인 지갑, 모노레포...    │    │
│  └─────────────────────────────┘    │
│           │ (세로 연결선)            │
│  ┌─────────────────────────────┐    │
│  │ 파이노버스랩                  │    │
│  │ ...                          │    │
│  └─────────────────────────────┘    │
│           │                         │
│  ┌─────────────────────────────┐    │
│  │ 제머나이소프트                │    │
│  │ ...                          │    │
│  └─────────────────────────────┘    │
└─────────────────────────────────────┘
```

### 스펙

- 세로 타임라인 (모바일/데스크톱 동일)
- 연결선: 좌측 `border-l-2 border-border` + 각 항목에 원형 도트
- 도트: `w-3 h-3 rounded-full bg-primary` (절대 위치)
- 각 항목: 회사명(`font-semibold`), 역할(`text-sm text-muted-foreground`), 기간(`text-xs`), 설명(`text-sm`)
- 애니메이션: 각 항목 순차 fade-up (delay 100ms 간격)
- 현재 재직 중: 도트에 `animate-pulse` 또는 `ring` 효과

### 인쇄 시

- 연결선/도트 유지 (시각적 구조 보존)
- 애니메이션 제거

---

## 3. Decisions (핵심 섹션)

### 전체 레이아웃

```
┌─────────────────────────────────────┐
│  기술 결정들                         │  ← section-heading
│                                     │
│  ── 프로젝트명 (회사) ──────────     │  ← 구분선 + 프로젝트 헤더
│  [NestJS] [TypeScript] [PostgreSQL] │  ← 기술 태그
│                                     │
│  "동시 서명 시 nonce 충돌을          │  ← question (큰 텍스트)
│   어떻게 막을까?"                    │
│                                     │
│  ┌────────┐ ┌────────┐ ┌────────┐  │  ← 선택지 카드들
│  │ DB 락  │ │ Redis  │ │인메모리│  │
│  │        │ │        │ │  락 ✓  │  │
│  │ 기각   │ │ 기각   │ │  채택  │  │
│  └────────┘ └────────┘ └────────┘  │
│                                     │
│  💡 "YAGNI. 단일 인스턴스에서 충분.  │  ← reason
│      스케일 시 Redis 전환 시점 명시" │
│                                     │
│  → 서명 충돌 0건                    │  ← outcome (있으면)
│                                     │
│  ── 다음 프로젝트 ──────────────     │
│  ...                                │
└─────────────────────────────────────┘
```

### Decision 카드 스펙

#### 프로젝트 헤더

- 프로젝트명: `text-xl font-semibold`
- 회사명: `text-sm text-muted-foreground`
- 기술 태그: `text-xs px-2 py-0.5 rounded-full bg-muted` 뱃지

#### Question

- 크기: `text-lg sm:text-xl`
- 스타일: `font-medium`, 따옴표로 감싸기 또는 이탤릭
- 여백: 위아래 `my-6`

#### 선택지 카드 (Option)

- 레이아웃: `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3`
  - 선택지 2개: `sm:grid-cols-2`
  - 선택지 3개: `sm:grid-cols-3`
- 채택 카드: `border-primary border-2 bg-primary/5`
- 기각 카드: `border-border bg-muted/30 opacity-75`
- 카드 내부:
  - 이름: `font-semibold text-sm`
  - Pros: `text-xs text-green-600 dark:text-green-400` (✓ 접두사)
  - Cons: `text-xs text-muted-foreground` (✗ 접두사)
  - 채택 뱃지: `text-xs font-medium text-primary` ("✓ 채택")
  - 기각 뱃지: `text-xs text-muted-foreground` ("기각")

#### Reason

- 스타일: `text-sm text-muted-foreground italic`
- 아이콘: 💡 또는 lucide `Lightbulb`
- 배경: `bg-muted/50 rounded-lg p-4`

#### Outcome (선택적)

- 스타일: `text-sm font-medium`
- 접두사: `→`

### 애니메이션

- 프로젝트 헤더: fade-up
- Question: fade-up (delay 100ms)
- 선택지 카드: 순차 fade-up (delay 200ms, 300ms, 400ms)
- Reason: fade-up (delay 마지막 카드 + 200ms)

### 인쇄 시

- 카드 레이아웃 유지
- 채택/기각 구분은 테두리 굵기로 (색상 의존 안 함)
- 페이지 브레이크: 프로젝트 단위 (`break-inside: avoid`)

---

## 4. Contact

### 레이아웃

```
┌─────────────────────────────────────┐
│                                     │
│         연락처                       │  ← section-heading (또는 생략)
│                                     │
│    📧 ghksl4157@gmail.com           │
│    📱 010-4157-8829                 │
│    🔗 GitHub                        │
│                                     │
│    © 2026 송승환                    │  ← footer 역할 겸용
│                                     │
└─────────────────────────────────────┘
```

### 스펙

- 텍스트 정렬: 중앙
- 각 항목: 아이콘 + 텍스트, `<a>` 태그로 클릭 가능
- 호버: `underline` + `text-primary`
- 간격: `space-y-3`
- 하단 카피라이트: `text-xs text-muted-foreground mt-12`
- 애니메이션: zoom-in

### 인쇄 시

- 그대로 표시 (연락처는 인쇄에서도 중요)

---

## Navbar (고정 요소)

### 스펙

- 위치: `sticky top-0 z-50`
- 내용: 좌측 이름 (`text-sm font-medium`), 우측 다크모드 토글
- 배경: 스크롤 시 `bg-background/80 backdrop-blur border-b` 전환
- 높이: `h-12`
- 인쇄 시: 숨김 (`print:hidden`)

---

## 전체 페이지 흐름 요약

```
[Navbar - sticky]
[Hero - 70vh, 중앙 정렬, 즉시 표시]
    ↓ 스크롤
[Summary - 세로 타임라인, 순차 등장]
    ↓ 스크롤
[Decisions - 프로젝트별 반복, 카드 순차 등장]
    ↓ 스크롤
[Contact - 중앙 정렬, zoom-in]
```
