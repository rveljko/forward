import Container from '@dashboard-components/container'
import CreateNewDraftModalButton from '@dashboard-components/create-new-draft-modal-button'
import DraftCardsList from '@dashboard-components/draft-cards-list'
import Divider from '@dashboard-components/ui/divider'
import ArrowsSortIcon from '@icons/arrows-sort-icon'
import FilterIcon from '@icons/filter-icon'
import PlusIcon from '@icons/plus-icon'
import { useDrafts } from '@services/contexts/drafts-context'
import Button from '@ui/button'

export default function DraftsSection() {
  const { getSortedDrafts } = useDrafts()

  return (
    <section>
      <header className="p-4">
        <h1 className="font-medium">Drafts</h1>
      </header>
      <Divider />
      <div
        role="toolbar"
        className="flex flex-wrap items-center justify-between gap-2 p-4"
      >
        <div className="flex items-center gap-2">
          <Button variant="secondary" size="small" leftIcon={<FilterIcon />}>
            Filters
          </Button>
          <Button
            variant="secondary"
            size="small"
            leftIcon={<ArrowsSortIcon />}
          >
            Sort
          </Button>
        </div>
        <CreateNewDraftModalButton
          variant="primary"
          size="small"
          leftIcon={<PlusIcon />}
        >
          Create New Draft
        </CreateNewDraftModalButton>
      </div>
      <Divider />
      <Container className="py-8 md:py-16">
        <DraftCardsList drafts={getSortedDrafts()} />
      </Container>
    </section>
  )
}
