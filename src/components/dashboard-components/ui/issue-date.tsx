import {
  dayMonthShortFormatter,
  iso8601DateFormatter,
} from '@utils/date-formatters'
import { Issue } from '@utils/types'
import { cn } from '@utils/utils'

type IssueDateProps = React.ComponentPropsWithoutRef<'time'> & {
  date: Issue['createdAt']
}

export default function IssueDate({
  date,
  className,
  ...props
}: IssueDateProps) {
  return (
    <time
      className={cn('flex text-nowrap text-neutral-400', className)}
      dateTime={iso8601DateFormatter(date)}
      {...props}
    >
      {dayMonthShortFormatter(date)}
    </time>
  )
}
