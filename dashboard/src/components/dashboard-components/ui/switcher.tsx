import { cn } from '@utils/utils'
import { motion } from 'motion/react'

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
        'flex w-max items-center rounded-sm bg-neutral-100 ring inset-ring ring-neutral-900/10 inset-ring-white',
        className
      )}
      {...props}
    >
      {children}
    </fieldset>
  )
}

Switcher.Button = Button

type ButtonProps = React.ComponentPropsWithoutRef<'button'> & {
  children: React.ReactNode
  isActive?: boolean
  leftIcon?: React.JSX.Element
  rightIcon?: React.JSX.Element
}

function Button({
  children,
  isActive,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      role="tab"
      className={cn(
        `relative flex items-center gap-1 rounded-sm px-1.5 py-1 text-sm font-medium text-neutral-600 transition-colors hover:cursor-pointer hover:text-black ${isActive && 'text-black'}`,
        className
      )}
      aria-selected={isActive}
      {...props}
    >
      {isActive && (
        <motion.div
          layoutId="active-switcher-button-background"
          className="absolute inset-0 rounded-sm bg-white ring ring-neutral-300"
        />
      )}
      {LeftIcon && <span className="relative z-10">{LeftIcon}</span>}
      <span className="relative z-10">{children}</span>
      {RightIcon && <span className="relative z-10">{RightIcon}</span>}
    </button>
  )
}
