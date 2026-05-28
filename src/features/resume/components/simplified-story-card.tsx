import type { StoryCard } from '../data/resume-data'
import { SimplifiedFeIndependence } from './diagrams/simplified-fe-independence'
import { SimplifiedMonorepo } from './diagrams/simplified-monorepo'
import { SimplifiedTestStability } from './diagrams/simplified-test-stability'

function getSimplifiedDiagram(id: string) {
  switch (id) {
    case 'fe-independence':
      return <SimplifiedFeIndependence />
    case 'test-stability':
      return <SimplifiedTestStability />
    case 'monorepo':
      return <SimplifiedMonorepo />
    default:
      return null
  }
}

export function SimplifiedStoryCardComponent({ story }: { story: StoryCard }) {
  const diagram = getSimplifiedDiagram(story.id)

  return (
    <div className="rounded-lg border border-l-4 border-gray-200 border-l-indigo-500 bg-white p-6 transition-all duration-300 hover:shadow-md">
      <h3 className="mb-3 text-lg font-bold text-gray-900">{story.title}</h3>

      <div className="mb-3 space-y-1 text-sm leading-relaxed text-rose-400 print:text-gray-600">
        {story.problem.split('\n').map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>

      <div className="mb-3 space-y-1 text-sm leading-relaxed text-emerald-500 print:text-gray-800">
        {story.solution.split('\n').map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>

      {diagram && (
        <div className="mt-4 rounded-lg border border-dashed border-gray-200 bg-gray-50/30 p-2">
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
