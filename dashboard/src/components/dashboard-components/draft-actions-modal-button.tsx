import DraftActionsModal from '@dashboard-components/draft-actions-modal'
import Modal from '@dashboard-components/ui/modal'
import ModalButton from '@dashboard-components/ui/modal-button'
import useModal from '@hooks/use-modal'
import { ButtonProps } from '@ui/button'
import { Draft } from '@utils/types'

type DraftActionsModalButtonProps = ButtonProps & {
  draftId: Draft['id']
  withoutLinks?: boolean
}

export default function DraftActionsModalButton({
  draftId,
  withoutLinks,
  children,
  ...props
}: DraftActionsModalButtonProps) {
  const { isOpened, openModal, closeModal } = useModal()

  return (
    <ModalButton
      isOpened={isOpened}
      openModal={openModal}
      label={children}
      {...props}
    >
      <Modal isOpened={isOpened} closeModal={closeModal}>
        <Modal.Overlay>
          <Modal.Dialog>
            <Modal.FocusLock>
              <DraftActionsModal
                closeModal={closeModal}
                draftId={draftId}
                withoutLinks={withoutLinks}
              />
            </Modal.FocusLock>
          </Modal.Dialog>
        </Modal.Overlay>
      </Modal>
    </ModalButton>
  )
}
