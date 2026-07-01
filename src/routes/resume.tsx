import { createFileRoute } from '@tanstack/react-router'
import { ResumeSummary } from '@/features/resume/components/resume-summary'

export const Route = createFileRoute('/resume')({
  component: ResumePage,
})

function ResumePage() {
  return (
    <div className="mx-auto max-w-3xl bg-white p-8 print:p-6">
      <ResumeSummary />
    </div>
  )
}
