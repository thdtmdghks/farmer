export function FeIndependenceDiagram() {
  return (
    <svg
      viewBox="0 0 350 90"
      className="h-full w-full rounded-lg border border-gray-100 bg-white p-2"
    >
      {/* Background */}
      <rect width="350" height="90" fill="#FAFAFA" rx="6" />

      {/* Chrome Browser Container */}
      <rect
        x="10"
        y="10"
        width="220"
        height="70"
        rx="4"
        fill="#FFFFFF"
        stroke="#CBD5E1"
        strokeWidth="1"
      />
      <rect
        x="10"
        y="10"
        width="220"
        height="12"
        rx="4"
        fill="#F1F5F9"
        stroke="#CBD5E1"
        strokeWidth="0.5"
      />
      <text x="20" y="18" className="fill-gray-400 text-[6px]">
        chrome-browser
      </text>

      {/* FE App */}
      <rect
        x="25"
        y="32"
        width="45"
        height="22"
        rx="3"
        fill="#EFF6FF"
        stroke="#3B82F6"
        strokeWidth="1"
      />
      <text
        x="47"
        y="45"
        textAnchor="middle"
        className="fill-blue-700 text-[8px] font-bold"
      >
        FE App
      </text>

      {/* API Request Line */}
      <path d="M70,43 L120,43" stroke="#94A3B8" strokeWidth="1.2" />
      <polygon points="118,40 122,43 118,46" fill="#94A3B8" />

      {/* MSW Interceptor */}
      <rect
        x="125"
        y="32"
        width="45"
        height="22"
        rx="3"
        fill="#F5F3FF"
        stroke="#8B5CF6"
        strokeWidth="1.2"
      />
      <text
        x="147"
        y="45"
        textAnchor="middle"
        className="fill-purple-700 text-[8px] font-bold"
      >
        MSW
      </text>
      <text
        x="147"
        y="51"
        textAnchor="middle"
        className="fill-purple-500 text-[5px]"
      >
        (Service Worker)
      </text>

      {/* Mock DB */}
      <rect
        x="180"
        y="32"
        width="40"
        height="22"
        rx="3"
        fill="#ECFDF5"
        stroke="#10B981"
        strokeWidth="1"
      />
      <text
        x="200"
        y="45"
        textAnchor="middle"
        className="fill-emerald-800 text-[7px] font-bold"
      >
        Mock Data
      </text>

      {/* Return Mock Data Arrow */}
      <path
        d="M180,48 L170,48 M125,48 L70,48"
        stroke="#10B981"
        strokeWidth="1.2"
        fill="none"
      />
      <polygon points="72,50 68,48 72,46" fill="#10B981" />
      <text
        x="98"
        y="55"
        textAnchor="middle"
        className="fill-emerald-600 text-[5px] font-bold"
      >
        Mock 응답
      </text>

      {/* Real Server - BLOCKED */}
      <g opacity="0.4">
        <rect
          x="270"
          y="32"
          width="70"
          height="36"
          rx="4"
          fill="#FFF1F2"
          stroke="#FDA4AF"
          strokeWidth="1"
        />
        <text
          x="305"
          y="53"
          textAnchor="middle"
          className="fill-rose-700 text-[7px]"
        >
          실제 백엔드
        </text>
      </g>
      <path
        d="M230,43 L270,43"
        stroke="#EF4444"
        strokeWidth="1.2"
        strokeDasharray="3,2"
        fill="none"
      />
      <text
        x="250"
        y="38"
        textAnchor="middle"
        className="fill-red-500 text-[8px] font-bold"
      >
        🚫
      </text>
    </svg>
  )
}
