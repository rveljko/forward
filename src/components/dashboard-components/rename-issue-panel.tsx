import Divider from '@dashboard-components/ui/divider'
import FormField from '@dashboard-components/ui/form-field'
import EditIcon from '@icons/edit-icon'
import { useIssues } from '@services/contexts/issues-context'
import Button from '@ui/button'
import { Issue } from '@utils/types'
import { useRef, useState } from 'react'

type RenameIssuePanelProps = {
  issueId: Issue['id']
  closeModal: () => void
}

export default function RenameIssuePanel({
  issueId,
  closeModal,
}: RenameIssuePanelProps) {
  const { getIssueById, updateIssueTitle } = useIssues()
  const { title } = getIssueById(issueId)
  const [newTitle, setNewTitle] = useState(title)

  const inputRef = useRef<HTMLInputElement>(null)

  const isButtonDisabled = newTitle === title

  return (
    <article>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          updateIssueTitle(issueId, newTitle)
          closeModal()
        }}
      >
        <div className="p-4">
          <span className="border-section-outline [&_svg]:text-clickable mb-2 flex size-9 items-center justify-center rounded-lg border">
            <EditIcon />
          </span>
          <h3 className="mb-1">Rename</h3>
          <FormField className="gap-4 [&_div]:max-w-none">
            <FormField.Label htmlFor="title" className="w-max text-neutral-400">
              Edit issue title
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
          <Button
            variant="primary"
            size="large"
            type="submit"
            disabled={isButtonDisabled}
          >
            Rename
          </Button>
        </div>
      </form>
    </article>
  )
}
