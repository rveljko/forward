import { cn } from '@utils/utils'

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
        'ring-section-outline relative rounded-lg p-2 ring',
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
