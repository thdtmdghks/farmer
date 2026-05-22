# 데이터 구조 설계

## 파일 구성

```
src/
├── types/
│   └── resume.ts       ← 타입 정의만
└── data/
    └── resume.ts       ← 실제 데이터 (타입 import하여 사용)
```

## 타입 정의 (`types/resume.ts`)

```ts
/** 경력 회사 */
export interface Experience {
  company: string
  role: string
  period: string
  description: string
}

/** 기술 결정의 선택지 */
export interface Option {
  name: string
  pros: string[]
  cons: string[]
  chosen: boolean
}

/** 하나의 기술 결정 */
export interface Decision {
  project: string
  company: string
  techStack: string[]
  question: string // "~를 어떻게 할까?" 형태
  options: Option[]
  reason: string // 채택 이유 (한 줄)
  outcome?: string // 결과 (선택적, 정량 수치 등)
}

/** 연락처 */
export interface Contact {
  type: 'email' | 'phone' | 'github'
  label: string
  href: string
}

/** 사이트 전체 데이터 */
export interface ResumeData {
  name: string
  title: string
  summary: string
  experiences: Experience[]
  decisions: Decision[]
  contacts: Contact[]
}
```

## 데이터 예시 (`data/resume.ts`)

```ts
import type { ResumeData } from '@/types/resume'

export const resumeData: ResumeData = {
  name: '송승환',
  title: 'Frontend Developer',
  summary:
    '백엔드에서 시작해 풀스택 시야를 갖춘 프론트엔드 개발자입니다. FE가 독립적으로 개발·테스트·배포할 수 있는 환경을 만드는 데 강점이 있습니다.',

  experiences: [
    {
      company: '엑심베이',
      role: '풀스택 개발자',
      period: '2025.03 – 현재',
      description:
        '블록체인 지갑 서비스, 결제 백오피스 모노레포, 암호화폐 결제 게이트웨이 연동',
    },
    {
      company: '파이노버스랩',
      role: '프론트엔드 개발자',
      period: '2022.08 – 2025.07',
      description: '결제 서비스, 데모몰, 서버리스 API, 백오피스 개발',
    },
    {
      company: '제머나이소프트',
      role: '웹 개발자',
      period: '2020.06 – 2022.04',
      description: '영상 편집 솔루션, 보도정보시스템, CMS 재구축',
    },
  ],

  decisions: [
    {
      project: '블록체인 지갑 서비스',
      company: '엑심베이',
      techStack: ['NestJS', 'TypeScript', 'PostgreSQL'],
      question: '동시 서명 시 nonce 충돌을 어떻게 막을까?',
      options: [
        {
          name: 'DB 락',
          pros: ['분산 환경 지원', '영속성'],
          cons: ['DB 부하', '데드락 위험', '과도한 복잡도'],
          chosen: false,
        },
        {
          name: 'Redis 분산 락',
          pros: ['분산 환경 지원', '빠름'],
          cons: ['인프라 추가', '현재 단일 인스턴스에 불필요'],
          chosen: false,
        },
        {
          name: '인메모리 락',
          pros: ['구현 단순', '지연 없음', '현재 요구사항 충족'],
          cons: ['단일 인스턴스 한정'],
          chosen: true,
        },
      ],
      reason:
        'YAGNI. 단일 인스턴스에서 충분. 스케일 시 Redis 전환 시점을 ADR에 명시.',
      outcome: '서명 충돌 0건',
    },
    {
      project: '결제 백오피스 모노레포',
      company: '엑심베이',
      techStack: ['Turborepo', 'React', 'Vite'],
      question: '5개 공유 패키지를 매번 빌드해야 하나?',
      options: [
        {
          name: '사전 빌드 (tsc → dist/)',
          pros: ['표준적', '타입 체크 분리'],
          cons: ['변경마다 빌드 필요', 'DX 저하', 'watch 모드 복잡'],
          chosen: false,
        },
        {
          name: 'JIT (소스 직접 export)',
          pros: ['빌드 단계 제거', '즉시 반영', 'HMR 동작'],
          cons: ['앱 빌드 시간 약간 증가'],
          chosen: true,
        },
      ],
      reason: '패키지 수정 → 앱 즉시 반영. 빌드 단계 제거로 DX 극대화.',
    },
    {
      project: '암호화폐 결제 게이트웨이',
      company: '엑심베이',
      techStack: ['Node.js', 'Express', 'crypto'],
      question: 'Webhook 서명 검증 시 body 무결성을 어떻게 보장할까?',
      options: [
        {
          name: 'express.json() 후 재직렬화',
          pros: ['기존 미들웨어 그대로'],
          cons: ['파싱→재직렬화 시 원본과 달라짐', '서명 불일치 위험'],
          chosen: false,
        },
        {
          name: 'express.raw()로 원본 보존',
          pros: ['바이트 단위 원본 유지', '서명 검증 정확'],
          cons: ['webhook 라우트만 별도 미들웨어 필요'],
          chosen: true,
        },
      ],
      reason: 'RSA-SHA256 서명은 1바이트라도 다르면 실패. 원본 보존이 필수.',
    },
    {
      project: '외상 결제 데모몰',
      company: '파이노버스랩',
      techStack: ['Next.js', 'MSW', 'TypeScript'],
      question: 'Mock 환경을 어떻게 구축할까?',
      options: [
        {
          name: 'JSON Server',
          pros: ['간단', '이미 사용 중'],
          cons: ['모바일 테스트 불가', '별도 프로세스', '포트 충돌'],
          chosen: false,
        },
        {
          name: 'MSW (Service Worker)',
          pros: ['네트워크 레벨 모킹', '모바일 동작', '시나리오 분리'],
          cons: ['초기 설정 비용'],
          chosen: true,
        },
      ],
      reason:
        'Service Worker 기반이라 모바일 실기기에서도 동작. QA 배포 대기 제거.',
      outcome: '배포 없이 모바일 테스트 가능',
    },
    {
      project: '결제 서비스',
      company: '파이노버스랩',
      techStack: ['Vue3', 'Vite', 'Playwright'],
      question: '프론트엔드 테스트 전략을 어떻게 세울까?',
      options: [
        {
          name: '단위 테스트만',
          pros: ['빠름', '간단'],
          cons: ['통합 시나리오 검증 불가', '회귀 방지 약함'],
          chosen: false,
        },
        {
          name: '단위 + E2E 조합',
          pros: ['로직은 Vitest로 빠르게', '시나리오는 Playwright로 확실하게'],
          cons: ['CI 시간 증가'],
          chosen: true,
        },
      ],
      reason:
        '결제 서비스는 회귀 버그가 치명적. E2E로 핵심 플로우 보호, 단위로 빠른 피드백.',
      outcome: '운영 장애 0건',
    },
  ],

  contacts: [
    {
      type: 'email',
      label: 'ghksl4157@gmail.com',
      href: 'mailto:ghksl4157@gmail.com',
    },
    { type: 'phone', label: '010-4157-8829', href: 'tel:+821041578829' },
    { type: 'github', label: 'GitHub', href: 'https://github.com/seunghwan' },
  ],
}
```

## 설계 원칙

1. **단일 데이터 파일** — 모든 이력서 데이터가 `data/resume.ts` 한 곳에. 수정 시 이 파일만 편집.
2. **타입 분리** — 타입은 `types/resume.ts`에. 데이터 파일은 순수 상수만.
3. **컴포넌트에 데이터 하드코딩 금지** — 섹션 컴포넌트는 데이터를 props 또는 import로 받음.
4. **선택적 필드** — `outcome`처럼 모든 결정에 해당하지 않는 필드는 optional (`?`).
5. **확장 가능** — 나중에 Decision에 `diagram?: string` 등 추가 가능.
