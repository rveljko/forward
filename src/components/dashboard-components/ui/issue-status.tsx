import { useIssues } from '@services/contexts/issues-context'
import { IssueStatusLabel } from '@utils/types'

type IssueStatusProps = {
  status: IssueStatusLabel
}

export default function IssueStatus({ status }: IssueStatusProps) {
  const { getIssueStatus } = useIssues()
  const { name, icon: Icon } = getIssueStatus(status)

  return (
    <span className="text-clickable shrink-0">
      <Icon />
      <span className="sr-only">{`${name} status`}</span>
    </span>
  )
}
