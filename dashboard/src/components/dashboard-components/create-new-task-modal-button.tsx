import CreateNewTaskModal from '@dashboard-components/create-new-task-modal'
import Modal from '@dashboard-components/ui/modal'
import ModalButton from '@dashboard-components/ui/modal-button'
import useModal from '@hooks/use-modal'
import { ButtonProps } from '@ui/button'

type CreateNewTaskModalButtonProps = ButtonProps

export default function CreateNewTaskModalButton({
  children,
  ...props
}: CreateNewTaskModalButtonProps) {
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
              <CreateNewTaskModal closeModal={closeModal} />
            </Modal.FocusLock>
          </Modal.Dialog>
        </Modal.Overlay>
      </Modal>
    </ModalButton>
  )
}
