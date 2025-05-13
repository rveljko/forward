import {
  iso8601DateFormatter,
  usLongDateFormatter,
} from '@utils/date-formatters'

type DateDividerProps = {
  date: Date
}

export default function DateDivider({ date }: DateDividerProps) {
  return (
    <div className="flex items-center justify-between gap-2" role="separator">
      <div className="h-0.25 w-full bg-neutral-400"></div>
      <time
        className="text-sm text-nowrap text-neutral-400"
        dateTime={iso8601DateFormatter(date)}
      >
        {usLongDateFormatter(date)}
      </time>
      <div className="h-0.25 w-full bg-neutral-400"></div>
    </div>
  )
}
