import { usePreferences } from '@services/contexts/preferences-context'
import { cn } from '@utils/utils'

type ModalCardProps = React.ComponentPropsWithoutRef<'article'>

export default function ModalCard({ children, className }: ModalCardProps) {
  const { getRemCornerRoundness } = usePreferences()

  return (
    <article
      style={{ borderRadius: getRemCornerRoundness() }}
      className={cn(
        'bg-modal-background border-section-outline w-full border',
        className
      )}
    >
      {children}
    </article>
  )
}
