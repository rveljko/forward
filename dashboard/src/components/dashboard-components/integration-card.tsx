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
    <article className="@container flex items-start justify-between gap-2">
      <header className="flex flex-col gap-2 @2xs:flex-row">
        <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-white shadow-sm ring ring-neutral-900/10">
          <img
            src={logoUrl}
            alt={`${name} logo`}
            title={name}
            className="size-6.5"
          />
        </div>
        <div>
          <h3 className="mb-1 font-medium">{name}</h3>
          <p className="text-xs text-neutral-600">{description}</p>
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
