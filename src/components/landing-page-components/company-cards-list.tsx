import CompanyCard from '@landing-page-components/company-card'
import { Company } from '@utils/types'
import { cn } from '@utils/utils'
import { motion } from 'motion/react'

type CompanyCardsListProps = React.ComponentPropsWithoutRef<'ul'> & {
  companies: Company[]
  delay?: number
}

export default function CompanyCardsList({
  companies,
  delay,
  className,
  ...props
}: CompanyCardsListProps) {
  return (
    <ul className={cn('space-y-4', className)} {...props}>
      {companies.map((company, index) => (
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
          key={company.id}
          className="@container"
        >
          <CompanyCard company={company} />
        </motion.li>
      ))}
    </ul>
  )
}
