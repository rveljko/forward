import Divider from '@dashboard-components/ui/divider'
import CalendarIcon from '@icons/calendar-icon'
import {
  iso8601DateFormatter,
  shortMonthYearFormatter,
} from '@utils/date-formatters'
import { Guide } from '@utils/types'

type GuideCardProps = {
  guide: Guide
}

export default function GuideCard({
  guide: { title, lastEdit },
}: GuideCardProps) {
  return (
    <article className="ring-section-outline h-full overflow-hidden rounded-lg shadow-sm ring">
      <div className="overflow-hidden rounded-t-lg">
        <div className="from-brand-600 to-brand-500 aspect-2/1 w-full bg-linear-0" />
      </div>
      <div className="h-16 p-2">
        <h3 className="line-clamp-2 text-balance">{title}</h3>
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
