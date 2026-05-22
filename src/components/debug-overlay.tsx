import { useState } from 'react'
import { OBSERVER_ROOT_MARGIN } from '@/config/animation'

const margin = parseInt(OBSERVER_ROOT_MARGIN, 10) * -1 // 120

export function DebugOverlay() {
  const [visible, setVisible] = useState(false)

  return (
    <>
      {visible && (
        <div className="pointer-events-none fixed inset-0 z-[9999]">
          {/* 상단 반투명 영역 */}
          <div
            className="fixed top-0 right-0 left-0 bg-red-500/10"
            style={{ height: margin }}
          />
          {/* 하단 반투명 영역 */}
          <div
            className="fixed right-0 bottom-0 left-0 bg-red-500/10"
            style={{ height: margin }}
          />
          {/* 상단 경계선 */}
          <div
            className="fixed right-0 left-0 border-b-2 border-dashed border-red-500/60"
            style={{ top: margin }}
          >
            <span className="bg-red-500/80 px-2 py-0.5 text-xs text-white">
              감지 영역
            </span>
          </div>
          {/* 하단 경계선 */}
          <div
            className="fixed right-0 left-0 border-t-2 border-dashed border-red-500/60"
            style={{ bottom: margin }}
          >
            <span className="absolute bottom-0 bg-red-500/80 px-2 py-0.5 text-xs text-white">
              감지 영역
            </span>
          </div>
        </div>
      )}
      {/* 토글 버튼 */}
      <button
        type="button"
        onClick={() => setVisible((v) => !v)}
        className="fixed right-4 bottom-4 z-[9999] rounded-full bg-red-500/80 px-3 py-1.5 text-xs font-medium text-white shadow-lg transition-colors hover:bg-red-500"
      >
        감지 영역
      </button>
    </>
  )
}
