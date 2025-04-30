import PreferencesSection from '@dashboard-sections/preferences-section'
import { TITLE_PREFIX } from '@utils/constants'

export default function PreferencesPage() {
  return (
    <>
      <title>{`${TITLE_PREFIX}Preferences`}</title>
      <PreferencesSection />
    </>
  )
}
