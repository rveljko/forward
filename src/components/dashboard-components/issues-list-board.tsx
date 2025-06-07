import IssueColumn from '@dashboard-components/issue-column'

type IssuesListBoardProps = React.ComponentPropsWithoutRef<'div'>

export default function IssuesListBoard({ ...props }: IssuesListBoardProps) {
  return (
    <div {...props}>
      <IssueColumn status="todo" />
      <IssueColumn status="in-progress" />
      <IssueColumn status="finished" />
    </div>
  )
}
