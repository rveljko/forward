import CreateNewIssueModal from '@dashboard-components/create-new-issue-modal'
import Modal from '@dashboard-components/ui/modal'
import ModalButton from '@dashboard-components/ui/modal-button'
import useModal from '@hooks/use-modal'
import { ButtonProps } from '@ui/button'
import { useState } from 'react'

type CreateNewIssueModalButtonProps = ButtonProps

export default function CreateNewIssueModalButton({
  children,
  ...props
}: CreateNewIssueModalButtonProps) {
  const { isOpened, toggleModal } = useModal()
  const [isBigSizeModal, setIsBigSizeModal] = useState(false)

  return (
    <ModalButton
      isOpened={isOpened}
      toggleModal={toggleModal}
      label={children}
      {...props}
    >
      <Modal isOpened={isOpened} closeModal={toggleModal}>
        <Modal.Overlay>
          <Modal.Dialog
            className={`transition-[max-width] ${isBigSizeModal ? 'max-w-200' : ''} `}
          >
            <Modal.FocusLock>
              <CreateNewIssueModal
                closeModal={toggleModal}
                isBigSizeModal={isBigSizeModal}
                setIsBigSizeModal={setIsBigSizeModal}
              />
            </Modal.FocusLock>
          </Modal.Dialog>
        </Modal.Overlay>
      </Modal>
    </ModalButton>
  )
}
