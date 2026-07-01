import { createFileRoute } from '@tanstack/react-router'
import { ResumeDetails } from '@/features/resume/components/resume-details'

export const Route = createFileRoute('/resume-career')({
  component: ResumeCareerPage,
})

function ResumeCareerPage() {
  return (
    <div className="mx-auto max-w-3xl bg-white p-8 print:p-6">
      <ResumeDetails />
    </div>
  )
}
