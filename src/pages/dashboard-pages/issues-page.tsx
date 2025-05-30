import IssuesSection from '@dashboard-sections/issues-section'
import { TITLE_PREFIX } from '@utils/constants'

export default function IssuesPage() {
  return (
    <>
      <title>{`${TITLE_PREFIX}Issues`}</title>
      <IssuesSection />
    </>
  )
}
