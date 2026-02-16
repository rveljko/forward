import IssuePriority from '@/components/issue-priority'
import IssueStatus from '@/components/issue-status'
import IssueTag from '@/components/issue-tag'
import DotsVerticalIcon from '@/icons/dots-vertical-icon'
import { dayMonthShortFormatter } from '@/utils/date-formatters'
import { Issue } from '@/utils/types'

type IssueKanbanCardProps = Issue

export default function IssueKanbanCard({
  title,
  status,
  priority,
  tag,
}: IssueKanbanCardProps) {
  return (
    <article className="rounded-sm p-4 shadow-sm ring ring-black/10">
      <div className="mb-4 flex items-center gap-2">
        <IssuePriority priority={priority} />
        <div className="flex items-center gap-1">
          <IssueStatus status={status} />
          <h3 className="line-clamp-1 text-sm font-medium break-all">
            {title}
          </h3>
        </div>
        <span className="[&_svg]:text-dashboard-neutral-600 ml-auto">
          <DotsVerticalIcon />
        </span>
      </div>
      <span className="text-dashboard-neutral-600 mb-2 flex text-xs text-nowrap">
        {dayMonthShortFormatter(new Date())}
      </span>
      <IssueTag tag={tag} />
    </article>
  )
}
