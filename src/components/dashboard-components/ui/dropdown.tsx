import CheckIcon from '@icons/check-icon'

type DropdownProps = React.ComponentPropsWithoutRef<'div'> & {
  children: React.ReactNode
}

export default function Dropdown({
  children,
  className,
  ...props
}: DropdownProps) {
  return (
    <div
      className="bg-dropdown-background inset-ring-section-outline w-full max-w-(--dropdown-width) space-y-0.5 rounded-sm p-1 inset-ring"
      {...props}
    >
      {children}
    </div>
  )
}

Dropdown.Button = Button

type ButtonProps = React.ComponentPropsWithoutRef<'button'> & {
  children: React.ReactNode
  leftIcon?: React.JSX.Element
  rightIcon?: React.JSX.Element
  isActive?: boolean
}

function Button({
  children,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  isActive,
  ...props
}: ButtonProps) {
  return (
    <button
      className="text-clickable hover:bg-clickable/5 flex w-full items-center gap-1 truncate rounded-xs px-1.5 py-1 hover:cursor-pointer active:scale-99"
      {...props}
    >
      {LeftIcon && <span>{LeftIcon}</span>}
      <span className="overflow-hidden text-ellipsis">{children}</span>
      {RightIcon && <span>{RightIcon}</span>}
      {isActive && (
        <span className="text-success-500 ml-auto">
          <CheckIcon />
        </span>
      )}
    </button>
  )
}
