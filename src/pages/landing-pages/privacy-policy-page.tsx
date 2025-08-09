import PrivacyPolicySection from '@landing-page-sections/privacy-policy-section'
import { TITLE_PREFIX } from '@utils/constants'

export default function PrivacyPolicyPage() {
  return (
    <>
      <title>{`${TITLE_PREFIX}Privacy Policy`}</title>
      <PrivacyPolicySection />
    </>
  )
}
