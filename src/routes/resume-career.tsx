import { createFileRoute } from '@tanstack/react-router'
import { Resume2Details } from '@/features/resume/components/resume2-details'

export const Route = createFileRoute('/resume-career')({
  component: ResumeCareerPage,
})

function ResumeCareerPage() {
  return (
    <div className="mx-auto max-w-3xl bg-white p-8 print:p-6">
      <Resume2Details />
    </div>
  )
}
