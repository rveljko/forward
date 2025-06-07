import { cn } from '@utils/utils'
import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import ReactFocusLock from 'react-focus-lock'

type ModalProps = {
  children: React.ReactNode
  isOpened: boolean
  closeModal: () => void
  className?: string
  mediumSizeFullHeight?: boolean
}

export default function Modal({
  children,
  isOpened,
  closeModal,
  className,
  mediumSizeFullHeight,
}: ModalProps) {
  function handleOnKeyDown(e: KeyboardEvent) {
    if (e.code === 'Escape') closeModal()
  }

  useEffect(() => {
    if (!isOpened) return
    document.body.addEventListener('keydown', handleOnKeyDown)

    return () => {
      document.body.removeEventListener('keydown', handleOnKeyDown)
    }
  }, [isOpened])

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
