import ProjectInformationModal from '@dashboard-components/project-information-modal'
import Modal from '@dashboard-components/ui/modal'
import ModalButton from '@dashboard-components/ui/modal-button'
import useModal from '@hooks/use-modal'
import { ButtonProps } from '@ui/button'

type ProjectInformationModalButtonProps = ButtonProps

export default function ProjectInformationModalButton({
  children,
  ...props
}: ProjectInformationModalButtonProps) {
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
        <ProjectInformationModal
          closeModal={toggleModal}
          className="md:h-full"
        />
      </Modal>
    </ModalButton>
  )
}
