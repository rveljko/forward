import DeleteDraftModalButton from '@dashboard-components/delete-draft-modal-button'
import Divider from '@dashboard-components/ui/divider'
import PlusIcon from '@icons/plus-icon'
import TrashIcon from '@icons/trash-icon'
import { useDrafts } from '@services/contexts/drafts-context'
import Button from '@ui/button'
import { DEFAULT_DRAFT_TITLE, TITLE_PREFIX } from '@utils/constants'
import { useRef, useState } from 'react'
import { Link, Navigate } from 'react-router'

type DraftSectionProps = {
  draftId: string
}

export default function DraftSection({ draftId }: DraftSectionProps) {
  const { getDraftById, createNewDraft, renameDraft } = useDrafts()

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
      <header className="flex items-center justify-between gap-2 p-4">
        <div className="flex grow items-center gap-1">
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
        <div className="flex items-center gap-1">
          <Button
            variant="tertiary"
            className="p-0.5"
            onClick={() => createNewDraft()}
          >
            <PlusIcon />
            <span className="sr-only">Create new Draft</span>
          </Button>
          <DeleteDraftModalButton
            draftId={draftId}
            variant="tertiary"
            className="text-danger-500 hover:bg-danger-500/10 p-0.5"
          >
            <TrashIcon />
            <span className="sr-only">Delete Draft</span>
          </DeleteDraftModalButton>
        </div>
      </header>
      <Divider />
    </section>
  )
}
