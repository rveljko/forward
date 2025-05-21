import { NavigationLink as NavigationLinkType } from '@utils/types'
import { cn } from '@utils/utils'
import { NavLink, NavLinkProps } from 'react-router'

type NavigationLinkProps = Omit<NavLinkProps, 'children'> & {
  children: React.ReactNode
  icon?: NavigationLinkType['icon']
  showText?: boolean
}

export default function NavigationLink({
  children,
  icon: Icon,
  showText,
  className,
  ...props
}: NavigationLinkProps) {
  return (
    <NavLink
      className={({ isActive }) =>
        cn(
          `text-clickable group hover:inset-ring-clickable/10 flex items-center gap-1 rounded-sm px-1.5 py-1 hover:bg-neutral-800 hover:inset-ring ${isActive ? 'inset-ring-clickable/10 [&_span]:text-clickable bg-neutral-700 inset-ring' : ''}`,
          className
        )
      }
      end
      {...props}
    >
      {Icon && (
        <span className="group-hover:text-clickable flex h-6 items-center justify-center text-neutral-400">
          <Icon />
        </span>
      )}
      {showText && children}
    </NavLink>
  )
}
