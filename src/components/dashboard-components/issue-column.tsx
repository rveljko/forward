import IssueColumnHeader from '@dashboard-components/issue-column-header'
import IssueItemsList from '@dashboard-components/issue-items-list'
import { Issue } from '@utils/types'

type IssueColumnProps = React.ComponentPropsWithoutRef<'div'> & {
  title: string
  icon: React.JSX.Element
  issues: Issue[]
}

export default function IssueColumn({
  title,
  icon: Icon,
  issues,
  ...props
}: IssueColumnProps) {
  return (
    <div {...props}>
      <IssueColumnHeader
        title={title}
        icon={Icon}
        numberOfIssues={issues.length}
      />
      <IssueItemsList issues={issues} icon={Icon} />
    </div>
  )
}
