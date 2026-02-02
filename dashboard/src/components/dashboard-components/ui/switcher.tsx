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
      className={cn(
        'flex rounded-md bg-neutral-800 p-0.5 shadow-sm',
        className
      )}
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
        'hover:bg-clickable/10 pointer-coarse:active:bg-clickable/10 aria-selected:bg-section-background-color aria-selected:pointer-coarse:active:bg-section-background-color aria-selected:hover:bg-section-background-color aria-selected:text-clickable rounded-sm px-3 py-1 text-neutral-400 transition-[background-color] hover:cursor-pointer active:scale-99',
        className
      )}
      aria-selected={isActive}
      {...props}
    >
      {children}
    </button>
  )
}
