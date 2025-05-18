import Divider from '@dashboard-components/ui/divider'
import { useDrafts } from '@services/contexts/drafts-context'
import { TITLE_PREFIX } from '@utils/constants'
import { Link, Navigate } from 'react-router'

type DraftSectionProps = {
  draftId: string
}

export default function DraftSection({ draftId }: DraftSectionProps) {
  const { getDraftById } = useDrafts()

  const draft = getDraftById(draftId)

  if (!draft) return <Navigate to="/dashboard/drafts" />

  const { title } = draft

  return (
    <section>
      <title>{`${TITLE_PREFIX}${title}`}</title>
      <header className="p-4">
        <div className="flex items-center gap-1">
          <Link to="/dashboard/drafts" className="text-clickable">
            Drafts
          </Link>
          <span className="text-neutral-400">/</span>
          <p>{title}</p>
        </div>
      </header>
      <Divider />
    </section>
  )
}
