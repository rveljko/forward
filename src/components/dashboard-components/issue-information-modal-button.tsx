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
  const { isOpened, toggleModal } = useModal()

  return (
    <ModalButton
      isOpened={isOpened}
      toggleModal={toggleModal}
      label={children}
      {...props}
    >
      <Modal
        isOpened={isOpened}
        closeModal={toggleModal}
        className="md:items-end"
        mediumSizeFullHeight
      >
        <IssueInformationModal
          issue={issue}
          closeModal={toggleModal}
          className="md:h-full"
        />
      </Modal>
    </ModalButton>
  )
}
