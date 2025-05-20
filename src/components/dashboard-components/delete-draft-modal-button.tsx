import DeleteDraftModal from '@dashboard-components/delete-draft-modal'
import ModalButton from '@dashboard-components/ui/modal-button'
import useModal from '@hooks/use-modal'
import { ButtonProps } from '@ui/button'

type RenameDraftModalButtonProps = ButtonProps

export default function DeleteDraftModalButton({
  children,
  ...props
}: RenameDraftModalButtonProps) {
  const { isOpened, toggleModal } = useModal()

  return (
    <ModalButton
      isOpened={isOpened}
      toggleModal={toggleModal}
      label={children}
      {...props}
    >
      <DeleteDraftModal closeModal={toggleModal} />
    </ModalButton>
  )
}
