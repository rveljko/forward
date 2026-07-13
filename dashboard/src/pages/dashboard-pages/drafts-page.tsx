import DraftsSection from '@dashboard-sections/drafts-section'
import { TITLE_PREFIX } from '@utils/constants'

export default function DraftsPage() {
  return (
    <>
      <title>{`${TITLE_PREFIX}Drafts`}</title>
      <DraftsSection />
    </>
  )
}
