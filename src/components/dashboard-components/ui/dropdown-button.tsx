import Dropdown from '@dashboard-components/ui/dropdown'
import Button, { ButtonProps } from '@ui/button'
import { cn } from '@utils/utils'
import { cva, VariantProps } from 'class-variance-authority'
import React, { useEffect, useRef } from 'react'
import ReactFocusLock from 'react-focus-lock'

const dropdownContainer = cva('absolute z-999', {
  variants: {
    position: {
      'top-left': 'right-0 bottom-[calc(100%_+_--spacing(2))]',
      'top-center':
        'bottom-[calc(100%_+_--spacing(2))] left-1/2 -translate-x-1/2',
      'top-right': 'bottom-[calc(100%_+_--spacing(2))] left-0',
      'bottom-left': 'top-[calc(100%_+_--spacing(2))] right-0',
      'bottom-center':
        'top-[calc(100%_+_--spacing(2))] left-1/2 -translate-x-1/2',
      'bottom-right': 'top-[calc(100%_+_--spacing(2))] left-0',
    },
  },
  defaultVariants: {
    position: 'bottom-right',
  },
})

type DropdownButtonProps = ButtonProps &
  VariantProps<typeof dropdownContainer> & {
    label: React.ReactNode
    isOpened: boolean
    toggleDropdown: () => void
  }

export default function DropdownButton({
  label,
  isOpened,
  toggleDropdown,
  children,
  position,
  ...props
}: DropdownButtonProps) {
  const ref = useRef<HTMLDivElement>(null)

  function handleOnClick(e: MouseEvent) {
    if (ref.current && !e.composedPath().includes(ref.current)) toggleDropdown()
  }

  function handleOnKeyDown(e: KeyboardEvent) {
    if (e.code === 'Escape') toggleDropdown()
  }

  useEffect(() => {
    if (!isOpened) return
    document.body.addEventListener('click', handleOnClick)
    document.body.addEventListener('keydown', handleOnKeyDown)

    return () => {
      document.body.removeEventListener('click', handleOnClick)
      document.body.removeEventListener('keydown', handleOnKeyDown)
    }
  }, [isOpened])

  return (
    <div className="relative w-max" ref={ref}>
      <Button onClick={toggleDropdown} {...props}>
        {label}
      </Button>
      {isOpened && (
        <ReactFocusLock className={cn(dropdownContainer({ position }))}>
          <Dropdown>{children}</Dropdown>
        </ReactFocusLock>
      )}
    </div>
  )
}
