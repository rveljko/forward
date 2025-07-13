import Button, { ButtonProps } from '@ui/button'

type ModalButtonProps = ButtonProps & {
  label: React.ReactNode
  isOpened: boolean
  openModal: () => void
}

export default function ModalButton({
  label,
  isOpened,
  openModal,
  children,
  ...props
}: ModalButtonProps) {
  return (
    <>
      <Button onClick={openModal} {...props}>
        {label}
      </Button>
      {isOpened && children}
    </>
  )
}
