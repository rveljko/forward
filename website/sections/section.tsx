import { cn } from '@/utils/utils'

type SectionProps = React.ComponentPropsWithoutRef<'section'> & {
  children: React.ReactNode
}

export default function Section({ children, ...props }: SectionProps) {
  return <section {...props}>{children}</section>
}

Section.Heading2 = Heading2
Section.Paragraph = Paragraph

type Heading2Props = React.ComponentPropsWithoutRef<'h2'> & {
  children: React.ReactNode
}

function Heading2({ children, className, ...props }: Heading2Props) {
  return (
    <h2
      className={cn('text-2xl font-medium text-neutral-900', className)}
      {...props}
    >
      {children}
    </h2>
  )
}

type ParagraphProps = React.ComponentPropsWithoutRef<'p'> & {
  children: React.ReactNode
}

function Paragraph({ children, className, ...props }: ParagraphProps) {
  return (
    <p
      className={cn(
        'max-w-63 text-sm text-balance text-neutral-600',
        className
      )}
      {...props}
    >
      {children}
    </p>
  )
}
