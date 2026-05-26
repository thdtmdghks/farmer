import type { CompanyData } from '../data/resume-data'
import { KeywordCardComponent } from './keyword-card'

const groupLabels: Record<string, string> = {
  'test-zero-incident': '테스트 자동화 → 안정적인 서비스',
}

export function CompanySection({ data }: { data: CompanyData }) {
  const rendered = new Set<string>()

  const renderCards = () => {
    const elements: React.ReactNode[] = []

    data.cards.forEach((card) => {
      if (rendered.has(card.id)) return

      if (card.group) {
        // 같은 그룹의 카드들을 모아서 그룹 박스로 감싸기
        const groupCards = data.cards.filter((c) => c.group === card.group)
        groupCards.forEach((c) => rendered.add(c.id))

        elements.push(
          <div
            key={card.group}
            className="rounded-lg border-2 border-dashed border-amber-300 bg-amber-50/30 p-4"
          >
            <p className="mb-3 text-center text-sm font-semibold text-amber-700">
              {groupLabels[card.group] ?? card.group}
            </p>
            <div className="grid grid-cols-1 gap-4">
              {groupCards.map((gc) => (
                <KeywordCardComponent key={gc.id} card={gc} />
              ))}
            </div>
          </div>,
        )
      } else {
        rendered.add(card.id)
        elements.push(<KeywordCardComponent key={card.id} card={card} />)
      }
    })

    return elements
  }

  return (
    <section className="mb-10 rounded-lg bg-gray-50 p-6 print:break-before-auto">
      {/* 회사 헤더 */}
      <div className="mb-1 flex items-baseline justify-between">
        <div className="flex items-baseline gap-2">
          <h2 className="text-xl font-bold text-gray-900">{data.company}</h2>
          <span className="text-sm text-gray-400">{data.description}</span>
        </div>
        <span className="text-sm text-gray-400">{data.period}</span>
      </div>
      <p className="mb-3 text-sm text-gray-500">{data.role}</p>

      {/* 요약 */}
      <ul className="mb-5 border-l-2 border-gray-300 pl-3 text-sm leading-relaxed text-gray-500">
        {data.summary.map((item) => (
          <li key={item}>· {item}</li>
        ))}
      </ul>

      {/* 카드 */}
      <div className="grid grid-cols-1 gap-5">{renderCards()}</div>
    </section>
  )
}
