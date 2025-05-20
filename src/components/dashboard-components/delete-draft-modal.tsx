import Divider from '@dashboard-components/ui/divider'
import TrashIcon from '@icons/trash-icon'
import Button from '@ui/button'

type DeleteDraftModalProps = {
  closeModal: () => void
}

export default function DeleteDraftModal({
  closeModal,
}: DeleteDraftModalProps) {
  return (
    <article className="bg-modal-background border-section-outline w-full rounded-2xl border">
      <div className="p-4">
        <span className="border-section-outline bg-danger-500/10 [&_svg]:text-danger-500 mb-2 flex size-9 items-center justify-center rounded-lg border">
          <TrashIcon />
        </span>
        <h3 className="mb-1">Confirm Draft Deletion</h3>
        <p>Are you sure you want to delete?</p>
      </div>
      <Divider />
      <div className="flex items-center justify-end gap-2 p-4">
        <Button variant="ghost" size="small" type="button" onClick={closeModal}>
          Cancel
        </Button>
        <Button variant="danger" size="small" type="submit">
          Delete
        </Button>
      </div>
    </article>
  )
}
