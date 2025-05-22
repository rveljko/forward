import Divider from '@dashboard-components/ui/divider'
import FormField from '@dashboard-components/ui/form-field'
import EditIcon from '@icons/edit-icon'
import { useDrafts } from '@services/contexts/drafts-context'
import Button from '@ui/button'
import { Draft } from '@utils/types'
import { useRef, useState } from 'react'

type RenameDraftModalProps = {
  closeModal: () => void
  id: Draft['id']
  title: Draft['title']
}

export default function RenameDraftModal({
  closeModal,
  id,
  title,
}: RenameDraftModalProps) {
  const { renameDraft } = useDrafts()
  const [newTitle, setNewTitle] = useState(title)
  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <article className="bg-modal-background border-section-outline w-full rounded-2xl border">
      <form
        onSubmit={(e) => {
          e.preventDefault()

          renameDraft(id, newTitle)
          closeModal()
        }}
      >
        <div className="p-4">
          <span className="border-section-outline [&_svg]:text-clickable mb-2 flex size-9 items-center justify-center rounded-lg border">
            <EditIcon />
          </span>
          <h3 className="mb-1">Rename Draft</h3>
          <FormField className="gap-4 [&_div]:max-w-none">
            <FormField.Label htmlFor="title" className="text-neutral-400">
              Enter a new title for your draft
            </FormField.Label>
            <FormField.Input
              id="title"
              ref={inputRef}
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              onFocus={() => inputRef.current?.select()}
            />
          </FormField>
        </div>
        <Divider />
        <div className="flex items-center justify-end gap-2 p-4">
          <Button
            variant="ghost"
            size="large"
            type="button"
            onClick={closeModal}
          >
            Cancel
          </Button>
          <Button variant="primary" size="large" type="submit">
            Rename
          </Button>
        </div>
      </form>
    </article>
  )
}
