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
          <Modal.Dialog
            initial={{
              scale: 'var(--scale-from)',
              translateY: 'var(--slide-y-from)',
              translateX: 'var(--slide-x-from)',
            }}
            animate={{
              scale: 'var(--scale-to)',
              translateY: 'var(--slide-y-to)',
              translateX: 'var(--slide-x-to)',
            }}
            exit={{
              scale: 'var(--scale-from)',
              translateY: 'var(--slide-y-from)',
              translateX: 'var(--slide-x-from)',
            }}
            className="[--slide-x-from:--spacing(0)] [--slide-x-to:--spacing(0)] md:h-full md:[--scale-from:100%] md:[--slide-x-from:--spacing(20)] md:[--slide-y-from:--spacing(0)]"
          >
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
