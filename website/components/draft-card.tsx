import ClockIcon from '@/icons/clock-icon'
import DotsVerticalIcon from '@/icons/dots-vertical-icon'
import { Draft } from '@/utils/types'

type DraftCardProps = {
  draft: Draft
}

export default function DraftCard({
  draft: { title, daysAgo },
}: DraftCardProps) {
  return (
    <article className="h-full rounded-lg shadow-sm ring ring-black/10">
      <div className="overflow-hidden rounded-t-lg">
        <div className="aspect-3/1 w-full bg-black/10"></div>
      </div>
      <div className="h-14 border-b border-b-black/10 p-2">
        <span className="line-clamp-2 text-sm font-medium text-balance">
          {title}
        </span>
      </div>
      <div className="flex items-center justify-between p-2">
        <span className="text-dashboard-neutral-600 flex items-center gap-1 text-xs [&_svg]:size-4">
          <ClockIcon /> {daysAgo}
        </span>
        <span className="[&_svg]:size-4">
          <DotsVerticalIcon />
        </span>
      </div>
    </article>
  )
}
