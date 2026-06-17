import { createFileRoute } from '@tanstack/react-router'
import { ResumeCareerPage } from '@/features/resume/components/resume-career-page'

export const Route = createFileRoute('/resume-career')({
  component: ResumeCareerPage,
})
