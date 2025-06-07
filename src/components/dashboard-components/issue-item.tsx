import IssuePriority from '@dashboard-components/ui/issue-priority'
import IssueTag from '@dashboard-components/ui/issue-tag'
import DotsVerticalIcon from '@icons/dots-vertical-icon'
import Button from '@ui/button'
import {
  dayMonthShortFormatter,
  iso8601DateFormatter,
} from '@utils/date-formatters'
import { Issue } from '@utils/types'
import { cn } from '@utils/utils'
import { Link } from 'react-router'

type IssueItemProps = React.ComponentPropsWithoutRef<'article'> & {
  issue: Issue
  icon: React.JSX.Element
}

export default function IssueItem({
  issue: { id, title, tag, priority, createdAt },
  icon: Icon,
  className,
  ...props
}: IssueItemProps) {
  return (
    <article
      className={cn(
        'border-section-outline relative flex items-center justify-between gap-2 border-b p-4 hover:bg-neutral-700',
        className
      )}
      {...props}
    >
      <div className="flex items-center gap-1">
        <IssuePriority priority={priority} />
        <div className="flex items-center gap-1">
          <div className="flex h-8.5 shrink-0 items-center">
            <span className="text-clickable">{Icon}</span>
          </div>
          <h3>
            <Link
              to={`/dashboard/issues/${id}`}
              className="text-clickable line-clamp-1 break-all"
            >
              <span className="absolute inset-0" />
              {title}
            </Link>
          </h3>
        </div>
      </div>
      <div className="flex items-center gap-1">
        <div className="flex items-center gap-1 max-sm:hidden">
          <IssueTag tag={tag} />
          <time
            className="text-nowrap text-neutral-400"
            dateTime={iso8601DateFormatter(createdAt)}
          >
            {dayMonthShortFormatter(createdAt)}
          </time>
        </div>
        <Button
          variant="tertiary"
          className="hover:text-clickable rounded-full p-0.5 text-neutral-400"
        >
          <DotsVerticalIcon />
        </Button>
      </div>
    </article>
  )
}
