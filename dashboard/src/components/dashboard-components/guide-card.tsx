import Badge from '@dashboard-components/ui/badge'
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
  guide: { title, slug, thumbnailUrl, lastEdit, tags },
}: GuideCardProps) {
  return (
    <article className="relative overflow-hidden rounded-lg border border-white bg-white shadow-sm ring ring-neutral-900/10 hover:cursor-pointer hover:ring-neutral-900/20 has-[a:focus-visible]:ring-2 has-[a:focus-visible]:ring-black pointer-coarse:transition pointer-coarse:active:scale-99 pointer-coarse:active:ring-neutral-900/20">
      <div className="max-h-42 w-full overflow-hidden mask-linear-360 mask-linear-from-transparent mask-linear-to-black">
        <img src={thumbnailUrl} alt="" />
      </div>
      <div className="p-2">
        <h3>
          <Link
            to={`/guides/${slug}`}
            className="mb-1 block font-medium text-balance text-black focus:outline-0"
          >
            <span className="absolute inset-0" />
            {title}
          </Link>
        </h3>
        <ul className="flex items-center gap-1">
          {tags.map(({ text, color }, index) => (
            <li key={index}>
              <Badge color={color}>{text}</Badge>
            </li>
          ))}
        </ul>
      </div>
      <Divider />
      <div className="p-2">
        <div className="flex items-center gap-1 text-xs text-neutral-600">
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
