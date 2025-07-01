import IssuesColumnHeader from '@dashboard-components/issues-column-header'
import IssuesListItemsList from '@dashboard-components/issues-list-items-list'
import { useIssues } from '@services/contexts/issues-context'
import { IssueStatusLabel } from '@utils/types'

type IssuesListColumnProps = React.ComponentPropsWithoutRef<'div'> & {
  status: IssueStatusLabel
}

export default function IssuesListColumn({
  status,
  ...props
}: IssuesListColumnProps) {
  const { getIssuesByStatus, getIssueStatus } = useIssues()
  const { name, icon: Icon } = getIssueStatus(status)

  return (
    <div {...props}>
      <IssuesColumnHeader
        title={name}
        icon={<Icon />}
        numberOfIssues={getIssuesByStatus(status).length}
        status={status}
      />
      <IssuesListItemsList issues={getIssuesByStatus(status)} />
    </div>
  )
}
