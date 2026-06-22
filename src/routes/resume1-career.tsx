import { createFileRoute } from '@tanstack/react-router'
import { Resume1Details } from '@/features/resume/components/resume1-details'

export const Route = createFileRoute('/resume1-career')({
  component: Resume1CareerPage,
})

function Resume1CareerPage() {
  return (
    <div className="mx-auto max-w-3xl bg-white p-8 print:p-6">
      <Resume1Details />
    </div>
  )
}
