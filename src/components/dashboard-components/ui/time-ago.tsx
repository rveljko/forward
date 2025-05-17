import ClockIcon from '@icons/clock-icon'
import { cn } from '@utils/utils'
import ReactTimeAgo from 'react-timeago'
import { makeIntlFormatter } from 'react-timeago/defaultFormatter'

type TimeAgoProps = React.ComponentProps<typeof ReactTimeAgo> & {
  date: Date
  className?: string
}

export default function TimeAgo({ className, date, ...props }: TimeAgoProps) {
  const formatter = makeIntlFormatter({
    locale: 'en-US',
    style: 'narrow',
    numeric: 'always',
  })

  return (
    <div className={cn('flex items-center gap-1 text-neutral-400', className)}>
      <span className="[&_svg]:size-4">
        <ClockIcon />
      </span>
      <span>
        <ReactTimeAgo date={date} formatter={formatter} {...props} />
      </span>
    </div>
  )
}
