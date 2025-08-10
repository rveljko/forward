import DraftSectionSkeleton from '@dashboard-sections/skeletons/draft-section-skeleton'
import { TITLE_PREFIX } from '@utils/constants'

export default function DraftPageSkeleton() {
  return (
    <>
      <title>{`${TITLE_PREFIX}Draft`}</title>
      <DraftSectionSkeleton />
    </>
  )
}
