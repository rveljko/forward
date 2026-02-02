import ProfileSectionSkeleton from '@dashboard-sections/skeletons/profile-section-skeleton'
import { TITLE_PREFIX } from '@utils/constants'

export default function ProfilePageSkeleton() {
  return (
    <>
      <title>{`${TITLE_PREFIX}My Profile`}</title>
      <ProfileSectionSkeleton />
    </>
  )
}
