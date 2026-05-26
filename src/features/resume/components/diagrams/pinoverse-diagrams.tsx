export function PlaywrightSvg() {
  return (
    <svg viewBox="0 0 200 100" className="h-full w-full">
      {/* Before: manual */}
      <g opacity="0.6">
        <text
          x="45"
          y="10"
          textAnchor="middle"
          className="fill-gray-400 text-[7px]"
        >
          Before
        </text>
        <rect
          x="10"
          y="14"
          width="70"
          height="50"
          rx="4"
          fill="#FEF2F2"
          stroke="#EF4444"
          strokeWidth="1"
        />
        <text
          x="45"
          y="28"
          textAnchor="middle"
          className="fill-red-600 text-[7px]"
        >
          🖱️ 수동 클릭
        </text>
        <text
          x="45"
          y="40"
          textAnchor="middle"
          className="fill-red-500 text-[6px]"
        >
          매 배포마다 반복
        </text>
        <text
          x="45"
          y="50"
          textAnchor="middle"
          className="fill-red-500 text-[6px]"
        >
          휴먼 에러 리스크
        </text>
        <text
          x="45"
          y="60"
          textAnchor="middle"
          className="fill-red-400 text-[6px]"
        >
          시간 소요 ↑
        </text>
      </g>

      {/* Arrow */}
      <text
        x="100"
        y="42"
        textAnchor="middle"
        className="fill-gray-400 text-[12px]"
      >
        →
      </text>

      {/* After: automated */}
      <text
        x="155"
        y="10"
        textAnchor="middle"
        className="fill-gray-600 text-[7px]"
      >
        After
      </text>
      <rect
        x="120"
        y="14"
        width="70"
        height="50"
        rx="4"
        fill="#ECFDF5"
        stroke="#10B981"
        strokeWidth="1.5"
      />
      <text
        x="155"
        y="28"
        textAnchor="middle"
        className="fill-emerald-700 text-[7px]"
      >
        🤖 Playwright
      </text>
      <text
        x="155"
        y="40"
        textAnchor="middle"
        className="fill-emerald-600 text-[6px]"
      >
        CI에서 자동 실행
      </text>
      <text
        x="155"
        y="50"
        textAnchor="middle"
        className="fill-emerald-600 text-[6px]"
      >
        결제 전 과정 검증
      </text>
      <text
        x="155"
        y="60"
        textAnchor="middle"
        className="fill-emerald-700 text-[7px] font-medium"
      >
        QA 80%↓
      </text>

      {/* Label */}
      <text
        x="100"
        y="80"
        textAnchor="middle"
        className="fill-gray-400 text-[7px]"
      >
        수동 브라우저 검증 → 자동화로 공수 80% 절감
      </text>
    </svg>
  )
}

export function PnpmSvg() {
  return (
    <svg viewBox="0 0 200 100" className="h-full w-full">
      {/* Package A modified */}
      <rect
        x="70"
        y="8"
        width="60"
        height="22"
        rx="4"
        fill="#FEF3C7"
        stroke="#F59E0B"
        strokeWidth="1.5"
      />
      <text
        x="100"
        y="22"
        textAnchor="middle"
        className="fill-amber-700 text-[7px] font-medium"
      >
        📦 공통 UI 수정
      </text>
      {/* Arrow down splits */}
      <line
        x1="100"
        y1="30"
        x2="100"
        y2="40"
        stroke="#D1D5DB"
        strokeWidth="1"
      />
      <line x1="60" y1="40" x2="140" y2="40" stroke="#D1D5DB" strokeWidth="1" />
      <line x1="60" y1="40" x2="60" y2="48" stroke="#D1D5DB" strokeWidth="1" />
      <line
        x1="140"
        y1="40"
        x2="140"
        y2="48"
        stroke="#D1D5DB"
        strokeWidth="1"
      />
      {/* Service A */}
      <rect
        x="30"
        y="48"
        width="60"
        height="22"
        rx="4"
        fill="#ECFDF5"
        stroke="#10B981"
        strokeWidth="1.5"
      />
      <text
        x="60"
        y="62"
        textAnchor="middle"
        className="fill-emerald-700 text-[7px]"
      >
        ✓ 결제 서비스
      </text>
      {/* Service B */}
      <rect
        x="110"
        y="48"
        width="60"
        height="22"
        rx="4"
        fill="#ECFDF5"
        stroke="#10B981"
        strokeWidth="1.5"
      />
      <text
        x="140"
        y="62"
        textAnchor="middle"
        className="fill-emerald-700 text-[7px]"
      >
        ✓ 대시보드
      </text>
      {/* Label */}
      <text
        x="100"
        y="88"
        textAnchor="middle"
        className="fill-gray-400 text-[7px]"
      >
        한 곳 수정 → 양쪽 자동 반영
      </text>
    </svg>
  )
}

export function FeIndependenceSvg() {
  return (
    <svg viewBox="0 0 200 100" className="h-full w-full">
      {/* Center: Frontend */}
      <rect
        x="65"
        y="30"
        width="70"
        height="34"
        rx="6"
        fill="#EFF6FF"
        stroke="#3B82F6"
        strokeWidth="2"
      />
      <text
        x="100"
        y="46"
        textAnchor="middle"
        className="fill-blue-700 text-[8px] font-bold"
      >
        Frontend
      </text>
      <text
        x="100"
        y="57"
        textAnchor="middle"
        className="fill-blue-500 text-[6px]"
      >
        독립 개발·테스트·QA
      </text>

      {/* MSW shield */}
      <rect
        x="68"
        y="68"
        width="64"
        height="14"
        rx="3"
        fill="#DBEAFE"
        stroke="#3B82F6"
        strokeWidth="1"
      />
      <text
        x="100"
        y="78"
        textAnchor="middle"
        className="fill-blue-600 text-[6px]"
      >
        MSW (Service Worker)
      </text>

      {/* Backend - disconnected */}
      <rect
        x="155"
        y="36"
        width="38"
        height="22"
        rx="4"
        fill="#F9FAFB"
        stroke="#D1D5DB"
        strokeWidth="1"
        strokeDasharray="3,2"
      />
      <text
        x="174"
        y="50"
        textAnchor="middle"
        className="fill-gray-400 text-[6px]"
      >
        Backend
      </text>
      {/* Disconnected line */}
      <line
        x1="137"
        y1="47"
        x2="148"
        y2="47"
        stroke="#EF4444"
        strokeWidth="1.5"
        strokeDasharray="3,2"
      />
      <text
        x="142"
        y="43"
        textAnchor="middle"
        className="fill-red-400 text-[8px]"
      >
        ✕
      </text>

      {/* Devices connected to FE */}
      <text x="20" y="35" className="fill-gray-500 text-[10px]">
        💻
      </text>
      <text x="20" y="52" className="fill-gray-500 text-[10px]">
        📱
      </text>
      <text x="20" y="69" className="fill-gray-500 text-[10px]">
        🔗
      </text>
      <line
        x1="35"
        y1="32"
        x2="63"
        y2="42"
        stroke="#3B82F6"
        strokeWidth="0.8"
      />
      <line
        x1="35"
        y1="49"
        x2="63"
        y2="47"
        stroke="#3B82F6"
        strokeWidth="0.8"
      />
      <line
        x1="35"
        y1="66"
        x2="63"
        y2="52"
        stroke="#3B82F6"
        strokeWidth="0.8"
      />

      {/* Evolution note */}
      <text
        x="100"
        y="14"
        textAnchor="middle"
        className="fill-gray-400 text-[6px]"
      >
        JSON Server (localhost) → MSW (어디서든)
      </text>

      {/* Label */}
      <text
        x="100"
        y="94"
        textAnchor="middle"
        className="fill-gray-400 text-[7px]"
      >
        백엔드 의존 제거, 모든 환경에서 FE 단독 완결
      </text>
    </svg>
  )
}

export function PdfSvg() {
  return (
    <svg viewBox="0 0 200 100" className="h-full w-full">
      {/* Page 1 */}
      <rect
        x="30"
        y="8"
        width="50"
        height="70"
        rx="2"
        fill="white"
        stroke="#D1D5DB"
        strokeWidth="1"
      />
      {/* Text lines page 1 */}
      {[0, 1, 2, 3, 4, 5, 6].map((i) => (
        <rect
          key={`p1-${i}`}
          x="35"
          y={14 + i * 8}
          width={35 - (i % 3) * 5}
          height="4"
          rx="1"
          fill={i === 6 ? '#FCA5A5' : '#E5E7EB'}
        />
      ))}
      {/* Cut indicator - BAD */}
      <line
        x1="30"
        y1="70"
        x2="80"
        y2="70"
        stroke="#EF4444"
        strokeWidth="1"
        strokeDasharray="2,2"
      />
      <text
        x="55"
        y="84"
        textAnchor="middle"
        className="fill-red-500 text-[7px]"
      >
        ✗ 잘림
      </text>
      {/* Page 2 - fixed */}
      <rect
        x="120"
        y="8"
        width="50"
        height="70"
        rx="2"
        fill="white"
        stroke="#D1D5DB"
        strokeWidth="1"
      />
      {/* Text lines page 2 */}
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <rect
          key={`p2-${i}`}
          x="125"
          y={14 + i * 8}
          width={35 - (i % 3) * 5}
          height="4"
          rx="1"
          fill="#E5E7EB"
        />
      ))}
      {/* Safe break */}
      <line
        x1="120"
        y1="62"
        x2="170"
        y2="62"
        stroke="#10B981"
        strokeWidth="1"
        strokeDasharray="2,2"
      />
      <text
        x="145"
        y="72"
        textAnchor="middle"
        className="fill-emerald-600 text-[6px]"
      >
        행 단위 분할
      </text>
      <text
        x="145"
        y="84"
        textAnchor="middle"
        className="fill-emerald-600 text-[7px]"
      >
        ✓ 안전
      </text>
      {/* Label */}
      <text
        x="100"
        y="96"
        textAnchor="middle"
        className="fill-gray-400 text-[7px]"
      >
        A4 경계에서 콘텐츠 잘림 방지
      </text>
    </svg>
  )
}

export function ServerlessSvg() {
  return (
    <svg viewBox="0 0 200 100" className="h-full w-full">
      {/* 3-stage test pipeline */}
      <rect
        x="10"
        y="15"
        width="48"
        height="26"
        rx="4"
        fill="#FEF3C7"
        stroke="#F59E0B"
        strokeWidth="1"
      />
      <text
        x="34"
        y="26"
        textAnchor="middle"
        className="fill-amber-700 text-[7px] font-medium"
      >
        Jest
      </text>
      <text
        x="34"
        y="35"
        textAnchor="middle"
        className="fill-amber-600 text-[5px]"
      >
        단위 테스트
      </text>
      {/* Arrow */}
      <line x1="60" y1="28" x2="68" y2="28" stroke="#D1D5DB" strokeWidth="1" />
      <text
        x="64"
        y="25"
        textAnchor="middle"
        className="fill-gray-300 text-[6px]"
      >
        ▶
      </text>

      <rect
        x="70"
        y="15"
        width="48"
        height="26"
        rx="4"
        fill="#EFF6FF"
        stroke="#3B82F6"
        strokeWidth="1"
      />
      <text
        x="94"
        y="26"
        textAnchor="middle"
        className="fill-blue-700 text-[7px] font-medium"
      >
        SAM CLI
      </text>
      <text
        x="94"
        y="35"
        textAnchor="middle"
        className="fill-blue-600 text-[5px]"
      >
        이벤트 테스트
      </text>
      {/* Arrow */}
      <line
        x1="120"
        y1="28"
        x2="128"
        y2="28"
        stroke="#D1D5DB"
        strokeWidth="1"
      />
      <text
        x="124"
        y="25"
        textAnchor="middle"
        className="fill-gray-300 text-[6px]"
      >
        ▶
      </text>

      <rect
        x="130"
        y="15"
        width="58"
        height="26"
        rx="4"
        fill="#F5F3FF"
        stroke="#8B5CF6"
        strokeWidth="1"
      />
      <text
        x="159"
        y="26"
        textAnchor="middle"
        className="fill-purple-700 text-[7px] font-medium"
      >
        LocalStack
      </text>
      <text
        x="159"
        y="35"
        textAnchor="middle"
        className="fill-purple-600 text-[5px]"
      >
        통합 테스트
      </text>

      {/* Result */}
      <rect
        x="50"
        y="55"
        width="100"
        height="24"
        rx="6"
        fill="#ECFDF5"
        stroke="#10B981"
        strokeWidth="1.5"
      />
      <text
        x="100"
        y="67"
        textAnchor="middle"
        className="fill-emerald-700 text-[9px] font-bold"
      >
        운영 장애 0건
      </text>
      <text
        x="100"
        y="75"
        textAnchor="middle"
        className="fill-emerald-500 text-[6px]"
      >
        배포 후 안정 운영
      </text>

      {/* Label */}
      <text
        x="100"
        y="92"
        textAnchor="middle"
        className="fill-gray-400 text-[7px]"
      >
        3단계 검증으로 배포 전 인프라 동작 보장
      </text>
    </svg>
  )
}

export function BackofficeUxSvg() {
  return (
    <svg viewBox="0 0 200 100" className="h-full w-full">
      {/* Before: page navigation */}
      <g opacity="0.5">
        <text
          x="45"
          y="10"
          textAnchor="middle"
          className="fill-gray-400 text-[7px]"
        >
          Before
        </text>
        <rect
          x="10"
          y="14"
          width="70"
          height="45"
          rx="4"
          fill="#FEF2F2"
          stroke="#EF4444"
          strokeWidth="1"
        />
        {/* List */}
        <rect x="14" y="18" width="62" height="6" rx="1" fill="#FECACA" />
        <rect x="14" y="27" width="62" height="6" rx="1" fill="#FECACA" />
        <rect x="14" y="36" width="62" height="6" rx="1" fill="#FECACA" />
        {/* Arrow to new page */}
        <text
          x="45"
          y="52"
          textAnchor="middle"
          className="fill-red-400 text-[6px]"
        >
          클릭 → 새 페이지 이동
        </text>
      </g>

      {/* Arrow */}
      <text
        x="100"
        y="38"
        textAnchor="middle"
        className="fill-gray-400 text-[12px]"
      >
        →
      </text>

      {/* After: split panel */}
      <text
        x="155"
        y="10"
        textAnchor="middle"
        className="fill-gray-600 text-[7px]"
      >
        After
      </text>
      <rect
        x="120"
        y="14"
        width="70"
        height="45"
        rx="4"
        fill="#ECFDF5"
        stroke="#10B981"
        strokeWidth="1.5"
      />
      {/* Left: list */}
      <rect x="123" y="18" width="30" height="6" rx="1" fill="#D1FAE5" />
      <rect
        x="123"
        y="27"
        width="30"
        height="6"
        rx="1"
        fill="#A7F3D0"
        stroke="#10B981"
        strokeWidth="0.5"
      />
      <rect x="123" y="36" width="30" height="6" rx="1" fill="#D1FAE5" />
      {/* Divider */}
      <line
        x1="156"
        y1="16"
        x2="156"
        y2="57"
        stroke="#10B981"
        strokeWidth="0.5"
      />
      {/* Right: detail panel */}
      <rect
        x="159"
        y="18"
        width="28"
        height="36"
        rx="2"
        fill="#F0FDF4"
        stroke="#10B981"
        strokeWidth="0.5"
      />
      <text
        x="173"
        y="34"
        textAnchor="middle"
        className="fill-emerald-600 text-[5px]"
      >
        상세
      </text>
      <text
        x="173"
        y="42"
        textAnchor="middle"
        className="fill-emerald-600 text-[5px]"
      >
        패널
      </text>

      {/* Calculator */}
      <rect
        x="55"
        y="68"
        width="90"
        height="16"
        rx="3"
        fill="#EFF6FF"
        stroke="#3B82F6"
        strokeWidth="1"
      />
      <text
        x="100"
        y="79"
        textAnchor="middle"
        className="fill-blue-600 text-[6px]"
      >
        📅 달력 기반 수수료 자동 계산기
      </text>

      {/* Label */}
      <text
        x="100"
        y="95"
        textAnchor="middle"
        className="fill-gray-400 text-[7px]"
      >
        페이지 이동 제거 + 정산 수작업 제거
      </text>
    </svg>
  )
}
