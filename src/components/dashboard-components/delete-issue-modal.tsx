import Divider from '@dashboard-components/ui/divider'
import ModalCard from '@dashboard-components/ui/modal-card'
import TrashIcon from '@icons/trash-icon'
import { useIssues } from '@services/contexts/issues-context'
import Button from '@ui/button'
import { Issue } from '@utils/types'

type DeleteIssueModalProps = {
  id: Issue['id']
  closeModal: () => void
}

export default function DeleteIssueModal({
  id,
  closeModal,
}: DeleteIssueModalProps) {
  const { deleteIssue } = useIssues()

  return (
    <ModalCard>
      <div className="p-4">
        <span className="border-section-outline bg-danger-500/10 [&_svg]:text-danger-500 mb-2 flex size-9 items-center justify-center rounded-lg border">
          <TrashIcon />
        </span>
        <h3 className="mb-1">Confirm Issue Deletion</h3>
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
            deleteIssue(id)
            closeModal()
          }}
        >
          Delete
        </Button>
      </div>
    </ModalCard>
  )
}
