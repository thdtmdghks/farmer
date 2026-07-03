import { createFileRoute } from '@tanstack/react-router'
import { ResumeFeSummary } from '@/features/resume/components/resume-fe-summary'
import { ResumeFeDetails } from '@/features/resume/components/resume-fe-details'

export const Route = createFileRoute('/resume-all')({
  component: ResumeAllPage,
})

function ResumeAllPage() {
  return (
    <div className="mx-auto max-w-3xl bg-white p-8 print:p-6">
      <ResumeFeSummary />
      <hr className="my-10 border-gray-300" />
      <ResumeFeDetails />
    </div>
  )
}
