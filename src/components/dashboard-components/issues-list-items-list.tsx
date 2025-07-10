import IssuesListItem from '@dashboard-components/issues-list-item'
import { Issue } from '@utils/types'

type IssuesListItemsListProps = React.ComponentPropsWithRef<'ul'> & {
  issues: Issue[]
}

export default function IssuesListItemsList({
  issues,
  ...props
}: IssuesListItemsListProps) {
  return (
    <ul {...props}>
      {issues.map((issue) => (
        <li key={issue.id}>
          <IssuesListItem issue={issue} />
        </li>
      ))}
    </ul>
  )
}
