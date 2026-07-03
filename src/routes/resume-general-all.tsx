import { createFileRoute } from '@tanstack/react-router'
import { ResumeSummary } from '@/features/resume/components/resume-summary'
import { ResumeDetails } from '@/features/resume/components/resume-details'

export const Route = createFileRoute('/resume-general-all')({
  component: ResumeGeneralAllPage,
})

function ResumeGeneralAllPage() {
  return (
    <div className="mx-auto max-w-3xl bg-white p-8 print:p-6">
      <ResumeSummary />
      <hr className="my-10 border-gray-300" />
      <ResumeDetails />
    </div>
  )
}
