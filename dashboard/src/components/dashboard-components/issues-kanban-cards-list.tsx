import IssuesKanbanCard from '@dashboard-components/issues-kanban-card'
import { useDndContext } from '@dnd-kit/core'
import { SortableContext } from '@dnd-kit/sortable'
import { Issue } from '@utils/types'
import { cn } from '@utils/utils'
import { AnimatePresence, motion } from 'motion/react'

type IssuesKanbanCardsListProps = React.ComponentPropsWithRef<'ul'> & {
  issues: Issue[]
}

export default function IssuesKanbanCardsList({
  issues,
  className,
  ...props
}: IssuesKanbanCardsListProps) {
  const { active } = useDndContext()

  const isDragging = active !== null

  return (
    <ul
      className={cn('flex min-h-0 flex-1 flex-col gap-2', className)}
      {...props}
    >
      <SortableContext items={issues.map(({ id }) => id)}>
        <AnimatePresence mode="popLayout" initial={false}>
          {issues.map((issue) => (
            <motion.li
              layout={!isDragging}
              key={issue.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
            >
              <IssuesKanbanCard issue={issue} />
            </motion.li>
          ))}
        </AnimatePresence>
      </SortableContext>
    </ul>
  )
}
