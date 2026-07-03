import { createFileRoute } from '@tanstack/react-router'
import { ResumeFeSummary } from '@/features/resume/components/resume-fe-summary'
import { ResumeDetails } from '@/features/resume/components/resume-details'

export const Route = createFileRoute('/resume-fe-all')({
  component: ResumeFeAllPage,
})

function ResumeFeAllPage() {
  return (
    <div className="mx-auto max-w-3xl bg-white p-8 print:p-6">
      <ResumeFeSummary />
      <hr className="my-10 border-gray-300" />
      <ResumeDetails />
    </div>
  )
}
