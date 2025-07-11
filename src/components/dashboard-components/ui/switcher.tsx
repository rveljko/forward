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
      role="tablist"
      className={cn('flex rounded-sm bg-neutral-800', className)}
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
      role="tab"
      className={cn(
        `hover:bg-clickable/10 pointer-coarse:active:bg-clickable/10 h-8 rounded-sm px-3 py-1 text-neutral-400 inset-ring inset-ring-neutral-800 hover:cursor-pointer active:scale-99 ${isActive ? 'bg-section-background-color pointer-coarse:active:bg-section-background-color hover:bg-section-background-color text-clickable' : ''}`,
        className
      )}
      aria-selected={isActive}
      {...props}
    >
      {children}
    </button>
  )
}
