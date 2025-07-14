import Button, { ButtonProps } from '@ui/button'
import { AnimatePresence } from 'motion/react'

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
      <AnimatePresence>{isOpened && children}</AnimatePresence>
    </>
  )
}
