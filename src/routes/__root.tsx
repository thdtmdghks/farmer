import { createRootRoute, Outlet } from '@tanstack/react-router'
import { DebugOverlay } from '@/components/debug-overlay'

export const Route = createRootRoute({
  component: () => (
    <>
      <Outlet />
      <DebugOverlay />
    </>
  ),
})
