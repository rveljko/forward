import { cn } from '@utils/utils'
import { createPortal } from 'react-dom'
import ReactFocusLock from 'react-focus-lock'

type ModalProps = {
  children: React.ReactNode
  closeModal: () => void
  className?: string
  mediumSizeFullHeight?: boolean
}

export default function Modal({
  children,
  closeModal,
  className,
  mediumSizeFullHeight,
}: ModalProps) {
  return createPortal(
    <div
      onClick={closeModal}
      className={cn(
        `bg-modal-overlay-background fixed inset-0 z-999 flex flex-col items-center justify-end p-4 md:justify-start ${mediumSizeFullHeight ? 'md:h-full' : ''}`,
        className
      )}
    >
      <div
        role="dialog"
        aria-modal="true"
        className={`w-full max-w-140 rounded-2xl ${mediumSizeFullHeight ? 'md:h-full' : ''}`}
        onClick={(e) => e.stopPropagation()}
      >
        <ReactFocusLock
          returnFocus
          className={mediumSizeFullHeight ? 'md:h-full' : ''}
        >
          {children}
        </ReactFocusLock>
      </div>
    </div>,
    document.getElementById('root')!
  )
}
