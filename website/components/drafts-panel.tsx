import DraftCard from '@/components/draft-card'
import Button from '@/components/ui/button'
import Divider from '@/components/ui/divider'
import { drafts } from '@/data/drafts'
import ArrowsSortIcon from '@/icons/arrows-sort-icon'
import FilterIcon from '@/icons/filters-icon'
import WritingIcon from '@/icons/writing-icon'

export default function DraftsPanel() {
  return (
    <>
      <div className="p-4">
        <span className="text-sm font-medium">Drafts</span>
      </div>
      <Divider />
      <div className="flex flex-wrap items-center justify-between gap-2 p-4">
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
        <Button variant="brand" size="small" leftIcon={<WritingIcon />}>
          Create New Draft
        </Button>
      </div>
      <Divider />
      <ul className="grid grid-cols-[repeat(auto-fit,minmax(min(--spacing(55),100%),1fr))] gap-4 px-4 py-8">
        {drafts.map((draft, index) => (
          <li key={draft.title}>
            <DraftCard draft={draft} key={index} />
          </li>
        ))}
      </ul>
    </>
  )
}
