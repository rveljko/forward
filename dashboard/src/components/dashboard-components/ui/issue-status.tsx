import { useIssues } from '@services/contexts/issues-context'
import { IssueStatusLabel } from '@utils/types'
import { cn } from '@utils/utils'

type IssueStatusProps = React.ComponentPropsWithoutRef<'span'> & {
  status: IssueStatusLabel
}

export default function IssueStatus({
  status,
  className,
  ...props
}: IssueStatusProps) {
  const { getIssueStatus } = useIssues()
  const { name, icon: Icon } = getIssueStatus(status)

  return (
    <span
      title={name}
      className={cn('text-clickable shrink-0', className)}
      {...props}
    >
      <Icon />
      <span className="sr-only">{`${name} status`}</span>
    </span>
  )
}
