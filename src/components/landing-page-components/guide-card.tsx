import CalendarIcon from '@icons/calendar-icon'
import {
  iso8601DateFormatter,
  shortMonthYearFormatter,
} from '@utils/date-formatters'
import { Guide } from '@utils/types'
import { cn } from '@utils/utils'
import { Link } from 'react-router'

type GuideCardProps = React.ComponentPropsWithoutRef<'article'> & {
  guide: Guide
}

export default function GuideCard({
  guide: { title, slug, lastEdit },
  className,
  ...props
}: GuideCardProps) {
  return (
    <article
      className={cn(
        'relative flex w-full max-w-180 gap-2 overflow-hidden rounded-t-2xl max-md:flex-col',
        className
      )}
      {...props}
    >
      <div className="from-clickable/5 border-section-outline aspect-video w-full max-w-97 min-w-0 rounded-2xl border bg-linear-0 to-transparent p-4">
        <div className="from-brand-600 to-brand-500 size-full rounded-lg bg-linear-0" />
      </div>
      <div className="flex flex-col justify-between gap-1">
        <h3 className="text-clickable text-xl font-medium text-balance md:text-2xl">
          <Link to={`/dashboard/guides/${slug}`}>
            <span className="absolute inset-0" />
            {title}
          </Link>
        </h3>
        <div className="flex items-center gap-1 text-neutral-400">
          <span>
            <CalendarIcon />
          </span>
          <time dateTime={iso8601DateFormatter(lastEdit)}>
            {shortMonthYearFormatter(lastEdit)}
          </time>
        </div>
      </div>
    </article>
  )
}
