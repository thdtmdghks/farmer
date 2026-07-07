import { createFileRoute } from '@tanstack/react-router'
import { ResumeBeSummary } from '@/features/resume/components/resume-be-summary'
import { ResumeBeDetails } from '@/features/resume/components/resume-be-details'

export const Route = createFileRoute('/resume-be-all')({
  component: ResumeGeneralAllPage,
})

function ResumeGeneralAllPage() {
  return (
    <div className="mx-auto max-w-3xl bg-white p-8 print:p-6">
      <ResumeBeSummary />
      <hr className="my-10 border-gray-300" />
      <ResumeBeDetails />
    </div>
  )
}
