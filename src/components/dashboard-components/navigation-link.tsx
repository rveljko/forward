import { NavigationLink as NavigationLinkType } from '@utils/types'
import { cn } from '@utils/utils'
import { NavLink, NavLinkProps } from 'react-router'

type NavigationLinkProps = Omit<NavLinkProps, 'children'> & {
  children: React.ReactNode
  icon?: NavigationLinkType['icon']
  hideText?: boolean
}

export default function NavigationLink({
  children,
  icon: Icon,
  hideText,
  className,
  ...props
}: NavigationLinkProps) {
  return (
    <NavLink
      className={({ isActive }) =>
        cn(
          `text-clickable group flex items-center gap-1 rounded-sm px-1.5 py-1 hover:bg-neutral-800 active:scale-99 ${isActive ? '[&_span]:text-clickable bg-neutral-700 hover:bg-neutral-700' : ''}`,
          className
        )
      }
      {...props}
    >
      {Icon && (
        <span className="group-hover:text-clickable flex h-6 items-center justify-center text-neutral-400">
          <Icon />
        </span>
      )}
      <span className={!hideText ? 'inline' : 'hidden'}>{children}</span>
    </NavLink>
  )
}
