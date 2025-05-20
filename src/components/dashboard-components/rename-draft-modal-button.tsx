import RenameDraftModal from '@dashboard-components/rename-draft-modal'
import ModalButton from '@dashboard-components/ui/modal-button'
import useModal from '@hooks/use-modal'
import { ButtonProps } from '@ui/button'
import { Draft } from '@utils/types'

type RenameDraftModalButtonProps = ButtonProps & {
  draftId: Draft['id']
  draftTitle: Draft['title']
}

export default function RenameDraftModalButton({
  children,
  draftId,
  draftTitle,
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
      <RenameDraftModal
        closeModal={toggleModal}
        id={draftId}
        title={draftTitle}
      />
    </ModalButton>
  )
}
