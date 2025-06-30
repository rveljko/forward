import DeleteIssueModal from '@dashboard-components/delete-issue-modal'
import Modal from '@dashboard-components/ui/modal'
import ModalButton from '@dashboard-components/ui/modal-button'
import useModal from '@hooks/use-modal'
import { ButtonProps } from '@ui/button'
import { Issue } from '@utils/types'

type DeleteIssueModalButtonProps = ButtonProps & {
  issueId: Issue['id']
}

export default function DeleteIssueModalButton({
  issueId,
  children,
  ...props
}: DeleteIssueModalButtonProps) {
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
              <DeleteIssueModal closeModal={toggleModal} id={issueId} />
            </Modal.FocusLock>
          </Modal.Dialog>
        </Modal.Overlay>
      </Modal>
    </ModalButton>
  )
}
