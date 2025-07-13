import CreateNewIssueModal from '@dashboard-components/create-new-issue-modal'
import Modal from '@dashboard-components/ui/modal'
import ModalButton from '@dashboard-components/ui/modal-button'
import useModal from '@hooks/use-modal'
import { ButtonProps } from '@ui/button'
import { IssueStatusLabel } from '@utils/types'
import { useState } from 'react'

type CreateNewIssueModalButtonProps = ButtonProps & {
  status?: IssueStatusLabel
}

export default function CreateNewIssueModalButton({
  children,
  status,
  ...props
}: CreateNewIssueModalButtonProps) {
  const { isOpened, openModal, closeModal } = useModal()
  const [isBigSizeModal, setIsBigSizeModal] = useState(false)

  return (
    <ModalButton
      isOpened={isOpened}
      openModal={openModal}
      label={children}
      {...props}
    >
      <Modal isOpened={isOpened} closeModal={closeModal}>
        <Modal.Overlay>
          <Modal.Dialog
            className={`transition-[max-width] ${isBigSizeModal ? 'max-w-200' : ''} `}
          >
            <Modal.FocusLock>
              <CreateNewIssueModal
                closeModal={closeModal}
                isBigSizeModal={isBigSizeModal}
                setIsBigSizeModal={setIsBigSizeModal}
                status={status}
              />
            </Modal.FocusLock>
          </Modal.Dialog>
        </Modal.Overlay>
      </Modal>
    </ModalButton>
  )
}
