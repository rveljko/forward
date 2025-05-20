import Divider from '@dashboard-components/ui/divider'
import FormField from '@dashboard-components/ui/form-field'
import EditIcon from '@icons/edit-icon'
import Button from '@ui/button'
import { useState } from 'react'

export default function RenameDraftModal() {
  const [newTitle, setNewTitle] = useState('')

  return (
    <article className="bg-modal-background border-section-outline w-full max-w-140 rounded-2xl border">
      <form>
        <div className="p-4">
          <span className="border-section-outline [&_svg]:text-clickable mb-2 flex size-9 items-center justify-center rounded-lg border">
            <EditIcon />
          </span>
          <h3 className="mb-1">Rename Draft</h3>
          <FormField className="gap-4">
            <FormField.Label htmlFor="title" className="text-neutral-400">
              Enter a new title for your draft
            </FormField.Label>
            <FormField.Input
              id="title"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
            />
          </FormField>
        </div>
        <Divider />
        <div className="flex items-center justify-end gap-2 p-4">
          <Button variant="ghost" size="small" type="button">
            Cancel
          </Button>
          <Button variant="primary" size="small" type="submit">
            Rename
          </Button>
        </div>
      </form>
    </article>
  )
}
