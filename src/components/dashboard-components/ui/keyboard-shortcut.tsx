import { cn } from '@utils/utils'
import React from 'react'

type KeyboardShortcutProps = React.ComponentPropsWithoutRef<'kbd'> & {
  children: React.ReactNode
}

export default function KeyboardShortcut({
  children,
  className,
  ...props
}: KeyboardShortcutProps) {
  return (
    <kbd
      className={cn(
        'font-sans text-xs text-nowrap text-neutral-400',
        className
      )}
      {...props}
    >
      {children}
    </kbd>
  )
}
