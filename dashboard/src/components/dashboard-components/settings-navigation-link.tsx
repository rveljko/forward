import { cn } from '@utils/utils'
import { motion } from 'motion/react'
import { NavLink, NavLinkProps, useMatch, useResolvedPath } from 'react-router'

type SettingsNavigationLinkProps = Omit<NavLinkProps, 'children'> & {
  children: React.ReactNode
  leftIcon?: React.JSX.Element
  rightIcon?: React.JSX.Element
}

export default function SettingsNavigationLink({
  children,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  className,
  ...props
}: SettingsNavigationLinkProps) {
  const resolved = useResolvedPath(props.to)
  const isActive = !!useMatch({ path: resolved.pathname, end: props.end })

  return (
    <NavLink
      className={cn(
        `group relative flex w-max items-center gap-1 rounded-md px-1.5 py-1 font-medium text-neutral-600 transition hover:text-black active:scale-99 pointer-coarse:active:text-black ${isActive ? 'text-black' : ''}`,
        className
      )}
      {...props}
    >
      {isActive && (
        <motion.div
          layoutId="active-settings-navigation-link-background"
          className="absolute inset-0 rounded-sm bg-neutral-200"
        />
      )}
      {LeftIcon && (
        <span className="relative z-10 [&_svg]:size-4">{LeftIcon}</span>
      )}
      <span className="relative z-10">{children}</span>
      {RightIcon && (
        <span className="relative z-10 [&_svg]:size-4">{RightIcon}</span>
      )}
    </NavLink>
  )
}
