import Divider from '@dashboard-components/ui/divider'
import { useDrafts } from '@services/contexts/drafts-context'
import { TITLE_PREFIX } from '@utils/constants'
import { useRef, useState } from 'react'
import { Link, Navigate } from 'react-router'

type DraftSectionProps = {
  draftId: string
}

export default function DraftSection({ draftId }: DraftSectionProps) {
  const { getDraftById, renameDraft } = useDrafts()

  const draft = getDraftById(draftId)

  if (!draft) return <Navigate to="/dashboard/drafts" />

  const { title } = draft

  const [newTitle, setNewTitle] = useState(title)
  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <section>
      <title>{`${TITLE_PREFIX}${title}`}</title>
      <header className="p-4">
        <div className="flex items-center gap-1">
          <Link to="/dashboard/drafts" className="text-clickable">
            Drafts
          </Link>
          <span className="text-neutral-400">/</span>
          <input
            ref={inputRef}
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            onBlur={() => renameDraft(draftId, newTitle)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                renameDraft(draftId, newTitle)
                inputRef.current?.blur()
              }
            }}
            className="text-clickable w-full max-w-85"
            maxLength={80}
          />
        </div>
      </header>
      <Divider />
    </section>
  )
}
