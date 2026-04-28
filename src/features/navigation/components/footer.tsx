import { siteConfig } from '@/config/site'

export function Footer() {
  return (
    <footer className="border-border/40 border-t py-6">
      <div className="container mx-auto px-4 text-center">
        <p className="text-muted-foreground text-sm">
          &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
          reserved.
        </p>
      </div>
    </footer>
  )
}
