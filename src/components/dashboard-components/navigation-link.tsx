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
          `text-clickable group pointer-coarse:active:[&>span:first-child]:text-clickable flex items-center gap-1 rounded-sm px-1.5 py-1 [--hover-background:var(--color-neutral-800)] hover:bg-(--hover-background) active:scale-99 pointer-coarse:active:bg-(--hover-background) ${isActive ? '[&_span]:text-clickable bg-(--active-background) [--active-background:var(--color-neutral-700)] hover:bg-(--active-background) pointer-coarse:active:bg-(--active-background)' : ''}`,
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
      <span className={hideText ? 'hidden' : ''}>{children}</span>
    </NavLink>
  )
}
