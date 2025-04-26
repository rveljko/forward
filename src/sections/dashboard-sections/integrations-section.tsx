import IntegrationCardsList from '@dashboard-components/integration-cards-list'
import Divider from '@dashboard-components/ui/divider'
import Button from '@ui/button'
import { useIntegrations } from 'services/contexts/inetgrations-context'

export default function IntegrationsSection() {
  const { integrationIds, getSortedIntegrations, updateIntegrationStatuses } =
    useIntegrations()

  const isButtonDisabled = !integrationIds.length

  return (
    <section className="flex flex-col gap-4">
      <header>
        <h2>Integrations</h2>
        <p>Connect and manage your apps seamlessly</p>
      </header>
      <Divider />
      <div className="flex flex-wrap justify-between gap-4">
        <h3>Connected Applications</h3>
        <IntegrationCardsList integrations={getSortedIntegrations()} />
      </div>
      <Divider />
      <Button
        variant="primary"
        size="large"
        disabled={isButtonDisabled}
        onClick={() => updateIntegrationStatuses(integrationIds)}
      >
        Save Changes
      </Button>
    </section>
  )
}
