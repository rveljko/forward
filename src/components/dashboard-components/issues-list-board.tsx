import IssuesListColumn from '@dashboard-components/issues-list-column'

type IssuesListBoardProps = React.ComponentPropsWithoutRef<'div'>

export default function IssuesListBoard({ ...props }: IssuesListBoardProps) {
  return (
    <div {...props}>
      <IssuesListColumn status="todo" />
      <IssuesListColumn status="in-progress" />
      <IssuesListColumn status="finished" />
    </div>
  )
}
