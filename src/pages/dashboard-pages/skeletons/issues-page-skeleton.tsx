import IssuesSectionSkeleton from '@dashboard-sections/skeletons/issues-section-skeleton'
import { TITLE_PREFIX } from '@utils/constants'

export default function IssuesPageSkeleton() {
  return (
    <>
      <title>{`${TITLE_PREFIX}Issues`}</title>
      <IssuesSectionSkeleton />
    </>
  )
}
