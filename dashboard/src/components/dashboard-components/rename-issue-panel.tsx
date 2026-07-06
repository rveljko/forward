import Divider from '@dashboard-components/ui/divider'
import FormField from '@dashboard-components/ui/form-field'
import IconWrapper from '@dashboard-components/ui/icon-wrapper'
import EditCircleIcon from '@icons/edit-circle-icon'
import { useIssues } from '@services/contexts/issues-context'
import Button from '@ui/button'
import { showToast } from '@utils/toasts'
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
  const { getIssueById, updateIssue } = useIssues()
  const issue = getIssueById(issueId)
  const [newTitle, setNewTitle] = useState(issue.title)

  const inputRef = useRef<HTMLInputElement>(null)

  const isButtonDisabled = newTitle === issue.title

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        updateIssue({ ...issue, title: newTitle })
        showToast({
          title: 'Issue Renamed',
          description: 'Title updated successfully',
        })
        closeModal()
      }}
    >
      <div className="p-4">
        <IconWrapper icon={<EditCircleIcon />} className="mb-2" />
        <h3 className="mb-1 font-medium">Rename</h3>
        <FormField className="gap-4 [&_div]:max-w-none">
          <FormField.Label
            htmlFor="title"
            className="w-max text-xs font-normal text-neutral-600"
          >
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
        <Button variant="ghost" size="large" type="button" onClick={closeModal}>
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
  )
}
