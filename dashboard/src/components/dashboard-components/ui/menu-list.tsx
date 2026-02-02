import { cn } from '@utils/utils'
import { Link } from 'react-router'

type MenuListProps = React.ComponentPropsWithoutRef<'ul'> & {
  children: React.ReactNode
}

export default function MenuList({ children, ...props }: MenuListProps) {
  return <ul {...props}>{children}</ul>
}

MenuList.Heading = Heading
MenuList.Item = Item
MenuList.Button = Button

type HeadingProps = React.ComponentPropsWithoutRef<'h3'> & {
  children: React.ReactNode
}

function Heading({ children, className, ...props }: HeadingProps) {
  return (
    <h3 className={cn('ml-4 text-neutral-400', className)} {...props}>
      {children}
    </h3>
  )
}

type ItemProps = React.ComponentPropsWithoutRef<'li'> & {
  children: React.ReactNode
  leftIcon?: React.JSX.Element
}

function Item({
  children,
  leftIcon: LeftIcon,
  className,
  ...props
}: ItemProps) {
  return (
    <li
      className={cn(
        'has-[button]:text-clickable has-[a]:text-clickable has-[a:focus-visible]:bg-clickable/10 has-[button]:hover:bg-clickable/10 has-[button:focus-visible]:bg-clickable/10 has-[button]:pointer-coarse:active:bg-clickable/10 has-[a]:hover:bg-clickable/10 has-[a]:pointer-coarse:active:bg-clickable/10 relative flex items-center gap-2 px-4 py-2 pointer-coarse:transition',
        className
      )}
      {...props}
    >
      {LeftIcon && <span className="shrink-0">{LeftIcon}</span>}
      {children}
    </li>
  )
}

type ButtonAsAnchorProps = React.ComponentPropsWithoutRef<'a'> & {
  href: string
}

type ButtonAsButtonProps = React.ComponentPropsWithoutRef<'button'> & {
  href?: never
}

type ButtonProps = ButtonAsAnchorProps | ButtonAsButtonProps

function Button({ children, className, ...props }: ButtonProps) {
  const buttonClasses = cn(
    'text-clickable line-clamp-1 break-all hover:cursor-pointer focus:outline-0',
    className
  )

  if ('href' in props && props.href !== undefined) {
    return (
      <Link to={props.href} className={buttonClasses} {...props}>
        <span className="absolute inset-0" />
        {children}
      </Link>
    )
  }

  return (
    <button className={buttonClasses} {...props}>
      <span className="absolute inset-0" />
      {children}
    </button>
  )
}
