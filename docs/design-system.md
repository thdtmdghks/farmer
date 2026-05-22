# 디자인 시스템

## 색상

shadcn/ui 기본 테마(Neutral) 기반. CSS 변수로 정의되어 다크모드 자동 전환.

### 시맨틱 색상

| 용도        | 변수                 | Light     | Dark        |
| ----------- | -------------------- | --------- | ----------- |
| 배경        | `--background`       | 흰색      | 거의 검정   |
| 텍스트      | `--foreground`       | 거의 검정 | 거의 흰색   |
| 보조 텍스트 | `--muted-foreground` | 회색      | 밝은 회색   |
| 카드 배경   | `--card`             | 흰색      | 어두운 회색 |
| 강조        | `--primary`          | 검정      | 밝은 회색   |
| 보조 배경   | `--muted`            | 연한 회색 | 어두운 회색 |
| 테두리      | `--border`           | 연한 회색 | 반투명 흰색 |

### 추가 색상 (Decision 카드용)

| 용도          | 클래스                            | 설명        |
| ------------- | --------------------------------- | ----------- |
| 채택된 선택지 | `border-primary` + `bg-primary/5` | 강조 테두리 |
| 기각된 선택지 | `border-border` + `bg-muted/50`   | 흐린 배경   |
| 문제 상황     | `text-foreground`                 | 기본 텍스트 |
| 이유/근거     | `text-muted-foreground`           | 보조 텍스트 |

### 원칙

- 색상 직접 지정 금지 (`text-gray-500` ❌ → `text-muted-foreground` ✅)
- 모든 색상은 CSS 변수 경유 → 다크모드 자동 대응
- 강조가 필요하면 `primary` 계열만 사용 (다색 금지, 모노톤 유지)

## 타이포그래피

### 폰트

- 본문: Geist Variable (sans-serif)
- 코드: 없음 (코드 블록 미사용)

### 크기 체계

| 용도        | 클래스                 | 크기        |
| ----------- | ---------------------- | ----------- |
| Hero 이름   | `text-5xl sm:text-7xl` | 48px / 72px |
| 섹션 제목   | `text-3xl sm:text-4xl` | 30px / 36px |
| 프로젝트명  | `text-xl sm:text-2xl`  | 20px / 24px |
| 본문        | `text-base`            | 16px        |
| 보조 텍스트 | `text-sm`              | 14px        |
| 태그/뱃지   | `text-xs`              | 12px        |

### 굵기

| 용도              | 클래스               |
| ----------------- | -------------------- |
| 이름/제목         | `font-bold`          |
| 프로젝트명/소제목 | `font-semibold`      |
| 본문              | `font-normal` (기본) |

### 행간

- 제목: `leading-tight` (1.25)
- 본문: `leading-relaxed` (1.625)

## 간격

### 섹션 간 간격

| 위치              | 클래스                   | 값           |
| ----------------- | ------------------------ | ------------ |
| 섹션 상하 패딩    | `py-20 sm:py-32`         | 80px / 128px |
| 섹션 내 요소 간격 | `space-y-8` 또는 `gap-8` | 32px         |
| 카드 내부 패딩    | `p-6`                    | 24px         |
| 인라인 요소 간격  | `gap-2` 또는 `gap-3`     | 8px / 12px   |

### 컨테이너

```
max-w-3xl mx-auto px-4 sm:px-6
```

- 최대 너비: 768px (읽기 최적 폭)
- 좌우 패딩: 16px (모바일) / 24px (데스크톱)

## 반응형

Tailwind 기본 브레이크포인트 사용 (sm:640, md:768, lg:1024).

- 모바일 퍼스트: 기본 스타일이 모바일, `sm:`/`md:`로 확장
- 레이아웃 변경점: `sm:` (Hero 텍스트 크기), `md:` (Decision 카드 가로 배치)
- 컨테이너 고정: `max-w-3xl` — 데스크톱에서도 좁은 폭 유지 (읽기 집중)

## 애니메이션

### 스크롤 트리거

- IntersectionObserver 기반 (`useInView` 훅)
- rootMargin: `-120px 0px` (뷰포트 상하 120px 안쪽에서 발동)
- 한 번만 실행 (`once: true`)

### 트랜지션

| 속성     | 값                                            |
| -------- | --------------------------------------------- |
| duration | `0.7s`                                        |
| easing   | `cubic-bezier(0.16, 1, 0.3, 1)` (easeOutExpo) |
| delay    | 순차 등장 시 `100ms` 간격                     |

### 애니메이션 종류

| 이름       | 초기 상태                    | 최종 상태       |
| ---------- | ---------------------------- | --------------- |
| fade-up    | opacity:0, translateY(40px)  | opacity:1, none |
| fade-left  | opacity:0, translateX(-40px) | opacity:1, none |
| fade-right | opacity:0, translateX(40px)  | opacity:1, none |
| zoom-in    | opacity:0, scale(0.9)        | opacity:1, none |

### 인쇄 시

```css
@media print {
  * {
    animation: none !important;
    transition: none !important;
  }
  opacity: 1 !important;
  transform: none !important;
}
```

## 다크모드

- 토글 방식: 버튼 클릭 → `<html>` 에 `.dark` 클래스 추가/제거
- 기본값: 시스템 설정 따름 (`prefers-color-scheme`)
- 저장: `localStorage`에 사용자 선택 기억
- 위치: Navbar 우측 (아이콘 버튼)

## 인쇄 (PDF) 대응

- 네비게이션, 다크모드 토글, 애니메이션 숨김
- 배경색 제거 (잉크 절약)
- 폰트 크기 약간 축소
- 페이지 브레이크: 섹션 단위
- A4 기준 1~2페이지 목표
