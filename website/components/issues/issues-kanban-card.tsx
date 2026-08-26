import IssuePriority from '@/components/issues/issue-priority'
import IssueStatus from '@/components/issues/issue-status'
import IssueTag from '@/components/issues/issue-tag'
import Button from '@/components/ui/button'
import DotsVerticalIcon from '@/icons/dots-vertical-icon'
import { dayMonthShortFormatter } from '@/utils/date-formatters'
import { Issue } from '@/utils/types'

type IssuesKanbanCardProps = Issue

export default function IssuesKanbanCard({
  title,
  status,
  priority,
  tag,
}: IssuesKanbanCardProps) {
  return (
    <article className="relative rounded-md bg-white p-4 shadow-sm ring ring-neutral-900/10 hover:ring-neutral-900/20 pointer-coarse:transition-all pointer-coarse:active:scale-99 pointer-coarse:active:ring-neutral-900/20">
      <header className="mb-4 flex items-center gap-2">
        <IssuePriority priority={priority} />
        <div className="flex items-center gap-1">
          <IssueStatus status={status} />
          <span className="line-clamp-1 font-medium break-all text-black hover:cursor-pointer">
            <span className="absolute inset-0" />
            {title}
          </span>
        </div>
        <div className="ml-auto">
          <Button
            variant="tertiary"
            className="isolate -m-1 rounded-full p-1 text-neutral-600 hover:text-black"
          >
            <DotsVerticalIcon />
          </Button>
        </div>
      </header>
      <span></span>
      <span className="mb-2 inline-block text-xs text-nowrap text-neutral-600">
        {dayMonthShortFormatter(new Date())}
      </span>
      <IssueTag tag={tag} />
    </article>
  )
}
