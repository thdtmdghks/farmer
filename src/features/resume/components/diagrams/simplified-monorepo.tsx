export function SimplifiedMonorepo() {
  return (
    <svg
      viewBox="0 0 350 120"
      className="h-full w-full rounded-lg border border-gray-100 bg-white p-2"
    >
      {/* Background Grid Accent */}
      <rect width="350" height="120" fill="#FAFAFA" rx="6" />

      {/* Apps (Top Row) */}
      <g transform="translate(35, 15)">
        {/* Payment App */}
        <rect
          x="0"
          y="0"
          width="90"
          height="28"
          rx="4"
          fill="#EFF6FF"
          stroke="#3B82F6"
          strokeWidth="1.5"
        />
        <text
          x="45"
          y="17"
          textAnchor="middle"
          className="fill-blue-800 text-[8px] font-bold"
        >
          💳 Payment App
        </text>

        {/* Dashboard App */}
        <rect
          x="190"
          y="0"
          width="90"
          height="28"
          rx="4"
          fill="#EFF6FF"
          stroke="#3B82F6"
          strokeWidth="1.5"
        />
        <text
          x="235"
          y="17"
          textAnchor="middle"
          className="fill-blue-800 text-[8px] font-bold"
        >
          📊 Dashboard App
        </text>
      </g>

      {/* Dependency Flow Arrows (Bottom to Top) */}
      {/* Left Arrow (Import ✓) */}
      <g>
        <path
          d="M80,72 L80,50"
          stroke="#10B981"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <polygon points="76,54 80,46 84,54" fill="#10B981" />
        <text
          x="90"
          y="63"
          className="fill-emerald-800 text-[8.5px] font-extrabold"
        >
          Import ✓
        </text>
      </g>

      {/* Right Arrow (Import ✓) */}
      <g>
        <path
          d="M270,72 L270,50"
          stroke="#10B981"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <polygon points="266,54 270,46 274,54" fill="#10B981" />
        <text
          x="234"
          y="63"
          className="fill-emerald-800 text-[8.5px] font-extrabold"
        >
          Import ✓
        </text>
      </g>

      {/* Shared Packages Foundation (Bottom Row) */}
      <g transform="translate(35, 78)">
        <rect
          width="280"
          height="28"
          rx="5"
          fill="#ECFDF5"
          stroke="#10B981"
          strokeWidth="1.8"
        />
        {/* Dividers */}
        <line
          x1="93"
          y1="0"
          x2="93"
          y2="28"
          stroke="#A7F3D0"
          strokeWidth="1.5"
        />
        <line
          x1="186"
          y1="0"
          x2="186"
          y2="28"
          stroke="#A7F3D0"
          strokeWidth="1.5"
        />

        <text
          x="46"
          y="17"
          textAnchor="middle"
          className="fill-emerald-800 text-[8px] font-bold"
        >
          📦 UI Package
        </text>
        <text
          x="139"
          y="17"
          textAnchor="middle"
          className="fill-emerald-800 text-[8px] font-bold"
        >
          🔐 Auth Package
        </text>
        <text
          x="233"
          y="17"
          textAnchor="middle"
          className="fill-emerald-800 text-[8px] font-bold"
        >
          🛠️ Utils Package
        </text>
      </g>

      {/* Reverse Reference Block (ESLint Guard - Middle, Softer Focus) */}
      <g>
        {/* Downward dashed arrow in neutral gray */}
        <path
          d="M175,25 L175,54"
          stroke="#94A3B8"
          strokeWidth="1.2"
          strokeDasharray="3,2"
          strokeLinecap="round"
        />
        <polygon points="172,50 175,56 178,50" fill="#94A3B8" />

        {/* Small Softer Block Badge in slate gray */}
        <circle cx="175" cy="38" r="6" fill="#94A3B8" />
        <line
          x1="172.5"
          y1="38"
          x2="177.5"
          y2="38"
          stroke="white"
          strokeWidth="1.2"
          strokeLinecap="round"
        />

        <text
          x="175"
          y="64"
          textAnchor="middle"
          className="fill-slate-600 text-[8.5px] font-bold"
        >
          No Loop (단방향)
        </text>
        <text
          x="175"
          y="72"
          textAnchor="middle"
          className="fill-slate-400 text-[7px] font-semibold"
        >
          (ESLint Rule)
        </text>
      </g>
    </svg>
  )
}
