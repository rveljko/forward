import GuideSectionSkeleton from '@dashboard-sections/skeletons/guide-section-skeleton'
import { TITLE_PREFIX } from '@utils/constants'

export default function GuidePageSkeleton() {
  return (
    <>
      <title>{`${TITLE_PREFIX}Guide`}</title>
      <GuideSectionSkeleton />
    </>
  )
}
