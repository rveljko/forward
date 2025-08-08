import IntegrationsSection from '@landing-page-sections/integrations-section'
import { TITLE_PREFIX } from '@utils/constants'

export default function IntegrationsPage() {
  return (
    <>
      <title>{`${TITLE_PREFIX}Integrations`}</title>
      <IntegrationsSection />
    </>
  )
}
