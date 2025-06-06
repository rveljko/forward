import { useIssues } from '@services/contexts/issues-context'
import { IssuePriorityLabel } from '@utils/types'

type IssuePriorityProps = {
  priority: IssuePriorityLabel
}

export default function IssuePriority({ priority }: IssuePriorityProps) {
  const { getIssuePriority } = useIssues()
  const { icon: Icon, name } = getIssuePriority(priority)

  return (
    <span className="text-neutral-400">
      <Icon />
      <span className="sr-only">{`${name} priority`}</span>
    </span>
  )
}
