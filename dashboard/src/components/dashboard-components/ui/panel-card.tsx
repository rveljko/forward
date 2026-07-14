import { cn } from '@utils/utils'
import { Link } from 'react-router'

type PanelCardProps = React.ComponentPropsWithoutRef<'article'> & {
  children: React.ReactNode
}

export default function PanelCard({
  children,
  className,
  ...props
}: PanelCardProps) {
  return (
    <article
      className={cn(
        'group/panel-card relative overflow-hidden rounded-lg bg-white p-2 ring ring-neutral-200 pointer-coarse:transition',
        'has-[button]:hover:ring-neutral-900/20 has-[button]:active:scale-99 has-[button]:pointer-coarse:active:ring-neutral-900/20',
        'has-[a]:hover:ring-neutral-900/20 has-[a]:active:scale-99 has-[a]:pointer-coarse:active:ring-neutral-900/20',
        'has-[label]:hover:ring-neutral-900/20 has-[label]:active:scale-99 has-[label]:pointer-coarse:active:ring-neutral-900/20',
        'has-[button:focus-visible]:ring-2 has-[button:focus-visible]:ring-black',
        'has-[a:focus-visible]:ring-2 has-[a:focus-visible]:ring-black',
        'has-[input:focus-visible]:ring-2 has-[input:focus-visible]:ring-black',
        'has-[input:checked]:ring-brand-500 has-[input:checked]:hover:ring-brand-500 has-[input:checked]:pointer-coarse:active:ring-brand-500 has-[input:checked]:ring-2',
        'has-[input:checked:focus-visible]:ring-brand-500',
        className
      )}
      {...props}
    >
      {children}
    </article>
  )
}

PanelCard.Heading = Heading
PanelCard.Paragraph = Paragraph
PanelCard.Icon = Icon
PanelCard.Button = Button
PanelCard.Label = Label

type HeadingProps = React.ComponentPropsWithoutRef<'h3'> & {
  children: React.ReactNode
}

function Heading({ children, className, ...props }: HeadingProps) {
  return (
    <h3 className={cn('font-medium', className)} {...props}>
      {children}
    </h3>
  )
}

type ParagraphProps = React.ComponentPropsWithoutRef<'p'> & {
  children: React.ReactNode
}

function Paragraph({ children, className, ...props }: ParagraphProps) {
  return (
    <p className={cn('text-xs text-neutral-600', className)} {...props}>
      {children}
    </p>
  )
}

type IconProps = React.ComponentPropsWithoutRef<'span'> & {
  icon: React.JSX.Element
}

function Icon({ icon: Icon, className, ...props }: IconProps) {
  return (
    <span
      className={cn(
        'flex w-max items-center justify-center rounded-lg p-2 shadow-sm ring ring-neutral-900/10 [&_svg]:size-4 [&_svg]:text-black',
        className
      )}
      {...props}
    >
      {Icon}
    </span>
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
    'text-black hover:cursor-pointer focus:outline-0',
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

type LabelProps = React.ComponentPropsWithoutRef<'label'> & {
  children: React.ReactNode
}

function Label({ children, className, ...props }: LabelProps) {
  return (
    <label
      className={cn('font-medium text-black hover:cursor-pointer', className)}
      {...props}
    >
      <span className="absolute inset-0" />
      {children}
    </label>
  )
}
