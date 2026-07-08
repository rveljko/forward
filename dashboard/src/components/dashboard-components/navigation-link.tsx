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
          `group flex items-center gap-1 rounded-md px-1.5 py-1 font-medium text-black transition hover:bg-neutral-200 active:scale-99 pointer-coarse:active:bg-neutral-200 ${isActive ? 'bg-neutral-50 ring inset-ring ring-neutral-900/10 inset-ring-white hover:bg-neutral-50 hover:ring-neutral-900/20 pointer-coarse:active:bg-neutral-50 pointer-coarse:active:ring-neutral-900/20 [&_span:first-child]:text-black' : ''}`,
          className
        )
      }
      {...props}
    >
      {Icon && (
        <span className="flex h-6 items-center justify-center text-neutral-600 transition-colors group-hover:text-black pointer-coarse:group-active:text-black [&_svg]:size-4">
          <Icon />
        </span>
      )}
      <span className={hideText ? 'hidden' : ''}>{children}</span>
    </NavLink>
  )
}
