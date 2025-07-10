import IssuesKanbanCard from '@dashboard-components/issues-kanban-card'
import IssuesKanbanColumn from '@dashboard-components/issues-kanban-column'
import {
  DndContext,
  DragOverEvent,
  DragOverlay,
  DragStartEvent,
} from '@dnd-kit/core'
import { useIssues } from '@services/contexts/issues-context'
import { Issue } from '@utils/types'
import { cn } from '@utils/utils'
import { useState } from 'react'

type IssuesKanbanBoardProps = React.ComponentPropsWithoutRef<'div'>

export default function IssuesKanbanBoard({
  className,
  ...props
}: IssuesKanbanBoardProps) {
  const { updateIssuePosition, getIssueById } = useIssues()
  const [activeId, setActiveId] = useState<Issue['id'] | null>(null)

  function handleDragStart(event: DragStartEvent) {
    setActiveId(event.active.id as Issue['id'])
  }

  function handleDragOver(e: DragOverEvent) {
    const { active, over } = e

    if (!over) return

    if (active.id === over.id) return

    updateIssuePosition(active.id, over.id)
  }

  function handleDragEnd() {
    setActiveId(null)
  }

  return (
    <div className="w-0 min-w-full grow">
      <DndContext
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        onDragEnd={handleDragEnd}
      >
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
      </DndContext>
    </div>
  )
}
