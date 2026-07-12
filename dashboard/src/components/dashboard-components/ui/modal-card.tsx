import { usePreferences } from '@services/contexts/preferences-context'
import { cn } from '@utils/utils'
import { motion } from 'motion/react'

type ModalCardProps = React.ComponentProps<typeof motion.article>

export default function ModalCard({
  children,
  className,
  ...props
}: ModalCardProps) {
  const { getBorderRadius } = usePreferences()

  return (
    <motion.article
      layout
      style={{ borderRadius: getBorderRadius() }}
      className={cn(
        'relative w-full overflow-hidden border border-neutral-200 bg-neutral-50 inset-ring inset-ring-white',
        className
      )}
      {...props}
    >
      {children}
    </motion.article>
  )
}
