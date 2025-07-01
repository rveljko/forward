import IssuesKanbanCard from '@dashboard-components/issues-kanban-card'
import { Issue } from '@utils/types'
import { cn } from '@utils/utils'

type IssuesKanbanCardsListProps = React.ComponentPropsWithRef<'ul'> & {
  issues: Issue[]
}

export default function IssuesKanbanCardsList({
  issues,
  className,
  ...props
}: IssuesKanbanCardsListProps) {
  return (
    <ul className={cn('flex grow flex-col gap-2', className)} {...props}>
      {issues.map((issue) => (
        <li key={issue.id}>
          <IssuesKanbanCard issue={issue} />
        </li>
      ))}
    </ul>
  )
}
