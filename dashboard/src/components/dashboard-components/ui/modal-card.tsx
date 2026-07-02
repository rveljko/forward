import { usePreferences } from '@services/contexts/preferences-context'
import { cn } from '@utils/utils'

type ModalCardProps = React.ComponentPropsWithoutRef<'article'>

export default function ModalCard({ children, className }: ModalCardProps) {
  const { getBorderRadius } = usePreferences()

  return (
    <article
      style={{ borderRadius: getBorderRadius() }}
      className={cn(
        'w-full bg-neutral-50 ring inset-ring ring-neutral-200 inset-ring-white',
        className
      )}
    >
      {children}
    </article>
  )
}
