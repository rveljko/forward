import IssuesListItem from '@dashboard-components/issues-list-item'
import { Issue } from '@utils/types'

type IssuesListItemsListProps = React.ComponentPropsWithoutRef<'ul'> & {
  issues: Issue[]
  icon: React.JSX.Element
}

export default function IssuesListItemsList({
  issues,
  icon: Icon,
  ...props
}: IssuesListItemsListProps) {
  return (
    <ul {...props}>
      {issues.map((issue) => (
        <li key={issue.id}>
          <IssuesListItem issue={issue} icon={Icon} />
        </li>
      ))}
    </ul>
  )
}
