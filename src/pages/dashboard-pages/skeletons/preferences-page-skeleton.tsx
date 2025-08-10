import PreferencesSectionSkeleton from '@dashboard-sections/skeletons/preferences-section-skeleton'
import { TITLE_PREFIX } from '@utils/constants'

export default function PreferencesPageSkeleton() {
  return (
    <>
      <title>{`${TITLE_PREFIX}Preferences`}</title>
      <PreferencesSectionSkeleton />
    </>
  )
}
