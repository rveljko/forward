import Accordion from '@dashboard-components/ui/accordion'
import { faq } from '@data/faq'

export default function FaqSection() {
  return (
    <section>
      <div className="flex flex-col gap-2 lg:flex-row lg:gap-16">
        <h2 className="w-full max-w-50">FAQ</h2>
        <Accordion defaultActive="item-1">
          {faq.map(({ id, summary, details }) => (
            <Accordion.Item value={`item-${id}`} key={id}>
              <Accordion.Summary valueForItem={`item-${id}`}>
                {summary}
              </Accordion.Summary>
              <Accordion.Details>{details}</Accordion.Details>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
