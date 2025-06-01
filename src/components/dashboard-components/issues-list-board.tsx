import IssueColumn from '@dashboard-components/issue-column'
import CircleEmptyIcon from '@icons/circle-empty-icon'
import CircleFullIcon from '@icons/circle-full-icon'
import CircleHalfIcon from '@icons/circle-half-icon'
import { useIssues } from '@services/contexts/issues-context'

type IssuesListBoardProps = React.ComponentPropsWithoutRef<'div'>

export default function IssuesListBoard({ ...props }: IssuesListBoardProps) {
  const { getIssuesByStatus } = useIssues()

  return (
    <div {...props}>
      <IssueColumn
        title="Todo"
        icon={<CircleEmptyIcon />}
        issues={getIssuesByStatus('todo')}
      />
      <IssueColumn
        title="In Progress"
        icon={<CircleHalfIcon />}
        issues={getIssuesByStatus('in-progress')}
      />
      <IssueColumn
        title="Finished"
        icon={<CircleFullIcon />}
        issues={getIssuesByStatus('finished')}
      />
    </div>
  )
}
