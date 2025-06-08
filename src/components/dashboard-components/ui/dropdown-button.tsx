import Dropdown from '@dashboard-components/ui/dropdown'
import Button, { ButtonProps } from '@ui/button'
import { cn } from '@utils/utils'
import { cva, VariantProps } from 'class-variance-authority'
import React, { useEffect, useRef, useState } from 'react'
import ReactFocusLock from 'react-focus-lock'

const dropdownContainer = cva(
  'fixed inset-x-4 bottom-4 z-999 sm:absolute sm:inset-x-auto sm:bottom-auto',
  {
    variants: {
      position: {
        'top-left': 'sm:right-0 sm:bottom-[calc(100%_+_--spacing(2))]',
        'top-center':
          'sm:bottom-[calc(100%_+_--spacing(2))] sm:left-1/2 sm:-translate-x-1/2',
        'top-right': 'sm:bottom-[calc(100%_+_--spacing(2))] sm:left-0',
        'bottom-left': 'sm:top-[calc(100%_+_--spacing(2))] sm:right-0',
        'bottom-center':
          'sm:top-[calc(100%_+_--spacing(2))] sm:left-1/2 sm:-translate-x-1/2',
        'bottom-right': 'sm:top-[calc(100%_+_--spacing(2))] sm:left-0',
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
  }

export default function DropdownButton({
  label,
  children,
  position,
  ...props
}: DropdownButtonProps) {
  const [isOpened, setIsOpened] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  function handleOnClick(e: MouseEvent) {
    if (ref.current && !e.composedPath().includes(ref.current))
      setIsOpened(false)
  }

  function handleOnKeyDown(e: KeyboardEvent) {
    if (e.code === 'Escape') setIsOpened(false)
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
    <div className="w-max sm:relative" ref={ref}>
      <Button onClick={() => setIsOpened((prev) => !prev)} {...props}>
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
