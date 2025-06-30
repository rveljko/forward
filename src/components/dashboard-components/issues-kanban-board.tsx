import IssuesKanbanColumn from '@dashboard-components/issues-kanban-column'
import { DndContext, DragEndEvent } from '@dnd-kit/core'
import { useIssues } from '@services/contexts/issues-context'
import { Issue, IssueStatusLabel } from '@utils/types'
import { cn } from '@utils/utils'

type IssuesKanbanBoardProps = React.ComponentPropsWithoutRef<'div'>

export default function IssuesKanbanBoard({
  className,
  ...props
}: IssuesKanbanBoardProps) {
  const { updateIssueStatus } = useIssues()

  function handleDragEnd(e: DragEndEvent) {
    const { active, over } = e

    if (!over) return

    const issueId = active.id as Issue['id']
    const newStatus = over.id as IssueStatusLabel

    updateIssueStatus(issueId, newStatus)
  }

  return (
    <div className="w-0 min-w-full grow">
      <div
        className={cn(
          'divide-section-outline flex h-full divide-x overflow-x-auto p-4',
          className
        )}
        {...props}
      >
        <DndContext onDragEnd={handleDragEnd}>
          <div className="pr-2">
            <IssuesKanbanColumn status="todo" />
          </div>
          <div className="px-2">
            <IssuesKanbanColumn status="in-progress" />
          </div>
          <div className="pl-2">
            <IssuesKanbanColumn status="finished" />
          </div>
        </DndContext>
      </div>
    </div>
  )
}
