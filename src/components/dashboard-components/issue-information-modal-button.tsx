import IssueInformationModal from '@dashboard-components/issue-information-modal'
import Modal from '@dashboard-components/ui/modal'
import ModalButton from '@dashboard-components/ui/modal-button'
import useModal from '@hooks/use-modal'
import { ButtonProps } from '@ui/button'
import { Issue } from '@utils/types'

type IssueInformationModalButtonProps = ButtonProps & {
  issue: Issue
}

export default function IssueInformationModalButton({
  children,
  issue,
  ...props
}: IssueInformationModalButtonProps) {
  const { isOpened, openModal, closeModal } = useModal()

  return (
    <ModalButton
      isOpened={isOpened}
      openModal={openModal}
      label={children}
      {...props}
    >
      <Modal isOpened={isOpened} closeModal={closeModal}>
        <Modal.Overlay className="md:items-end">
          <Modal.Dialog className="md:h-full">
            <Modal.FocusLock className="md:h-full">
              <IssueInformationModal
                issue={issue}
                closeModal={closeModal}
                className="md:h-full"
              />
            </Modal.FocusLock>
          </Modal.Dialog>
        </Modal.Overlay>
      </Modal>
    </ModalButton>
  )
}
