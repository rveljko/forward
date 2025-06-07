import IssueColumnHeader from '@dashboard-components/issue-column-header'
import IssueItemsList from '@dashboard-components/issue-items-list'
import { useIssues } from '@services/contexts/issues-context'
import { IssueStatusLabel } from '@utils/types'

type IssueColumnProps = React.ComponentPropsWithoutRef<'div'> & {
  status: IssueStatusLabel
}

export default function IssueColumn({ status, ...props }: IssueColumnProps) {
  const { getIssuesByStatus, getIssueStatus } = useIssues()
  const { name, icon: Icon } = getIssueStatus(status)

  return (
    <div {...props}>
      <IssueColumnHeader
        title={name}
        icon={<Icon />}
        numberOfIssues={getIssuesByStatus(status).length}
      />
      <IssueItemsList issues={getIssuesByStatus(status)} icon={<Icon />} />
    </div>
  )
}
