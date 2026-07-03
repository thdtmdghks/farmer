import { createFileRoute } from '@tanstack/react-router'
import { ResumeFeDetails } from '@/features/resume/components/resume-fe-details'

export const Route = createFileRoute('/resume-career')({
  component: ResumeCareerPage,
})

function ResumeCareerPage() {
  return (
    <div className="mx-auto max-w-3xl bg-white p-8 print:p-6">
      <ResumeFeDetails />
    </div>
  )
}
