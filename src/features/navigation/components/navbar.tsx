import { siteConfig } from '@/config/site'

export function Navbar() {
  return (
    <header className="border-border/40 bg-background/95 sticky top-0 z-50 border-b backdrop-blur">
      <div className="container mx-auto flex h-14 items-center px-4">
        <span className="text-lg font-bold">{siteConfig.name}</span>
      </div>
    </header>
  )
}
