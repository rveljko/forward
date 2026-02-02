import IntegrationsSection from '@dashboard-sections/integrations-section'
import IntegrationsContextProvider from '@services/contexts/integrations-context'
import { TITLE_PREFIX } from '@utils/constants'

export default function IntegrationsPage() {
  return (
    <IntegrationsContextProvider>
      <title>{`${TITLE_PREFIX}Integrations`}</title>
      <IntegrationsSection />
    </IntegrationsContextProvider>
  )
}
