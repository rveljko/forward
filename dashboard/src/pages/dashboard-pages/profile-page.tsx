import ProfileSection from '@dashboard-sections/profile-section'
import { TITLE_PREFIX } from '@utils/constants'

export default function ProfilePage() {
  return (
    <>
      <title>{`${TITLE_PREFIX}My Profile`}</title>
      <ProfileSection />
    </>
  )
}
