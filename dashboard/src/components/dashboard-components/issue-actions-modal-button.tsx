import IssueActionsModal from '@dashboard-components/issue-actions-modal'
import Modal from '@dashboard-components/ui/modal'
import ModalButton from '@dashboard-components/ui/modal-button'
import useModal from '@hooks/use-modal'
import { ButtonProps } from '@ui/button'
import { Issue } from '@utils/types'

type IssueActionsModalButtonProps = ButtonProps & {
  issueId: Issue['id']
  withoutLinks?: boolean
}

export default function IssueActionsModalButton({
  issueId,
  withoutLinks,
  children,
  ...props
}: IssueActionsModalButtonProps) {
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
              <IssueActionsModal
                closeModal={closeModal}
                issueId={issueId}
                withoutLinks={withoutLinks}
              />
            </Modal.FocusLock>
          </Modal.Dialog>
        </Modal.Overlay>
      </Modal>
    </ModalButton>
  )
}
