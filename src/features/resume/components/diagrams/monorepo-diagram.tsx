export function MonorepoDiagram() {
  return (
    <svg
      viewBox="0 0 350 90"
      className="h-full w-full rounded-lg border border-gray-100 bg-white p-2"
    >
      {/* Background */}
      <rect width="350" height="90" fill="#FAFAFA" rx="6" />

      {/* Apps Container */}
      <g transform="translate(15, 15)">
        <rect
          width="100"
          height="60"
          rx="4"
          fill="#EFF6FF"
          stroke="#3B82F6"
          strokeWidth="1.2"
        />
        <text
          x="50"
          y="14"
          textAnchor="middle"
          className="fill-blue-900 text-[8px] font-bold"
        >
          앱 서비스 (apps/)
        </text>

        <rect
          x="8"
          y="22"
          width="84"
          height="12"
          rx="1.5"
          fill="#FFFFFF"
          stroke="#93C5FD"
          strokeWidth="0.8"
        />
        <text
          x="50"
          y="30"
          textAnchor="middle"
          className="fill-blue-800 text-[5.5px] font-semibold"
        >
          결제 서비스
        </text>

        <rect
          x="8"
          y="38"
          width="84"
          height="12"
          rx="1.5"
          fill="#FFFFFF"
          stroke="#93C5FD"
          strokeWidth="0.8"
        />
        <text
          x="50"
          y="46"
          textAnchor="middle"
          className="fill-blue-800 text-[5.5px] font-semibold"
        >
          대시보드 App
        </text>
      </g>

      {/* Unidirectional Import Arrow */}
      <g transform="translate(125, 20)">
        <line
          x1="0"
          y1="12"
          x2="30"
          y2="12"
          stroke="#10B981"
          strokeWidth="2.5"
        />
        <polygon points="28,9 32,12 28,15" fill="#10B981" />
        <text
          x="15"
          y="6"
          textAnchor="middle"
          className="fill-emerald-700 text-[5px] font-bold"
        >
          Import (✓)
        </text>
      </g>

      {/* Unidirectional Block Arrow */}
      <g transform="translate(125, 50)">
        <line
          x1="30"
          y1="12"
          x2="0"
          y2="12"
          stroke="#EF4444"
          strokeWidth="1.5"
          strokeDasharray="3,1"
        />
        <polygon points="4,9 0,12 4,15" fill="#EF4444" />
        <text
          x="15"
          y="6"
          textAnchor="middle"
          className="fill-red-600 text-[5px] font-bold"
        >
          역참조 차단 (🚫)
        </text>
      </g>

      {/* Packages Container */}
      <g transform="translate(165, 15)">
        <rect
          width="170"
          height="60"
          rx="4"
          fill="#ECFDF5"
          stroke="#10B981"
          strokeWidth="1.2"
        />
        <text
          x="85"
          y="14"
          textAnchor="middle"
          className="fill-emerald-900 text-[8px] font-bold"
        >
          공통 패키지 (packages/)
        </text>

        {/* 5 packages block */}
        <g transform="translate(5, 24)">
          {['ui', 'auth', 'shared', 'theme', 'config'].map((pkg, i) => (
            <rect
              key={pkg}
              x={i * 32}
              y="0"
              width="28"
              height="14"
              rx="1.5"
              fill="#FFFFFF"
              stroke="#A7F3D0"
              strokeWidth="0.8"
            />
          ))}
          {['ui', 'auth', 'shared', 'theme', 'config'].map((pkg, i) => (
            <text
              key={pkg}
              x={14 + i * 32}
              y="9"
              textAnchor="middle"
              className="fill-emerald-800 text-[5px] font-semibold"
            >
              {pkg}
            </text>
          ))}
        </g>

        <text
          x="85"
          y="52"
          textAnchor="middle"
          className="fill-emerald-750 text-[5px] font-semibold"
        >
          ESLint 규칙으로 apps ➔ packages 단방향 의존성 강제
        </text>
      </g>
    </svg>
  )
}
