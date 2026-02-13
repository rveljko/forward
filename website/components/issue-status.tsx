import CircleDashedIcon from '@/icons/circle-dashed-icon'
import CircleEmptyIcon from '@/icons/circle-empty-icon'
import CircleHalfIcon from '@/icons/circle-half-icon'
import { IssueStatusLabel } from '@/utils/types'
import { cn } from '@/utils/utils'

type IssueStatusProps = React.ComponentPropsWithoutRef<'span'> & {
  status: IssueStatusLabel
}

export default function IssueStatus({
  status,
  className,
  ...props
}: IssueStatusProps) {
  return (
    <span className={cn('shrink-0', className)} {...props}>
      {getStatusIcon(status)}
    </span>
  )
}

function getStatusIcon(status: IssueStatusLabel) {
  switch (status) {
    case 'backlog':
      return <CircleDashedIcon />
    case 'todo':
      return <CircleEmptyIcon />
    case 'in-progress':
      return <CircleHalfIcon />
  }
}
