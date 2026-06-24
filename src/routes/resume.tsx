import { createFileRoute } from '@tanstack/react-router'
import { Resume1V2Summary } from '@/features/resume/components/resume1v2-summary'
import { Resume1V2Details } from '@/features/resume/components/resume1v2-details'

export const Route = createFileRoute('/resume')({
  component: ResumePage,
})

function ResumePage() {
  return (
    <div className="mx-auto max-w-3xl bg-white p-8 print:p-6">
      <Resume1V2Summary />
      <Resume1V2Details />
    </div>
  )
}
