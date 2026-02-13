import IssuePriority from '@/components/issue-priority'
import IssueStatus from '@/components/issue-status'
import IssueTag from '@/components/issue-tag'
import DotsVerticalIcon from '@/icons/dots-vertical-icon'
import { dayMonthShortFormatter } from '@/utils/date-formatters'
import { Issue } from '@/utils/types'
import { cn } from '@/utils/utils'

type IssueItemProps = React.ComponentPropsWithoutRef<'article'> & Issue

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
        <IssuePriority priority={priority} className="mr-1" />
        <IssueStatus status={status} />
        <span className="line-clamp-1 text-sm break-all">{title}</span>
      </div>
      <div className="text-dashboard-neutral-600 flex items-center gap-2">
        <div className="flex items-center gap-2 max-lg:hidden">
          <IssueTag tag={tag} />
          <span className="text-xs text-nowrap">
            {dayMonthShortFormatter(new Date())}
          </span>
        </div>
        <DotsVerticalIcon />
      </div>
    </article>
  )
}
