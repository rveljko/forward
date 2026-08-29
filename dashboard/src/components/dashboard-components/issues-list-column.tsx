import IssuesColumnHeader from '@dashboard-components/issues-column-header'
import IssuesListItemsList from '@dashboard-components/issues-list-items-list'
import { useDndContext, useDroppable } from '@dnd-kit/core'
import { useIssues } from '@services/contexts/issues-context'
import { IssueStatusLabel } from '@utils/types'
import { cn } from '@utils/utils'
import { motion } from 'motion/react'

type IssuesListColumnProps = React.ComponentProps<typeof motion.div> & {
  status: IssueStatusLabel
}

export default function IssuesListColumn({
  status,
  className,
  ...props
}: IssuesListColumnProps) {
  const { getIssuesByStatus, getIssueStatus } = useIssues()
  const { name, icon: Icon } = getIssueStatus(status)

  const { setNodeRef } = useDroppable({ id: status })
  const { active } = useDndContext()

  const isDragging = active !== null

  return (
    <motion.div
      layout={!isDragging}
      className={cn('flex min-h-29 flex-col', className)}
      {...props}
    >
      <motion.div layout className="sticky top-0 z-10">
        <IssuesColumnHeader
          title={name}
          icon={<Icon />}
          numberOfIssues={getIssuesByStatus(status).length}
          status={status}
          className="border-b border-b-neutral-200 bg-white"
        />
      </motion.div>
      <IssuesListItemsList
        issues={getIssuesByStatus(status)}
        ref={setNodeRef}
      />
    </motion.div>
  )
}
