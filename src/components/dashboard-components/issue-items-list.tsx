import IssueItem from '@dashboard-components/issue-item'
import { Issue } from '@utils/types'

type IssueItemsListProps = React.ComponentPropsWithoutRef<'ul'> & {
  issues: Issue[]
  icon: React.JSX.Element
}

export default function IssueItemsList({
  issues,
  icon: Icon,
  ...props
}: IssueItemsListProps) {
  return (
    <ul {...props}>
      {issues.map((issue) => (
        <li key={issue.id}>
          <IssueItem issue={issue} icon={Icon} />
        </li>
      ))}
    </ul>
  )
}
