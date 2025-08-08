import { usePreferences } from '@services/contexts/preferences-context'
import { Company } from '@utils/types'
import { cn } from '@utils/utils'

type CompanyCardProps = React.ComponentPropsWithoutRef<'article'> & {
  company: Company
}

export default function CompanyCard({
  company: { name, description, imageUrl },
  className,
  ...props
}: CompanyCardProps) {
  const { isLightTheme } = usePreferences()

  return (
    <article
      className={cn('flex gap-2 @max-3xl:flex-col', className)}
      {...props}
    >
      <div className="from-clickable/5 border-section-outline flex aspect-video w-full max-w-97 items-center justify-center rounded-2xl border bg-linear-0 to-transparent p-8">
        <img
          src={imageUrl}
          alt={`${name} logo`}
          className={isLightTheme ? '' : 'invert'}
        />
      </div>
      <div>
        <h3 className="mb-1 text-xl font-medium md:text-2xl">{name}</h3>
        <p>{description}</p>
      </div>
    </article>
  )
}
