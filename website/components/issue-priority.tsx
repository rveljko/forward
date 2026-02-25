import PriorityHighIcon from '@/icons/priority-high-icon'
import PriorityMediumIcon from '@/icons/priority-medium-icon'
import PriorityNoPriorityIcon from '@/icons/priority-no-priority-icon'
import { IssuePriorityLabel } from '@/utils/types'
import { cn } from '@/utils/utils'

type IssuePriorityProps = React.ComponentPropsWithoutRef<'span'> & {
  priority: IssuePriorityLabel
}

export default function IssuePriority({
  priority,
  className,
  ...props
}: IssuePriorityProps) {
  return (
    <span className={cn('shrink-0', className)} {...props}>
      {getPriorityIcon(priority)}
    </span>
  )
}

function getPriorityIcon(priority: IssuePriorityLabel) {
  switch (priority) {
    case 'no-priority':
      return <PriorityNoPriorityIcon />
    case 'medium':
      return <PriorityMediumIcon />
    case 'high':
      return <PriorityHighIcon />
  }
}
