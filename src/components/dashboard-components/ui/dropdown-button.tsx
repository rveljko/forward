import Dropdown from '@dashboard-components/ui/dropdown'
import Button, { ButtonProps } from '@ui/button'
import { cn } from '@utils/utils'
import { cva, VariantProps } from 'class-variance-authority'
import React, { useEffect, useRef } from 'react'
import ReactFocusLock from 'react-focus-lock'

const dropdownContainer = cva(
  'absolute z-999 my-2 [position-anchor:--dropdown] [position-try-fallbacks:flip-inline,flip-block]',
  {
    variants: {
      position: {
        'top-left': '[position-area:top_span-left]',
        'top-center': '[position-area:top_center]',
        'top-right': '[position-area:top_span-right]',
        'bottom-left': '[position-area:bottom_span-left]',
        'bottom-center': '[position-area:bottom_center]',
        'bottom-right': '[position-area:bottom_span-right]',
      },
    },
    defaultVariants: {
      position: 'bottom-right',
    },
  }
)

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
  className,
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
    <div className="w-max [anchor-scope:--dropdown]" ref={ref}>
      <Button
        onClick={toggleDropdown}
        className={cn('[anchor-name:--dropdown]', className)}
        {...props}
      >
        {label}
      </Button>
      {isOpened && (
        <Dropdown className={cn(dropdownContainer({ position }))}>
          <ReactFocusLock>{children}</ReactFocusLock>
        </Dropdown>
      )}
    </div>
  )
}
