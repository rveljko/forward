import DraftCard from '@/components/drafts/draft-card'
import Button from '@/components/ui/button'
import Divider from '@/components/ui/divider'
import { drafts } from '@/data/drafts'
import ArrowsSortIcon from '@/icons/arrows-sort-icon'
import FilterIcon from '@/icons/filters-icon'
import WritingIcon from '@/icons/writing-icon'
import { motion } from 'motion/react'

type DraftsPanelProps = {
  isNewDraftVisible: boolean
  setIsNewDraftVisible: React.Dispatch<React.SetStateAction<boolean>>
}

export default function DraftsPanel({
  isNewDraftVisible,
  setIsNewDraftVisible,
}: DraftsPanelProps) {
  return (
    <div className="flex h-full flex-col">
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
        <Button
          variant="brand"
          size="small"
          leftIcon={<WritingIcon />}
          onClick={() => {
            if (isNewDraftVisible) return

            setIsNewDraftVisible(true)
          }}
        >
          Create New Draft
        </Button>
      </div>
      <Divider />
      <div className="grow scrollbar-none overflow-y-auto px-4 py-8 @4xl/dashboard:scrollbar-thin">
        <ul className="mx-auto grid w-full max-w-200 grid-cols-[repeat(auto-fit,minmax(min(--spacing(55),100%),1fr))] gap-4">
          {isNewDraftVisible && (
            <motion.li
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <DraftCard
                draft={{
                  title: 'Curiosity turns challenges into new opportunities',
                  category: 'inspiration',
                  daysAgo: '0d ago',
                }}
              />
            </motion.li>
          )}
          {drafts.map((draft, index) => (
            <motion.li layout="position" key={draft.title}>
              <DraftCard draft={draft} key={index} />
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  )
}
