import IssuesSection from '@dashboard-sections/issues-section'
import IssuesContextProvider from '@services/contexts/issues-context'
import { TITLE_PREFIX } from '@utils/constants'

export default function IssuesPage() {
  return (
    <IssuesContextProvider>
      <title>{`${TITLE_PREFIX}Issues`}</title>
      <IssuesSection />
    </IssuesContextProvider>
  )
}
