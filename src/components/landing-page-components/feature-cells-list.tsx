import FeatureCell from '@landing-page-components/feature-cell'
import { Feature } from '@utils/types'
import { cn } from '@utils/utils'
import { motion } from 'motion/react'

type FeatureCellsListProps = React.ComponentPropsWithoutRef<'ul'> & {
  features: Feature[]
  delay?: number
}

export default function FeatureCellsList({
  features,
  delay,
  className,
  ...props
}: FeatureCellsListProps) {
  return (
    <ul
      className={cn(
        'flex flex-wrap items-center justify-center gap-4',
        className
      )}
      {...props}
    >
      {features.map((feature, index) => (
        <motion.li
          initial={{
            opacity: 'var(--opacity-from)',
            translateY: 'var(--slide-y-from)',
          }}
          whileInView={{
            opacity: 'var(--opacity-to)',
            translateY: 'var(--slide-y-to)',
          }}
          transition={{ ease: 'easeInOut', delay: 0.1 * index + (delay ?? 0) }}
          viewport={{ once: true }}
          key={feature.id}
        >
          <FeatureCell feature={feature} />
        </motion.li>
      ))}
    </ul>
  )
}
