import IssuesKanbanCard from '@dashboard-components/issues-kanban-card'
import IssuesKanbanColumn from '@dashboard-components/issues-kanban-column'
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
    <div className="w-0 min-w-full grow">
      <div
        className={cn(
          'divide-section-outline flex h-full divide-x overflow-x-auto scroll-smooth p-4',
          className
        )}
        {...props}
      >
        <div className="pr-2">
          <IssuesKanbanColumn status="todo" />
        </div>
        <div className="px-2">
          <IssuesKanbanColumn status="in-progress" />
        </div>
        <div className="pl-2">
          <IssuesKanbanColumn status="finished" />
        </div>
      </div>
      <DragOverlay>
        {activeId && <IssuesKanbanCard issue={getIssueById(activeId)} />}
      </DragOverlay>
    </div>
  )
}
