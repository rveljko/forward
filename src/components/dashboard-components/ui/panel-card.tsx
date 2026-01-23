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
        'ring-section-outline has-[a:focus-visible]:ring-clickable has-[button]:hover:ring-clickable/20 has-[button]:pointer-coarse:active:ring-clickable/20 has-[input:checked]:ring-brand-500 has-[input:checked]:pointer-coarse:active:ring-brand-500 has-[input:checked]:hover:ring-brand-500 has-[label]:pointer-coarse:active:ring-clickable/20 has-[a]:pointer-coarse:active:ring-clickable/20 has-[label]:hover:ring-clickable/20 has-[a]:hover:ring-clickable/20 relative overflow-hidden rounded-lg p-2 ring transition-all has-[a]:active:scale-99 has-[a:focus-visible]:ring-2 has-[button]:active:scale-99 has-[label]:active:scale-99',
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

function Heading({ children, ...props }: HeadingProps) {
  return <h3 {...props}>{children}</h3>
}

type ParagraphProps = React.ComponentPropsWithoutRef<'p'> & {
  children: React.ReactNode
}

function Paragraph({ children, className, ...props }: ParagraphProps) {
  return (
    <p className={cn('text-sm', className)} {...props}>
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
        'inset-ring-section-outline [&_svg]:text-clickable flex w-max items-center justify-center rounded-lg p-2 inset-ring [&_svg]:size-4',
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
  const buttonClasses = cn('text-clickable hover:cursor-pointer', className)

  if ('href' in props && props.href !== undefined) {
    return (
      <Link to={props.href} className={buttonClasses} {...props}>
        <span className="absolute inset-0"></span>
        {children}
      </Link>
    )
  }

  return (
    <button className={buttonClasses} {...props}>
      <span className="absolute inset-0"></span>
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
      className={cn('text-clickable hover:cursor-pointer', className)}
      {...props}
    >
      <span className="absolute inset-0"></span>
      {children}
    </label>
  )
}
