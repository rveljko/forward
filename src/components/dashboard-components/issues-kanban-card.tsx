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
import React from 'react'
import { Link } from 'react-router'

type IssuesKanbanCardProps = React.ComponentPropsWithoutRef<'article'> & {
  issue: Issue
  icon: React.JSX.Element
}

export default function IssuesKanbanCard({
  issue: { id, title, priority, tag, createdAt },
  icon: Icon,
  className,
  ...props
}: IssuesKanbanCardProps) {
  return (
    <article
      className={cn(
        'ring-section-outline relative rounded-sm p-4 ring hover:bg-neutral-700',
        className
      )}
      {...props}
    >
      <header className="mb-4 flex items-center gap-2">
        <IssuePriority priority={priority} />
        <div className="flex items-center gap-1">
          <span className="text-clickable shrink-0">{Icon}</span>
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
        <Button
          variant="tertiary"
          className="hover:text-clickable ml-auto rounded-full p-0.5 text-neutral-400"
        >
          <DotsVerticalIcon />
        </Button>
      </header>
      <time
        className="mb-2 inline-block text-nowrap text-neutral-400"
        dateTime={iso8601DateFormatter(createdAt)}
      >
        {dayMonthShortFormatter(createdAt)}
      </time>
      <IssueTag tag={tag} />
    </article>
  )
}
