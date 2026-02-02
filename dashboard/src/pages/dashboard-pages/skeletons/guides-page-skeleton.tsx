import GuidesSectionSkeleton from '@dashboard-sections/skeletons/guides-section-skeleton'
import { TITLE_PREFIX } from '@utils/constants'

export default function GuidesPageSkeleton() {
  return (
    <>
      <title>{`${TITLE_PREFIX}Guides`}</title>
      <GuidesSectionSkeleton />
    </>
  )
}
