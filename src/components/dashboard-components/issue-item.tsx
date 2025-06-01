import DotsVerticalIcon from '@icons/dots-vertical-icon'
import Button from '@ui/button'
import {
  dayMonthShortFormatter,
  iso8601DateFormatter,
} from '@utils/date-formatters'
import { Issue } from '@utils/types'
import { cn } from '@utils/utils'

type IssueItemProps = React.ComponentPropsWithoutRef<'article'> & {
  issue: Issue
  icon: React.JSX.Element
}

export default function IssueItem({
  issue: { title, createdAt },
  icon: Icon,
  className,
  ...props
}: IssueItemProps) {
  return (
    <article
      className={cn(
        'border-section-outline flex items-center justify-between gap-2 border-b p-4',
        className
      )}
      {...props}
    >
      <div className="flex items-center gap-1">
        <span className="shrink-0">{Icon}</span>
        <h3 className="line-clamp-1">{title}</h3>
      </div>
      <div className="flex items-center gap-1">
        <div className="max-sm:hidden">
          <time
            className="text-neutral-400"
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
