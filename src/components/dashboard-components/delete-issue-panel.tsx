import Divider from '@dashboard-components/ui/divider'
import TrashIcon from '@icons/trash-icon'
import { useIssues } from '@services/contexts/issues-context'
import Button from '@ui/button'
import { showToast } from '@utils/toasts'
import { Issue } from '@utils/types'

type DeleteIssuePanelProps = {
  issueId: Issue['id']
  closeModal: () => void
}

export default function DeleteIssuePanel({
  issueId,
  closeModal,
}: DeleteIssuePanelProps) {
  const { getIssueById, deleteIssue } = useIssues()
  const { title } = getIssueById(issueId)

  return (
    <>
      <div className="p-4">
        <span className="border-section-outline bg-danger-500/10 [&_svg]:text-danger-500 mb-2 flex size-9 items-center justify-center rounded-lg border">
          <TrashIcon />
        </span>
        <h3 className="mb-1">
          Confirm <strong>{title}</strong> Deletion
        </h3>
        <p>Are you sure you want to delete?</p>
      </div>
      <Divider />
      <div className="flex items-center justify-end gap-2 p-4">
        <Button variant="ghost" size="large" type="button" onClick={closeModal}>
          Cancel
        </Button>
        <Button
          variant="danger"
          size="large"
          type="submit"
          onClick={() => {
            deleteIssue(issueId)
            showToast({
              title: 'Issue Deleted',
              description: 'Issue deleted successfully',
            })
            closeModal()
          }}
        >
          Delete
        </Button>
      </div>
    </>
  )
}
