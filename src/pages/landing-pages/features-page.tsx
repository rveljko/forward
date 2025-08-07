import FeaturesSection from '@landing-page-sections/features-section'
import { TITLE_PREFIX } from '@utils/constants'

export default function FeaturesPage() {
  return (
    <>
      <title>{`${TITLE_PREFIX}Features`}</title>
      <FeaturesSection />
    </>
  )
}
