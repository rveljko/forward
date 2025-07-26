import { Feature } from '@utils/types'

type FeatureCellProps = {
  feature: Feature
}

export default function FeatureCell({
  feature: { title, description, icon: Icon },
}: FeatureCellProps) {
  return (
    <article className="max-w-97.25">
      <span className="[&_svg]:text-clickable absolute flex h-6 items-center">
        <Icon />
      </span>
      <p className="relative indent-7 text-balance">
        <span className="text-neutral-100">{title}</span> {description}
      </p>
    </article>
  )
}
