import { cn } from '@utils/utils'

type BentoCardProps = React.ComponentPropsWithoutRef<'article'> & {
  children: React.ReactNode
}

export default function BentoCard({
  children,
  className,
  ...props
}: BentoCardProps) {
  return (
    <article
      className={cn(
        'border-section-outline flex h-87.5 flex-col overflow-hidden rounded-2xl border bg-(image:--background) p-8 [--background:linear-gradient(transparent,hsl(from_var(--color-clickable)_h_s_l_/_4%))]',
        className
      )}
      {...props}
    >
      {children}
    </article>
  )
}

BentoCard.Heading = Heading
BentoCard.Paragraph = Paragraph

type HeadingProps = React.ComponentPropsWithoutRef<'h3'> & {
  children: React.ReactNode
}

function Heading({ children, className, ...props }: HeadingProps) {
  return (
    <h3
      className={cn(
        'mb-2 line-clamp-1 max-w-81 shrink-0 text-xl font-medium md:text-2xl',
        className
      )}
      {...props}
    >
      {children}
    </h3>
  )
}

type ParagraphProps = React.ComponentPropsWithoutRef<'p'> & {
  children: React.ReactNode
}

function Paragraph({ children, className, ...props }: ParagraphProps) {
  return (
    <p
      className={cn(
        'mb-4 line-clamp-2 max-w-81 shrink-0 text-balance',
        className
      )}
      {...props}
    >
      {children}
    </p>
  )
}
