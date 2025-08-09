import TermsOfServiceSection from '@landing-page-sections/terms-of-service-section'
import { TITLE_PREFIX } from '@utils/constants'

export default function TermsOfServicePage() {
  return (
    <>
      <title>{`${TITLE_PREFIX}Terms of Service`}</title>
      <TermsOfServiceSection />
    </>
  )
}
