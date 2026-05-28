export function SimplifiedTestStability() {
  return (
    <svg
      viewBox="0 0 350 120"
      className="h-full w-full rounded-lg border border-gray-100 bg-white p-2"
    >
      {/* Background Grid Accent */}
      <rect width="350" height="120" fill="#FAFAFA" rx="6" />

      {/* Code Input / Git Commit (Left) */}
      <g transform="translate(15, 25)">
        <rect
          width="45"
          height="35"
          rx="3.5"
          fill="#EFF6FF"
          stroke="#3B82F6"
          strokeWidth="1.5"
        />
        {/* Git Commit Graphic Inside Box */}
        <circle cx="13" cy="18" r="3" fill="#60A5FA" />
        <circle cx="28" cy="11" r="3" fill="#3B82F6" />
        <circle cx="28" cy="25" r="3" fill="#3B82F6" />
        <path
          d="M13,18 L25,11 M13,18 L25,25"
          stroke="#3B82F6"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <text
          x="22.5"
          y="47"
          textAnchor="middle"
          className="fill-slate-650 text-[9px] font-extrabold"
        >
          Git Commit
        </text>
      </g>

      {/* Path Arrow 1 */}
      <g>
        <path
          d="M68,45 L132,45"
          stroke="#3B82F6"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <polygon points="130,42 136,45 130,48" fill="#3B82F6" />
      </g>

      {/* Test Shield (Middle Gate) */}
      <g transform="translate(145, 12)">
        {/* Shield Outer Glow */}
        <path
          d="M10,15 C10,15 35,5 35,5 C35,5 60,15 60,15 C60,45 50,68 35,77 C20,68 10,45 10,15 Z"
          fill="#ECFDF5"
          stroke="#10B981"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        {/* Shield Bold Checkmark */}
        <path
          d="M24,38 L31,45 L46,28"
          fill="none"
          stroke="#059669"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <text
          x="35"
          y="84"
          textAnchor="middle"
          className="fill-emerald-800 text-[9.5px] font-extrabold"
        >
          Vitest & Playwright
        </text>
        <text
          x="35"
          y="92"
          textAnchor="middle"
          className="fill-emerald-600 text-[8px] font-bold"
        >
          Test Shield
        </text>
      </g>

      {/* Bouncing Bugs (Muted, Softer Contrast) */}
      <g transform="translate(68, 6)">
        {/* Softer Text Label (No plate/badge background) */}
        <text
          x="37"
          y="11"
          textAnchor="middle"
          className="fill-slate-500 text-[8px] font-extrabold"
        >
          Bugs Blocked 🚫
        </text>

        {/* Bug shape 1 (Slate Gray color) */}
        <circle cx="38" cy="34" r="5" fill="#64748B" />
        {/* Antennas & legs */}
        <line
          x1="35"
          y1="29"
          x2="32"
          y2="25"
          stroke="#64748B"
          strokeWidth="1.2"
        />
        <line
          x1="41"
          y1="29"
          x2="44"
          y2="25"
          stroke="#64748B"
          strokeWidth="1.2"
        />
        <line
          x1="33"
          y1="34"
          x2="29"
          y2="34"
          stroke="#64748B"
          strokeWidth="1.2"
        />
        <line
          x1="43"
          y1="34"
          x2="47"
          y2="34"
          stroke="#64748B"
          strokeWidth="1.2"
        />

        {/* Bounce Path in slate gray */}
        <path
          d="M20,38 L82,28 L58,10"
          stroke="#94A3B8"
          strokeWidth="1.2"
          strokeDasharray="2,2"
          fill="none"
        />
        {/* Bouncing Arrow Head in slate gray */}
        <polygon points="56,14 58,10 62,11" fill="#94A3B8" />

        {/* Impact Spark at shield edge */}
        <path
          d="M79,28 L85,28 M82,25 L82,31 M80,26 L84,30 M84,26 L80,30"
          stroke="#94A3B8"
          strokeWidth="0.8"
        />
      </g>

      {/* Path Arrow 2 (Passed) */}
      <g>
        <path
          d="M212,45 L258,45"
          stroke="#10B981"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <polygon points="256,42 262,45 256,48" fill="#10B981" />
      </g>

      {/* Rocket Launch (Right) */}
      <g transform="translate(270, 15)">
        {/* Launch clouds */}
        <ellipse cx="25" cy="72" rx="20" ry="10" fill="#E2E8F0" opacity="0.7" />

        {/* Speed lines */}
        <line
          x1="5"
          y1="20"
          x2="5"
          y2="40"
          stroke="#93C5FD"
          strokeWidth="1"
          strokeDasharray="3,3"
          opacity="0.6"
        />
        <line
          x1="45"
          y1="15"
          x2="45"
          y2="35"
          stroke="#93C5FD"
          strokeWidth="1"
          strokeDasharray="3,3"
          opacity="0.6"
        />

        {/* Rocket Body */}
        <path
          d="M17,45 C17,25 25,12 25,12 C25,12 33,25 33,45 L33,65 L17,65 Z"
          fill="#3B82F6"
        />
        <path
          d="M17,28 C17,20 25,12 25,12 C25,12 33,20 33,28 Z"
          fill="#EF4444"
        />
        {/* Rocket Wings */}
        <path d="M17,55 L7,65 L17,65 Z" fill="#EF4444" />
        <path d="M33,55 L43,65 L33,65 Z" fill="#EF4444" />
        {/* Port Window */}
        <circle
          cx="25"
          cy="38"
          r="4.5"
          fill="#E2E8F0"
          stroke="#1E293B"
          strokeWidth="1"
        />
        {/* Fire */}
        <path d="M21,65 L25,78 L29,65 Z" fill="#F97316" />
        <path d="M23,65 L25,73 L27,65 Z" fill="#FBBF24" />

        <text
          x="25"
          y="84"
          textAnchor="middle"
          className="fill-blue-700 text-[9.5px] font-extrabold"
        >
          Safe Deploy 🚀
        </text>
      </g>
    </svg>
  )
}
