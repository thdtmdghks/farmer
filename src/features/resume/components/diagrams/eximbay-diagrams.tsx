export function TurborepoSvg() {
  return (
    <svg viewBox="0 0 220 95" className="h-full w-full">
      {/* Layer labels */}
      <text x="5" y="18" className="fill-gray-300 text-[6px]">
        Apps
      </text>
      <text x="5" y="52" className="fill-gray-300 text-[6px]">
        Pkgs
      </text>

      {/* Apps layer */}
      <rect
        x="35"
        y="8"
        width="70"
        height="20"
        rx="4"
        fill="#EFF6FF"
        stroke="#3B82F6"
        strokeWidth="1.5"
      />
      <text
        x="70"
        y="21"
        textAnchor="middle"
        className="fill-blue-700 text-[7px] font-medium"
      >
        Backoffice
      </text>
      <rect
        x="115"
        y="8"
        width="70"
        height="20"
        rx="4"
        fill="#EFF6FF"
        stroke="#3B82F6"
        strokeWidth="1.5"
      />
      <text
        x="150"
        y="21"
        textAnchor="middle"
        className="fill-blue-700 text-[7px] font-medium"
      >
        Admin
      </text>

      {/* Dependency arrows (top-down only) */}
      <line
        x1="55"
        y1="28"
        x2="55"
        y2="40"
        stroke="#9CA3AF"
        strokeWidth="0.8"
      />
      <line
        x1="85"
        y1="28"
        x2="85"
        y2="40"
        stroke="#9CA3AF"
        strokeWidth="0.8"
      />
      <line
        x1="135"
        y1="28"
        x2="135"
        y2="40"
        stroke="#9CA3AF"
        strokeWidth="0.8"
      />
      <line
        x1="165"
        y1="28"
        x2="165"
        y2="40"
        stroke="#9CA3AF"
        strokeWidth="0.8"
      />
      {/* Arrow heads */}
      <polygon points="53,40 55,44 57,40" fill="#9CA3AF" />
      <polygon points="83,40 85,44 87,40" fill="#9CA3AF" />
      <polygon points="133,40 135,44 137,40" fill="#9CA3AF" />
      <polygon points="163,40 165,44 167,40" fill="#9CA3AF" />

      {/* Packages layer */}
      {['ui', 'auth', 'shared', 'theme', 'config'].map((pkg, i) => (
        <g key={pkg}>
          <rect
            x={28 + i * 34}
            y="45"
            width="30"
            height="16"
            rx="3"
            fill="#ECFDF5"
            stroke="#10B981"
            strokeWidth="1"
          />
          <text
            x={43 + i * 34}
            y="56"
            textAnchor="middle"
            className="fill-emerald-700 text-[6px]"
          >
            {pkg}
          </text>
        </g>
      ))}

      {/* Reverse direction blocked */}
      <line
        x1="110"
        y1="45"
        x2="110"
        y2="34"
        stroke="#EF4444"
        strokeWidth="1"
        strokeDasharray="2,2"
      />
      <text x="114" y="37" className="fill-red-500 text-[7px] font-bold">
        ✕
      </text>
      <text x="120" y="37" className="fill-red-400 text-[5px]">
        역참조 금지
      </text>

      {/* Rule label */}
      <rect
        x="35"
        y="72"
        width="150"
        height="14"
        rx="3"
        fill="#F9FAFB"
        stroke="#D1D5DB"
        strokeWidth="0.5"
      />
      <text
        x="110"
        y="82"
        textAnchor="middle"
        className="fill-gray-500 text-[6px]"
      >
        apps → packages 단방향 · 빌드 없이 소스 직접 참조
      </text>
    </svg>
  )
}

export function RsaSvg() {
  return (
    <svg viewBox="0 0 200 100" className="h-full w-full">
      {/* Center: Frontend */}
      <rect
        x="65"
        y="25"
        width="70"
        height="30"
        rx="6"
        fill="#EFF6FF"
        stroke="#3B82F6"
        strokeWidth="2"
      />
      <text
        x="100"
        y="40"
        textAnchor="middle"
        className="fill-blue-700 text-[8px] font-bold"
      >
        Frontend
      </text>
      <text
        x="100"
        y="50"
        textAnchor="middle"
        className="fill-blue-500 text-[6px]"
      >
        MSW 도메인별 분리
      </text>

      {/* Condition flag */}
      <rect
        x="60"
        y="62"
        width="80"
        height="12"
        rx="3"
        fill="#DBEAFE"
        stroke="#3B82F6"
        strokeWidth="0.8"
      />
      <text
        x="100"
        y="71"
        textAnchor="middle"
        className="fill-blue-600 text-[5px]"
      >
        VITE_ENABLE_MOCKS=true
      </text>

      {/* Backend - not needed */}
      <rect
        x="155"
        y="30"
        width="36"
        height="20"
        rx="4"
        fill="#F9FAFB"
        stroke="#D1D5DB"
        strokeWidth="1"
        strokeDasharray="3,2"
      />
      <text
        x="173"
        y="43"
        textAnchor="middle"
        className="fill-gray-400 text-[6px]"
      >
        BE API
      </text>
      <line
        x1="137"
        y1="40"
        x2="152"
        y2="40"
        stroke="#D1D5DB"
        strokeWidth="1"
        strokeDasharray="3,2"
      />
      <text
        x="144"
        y="36"
        textAnchor="middle"
        className="fill-gray-300 text-[7px]"
      >
        ✕
      </text>

      {/* Production bundle */}
      <rect
        x="8"
        y="30"
        width="44"
        height="20"
        rx="4"
        fill="#ECFDF5"
        stroke="#10B981"
        strokeWidth="1"
      />
      <text
        x="30"
        y="40"
        textAnchor="middle"
        className="fill-emerald-700 text-[5px]"
      >
        Production
      </text>
      <text
        x="30"
        y="48"
        textAnchor="middle"
        className="fill-emerald-500 text-[5px]"
      >
        mock 미포함
      </text>

      {/* Label */}
      <text
        x="100"
        y="90"
        textAnchor="middle"
        className="fill-gray-400 text-[7px]"
      >
        조건부 활성화로 프로덕션 번들에 mock 코드 제거
      </text>
    </svg>
  )
}

export function MpcSvg() {
  return (
    <svg viewBox="0 0 220 95" className="h-full w-full">
      {/* UI side */}
      <rect
        x="10"
        y="10"
        width="60"
        height="50"
        rx="4"
        fill="#F9FAFB"
        stroke="#6B7280"
        strokeWidth="1"
      />
      <rect
        x="10"
        y="10"
        width="60"
        height="10"
        rx="4"
        fill="#E5E7EB"
        stroke="#6B7280"
        strokeWidth="0.5"
      />
      <text
        x="40"
        y="17"
        textAnchor="middle"
        className="fill-gray-500 text-[5px]"
      >
        Wallet UI
      </text>
      <text
        x="40"
        y="30"
        textAnchor="middle"
        className="fill-gray-600 text-[6px]"
      >
        잔액 조회
      </text>
      <text
        x="40"
        y="40"
        textAnchor="middle"
        className="fill-gray-600 text-[6px]"
      >
        토큰 전송
      </text>
      <text
        x="40"
        y="50"
        textAnchor="middle"
        className="fill-gray-600 text-[6px]"
      >
        이력 확인
      </text>

      {/* Arrow */}
      <line x1="72" y1="35" x2="82" y2="35" stroke="#D1D5DB" strokeWidth="1" />
      <polygon points="80,33 84,35 80,37" fill="#D1D5DB" />

      {/* Backend modules */}
      <rect
        x="85"
        y="5"
        width="125"
        height="62"
        rx="4"
        fill="#F0FDF4"
        stroke="#10B981"
        strokeWidth="1"
      />
      <text
        x="147"
        y="14"
        textAnchor="middle"
        className="fill-emerald-700 text-[6px] font-medium"
      >
        NestJS Backend
      </text>

      {/* Module boxes */}
      <rect
        x="90"
        y="18"
        width="35"
        height="16"
        rx="3"
        fill="#ECFDF5"
        stroke="#10B981"
        strokeWidth="0.8"
      />
      <text
        x="107"
        y="28"
        textAnchor="middle"
        className="fill-emerald-700 text-[5px]"
      >
        Auth
      </text>

      <rect
        x="130"
        y="18"
        width="35"
        height="16"
        rx="3"
        fill="#ECFDF5"
        stroke="#10B981"
        strokeWidth="0.8"
      />
      <text
        x="147"
        y="28"
        textAnchor="middle"
        className="fill-emerald-700 text-[5px]"
      >
        Wallet
      </text>

      <rect
        x="170"
        y="18"
        width="35"
        height="16"
        rx="3"
        fill="#ECFDF5"
        stroke="#10B981"
        strokeWidth="0.8"
      />
      <text
        x="187"
        y="28"
        textAnchor="middle"
        className="fill-emerald-700 text-[5px]"
      >
        Transfer
      </text>

      {/* WaaS module (external API layer) */}
      <rect
        x="110"
        y="40"
        width="75"
        height="16"
        rx="3"
        fill="#EFF6FF"
        stroke="#3B82F6"
        strokeWidth="0.8"
      />
      <text
        x="147"
        y="50"
        textAnchor="middle"
        className="fill-blue-700 text-[5px]"
      >
        WaaS (외부 API 통신 격리)
      </text>

      {/* Signing lock highlight */}
      <rect
        x="90"
        y="72"
        width="120"
        height="14"
        rx="3"
        fill="#FEF3C7"
        stroke="#F59E0B"
        strokeWidth="0.8"
      />
      <text
        x="150"
        y="82"
        textAnchor="middle"
        className="fill-amber-700 text-[6px]"
      >
        🔒 keyId 단위 서명 락 → 동시성 제어
      </text>
    </svg>
  )
}
