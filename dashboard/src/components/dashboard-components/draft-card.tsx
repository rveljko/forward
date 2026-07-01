import DraftActionsModal from '@dashboard-components/draft-actions-modal'
import DraftActionsModalButton from '@dashboard-components/draft-actions-modal-button'
import Divider from '@dashboard-components/ui/divider'
import Modal from '@dashboard-components/ui/modal'
import TimeAgo from '@dashboard-components/ui/time-ago'
import useModal from '@hooks/use-modal'
import DotsVerticalIcon from '@icons/dots-vertical-icon'
import { Draft } from '@utils/types'
import { AnimatePresence } from 'motion/react'
import { Link } from 'react-router'

type DraftCardProps = {
  draft: Draft
}

export default function DraftCard({
  draft: { id, title, lastEdit },
}: DraftCardProps) {
  const { isOpened, openModal, closeModal } = useModal()

  return (
    <article
      className="relative flex h-full flex-col overflow-hidden rounded-md border border-white bg-white shadow-sm ring ring-neutral-900/10 hover:cursor-pointer hover:ring-neutral-900/20 has-[a:focus-visible]:ring-2 has-[a:focus-visible]:ring-black pointer-coarse:transition pointer-coarse:active:scale-99 pointer-coarse:active:ring-neutral-900/20"
      onContextMenu={(e) => {
        e.preventDefault()
        openModal()
      }}
    >
      <div className="overflow-hidden">
        <div className="aspect-3/1 w-full rounded-b-sm bg-neutral-200" />
      </div>
      <div className="h-14 p-2">
        <h3>
          <Link
            to={`/drafts/${id}`}
            className="line-clamp-2 text-balance text-black focus:outline-0"
          >
            <span className="absolute inset-0" />
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
      <AnimatePresence>
        {isOpened && (
          <Modal isOpened={isOpened} closeModal={closeModal}>
            <Modal.Overlay>
              <Modal.Dialog>
                <Modal.FocusLock>
                  <DraftActionsModal closeModal={closeModal} draftId={id} />
                </Modal.FocusLock>
              </Modal.Dialog>
            </Modal.Overlay>
          </Modal>
        )}
      </AnimatePresence>
    </article>
  )
}
