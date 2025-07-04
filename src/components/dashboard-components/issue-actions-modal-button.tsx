import IssueActionsModal from '@dashboard-components/issue-actions-modal'
import Modal from '@dashboard-components/ui/modal'
import ModalButton from '@dashboard-components/ui/modal-button'
import useModal from '@hooks/use-modal'
import { ButtonProps } from '@ui/button'
import { Issue } from '@utils/types'

type IssueActionsModalButtonProps = ButtonProps & {
  issueId: Issue['id']
}

export default function IssueActionsModalButton({
  issueId,
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
              <IssueActionsModal closeModal={toggleModal} issueId={issueId} />
            </Modal.FocusLock>
          </Modal.Dialog>
        </Modal.Overlay>
      </Modal>
    </ModalButton>
  )
}
