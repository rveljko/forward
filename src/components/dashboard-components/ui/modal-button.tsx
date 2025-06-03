import Button, { ButtonProps } from '@ui/button'

type ModalButtonProps = ButtonProps & {
  label: React.ReactNode
  isOpened: boolean
  toggleModal: () => void
}

export default function ModalButton({
  label,
  isOpened,
  toggleModal,
  children,
  ...props
}: ModalButtonProps) {
  return (
    <>
      <Button onClick={toggleModal} {...props}>
        {label}
      </Button>
      {isOpened && children}
    </>
  )
}
