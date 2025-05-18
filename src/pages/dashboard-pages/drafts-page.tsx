import DraftsSection from '@dashboard-sections/drafts-section'
import DraftsContextProvider from '@services/contexts/drafts-context'
import { TITLE_PREFIX } from '@utils/constants'

export default function DraftsPage() {
  return (
    <DraftsContextProvider>
      <title>{`${TITLE_PREFIX}Drafts`}</title>
      <DraftsSection />
    </DraftsContextProvider>
  )
}
