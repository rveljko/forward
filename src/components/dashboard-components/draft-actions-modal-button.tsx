import DraftActionsModal from '@dashboard-components/draft-actions-modal'
import Modal from '@dashboard-components/ui/modal'
import ModalButton from '@dashboard-components/ui/modal-button'
import useModal from '@hooks/use-modal'
import { ButtonProps } from '@ui/button'
import { Draft } from '@utils/types'

type DraftActionsModalButtonProps = ButtonProps & {
  draftId: Draft['id']
}

export default function DraftActionsModalButton({
  draftId,
  children,
  ...props
}: DraftActionsModalButtonProps) {
  const { isOpened, toggleModal } = useModal()

  return (
    <ModalButton
      isOpened={isOpened}
      toggleModal={toggleModal}
      label={children}
      {...props}
    >
      <Modal isOpened={isOpened} closeModal={toggleModal}>
        <Modal.Overlay>
          <Modal.Dialog>
            <Modal.FocusLock>
              <DraftActionsModal closeModal={toggleModal} draftId={draftId} />
            </Modal.FocusLock>
          </Modal.Dialog>
        </Modal.Overlay>
      </Modal>
    </ModalButton>
  )
}
