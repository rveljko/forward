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
              <ProjectInformationModal
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
