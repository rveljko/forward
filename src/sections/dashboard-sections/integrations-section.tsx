import IntegrationCardsList from '@dashboard-components/integration-cards-list'
import Divider from '@dashboard-components/ui/divider'
import { useIntegrations } from '@services/contexts/integrations-context'
import Button from '@ui/button'
import { showToast } from '@utils/toasts'

export default function IntegrationsSection() {
  const { integrationIds, getSortedIntegrations, updateIntegrationStatuses } =
    useIntegrations()

  const isButtonDisabled = !integrationIds.length

  return (
    <section className="space-y-4">
      <header>
        <h2 className="mb-1">Integrations</h2>
        <p>Connect and manage your apps seamlessly</p>
      </header>
      <Divider />
      <div className="flex flex-col gap-2 lg:flex-row lg:gap-16">
        <h3 className="w-full max-w-50">Connected Applications</h3>
        <IntegrationCardsList integrations={getSortedIntegrations()} />
      </div>
      <Divider />
      <Button
        variant="primary"
        size="large"
        disabled={isButtonDisabled}
        onClick={() => {
          updateIntegrationStatuses(integrationIds)
          showToast({
            title: 'Integrations Updated',
            description: 'Integrations saved successfully',
          })
        }}
      >
        Save Changes
      </Button>
    </section>
  )
}
