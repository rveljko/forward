import IntegrationCard from '@dashboard-components/integration-card'
import { Integration } from '@utils/types'

type IntegrationCardsListProps = {
  integrations: Integration[]
}

export default function IntegrtionsCardsList({
  integrations,
}: IntegrationCardsListProps) {
  return (
    <ul className="space-y-4">
      {integrations.map((integration) => (
        <li key={integration.id}>
          <IntegrationCard integration={integration} />
        </li>
      ))}
    </ul>
  )
}
