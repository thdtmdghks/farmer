import { createFileRoute } from '@tanstack/react-router'
import { ResumeBeSummary } from '@/features/resume/components/resume-be-summary'

export const Route = createFileRoute('/resume-be')({
  component: ResumeGeneralPage,
})

function ResumeGeneralPage() {
  return (
    <div className="mx-auto max-w-3xl bg-white p-8 print:p-6">
      <ResumeBeSummary />
    </div>
  )
}
