import IssuesKanbanColumn from '@dashboard-components/issues-kanban-column'
import { DndContext, DragOverEvent } from '@dnd-kit/core'
import { useIssues } from '@services/contexts/issues-context'
import { cn } from '@utils/utils'

type IssuesKanbanBoardProps = React.ComponentPropsWithoutRef<'div'>

export default function IssuesKanbanBoard({
  className,
  ...props
}: IssuesKanbanBoardProps) {
  const { updateIssuePosition } = useIssues()

  function handleDragOver(e: DragOverEvent) {
    const { active, over } = e

    if (!over) return

    if (active.id === over.id) return

    updateIssuePosition(active.id, over.id)
  }

  return (
    <div className="w-0 min-w-full grow">
      <DndContext onDragOver={handleDragOver}>
        <div
          className={cn(
            'divide-section-outline flex h-full divide-x overflow-x-auto p-4',
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
      </DndContext>
    </div>
  )
}
