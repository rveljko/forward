import IssueSectionSkeleton from '@dashboard-sections/skeletons/issue-section-skeleton'
import { TITLE_PREFIX } from '@utils/constants'

export default function IssuePageSkeleton() {
  return (
    <>
      <title>{`${TITLE_PREFIX}Issue`}</title>
      <IssueSectionSkeleton />
    </>
  )
}
