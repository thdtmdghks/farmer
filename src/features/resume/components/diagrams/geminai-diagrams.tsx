export function LogZoomSvg() {
  return (
    <svg viewBox="0 0 200 100" className="h-full w-full">
      {/* Axes */}
      <line x1="30" y1="75" x2="180" y2="75" stroke="#D1D5DB" strokeWidth="1" />
      <line x1="30" y1="75" x2="30" y2="15" stroke="#D1D5DB" strokeWidth="1" />
      <text
        x="105"
        y="90"
        textAnchor="middle"
        className="fill-gray-400 text-[7px]"
      >
        줌 입력값
      </text>
      <text
        x="15"
        y="45"
        textAnchor="middle"
        className="fill-gray-400 text-[6px]"
        transform="rotate(-90, 15, 45)"
      >
        px/초
      </text>
      {/* Linear line (dashed, faded) */}
      <line
        x1="30"
        y1="75"
        x2="180"
        y2="15"
        stroke="#EF4444"
        strokeWidth="1"
        strokeDasharray="3,3"
        opacity="0.5"
      />
      <text x="165" y="22" className="fill-red-400 text-[6px]">
        선형
      </text>
      {/* Log curve - actual log shape: steep at start, flattens out */}
      <path
        d="M30,75 C50,40 70,30 100,25 C130,21 155,19 180,18"
        fill="none"
        stroke="#3B82F6"
        strokeWidth="2"
      />
      <text x="120" y="38" className="fill-blue-600 text-[6px] font-medium">
        log (체감 자연스러움)
      </text>
      {/* Annotation: fine control zone */}
      <rect
        x="35"
        y="38"
        width="30"
        height="14"
        rx="2"
        fill="none"
        stroke="#3B82F6"
        strokeWidth="0.8"
        strokeDasharray="2,1"
      />
      <text
        x="50"
        y="48"
        textAnchor="middle"
        className="fill-blue-600 text-[5px]"
      >
        정밀 구간
      </text>
      {/* Label */}
      <text
        x="100"
        y="96"
        textAnchor="middle"
        className="fill-gray-400 text-[7px]"
      >
        낮은 줌에서 넓은 범위, 높은 줌에서 프레임 단위 정밀 편집
      </text>
    </svg>
  )
}

export function MemorySvg() {
  return (
    <svg viewBox="0 0 200 100" className="h-full w-full">
      {/* Axes */}
      <line x1="20" y1="80" x2="185" y2="80" stroke="#D1D5DB" strokeWidth="1" />
      <line x1="20" y1="80" x2="20" y2="10" stroke="#D1D5DB" strokeWidth="1" />
      <text
        x="100"
        y="95"
        textAnchor="middle"
        className="fill-gray-400 text-[7px]"
      >
        시간 (24h)
      </text>
      <text
        x="8"
        y="45"
        textAnchor="middle"
        className="fill-gray-400 text-[6px]"
        transform="rotate(-90, 8, 45)"
      >
        Heap
      </text>
      {/* Before: rising line */}
      <path
        d="M20,70 L50,60 L80,45 L100,30 L110,20"
        fill="none"
        stroke="#EF4444"
        strokeWidth="1.5"
      />
      <text x="90" y="16" className="fill-red-500 text-[6px]">
        💥 OOM
      </text>
      {/* After: flat line */}
      <path
        d="M20,65 L50,62 L80,63 L110,61 L140,62 L170,63 L185,62"
        fill="none"
        stroke="#10B981"
        strokeWidth="2"
      />
      {/* Legend */}
      <line
        x1="130"
        y1="20"
        x2="145"
        y2="20"
        stroke="#EF4444"
        strokeWidth="1.5"
      />
      <text x="148" y="23" className="fill-red-500 text-[6px]">
        Before
      </text>
      <line
        x1="130"
        y1="30"
        x2="145"
        y2="30"
        stroke="#10B981"
        strokeWidth="2"
      />
      <text x="148" y="33" className="fill-emerald-600 text-[6px]">
        After (Flat)
      </text>
      {/* Fix annotation */}
      <text
        x="100"
        y="75"
        textAnchor="middle"
        className="fill-emerald-600 text-[6px]"
      >
        타이머 해제 + 이벤트 리스너 정리 + 참조 해제
      </text>
    </svg>
  )
}
