import { createFileRoute } from '@tanstack/react-router'
import { Resume1V2Summary } from '@/features/resume/components/resume1v2-summary'

export const Route = createFileRoute('/resume-summary')({
  component: ResumeSummaryPage,
})

function ResumeSummaryPage() {
  return (
    <div className="mx-auto max-w-3xl bg-white p-8 print:p-6">
      <Resume1V2Summary />
    </div>
  )
}
