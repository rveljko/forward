import IntegrationsSection from '@dashboard-sections/integrations-section'
import { TITLE_PREFIX } from '@utils/constants'
import IntegrationsContextProvider from '@services/contexts/inetgrations-context'

export default function IntegrationsPage() {
  return (
    <IntegrationsContextProvider>
      <title>{`${TITLE_PREFIX}Integrations`}</title>
      <IntegrationsSection />
    </IntegrationsContextProvider>
  )
}
