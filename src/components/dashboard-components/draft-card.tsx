import Divider from '@dashboard-components/ui/divider'
import TimeAgo from '@dashboard-components/ui/time-ago'
import { Draft } from '@utils/types'

type DraftCardProps = {
  draft: Draft
}

export default function DraftCard({
  draft: { title, lastEdit },
}: DraftCardProps) {
  return (
    <article className="border-section-outline h-full overflow-hidden rounded-lg border shadow-sm">
      <div className="bg-clickable/10 aspect-3/1 w-full"></div>
      <div className="p-2">
        <h3 className="line-clamp-2 text-balance">{title}</h3>
      </div>
      <Divider />
      <div className="p-2">
        <TimeAgo date={lastEdit} />
      </div>
    </article>
  )
}
