import GuideCard from '@landing-page-components/guide-card'
import { Guide } from '@utils/types'
import { cn } from '@utils/utils'
import { motion } from 'motion/react'

type GuideCardsListProps = React.ComponentPropsWithoutRef<'ul'> & {
  guides: Guide[]
  delay?: number
}

export default function GuideCardsList({
  guides,
  delay,
  className,
  ...props
}: GuideCardsListProps) {
  return (
    <ul className={cn('space-y-4', className)} {...props}>
      {guides.map((guide, index) => (
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
          key={guide.id}
        >
          <GuideCard guide={guide} />
        </motion.li>
      ))}
    </ul>
  )
}
