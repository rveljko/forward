import Button from '@/components/ui/button'
import Divider from '@/components/ui/divider'
import ClockIcon from '@/icons/clock-icon'
import DotsVerticalIcon from '@/icons/dots-vertical-icon'
import { Draft } from '@/utils/types'
import { cn } from '@/utils/utils'

type DraftCardProps = {
  draft: Draft
}

export default function DraftCard({
  draft: { title, daysAgo, category },
}: DraftCardProps) {
  return (
    <article className="relative flex h-full flex-col overflow-hidden rounded-lg border border-white shadow-sm ring ring-neutral-900/10 hover:cursor-pointer hover:ring-neutral-900/20 pointer-coarse:transition pointer-coarse:active:scale-99 pointer-coarse:active:ring-neutral-900/20">
      <div className="overflow-hidden">
        <div
          className={cn(
            'h-19 w-full rounded-b-sm transition-colors',
            category === 'general' && 'bg-neutral-200',
            category === 'idea' && 'bg-sky-200',
            category === 'meeting' && 'bg-green-200',
            category === 'inspiration' && 'bg-purple-200'
          )}
        />
      </div>
      <div className="h-14 p-2">
        <span className="line-clamp-2 text-sm font-medium text-balance">
          <span className="absolute inset-0" />
          {title}
        </span>
      </div>
      <Divider />
      <div className="flex items-center justify-between p-2">
        <span className="flex items-center gap-1 text-xs text-neutral-600 [&_svg]:size-4">
          <ClockIcon /> {daysAgo}
        </span>

        <Button
          variant="tertiary"
          className="isolate -m-1 rounded-full p-1 [&_svg]:size-4"
        >
          <DotsVerticalIcon />
        </Button>
      </div>
    </article>
  )
}
