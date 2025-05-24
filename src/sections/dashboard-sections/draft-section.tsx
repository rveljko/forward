import Divider from '@dashboard-components/ui/divider'
import { useDrafts } from '@services/contexts/drafts-context'
import { DEFAULT_DRAFT_TITLE, TITLE_PREFIX } from '@utils/constants'
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

  const newDraftTitle = newTitle || DEFAULT_DRAFT_TITLE

  function handleRenameDraft() {
    renameDraft(draftId, newDraftTitle)
    setNewTitle(newDraftTitle)
  }

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
            onBlur={handleRenameDraft}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleRenameDraft()
                inputRef.current?.blur()
              }
            }}
            className={`focus:text-clickable w-full max-w-85 ${newTitle === DEFAULT_DRAFT_TITLE ? 'text-neutral-400' : 'text-clickable'}`}
            maxLength={80}
          />
        </div>
      </header>
      <Divider />
    </section>
  )
}
