import { cn } from '@utils/utils'

type SwitcherProps = React.ComponentPropsWithoutRef<'fieldset'> & {
  children: React.ReactNode
}

export default function Switcher({
  children,
  className,
  ...props
}: SwitcherProps) {
  return (
    <fieldset
      className={cn('flex rounded-sm bg-neutral-800 p-1', className)}
      {...props}
    >
      {children}
    </fieldset>
  )
}

Switcher.Element = Element

type ElementProps = React.ComponentPropsWithoutRef<'button'> & {
  children: React.ReactNode
  isActive?: boolean
}

function Element({ children, isActive, className, ...props }: ElementProps) {
  return (
    <button
      className={cn(
        `hover:bg-clickable/10 pointer-coarse:active:bg-clickable/10 text-clickable rounded-xs px-1.5 py-1 hover:cursor-pointer active:scale-99 pointer-coarse:active:scale-99 ${isActive ? 'bg-clickable/10 hover:bg-clickable/10' : ''}`,
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
