import IssuesListItem from '@dashboard-components/issues-list-item'
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
    <ul className={cn('divide-section-outline divide-y', className)} {...props}>
      {issues.map((issue) => (
        <li key={issue.id}>
          <IssuesListItem issue={issue} />
        </li>
      ))}
    </ul>
  )
}
