import IssuesColumnHeader from '@dashboard-components/issues-column-header'
import IssuesKanbanCardsList from '@dashboard-components/issues-kanban-cards-list'
import { useDroppable } from '@dnd-kit/core'
import { useIssues } from '@services/contexts/issues-context'
import { IssueStatusLabel } from '@utils/types'
import { cn } from '@utils/utils'

type IssuesKanbanColumnProps = React.ComponentPropsWithoutRef<'div'> & {
  status: IssueStatusLabel
}

export default function IssuesKanbanColumn({
  status,
  className,
  ...props
}: IssuesKanbanColumnProps) {
  const { getIssuesByStatus, getIssueStatus } = useIssues()
  const { name, icon: Icon } = getIssueStatus(status)

  const { setNodeRef } = useDroppable({
    id: status,
  })

  return (
    <div
      className={cn('flex h-full w-85 shrink-0 flex-col gap-2', className)}
      {...props}
    >
      <IssuesColumnHeader
        title={name}
        icon={<Icon />}
        numberOfIssues={getIssuesByStatus(status).length}
        status={status}
        className="rounded-sm"
      />
      <IssuesKanbanCardsList
        issues={getIssuesByStatus(status)}
        ref={setNodeRef}
      />
    </div>
  )
}
