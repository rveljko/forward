import Divider from '@dashboard-components/ui/divider'
import TimeAgo from '@dashboard-components/ui/time-ago'
import { Draft } from '@utils/types'
import { Link } from 'react-router'

type DraftCardProps = {
  draft: Draft
}

export default function DraftCard({
  draft: { id, title, lastEdit },
}: DraftCardProps) {
  return (
    <article className="ring-section-outline relative h-full overflow-hidden rounded-lg shadow-sm ring">
      <div className="bg-clickable/10 aspect-3/1 w-full"></div>
      <div className="p-2">
        <h3 className="line-clamp-2 text-balance">
          <Link to={`/dashboard/drafts/${id}`}>
            <span className="absolute inset-0"></span>
            {title}
          </Link>
        </h3>
      </div>
      <Divider />
      <div className="p-2">
        <TimeAgo date={lastEdit} />
      </div>
    </article>
  )
}
