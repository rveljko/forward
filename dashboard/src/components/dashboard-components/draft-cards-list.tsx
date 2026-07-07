import DraftCard from '@dashboard-components/draft-card'
import { Draft } from '@utils/types'
import { cn } from '@utils/utils'
import { AnimatePresence, motion } from 'motion/react'
import React from 'react'

type DraftCardsListProps = React.ComponentPropsWithoutRef<'ul'> & {
  drafts: Draft[]
}

export default function DraftCardsList({
  drafts,
  className,
  ...props
}: DraftCardsListProps) {
  return (
    <ul
      className={cn(
        'grid grid-cols-[repeat(auto-fit,minmax(min(var(--draft-card-width),100%),1fr))] gap-4',
        className
      )}
      {...props}
    >
      <AnimatePresence mode="popLayout" initial={false}>
        {drafts.map((draft) => (
          <motion.li
            layout="position"
            key={draft.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
          >
            <DraftCard draft={draft} />
          </motion.li>
        ))}
      </AnimatePresence>
    </ul>
  )
}
