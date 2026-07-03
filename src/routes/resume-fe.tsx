import { createFileRoute } from '@tanstack/react-router'
import { ResumeFeSummary } from '@/features/resume/components/resume-fe-summary'

export const Route = createFileRoute('/resume-fe')({
  component: ResumeFePage,
})

function ResumeFePage() {
  return (
    <div className="mx-auto max-w-3xl bg-white p-8 print:p-6">
      <ResumeFeSummary />
    </div>
  )
}
