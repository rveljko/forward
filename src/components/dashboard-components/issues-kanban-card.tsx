import IssueActionsModalButton from '@dashboard-components/issue-actions-modal-button'
import IssuePriority from '@dashboard-components/ui/issue-priority'
import IssueStatus from '@dashboard-components/ui/issue-status'
import IssueTag from '@dashboard-components/ui/issue-tag'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import DotsVerticalIcon from '@icons/dots-vertical-icon'
import {
  dayMonthShortFormatter,
  iso8601DateFormatter,
} from '@utils/date-formatters'
import { Issue } from '@utils/types'
import { cn } from '@utils/utils'
import { Link } from 'react-router'

type IssuesKanbanCardProps = React.ComponentPropsWithoutRef<'article'> & {
  issue: Issue
}

export default function IssuesKanbanCard({
  issue: { id, title, status, priority, tag, createdAt },
  className,
  ...props
}: IssuesKanbanCardProps) {
  const {
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
    setNodeRef,
  } = useSortable({ id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  if (isDragging)
    return (
      <article
        className={cn(
          'ring-section-outline bg-clickable/5 h-34.5 rounded-sm ring',
          className
        )}
        style={style}
        ref={setNodeRef}
        {...attributes}
        {...listeners}
        {...props}
      />
    )

  return (
    <article
      className={cn(
        'ring-section-outline bg-section-background-color hover:ring-clickable/20 relative rounded-sm p-4 ring',
        className
      )}
      style={style}
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      {...props}
    >
      <header className="mb-4 flex items-center gap-2">
        <IssuePriority priority={priority} />
        <div className="flex items-center gap-1">
          <IssueStatus status={status} />
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
        <IssueActionsModalButton
          issueId={id}
          variant="tertiary"
          className="hover:text-clickable isolate ml-auto rounded-full p-0.5 text-neutral-400"
        >
          <DotsVerticalIcon />
          <span className="sr-only">Actions</span>
        </IssueActionsModalButton>
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
