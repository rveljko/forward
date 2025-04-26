import { integrations as defaultIntegrations } from '@data/integrations'
import { Integration } from '@utils/types'
import { createContext, useContext, useEffect, useState } from 'react'

type IntegrationsContextProviderProps = {
  children: React.ReactNode
}

type IntegrationsContextType = {
  integrationIds: number[]
  getSortedIntegrations: () => Integration[]
  addIntegrationId: (id: number) => void
  updateIntegrationStatuses: (ids: number[]) => void
}

export const IntegrationsContext =
  createContext<IntegrationsContextType | null>(null)

function getInitialIntegrations(): Integration[] {
  const integrations = localStorage.getItem('integrations')
  return integrations ? JSON.parse(integrations) : defaultIntegrations
}

export default function IntegrationsContextProvider({
  children,
}: IntegrationsContextProviderProps) {
  const [integrations, setIntegrations] = useState(getInitialIntegrations)
  const [integrationIds, setIntegrationIds] = useState<number[]>([])

  function getSortedIntegrations() {
    return integrations.sort((a, b) => a.id - b.id)
  }

  function getIntegrationById(id: number) {
    return integrations.find((integration) => integration.id === id)!
  }

  function addIntegrationId(id: number) {
    setIntegrationIds((prevIntegrationIds) => {
      if (prevIntegrationIds.includes(id)) {
        return [...prevIntegrationIds].filter(
          (prevIntegrationId) => prevIntegrationId !== id
        )
      }

      return [...prevIntegrationIds, id]
    })
  }

  function updateIntegrationStatus(id: number) {
    setIntegrations((prevIntegrations) => {
      const matchingIntegration = getIntegrationById(id)

      return [
        ...prevIntegrations.filter(
          (prevIntegration) => prevIntegration.id !== id
        ),
        { ...matchingIntegration, isActive: !matchingIntegration.isActive },
      ]
    })
    setIntegrationIds([])
  }

  function updateIntegrationStatuses(ids: number[]) {
    ids.forEach((id) => {
      updateIntegrationStatus(id)
    })
  }

  useEffect(() => {
    localStorage.setItem('integrations', JSON.stringify(integrations))
  }, [integrations])

  return (
    <IntegrationsContext.Provider
      value={{
        integrationIds,
        getSortedIntegrations,
        addIntegrationId,
        updateIntegrationStatuses,
      }}
    >
      {children}
    </IntegrationsContext.Provider>
  )
}

export const useIntegrations = () => {
  const context = useContext(IntegrationsContext)

  if (!context) {
    throw new Error(
      'useIntegrations must be within a IntegrationsContextProvider'
    )
  }

  return context
}
