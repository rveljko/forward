import Divider from '@dashboard-components/ui/divider'
import CalendarIcon from '@icons/calendar-icon'
import {
  iso8601DateFormatter,
  shortMonthYearFormatter,
} from '@utils/date-formatters'
import { Guide } from '@utils/types'
import { Link } from 'react-router'

type GuideCardProps = {
  guide: Guide
}

export default function GuideCard({
  guide: { title, slug, lastEdit },
}: GuideCardProps) {
  return (
    <article className="ring-section-outline pointer-coarse:active:ring-clickable/20 hover:ring-clickable/20 relative h-full overflow-hidden rounded-lg shadow-sm ring pointer-coarse:transition-all pointer-coarse:active:scale-99">
      <div className="overflow-hidden rounded-t-lg">
        <div className="from-brand-600 to-brand-500 aspect-2/1 w-full bg-linear-0" />
      </div>
      <div className="h-16 p-2">
        <h3>
          <Link
            to={`/dashboard/guides/${slug}`}
            className="text-clickable line-clamp-2 text-balance"
          >
            <span className="absolute inset-0" />
            {title}
          </Link>
        </h3>
      </div>
      <Divider />
      <div className="p-2">
        <div className="flex items-center gap-1 text-sm text-neutral-400">
          <span className="[&_svg]:size-4">
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
