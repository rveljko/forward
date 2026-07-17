import { cn } from '@utils/utils'
import { NavLink, NavLinkProps } from 'react-router'

type NavigationLinkProps = Omit<NavLinkProps, 'children'> & {
  children: React.ReactNode
  leftIcon?: React.JSX.Element
  rightIcon?: React.JSX.Element
}

export default function NavigationLink({
  children,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  className,
  ...props
}: NavigationLinkProps) {
  return (
    <NavLink
      className={({ isActive }) =>
        cn(
          'relative flex h-7 items-center gap-1 rounded-md px-1.5 py-1 font-medium text-nowrap text-black transition hover:bg-neutral-200 active:scale-99 pointer-coarse:active:bg-neutral-200',
          '[&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:text-neutral-600 hover:[&_svg]:text-black pointer-coarse:active:[&_svg]:text-black',
          isActive &&
            'bg-neutral-50 ring inset-ring ring-neutral-900/10 inset-ring-white hover:bg-neutral-50 hover:ring-neutral-900/20 pointer-coarse:active:bg-neutral-50 pointer-coarse:active:ring-neutral-900/20 [&>svg:first-child]:text-black',
          className
        )
      }
      {...props}
    >
      {LeftIcon}
      {children}
      {RightIcon}
    </NavLink>
  )
}
