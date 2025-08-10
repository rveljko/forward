import SecuritySectionSkeleton from '@dashboard-sections/skeletons/security-section-skeleton'
import { TITLE_PREFIX } from '@utils/constants'

export default function SecurityPageSkeleton() {
  return (
    <>
      <title>{`${TITLE_PREFIX}Security`}</title>
      <SecuritySectionSkeleton />
    </>
  )
}
