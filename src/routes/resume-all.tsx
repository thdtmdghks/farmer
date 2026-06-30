import { createFileRoute } from '@tanstack/react-router'
import { Resume2Summary } from '@/features/resume/components/resume2-summary'
import { Resume2Details } from '@/features/resume/components/resume2-details'

export const Route = createFileRoute('/resume-all')({
  component: ResumeAllPage,
})

function ResumeAllPage() {
  return (
    <div className="mx-auto max-w-3xl bg-white p-8 print:p-6">
      <Resume2Summary />
      <Resume2Details />
    </div>
  )
}
