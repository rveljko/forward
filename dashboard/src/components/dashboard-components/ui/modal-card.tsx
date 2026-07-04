import { usePreferences } from '@services/contexts/preferences-context'
import { cn } from '@utils/utils'

type ModalCardProps = React.ComponentPropsWithoutRef<'article'>

export default function ModalCard({ children, className }: ModalCardProps) {
  const { getBorderRadius } = usePreferences()

  return (
    <article
      style={{ borderRadius: getBorderRadius() }}
      className={cn(
        'w-full border border-neutral-200 bg-neutral-50 inset-ring inset-ring-white',
        className
      )}
    >
      {children}
    </article>
  )
}
