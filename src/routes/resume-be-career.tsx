import { createFileRoute } from '@tanstack/react-router'
import { ResumeBeDetails } from '@/features/resume/components/resume-be-details'

export const Route = createFileRoute('/resume-be-career')({
  component: ResumeGeneralCareerPage,
})

function ResumeGeneralCareerPage() {
  return (
    <div className="mx-auto max-w-3xl bg-white p-8 print:p-6">
      <ResumeBeDetails />
    </div>
  )
}
