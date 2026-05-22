import { useEffect, useRef, useState } from 'react'

function easeOutQuad(t: number) {
  return t * (2 - t)
}

export function useCountUp(
  target: number,
  isActive: boolean,
  duration = 2000,
): number {
  const [current, setCurrent] = useState(0)
  const rafRef = useRef<number>(0)

  useEffect(() => {
    if (!isActive) return

    const start = performance.now()

    function tick(now: number) {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      setCurrent(Math.round(easeOutQuad(progress) * target))
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick)
      }
    }

    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [isActive, target, duration])

  return current
}
