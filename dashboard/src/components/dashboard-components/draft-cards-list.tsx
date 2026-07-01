import DraftCard from '@dashboard-components/draft-card'
import { Draft } from '@utils/types'
import { cn } from '@utils/utils'
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
      {drafts.map((draft) => (
        <li key={draft.id}>
          <DraftCard draft={draft} />
        </li>
      ))}
    </ul>
  )
}
