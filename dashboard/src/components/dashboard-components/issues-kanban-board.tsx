import IssuesKanbanCard from '@dashboard-components/issues-kanban-card'
import IssuesKanbanColumn from '@dashboard-components/issues-kanban-column'
import { issueStatuses } from '@data/issue-statuses'
import { DragOverlay } from '@dnd-kit/core'
import { useIssues } from '@services/contexts/issues-context'
import { Issue } from '@utils/types'
import { cn } from '@utils/utils'

type IssuesKanbanBoardProps = React.ComponentPropsWithoutRef<'div'> & {
  activeId: Issue['id'] | null
}

export default function IssuesKanbanBoard({
  activeId,
  className,
  ...props
}: IssuesKanbanBoardProps) {
  const { getIssueById } = useIssues()

  return (
    <div className="h-full w-0 min-w-full overflow-x-auto">
      <div
        className={cn(
          'flex min-h-full items-stretch divide-x divide-neutral-200 py-4',
          className
        )}
        {...props}
      >
        {issueStatuses.map(({ id, label }) => (
          <div className="px-2 first:pl-4 last:pr-4" key={id}>
            <IssuesKanbanColumn status={label} />
          </div>
        ))}
      </div>
      <DragOverlay>
        {activeId && <IssuesKanbanCard issue={getIssueById(activeId)} />}
      </DragOverlay>
    </div>
  )
}
