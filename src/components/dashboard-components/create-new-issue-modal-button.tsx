import CreateNewIssueModal from '@dashboard-components/create-new-issue-modal'
import Modal from '@dashboard-components/ui/modal'
import ModalButton from '@dashboard-components/ui/modal-button'
import useModal from '@hooks/use-modal'
import { ButtonProps } from '@ui/button'

type CreateNewIssueModalButtonProps = ButtonProps

export default function CreateNewIssueModalButton({
  children,
  ...props
}: CreateNewIssueModalButtonProps) {
  const { isOpened, toggleModal } = useModal()

  return (
    <ModalButton
      isOpened={isOpened}
      toggleModal={toggleModal}
      label={children}
      {...props}
    >
      <Modal isOpened={isOpened} closeModal={toggleModal}>
        <CreateNewIssueModal closeModal={toggleModal} />
      </Modal>
    </ModalButton>
  )
}
