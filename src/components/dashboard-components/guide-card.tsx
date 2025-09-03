import Divider from '@dashboard-components/ui/divider'
import CalendarIcon from '@icons/calendar-icon'
import { usePreferences } from '@services/contexts/preferences-context'
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
  guide: { title, slug, thumbnailDarkUrl, thumbnailLightUrl, lastEdit },
}: GuideCardProps) {
  const { isLightTheme } = usePreferences()

  return (
    <article className="ring-section-outline pointer-coarse:active:ring-clickable/20 hover:ring-clickable/20 relative flex h-full flex-col overflow-hidden rounded-lg shadow-sm ring pointer-coarse:transition-all pointer-coarse:active:scale-99">
      <div className="grow overflow-hidden rounded-t-lg">
        <div className="from-brand-600 to-brand-500 flex w-full items-center justify-center bg-linear-0 p-4">
          <div className="aspect-16/10 w-full">
            <img
              src={isLightTheme ? thumbnailLightUrl : thumbnailDarkUrl}
              alt=""
              className="rounded-sm"
            />
          </div>
        </div>
      </div>
      <div className="mt-auto">
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
      </div>
    </article>
  )
}
