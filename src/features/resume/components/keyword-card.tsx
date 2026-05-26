import type { KeywordCard } from '../data/resume-data'
import { diagramMap } from './diagrams'

const categoryStyles = {
  frontend: 'border-l-blue-500',
  backend: 'border-l-emerald-500',
} as const

export function KeywordCardComponent({ card }: { card: KeywordCard }) {
  const Diagram = diagramMap[card.id]

  return (
    <div
      className={`rounded-lg border border-l-4 border-gray-200 bg-white p-6 ${categoryStyles[card.category]}`}
    >
      {/* 키워드 + 태그 (한 줄) */}
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-lg font-bold text-gray-900">{card.keyword}</h3>
        <div className="flex flex-wrap gap-1.5">
          {card.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-500"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* 고민 */}
      <p className="mb-3 text-sm text-red-500">{card.problem}</p>

      {/* SVG 다이어그램 */}
      {Diagram && (
        <div className="mb-3 h-44">
          <Diagram />
        </div>
      )}

      {/* 해결 */}
      <p className="text-sm text-emerald-600">{card.solution}</p>
    </div>
  )
}
