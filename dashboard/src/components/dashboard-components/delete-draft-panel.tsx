import Divider from '@dashboard-components/ui/divider'
import IconWrapper from '@dashboard-components/ui/icon-wrapper'
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
  const { deleteDraft } = useDrafts()

  return (
    <>
      <div className="p-4">
        <IconWrapper
          icon={<TrashIcon />}
          className="mb-2 bg-red-100 text-red-500 ring-red-200"
        />
        <h3 className="mb-1 font-medium">Confirm Draft Deletion</h3>
        <p className="text-xs text-neutral-600">
          Are you sure you want to delete?
        </p>
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
    </>
  )
}
