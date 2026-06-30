import IssuesListItem from '@dashboard-components/issues-list-item'
import { SortableContext } from '@dnd-kit/sortable'
import { Issue } from '@utils/types'
import { cn } from '@utils/utils'

type IssuesListItemsListProps = React.ComponentPropsWithRef<'ul'> & {
  issues: Issue[]
}

export default function IssuesListItemsList({
  issues,
  className,
  ...props
}: IssuesListItemsListProps) {
  return (
    <ul
      className={cn(
        'grow divide-y divide-neutral-200 last:border-b last:border-neutral-200',
        className
      )}
      {...props}
    >
      <SortableContext items={issues}>
        {issues.map((issue) => (
          <li key={issue.id}>
            <IssuesListItem issue={issue} />
          </li>
        ))}
      </SortableContext>
    </ul>
  )
}
