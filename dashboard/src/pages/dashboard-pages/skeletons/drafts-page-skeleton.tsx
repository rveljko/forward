import DraftsSectionSkeleton from '@dashboard-sections/skeletons/drafts-section-skeleton'
import { TITLE_PREFIX } from '@utils/constants'

export default function DraftsPageSkeleton() {
  return (
    <>
      <title>{`${TITLE_PREFIX}Drafts`}</title>
      <DraftsSectionSkeleton />
    </>
  )
}
