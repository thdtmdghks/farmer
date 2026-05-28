export function SimplifiedFeIndependence() {
  return (
    <svg
      viewBox="0 0 350 120"
      className="h-full w-full rounded-lg border border-gray-100 bg-white p-2"
    >
      {/* Background Grid Accent */}
      <rect width="350" height="120" fill="#FAFAFA" rx="6" />

      {/* Clients Group */}
      <g transform="translate(15, 15)">
        {/* PC Laptop Screen */}
        <rect
          x="0"
          y="25"
          width="55"
          height="35"
          rx="3"
          fill="#E2E8F0"
          stroke="#94A3B8"
          strokeWidth="1"
        />
        <rect x="4" y="29" width="47" height="27" rx="1.5" fill="#1E293B" />
        <text
          x="28"
          y="46"
          textAnchor="middle"
          fill="#38BDF8"
          className="font-mono text-[9px] font-semibold"
        >
          &lt;/&gt;
        </text>
        {/* Laptop Keyboard Base */}
        <path d="M-5,60 L60,60 L65,65 L-10,65 Z" fill="#94A3B8" />

        {/* Mobile Phone */}
        <rect
          x="70"
          y="15"
          width="26"
          height="50"
          rx="4"
          fill="#64748B"
          stroke="#475569"
          strokeWidth="1"
        />
        <rect x="73" y="19" width="20" height="42" rx="2" fill="#0F172A" />
        {/* Phone mock screen element */}
        <rect
          x="76"
          y="23"
          width="14"
          height="6"
          rx="1"
          fill="#38BDF8"
          opacity="0.8"
        />
        <line
          x1="76"
          y1="33"
          x2="88"
          y2="33"
          stroke="#94A3B8"
          strokeWidth="1"
        />
        <line
          x1="76"
          y1="37"
          x2="84"
          y2="37"
          stroke="#94A3B8"
          strokeWidth="1"
        />

        {/* Development Status Badge */}
        <rect
          x="-12"
          y="0"
          width="74"
          height="13"
          rx="3.5"
          fill="#ECFDF5"
          stroke="#A7F3D0"
          strokeWidth="0.8"
        />
        <text
          x="25"
          y="9"
          textAnchor="middle"
          className="fill-emerald-800 text-[7px] font-extrabold"
        >
          독립 개발 진행 ✓
        </text>

        <text
          x="45"
          y="82"
          textAnchor="middle"
          className="fill-slate-650 text-[9px] font-extrabold"
        >
          PC & 모바일 클라이언트
        </text>
      </g>

      {/* MSW Sandbox Hub */}
      <g transform="translate(165, 20)">
        {/* Outer Glow Circle */}
        <circle
          cx="20"
          cy="25"
          r="26"
          fill="#F5F3FF"
          stroke="#C084FC"
          strokeWidth="1.5"
          strokeDasharray="3,1"
        />
        <circle
          cx="20"
          cy="25"
          r="21"
          fill="#EDE9FE"
          stroke="#8B5CF6"
          strokeWidth="2"
        />

        <text
          x="20"
          y="29"
          textAnchor="middle"
          className="fill-purple-700 text-sm font-bold"
        >
          ⚙️
        </text>

        <text
          x="20"
          y="64"
          textAnchor="middle"
          className="fill-purple-900 text-[9.5px] font-extrabold"
        >
          MSW Sandbox
        </text>
        <text
          x="20"
          y="72"
          textAnchor="middle"
          className="fill-purple-700 text-[8px] font-bold"
        >
          로컬 Mock API 제공
        </text>
      </g>

      {/* Cloud Server (Under Construction) */}
      <g transform="translate(270, 15)">
        <path
          d="M20,40 C10,40 5,32 15,22 C10,10 30,5 40,15 C50,10 60,20 55,32 C65,32 65,40 55,40 Z"
          fill="#FEF3C7"
          stroke="#FCD34D"
          strokeWidth="1.5"
        />
        <text
          x="35"
          y="28"
          textAnchor="middle"
          className="fill-amber-800 text-[10px] font-extrabold"
        >
          Cloud
        </text>
        <text
          x="35"
          y="52"
          textAnchor="middle"
          className="fill-amber-700 text-[8.5px] font-extrabold"
        >
          백엔드 API
        </text>
        <text
          x="35"
          y="61"
          textAnchor="middle"
          className="animate-pulse fill-amber-600 text-[8px] font-extrabold"
        >
          개발 중 🚧
        </text>
      </g>

      {/* Connections */}
      {/* Client -> MSW (Connected & Working) */}
      <g>
        <path
          d="M118,45 L152,45"
          stroke="#10B981"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <polygon points="150,42 156,45 150,48" fill="#10B981" />
        <text
          x="135"
          y="38"
          textAnchor="middle"
          className="fill-emerald-800 text-[8.5px] font-extrabold"
        >
          Mock ✓
        </text>
      </g>

      {/* MSW -> Cloud (Blocked/Dependency Removed) */}
      <g>
        <path
          d="M218,45 L262,45"
          stroke="#D97706"
          strokeWidth="1.5"
          strokeDasharray="3,3"
          strokeLinecap="round"
        />
        {/* Red/Yellow Disconnect Badge */}
        <circle cx="240" cy="45" r="7" fill="#D97706" />
        <text
          x="240"
          y="48.5"
          textAnchor="middle"
          className="fill-white text-[9px] font-extrabold"
        >
          !
        </text>
      </g>
    </svg>
  )
}
