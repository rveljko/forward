import IssuesKanbanColumn from '@dashboard-components/issues-kanban-column'
import { cn } from '@utils/utils'
import React from 'react'

type IssuesKanbanBoardProps = React.ComponentPropsWithoutRef<'div'>

export default function IssuesKanbanBoard({
  className,
  ...props
}: IssuesKanbanBoardProps) {
  return (
    <div className="w-0 min-w-full grow">
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
    </div>
  )
}
