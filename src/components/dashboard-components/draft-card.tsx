import DraftActionsModal from '@dashboard-components/draft-actions-modal'
import DraftActionsModalButton from '@dashboard-components/draft-actions-modal-button'
import Divider from '@dashboard-components/ui/divider'
import Modal from '@dashboard-components/ui/modal'
import TimeAgo from '@dashboard-components/ui/time-ago'
import useModal from '@hooks/use-modal'
import DotsVerticalIcon from '@icons/dots-vertical-icon'
import { Draft } from '@utils/types'
import { Link } from 'react-router'

type DraftCardProps = {
  draft: Draft
}

export default function DraftCard({
  draft: { id, title, lastEdit },
}: DraftCardProps) {
  const { isOpened, toggleModal } = useModal()

  return (
    <article
      className="ring-section-outline pointer-coarse:active:ring-clickable/20 hover:ring-clickable/20 relative h-full rounded-lg shadow-sm ring pointer-coarse:active:scale-99"
      onContextMenu={(e) => {
        e.preventDefault()
        toggleModal()
      }}
    >
      <div className="overflow-hidden rounded-t-lg">
        <div className="bg-clickable/10 aspect-3/1 w-full"></div>
      </div>
      <div className="h-16 p-2">
        <h3>
          <Link
            to={`/dashboard/drafts/${id}`}
            className="line-clamp-2 text-balance"
          >
            <span className="absolute inset-0"></span>
            {title}
          </Link>
        </h3>
      </div>
      <Divider />
      <div className="flex items-center justify-between p-2">
        <TimeAgo date={lastEdit} />
        <DraftActionsModalButton
          draftId={id}
          variant="tertiary"
          className="isolate -m-1 rounded-full p-1 [&_svg]:size-4"
        >
          <DotsVerticalIcon />
          <span className="sr-only">Actions</span>
        </DraftActionsModalButton>
      </div>
      {isOpened && (
        <Modal isOpened={isOpened} closeModal={toggleModal}>
          <Modal.Overlay>
            <Modal.Dialog>
              <Modal.FocusLock>
                <DraftActionsModal closeModal={toggleModal} draftId={id} />
              </Modal.FocusLock>
            </Modal.Dialog>
          </Modal.Overlay>
        </Modal>
      )}
    </article>
  )
}
