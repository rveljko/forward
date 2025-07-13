import { useIntegrations } from '@services/contexts/integrations-context'
import Switch from '@ui/switch'
import { Integration } from '@utils/types'
import { useState } from 'react'

type IntegrationCardProps = {
  integration: Integration
}

export default function IntegrationCard({
  integration: { id, name, description, isActive, logoUrl },
}: IntegrationCardProps) {
  const [isIntegrationActive, setIsIntegrationActive] = useState(isActive)
  const { addIntegrationId } = useIntegrations()

  return (
    <article className="flex items-start justify-between gap-2">
      <header className="flex flex-wrap gap-2">
        <div className="border-section-outline flex size-12 shrink-0 items-center justify-center rounded-lg border">
          <img
            src={logoUrl}
            alt={`${name} logo`}
            title={name}
            className="size-7.5"
          />
        </div>
        <div>
          <h3>{name}</h3>
          <p className="text-sm">{description}</p>
        </div>
      </header>
      <Switch
        checked={isIntegrationActive}
        onChange={() => {
          setIsIntegrationActive((prev) => !prev)
          addIntegrationId(id)
        }}
        className="shrink-0"
      />
    </article>
  )
}
