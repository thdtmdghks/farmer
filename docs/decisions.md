# 기술 결정 기록

## 001: TanStack Router 파일 기반 라우팅

랜딩 페이지(`/`) + 이력서 페이지(`/resume`) 2개 라우트 구성.

- 타입 안전 네비게이션 (존재하지 않는 경로 컴파일 에러)
- Vite 플러그인으로 routeTree 자동 생성
- 코드 스플리팅 자동 적용 (resume 페이지 lazy load)

감수하는 단점: 라우터 번들 추가 (~40KB). 2페이지에 과할 수 있으나 타입 안전성과 자동 코드 스플리팅의 이점이 큼.

## 002: Bulletproof React 아키텍처 + ESLint 자동 강제

`shared → features → routes` 단방향 의존성을 ESLint `import-x/no-restricted-paths`로 강제.

- 규칙 위반 시 빌드 실패 → 아키텍처 붕괴 방지
- feature 간 직접 import 금지 (조합은 routes에서만)
- `eslint-plugin-check-file`로 파일/폴더 KEBAB_CASE 강제

감수하는 단점: 새 feature 추가 시 ESLint 규칙 업데이트 필요. 초기 설정 비용 있음.

## 003: 모바일 퍼스트

기본 스타일이 모바일, `sm:`/`md:`로 확장.

- Tailwind 기본 설계와 일치
- 좁은 화면에서 먼저 잘 보이면 넓은 화면은 여백만 추가하면 됨
- 모바일에서 확인할 가능성도 있으므로 대응 필수

감수하는 단점: 데스크톱에서 좌우 여백 넓음.

## 004: 네이티브 API 우선 (외부 애니메이션 라이브러리 없음)

IntersectionObserver + CSS transition으로 충분.

- 필요한 애니메이션이 fade/zoom 4종뿐. Framer Motion(+30KB)은 과도
- GPU 가속 CSS transition으로 성능 우수
- 커스텀 훅 `useInView` + `AnimateOnScroll` 컴포넌트로 재사용

감수하는 단점: 스프링 물리, 제스처 등 복잡한 효과는 구현 비용 높음.
전환 시점: 복잡한 인터랙션이 필요해지면 해당 컴포넌트에만 Framer Motion 부분 도입.

## 005: 모노톤 색상

shadcn Neutral 팔레트. 브랜드 컬러 없음.

- 주인공은 콘텐츠이지 디자인이 아님
- 이력서 카드에서 Frontend(파랑)/Backend(초록) 구분만 색상 사용
- 채택/기각 구분은 테두리 + 텍스트 라벨로 (색상 의존 안 함 → 색맹 대응)

감수하는 단점: 시각적 임팩트가 약할 수 있음.

## 006: @media print PDF 대응

별도 PDF 관리 대신 브라우저 인쇄로 PDF 생성.

- 웹과 PDF가 항상 동기화 (단일 소스)
- 추가 의존성 없음
- `-webkit-print-color-adjust: exact`로 배경색/보더 출력 보장

감수하는 단점: 브라우저별 인쇄 렌더링 차이, 페이지 브레이크 제어 불완전.

## 007: GitHub Pages 배포

Vercel 대신 GitHub Pages.

- GitHub 하나로 소스 + 배포 관리
- `404.html` 복사로 SPA 라우팅 대응
- GitHub Actions로 push 시 자동 배포

감수하는 단점: PR별 프리뷰 배포 없음 (1인 프로젝트라 불필요).
