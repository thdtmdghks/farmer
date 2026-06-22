import { createFileRoute } from '@tanstack/react-router'
import { Resume1Summary } from '@/features/resume/components/resume1-summary'
import { Resume1Details } from '@/features/resume/components/resume1-details'

export const Route = createFileRoute('/resume1')({
  component: Resume1Page,
})

function Resume1Page() {
  return (
    <div className="mx-auto max-w-3xl bg-white p-8 print:p-6">
      <Resume1Summary />
      <Resume1Details />
    </div>
  )
}
