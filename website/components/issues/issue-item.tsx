import IssuePriority from '@/components/issues/issue-priority'
import IssueStatus from '@/components/issues/issue-status'
import IssueTag from '@/components/issues/issue-tag'
import Button from '@/components/ui/button'
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
        'relative flex items-center justify-between gap-2 border-b border-b-neutral-200 p-4 hover:bg-white pointer-coarse:transition pointer-coarse:active:bg-white',
        className
      )}
      {...props}
    >
      <div className="flex items-center gap-2">
        <IssuePriority priority={priority} />
        <div className="flex items-center gap-1">
          <div className="flex h-7.5 shrink-0 items-center">
            <IssueStatus status={status} />
          </div>
          <span className="line-clamp-1 text-sm font-medium break-all hover:cursor-pointer">
            <span className="absolute inset-0" />
            {title}
          </span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div className="hidden items-center gap-2 @lg/dashboard:flex">
          <IssueTag tag={tag} />
          <span className="text-xs text-nowrap text-neutral-600">
            {dayMonthShortFormatter(new Date())}
          </span>
        </div>
        <Button
          variant="tertiary"
          className="isolate -m-1 rounded-full p-1 text-neutral-600 hover:text-black [&_svg]:size-5"
        >
          <DotsVerticalIcon />
        </Button>
      </div>
    </article>
  )
}
