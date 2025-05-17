import Container from '@dashboard-components/container'
import CreateNewDraftButton from '@dashboard-components/create-new-draft-button'
import DraftCard from '@dashboard-components/draft-card'
import Divider from '@dashboard-components/ui/divider'
import { drafts } from '@data/drafts'

export default function DraftsSection() {
  return (
    <section>
      <header className="p-4">
        <h1>Drafts</h1>
      </header>
      <Divider />
      <Container className="py-8 md:py-16">
        <ul className="grid grid-cols-[repeat(auto-fit,_minmax(min(var(--draft-card-width),_100%),_1fr))] gap-4">
          <li>
            <CreateNewDraftButton />
          </li>
          {drafts.map((draft) => (
            <li key={draft.id}>
              <DraftCard draft={draft} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
