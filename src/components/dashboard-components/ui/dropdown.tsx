import CheckIcon from '@icons/check-icon'
import { cn } from '@utils/utils'
import { Link } from 'react-router'

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
      className={cn(
        'bg-dropdown-background inset-ring-section-outline w-full max-w-(--dropdown-width) space-y-0.5 rounded-sm p-1 inset-ring',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

Dropdown.Button = Button

type ButtonBaseProps = {
  children: React.ReactNode
  leftIcon?: React.JSX.Element
  rightIcon?: React.JSX.Element
  isActive?: boolean
}

type ButtonAsAnchorProps = React.ComponentPropsWithoutRef<'a'> & {
  href: string
}

type ButtonAsButtonProps = React.ComponentPropsWithoutRef<'button'> & {
  href?: never
}

export type ButtonProps = ButtonBaseProps &
  (ButtonAsAnchorProps | ButtonAsButtonProps)

export const dropdownButtonClasses =
  'text-clickable hover:bg-clickable/5 flex w-full items-center gap-1 truncate rounded-xs px-1.5 py-1 hover:cursor-pointer active:scale-99'

function Button({
  children,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  isActive,
  className,
  ...props
}: ButtonProps) {
  const buttonClasses = cn(dropdownButtonClasses, className)

  if ('href' in props && props.href !== undefined) {
    return (
      <Link to={props.href} className={buttonClasses} {...props}>
        {LeftIcon && <span>{LeftIcon}</span>}
        <span className="overflow-hidden text-ellipsis">{children}</span>
        {RightIcon && <span>{RightIcon}</span>}
        {isActive && (
          <span className="text-success-500 ml-auto">
            <CheckIcon />
          </span>
        )}
      </Link>
    )
  }

  return (
    <button className={buttonClasses} {...props}>
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
