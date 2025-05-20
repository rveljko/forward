import { createPortal } from 'react-dom'
import ReactFocusLock from 'react-focus-lock'

type ModalProps = {
  children: React.ReactNode
  closeModal: () => void
}

export default function Modal({ children, closeModal }: ModalProps) {
  return createPortal(
    <div
      onClick={closeModal}
      className="bg-modal-overlay-background fixed inset-0 z-999 flex flex-col items-center justify-end p-4 md:justify-start"
    >
      <div
        role="dialog"
        aria-modal="true"
        className="w-full max-w-140 rounded-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <ReactFocusLock returnFocus>{children}</ReactFocusLock>
      </div>
    </div>,
    document.getElementById('root')!
  )
}
