import { useIssues } from '@services/contexts/issues-context'
import { IssuePriorityLabel } from '@utils/types'
import { cn } from '@utils/utils'

type IssuePriorityProps = React.ComponentPropsWithoutRef<'span'> & {
  priority: IssuePriorityLabel
}

export default function IssuePriority({
  priority,
  className,
  ...props
}: IssuePriorityProps) {
  const { getIssuePriority } = useIssues()
  const { icon: Icon, name } = getIssuePriority(priority)

  return (
    <span title={name} className={cn('text-neutral-400', className)} {...props}>
      <Icon />
      <span className="sr-only">{`${name} priority`}</span>
    </span>
  )
}
