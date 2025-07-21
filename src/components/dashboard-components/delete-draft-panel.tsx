import Divider from '@dashboard-components/ui/divider'
import TrashIcon from '@icons/trash-icon'
import { useDrafts } from '@services/contexts/drafts-context'
import Button from '@ui/button'
import { showToast } from '@utils/toasts'
import { Draft } from '@utils/types'

type DeleteDraftPanelProps = {
  draftId: Draft['id']
  closeModal: () => void
}

export default function DeleteDraftPanel({
  draftId,
  closeModal,
}: DeleteDraftPanelProps) {
  const { getDraftById, deleteDraft } = useDrafts()
  const { title } = getDraftById(draftId)

  return (
    <article>
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
            deleteDraft(draftId)
            showToast({
              title: 'Draft Deleted',
              description: 'Draft deleted successfully',
            })
            closeModal()
          }}
        >
          Delete
        </Button>
      </div>
    </article>
  )
}
