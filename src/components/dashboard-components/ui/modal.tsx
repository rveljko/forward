import { cn } from '@utils/utils'
import { motion } from 'motion/react'
import { ComponentProps, createContext, useContext, useEffect } from 'react'
import { createPortal } from 'react-dom'
import ReactFocusLock from 'react-focus-lock'

type ModalContextType = {
  closeModal: () => void
}

const ModalContext = createContext<ModalContextType | null>(null)

type ModalProps = {
  children: React.ReactNode
  isOpened: boolean
  closeModal: () => void
}

export default function Modal({ children, isOpened, closeModal }: ModalProps) {
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
    <ModalContext.Provider value={{ closeModal }}>
      {children}
    </ModalContext.Provider>,
    document.getElementById('dashboard-layout')!
  )
}

Modal.Overlay = Overlay
Modal.Dialog = Dialog
Modal.FocusLock = FocusLock

type OverlayProps = React.ComponentProps<typeof motion.div> & {
  children: React.ReactNode
}

function Overlay({ children, className, ...props }: OverlayProps) {
  const { closeModal } = useModal()

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={closeModal}
      className={cn(
        'bg-modal-overlay-background fixed inset-0 z-999 flex flex-col items-center justify-end p-4 md:justify-start',
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  )
}

type DialogProps = React.ComponentProps<typeof motion.div> & {
  children: React.ReactNode
}

function Dialog({ children, className, ...props }: DialogProps) {
  return (
    <motion.div
      initial={{ scale: 'var(--scale-from)', translateY: 'var(--slide-from)' }}
      animate={{ scale: 'var(--scale-to)', translateY: 'var(--slide-to)' }}
      exit={{ scale: 'var(--scale-from)', translateY: 'var(--slide-from)' }}
      role="dialog"
      aria-modal="true"
      className={cn(
        'w-full max-w-140 rounded-2xl [--scale-from:95%] [--scale-to:100%] [--slide-from:--spacing(10)] [--slide-to:--spacing(0)] md:[--slide-from:--spacing(0)]',
        className
      )}
      onClick={(e) => e.stopPropagation()}
      {...props}
    >
      {children}
    </motion.div>
  )
}

type FocusLockProps = ComponentProps<typeof ReactFocusLock>

function FocusLock({ ...props }: FocusLockProps) {
  return <ReactFocusLock returnFocus {...props} />
}

function useModal() {
  const context = useContext(ModalContext)

  if (!context)
    throw new Error('useModal must be within a ModalContextProvider')

  return context
}
