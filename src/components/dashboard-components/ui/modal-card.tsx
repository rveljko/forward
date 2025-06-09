import { cn } from '@utils/utils'

type ModalCardProps = React.ComponentPropsWithoutRef<'article'>

export default function ModalCard({ children, className }: ModalCardProps) {
  return (
    <article
      className={cn(
        'bg-modal-background border-section-outline w-full rounded-2xl border',
        className
      )}
    >
      {children}
    </article>
  )
}
