import { useEffect, useState } from 'react'
import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 border-b backdrop-blur transition-colors duration-300',
        scrolled
          ? 'bg-background/95 border-border/40'
          : 'border-transparent bg-transparent',
      )}
    >
      <div className="container mx-auto flex h-14 items-center px-4">
        <span className="text-lg font-bold">{siteConfig.name}</span>
      </div>
    </header>
  )
}
