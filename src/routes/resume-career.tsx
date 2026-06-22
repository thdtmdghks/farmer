import { createFileRoute } from '@tanstack/react-router'
import { Resume1Details } from '@/features/resume/components/resume1-details'

export const Route = createFileRoute('/resume-career')({
  component: ResumeCareerPage,
})

function ResumeCareerPage() {
  return (
    <div className="mx-auto max-w-3xl bg-white p-8 print:p-6">
      <Resume1Details />
    </div>
  )
}
