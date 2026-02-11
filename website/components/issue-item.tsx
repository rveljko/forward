import CircleDashedIcon from '@/icons/circle-dashed-icon'
import CircleEmptyIcon from '@/icons/circle-empty-icon'
import CircleHalfIcon from '@/icons/circle-half-icon'
import DesignIssueTagIcon from '@/icons/design-issue-tag-icon'
import DevelopmentIssueTagIcon from '@/icons/development-issue-tag-icon'
import DotsVerticalIcon from '@/icons/dots-vertical-icon'
import PriorityHighIcon from '@/icons/priority-high-icon'
import PriorityMediumIcon from '@/icons/priority-medium-icon'
import { dayMonthShortFormatter } from '@/utils/date-formatters'
import { cn } from '@/utils/utils'

type TagLabel = 'design' | 'development'

type StatusLabel = 'backlog' | 'todo' | 'in-progress'

type PriorityLabel = 'medium' | 'high'

type IssueItemProps = React.ComponentPropsWithoutRef<'article'> & {
  title: string
  status: StatusLabel
  priority: PriorityLabel
  tag: TagLabel
}

export default function IssueItem({
  title,
  status,
  priority,
  tag,
  className,
  ...props
}: IssueItemProps) {
  return (
    <article
      className={cn(
        'flex h-15.5 items-center justify-between gap-2 p-4',
        className
      )}
      {...props}
    >
      <div className="flex items-center gap-1">
        <span className="mr-1 shrink-0">{getPriorityIcon(priority)}</span>
        <span className="shrink-0">{getStatusIcon(status)}</span>
        <span className="line-clamp-1 break-all">{title}</span>
      </div>
      <div className="text-dashboard-neutral-600 flex items-center gap-2">
        <div className="flex items-center gap-2 max-lg:hidden">
          <span className="flex w-max items-center justify-center gap-1 rounded-full border border-black/10 px-3 py-1 text-sm">
            {getTagIcon(tag)}
            {getTagTitle(tag)}
          </span>
          <span className="text-sm text-nowrap">
            {dayMonthShortFormatter(new Date())}
          </span>
        </div>
        <DotsVerticalIcon />
      </div>
    </article>
  )
}

function getStatusIcon(status: StatusLabel) {
  switch (status) {
    case 'backlog':
      return <CircleDashedIcon />
    case 'todo':
      return <CircleEmptyIcon />
    case 'in-progress':
      return <CircleHalfIcon />
  }
}

function getPriorityIcon(priority: PriorityLabel) {
  switch (priority) {
    case 'medium':
      return <PriorityMediumIcon />
    case 'high':
      return <PriorityHighIcon />
  }
}

function getTagIcon(tag: TagLabel) {
  switch (tag) {
    case 'design':
      return <DesignIssueTagIcon />
    case 'development':
      return <DevelopmentIssueTagIcon />
  }
}

function getTagTitle(tag: TagLabel) {
  switch (tag) {
    case 'design':
      return 'Design'
    case 'development':
      return 'Development'
  }
}
