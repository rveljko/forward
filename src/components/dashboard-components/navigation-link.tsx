import { NavigationLink as NavigationLinkType } from '@utils/types'
import { NavLink, NavLinkProps } from 'react-router'

type NavigationLinkProps = Omit<NavLinkProps, 'to'> & {
  navigationLink: NavigationLinkType
  showText?: boolean
}

export default function NavigationLink({
  navigationLink: { name, path, icon: Icon },
  showText,
  ...props
}: NavigationLinkProps) {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        `text-clickable group hover:inset-ring-clickable/10 flex items-center gap-1 rounded-sm px-1.5 py-1 hover:bg-neutral-800 hover:inset-ring ${isActive ? 'inset-ring-clickable/10 [&_span]:text-clickable bg-neutral-700 inset-ring' : ''}`
      }
      end
      {...props}
    >
      {Icon && (
        <span className="group-hover:text-clickable flex h-6 items-center justify-center text-neutral-400">
          <Icon />
        </span>
      )}
      {showText && name}
    </NavLink>
  )
}
