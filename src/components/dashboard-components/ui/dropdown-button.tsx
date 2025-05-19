import Dropdown from '@dashboard-components/ui/dropdown'
import Button, { ButtonProps } from '@ui/button'
import { useEffect, useRef, useState } from 'react'

type DropdownButtonProps = ButtonProps & {
  label: React.ReactNode
}

export default function DropdownButton({
  label,
  children,
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
    <div className="relative w-max" ref={ref}>
      <Button onClick={() => setIsOpened((prev) => !prev)} {...props}>
        {label}
      </Button>
      {isOpened && (
        <div className="absolute right-0 bottom-[calc(100%_+_--spacing(2))] min-w-full">
          <Dropdown>{children}</Dropdown>
        </div>
      )}
    </div>
  )
}
