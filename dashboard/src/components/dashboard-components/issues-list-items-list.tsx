import IssuesListItem from '@dashboard-components/issues-list-item'
import { SortableContext } from '@dnd-kit/sortable'
import { Issue } from '@utils/types'
import { cn } from '@utils/utils'
import { AnimatePresence, motion } from 'motion/react'

type IssuesListItemsListProps = React.ComponentPropsWithRef<'ul'> & {
  issues: Issue[]
}

export default function IssuesListItemsList({
  issues,
  className,
  ...props
}: IssuesListItemsListProps) {
  return (
    <ul
      className={cn(
        'grow divide-y divide-neutral-200 last:border-b last:border-neutral-200',
        className
      )}
      {...props}
    >
      <SortableContext items={issues}>
        <AnimatePresence mode="popLayout" initial={false}>
          {issues.map((issue) => (
            <motion.li
              layout
              key={issue.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <IssuesListItem issue={issue} />
            </motion.li>
          ))}
        </AnimatePresence>
      </SortableContext>
    </ul>
  )
}
