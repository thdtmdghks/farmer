import type { StoryCard } from '../data/resume-data'
import { FeIndependenceDiagram } from './diagrams/fe-independence-diagram'
import { MonorepoDiagram } from './diagrams/monorepo-diagram'
import { TestStabilityDiagram } from './diagrams/test-stability-diagram'

function getDiagram(id: string) {
  switch (id) {
    case 'fe-independence':
      return <FeIndependenceDiagram />
    case 'test-stability':
      return <TestStabilityDiagram />
    case 'monorepo':
      return <MonorepoDiagram />
    default:
      return null
  }
}

export function StoryCardComponent({ story }: { story: StoryCard }) {
  const diagram = getDiagram(story.id)

  return (
    <div className="rounded-lg border border-l-4 border-gray-200 border-l-blue-500 bg-white p-6">
      <h3 className="mb-3 text-lg font-bold text-gray-900">{story.title}</h3>

      <p className="mb-3 text-sm leading-relaxed text-rose-400 print:text-gray-600">
        {story.problem}
      </p>

      <p className="mb-3 text-sm leading-relaxed text-emerald-500 print:text-gray-800">
        {story.solution}
      </p>

      {diagram && (
        <div className="mt-4 space-y-4 rounded-lg border border-dashed border-gray-200 bg-gray-50/50 p-4">
          {diagram}
        </div>
      )}

      <div className="mt-4 flex flex-wrap gap-1.5">
        {story.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-500"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}
