export function TestStabilityDiagram() {
  return (
    <svg
      viewBox="0 0 350 90"
      className="h-full w-full rounded-lg border border-gray-100 bg-white p-2"
    >
      {/* Background */}
      <rect width="350" height="90" fill="#FAFAFA" rx="6" />

      {/* Code change */}
      <g transform="translate(15, 27)">
        <rect
          width="45"
          height="35"
          rx="3"
          fill="#EFF6FF"
          stroke="#3B82F6"
          strokeWidth="1"
        />
        <text
          x="22"
          y="18"
          textAnchor="middle"
          className="fill-blue-700 text-[8px] font-bold"
        >
          💻 Code
        </text>
        <text
          x="22"
          y="27"
          textAnchor="middle"
          className="fill-blue-500 text-[6px]"
        >
          git push
        </text>
      </g>

      <path d="M60,45 L75,45" stroke="#94A3B8" strokeWidth="1.2" fill="none" />
      <polygon points="73,43 77,45 73,47" fill="#94A3B8" />

      {/* Gates */}
      <g transform="translate(85, 27)">
        <rect
          width="180"
          height="35"
          rx="4"
          fill="#FFFFFF"
          stroke="#E2E8F0"
          strokeWidth="1"
        />

        {/* Vitest gate */}
        <rect
          x="8"
          y="7"
          width="50"
          height="20"
          rx="2"
          fill="#ECFDF5"
          stroke="#10B981"
          strokeWidth="0.8"
        />
        <text
          x="33"
          y="19"
          textAnchor="middle"
          className="fill-emerald-800 text-[7px] font-bold"
        >
          1. Vitest
        </text>

        {/* Playwright gate */}
        <rect
          x="65"
          y="7"
          width="50"
          height="20"
          rx="2"
          fill="#ECFDF5"
          stroke="#10B981"
          strokeWidth="0.8"
        />
        <text
          x="90"
          y="19"
          textAnchor="middle"
          className="fill-emerald-800 text-[7px] font-bold"
        >
          2. Playwright
        </text>

        {/* LocalStack gate */}
        <rect
          x="122"
          y="7"
          width="50"
          height="20"
          rx="2"
          fill="#ECFDF5"
          stroke="#10B981"
          strokeWidth="0.8"
        />
        <text
          x="147"
          y="19"
          textAnchor="middle"
          className="fill-emerald-800 text-[7px] font-bold"
        >
          3. Infra
        </text>
      </g>

      <path
        d="M265,45 L280,45"
        stroke="#10B981"
        strokeWidth="1.2"
        fill="none"
      />
      <polygon points="278,43 282,45 278,47" fill="#10B981" />

      {/* CI Gate Keeper */}
      <g transform="translate(290, 20)">
        <rect
          width="50"
          height="48"
          rx="4"
          fill="#ECFDF5"
          stroke="#10B981"
          strokeWidth="1.5"
        />
        <text
          x="25"
          y="20"
          textAnchor="middle"
          className="fill-emerald-800 text-[14px] font-bold"
        >
          ✓
        </text>
        <text
          x="25"
          y="34"
          textAnchor="middle"
          className="fill-emerald-800 text-[7px] font-bold"
        >
          CI Pass
        </text>
        <text
          x="25"
          y="42"
          textAnchor="middle"
          className="fill-emerald-600 text-[5px] font-bold"
        >
          배포 완료
        </text>
      </g>
    </svg>
  )
}
