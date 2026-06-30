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
      <hr className="my-10 border-gray-300" />
      <Resume2Details />
    </div>
  )
}
