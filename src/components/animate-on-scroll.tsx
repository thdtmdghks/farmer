import type { CSSProperties, ReactNode } from 'react'
import { ANIMATION_DURATION, ANIMATION_EASING } from '@/config/animation'
import { useInView } from '@/hooks/use-in-view'
import { cn } from '@/lib/utils'

type Animation = 'fade-up' | 'fade-left' | 'fade-right' | 'zoom-in'

interface AnimateOnScrollProps {
  children: ReactNode
  animation: Animation
  delay?: number
  className?: string
}

const hiddenTransform: Record<Animation, string> = {
  'fade-up': 'translateY(40px)',
  'fade-left': 'translateX(-40px)',
  'fade-right': 'translateX(40px)',
  'zoom-in': 'scale(0.9)',
}

export function AnimateOnScroll({
  children,
  animation,
  delay = 0,
  className,
}: AnimateOnScrollProps) {
  const { ref, isInView } = useInView()

  const style: CSSProperties = {
    opacity: isInView ? 1 : 0,
    transform: isInView ? 'none' : hiddenTransform[animation],
    transition: `opacity ${ANIMATION_DURATION} ${ANIMATION_EASING}, transform ${ANIMATION_DURATION} ${ANIMATION_EASING}`,
    transitionDelay: `${delay}ms`,
  }

  return (
    <div ref={ref} className={cn(className)} style={style}>
      {children}
    </div>
  )
}
