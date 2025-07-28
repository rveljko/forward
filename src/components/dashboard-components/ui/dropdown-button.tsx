import Dropdown, { dropdown } from '@dashboard-components/ui/dropdown'
import useOnClickOutside from '@hooks/use-on-click-outside'
import Button, { ButtonProps } from '@ui/button'
import { cn } from '@utils/utils'
import { VariantProps } from 'class-variance-authority'
import { AnimatePresence } from 'motion/react'
import React, { useEffect } from 'react'
import ReactFocusLock from 'react-focus-lock'

type DropdownButtonProps = ButtonProps &
  VariantProps<typeof dropdown> & {
    label: React.ReactNode
    isOpened: boolean
    toggleDropdown: () => void
  }

export default function DropdownButton({
  label,
  isOpened,
  toggleDropdown,
  children,
  className,
  position,
  ...props
}: DropdownButtonProps) {
  const ref = useOnClickOutside<HTMLDivElement>(() => {
    if (!isOpened) return
    toggleDropdown()
  })

  function handleOnKeyDown(e: KeyboardEvent) {
    if (e.code === 'Escape') toggleDropdown()
  }

  useEffect(() => {
    if (!isOpened) return
    document.body.addEventListener('keydown', handleOnKeyDown)

    return () => {
      document.body.removeEventListener('keydown', handleOnKeyDown)
    }
  }, [isOpened])

  return (
    <div
      className="w-max [anchor-scope:--dropdown] not-supports-[anchor-name:--dropdown]:relative"
      ref={ref}
    >
      <Button
        onClick={toggleDropdown}
        className={cn('[anchor-name:--dropdown]', className)}
        {...props}
      >
        {label}
      </Button>
      <AnimatePresence>
        {isOpened && (
          <Dropdown position={position}>
            <ReactFocusLock>{children}</ReactFocusLock>
          </Dropdown>
        )}
      </AnimatePresence>
    </div>
  )
}
