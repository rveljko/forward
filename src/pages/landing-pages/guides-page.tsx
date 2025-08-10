import GuidesSection from '@landing-page-sections/guides-section'
import { TITLE_PREFIX } from '@utils/constants'

export default function GuidesPage() {
  return (
    <>
      <title>{`${TITLE_PREFIX}Guides`}</title>
      <GuidesSection />
    </>
  )
}
