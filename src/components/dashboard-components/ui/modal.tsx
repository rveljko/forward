import { createPortal } from 'react-dom'

type ModalProps = {
  children: React.ReactNode
  closeModal: () => void
}

export default function Modal({ children, closeModal }: ModalProps) {
  return createPortal(
    <div role="dialog" aria-modal="true" onClick={closeModal}>
      {children}
    </div>,
    document.getElementById('root')!
  )
}
