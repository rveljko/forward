import Container from '@dashboard-components/container'
import GuideCard from '@dashboard-components/guide-card'
import Divider from '@dashboard-components/ui/divider'
import { guides } from '@data/guides'

export default function GuidesSection() {
  return (
    <section>
      <header className="p-4">
        <h1>Guides</h1>
      </header>
      <Divider />
      <Container className="py-8 md:py-16">
        <ul className="grid grid-cols-[repeat(auto-fit,_minmax(min(var(--guide-card-width),_100%),_1fr))] gap-4">
          {guides.map((guide) => (
            <li key={guide.id}>
              <GuideCard guide={guide} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
