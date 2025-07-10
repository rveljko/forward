import IssuesListColumn from '@dashboard-components/issues-list-column'
import IssuesListItem from '@dashboard-components/issues-list-item'
import { DragOverlay } from '@dnd-kit/core'
import { useIssues } from '@services/contexts/issues-context'
import { Issue } from '@utils/types'

type IssuesListBoardProps = React.ComponentPropsWithoutRef<'div'> & {
  activeId: Issue['id'] | null
}

export default function IssuesListBoard({
  activeId,
  ...props
}: IssuesListBoardProps) {
  const { getIssueById } = useIssues()

  return (
    <div {...props}>
      <IssuesListColumn status="todo" />
      <IssuesListColumn status="in-progress" />
      <IssuesListColumn status="finished" />
      <DragOverlay>
        {activeId && <IssuesListItem issue={getIssueById(activeId)} />}
      </DragOverlay>
    </div>
  )
}
