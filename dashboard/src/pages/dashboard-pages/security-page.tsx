import SecuritySection from '@dashboard-sections/security-section'
import { TITLE_PREFIX } from '@utils/constants'

export default function SecurityPage() {
  return (
    <>
      <title>{`${TITLE_PREFIX}Security`}</title>
      <SecuritySection />
    </>
  )
}
