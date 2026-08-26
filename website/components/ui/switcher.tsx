import { cn } from '@/utils/utils'
import { LayoutGroup, motion } from 'motion/react'
import { useId } from 'react'

type SwitcherProps = {
  children: React.ReactNode
}

export default function Switcher({ children }: SwitcherProps) {
  const id = useId()

  return (
    <LayoutGroup id={id}>
      <div className="flex w-max items-center rounded-sm bg-neutral-100 ring inset-ring ring-neutral-900/10 inset-ring-white">
        {children}
      </div>
    </LayoutGroup>
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
      className={cn(
        `relative flex items-center gap-1 rounded-sm px-1.5 py-1 text-sm font-medium text-neutral-600 transition-colors hover:cursor-pointer hover:text-black ${isActive && 'text-black'}`,
        className
      )}
      {...props}
    >
      {isActive && (
        <motion.div
          layoutId="active-switcher-button-background"
          className="absolute inset-0 rounded-sm bg-white ring ring-neutral-300"
        />
      )}
      {LeftIcon && (
        <span className="relative z-10 [&_svg]:size-4">{LeftIcon}</span>
      )}
      <span className="relative z-10">{children}</span>
      {RightIcon && (
        <span className="relative z-10 [&_svg]:size-4">{RightIcon}</span>
      )}
    </button>
  )
}
