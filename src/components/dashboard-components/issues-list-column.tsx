import IssuesColumnHeader from '@dashboard-components/issues-column-header'
import IssuesListItemsList from '@dashboard-components/issues-list-items-list'
import { useDroppable } from '@dnd-kit/core'
import { useIssues } from '@services/contexts/issues-context'
import { IssueStatusLabel } from '@utils/types'
import { cn } from '@utils/utils'

type IssuesListColumnProps = React.ComponentPropsWithoutRef<'div'> & {
  status: IssueStatusLabel
}

export default function IssuesListColumn({
  status,
  className,
  ...props
}: IssuesListColumnProps) {
  const { getIssuesByStatus, getIssueStatus } = useIssues()
  const { name, icon: Icon } = getIssueStatus(status)

  const { setNodeRef } = useDroppable({ id: status })

  return (
    <div className={cn('flex min-h-30.5 flex-col', className)} {...props}>
      <IssuesColumnHeader
        title={name}
        icon={<Icon />}
        numberOfIssues={getIssuesByStatus(status).length}
        status={status}
      />
      <IssuesListItemsList
        issues={getIssuesByStatus(status)}
        ref={setNodeRef}
      />
    </div>
  )
}
