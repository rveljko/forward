import IssueActionsModal from '@dashboard-components/issue-actions-modal'
import Modal from '@dashboard-components/ui/modal'
import ModalButton from '@dashboard-components/ui/modal-button'
import useModal from '@hooks/use-modal'
import { ButtonProps } from '@ui/button'

type IssueActionsModalButtonProps = ButtonProps

export default function IssueActionsModalButton({
  children,
  ...props
}: IssueActionsModalButtonProps) {
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
              <IssueActionsModal closeModal={toggleModal} />
            </Modal.FocusLock>
          </Modal.Dialog>
        </Modal.Overlay>
      </Modal>
    </ModalButton>
  )
}
