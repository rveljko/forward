import { drafts as defaultDrafts } from '@data/drafts'
import { Draft } from '@utils/types'
import { createContext, useContext, useEffect, useState } from 'react'

type DraftsContextProviderProps = {
  children: React.ReactNode
}

type DraftsContextType = {
  drafts: Draft[]
}

export const DraftsContext = createContext<DraftsContextType | null>(null)

function getInitialDrafts(): Draft[] {
  const drafts = localStorage.getItem('drafts')
  return drafts ? JSON.parse(drafts) : defaultDrafts
}

export default function DraftsContextProvider({
  children,
}: DraftsContextProviderProps) {
  const [drafts] = useState(getInitialDrafts)

  useEffect(() => {
    localStorage.setItem('drafts', JSON.stringify(drafts))
  }, [drafts])

  return (
    <DraftsContext.Provider
      value={{
        drafts,
      }}
    >
      {children}
    </DraftsContext.Provider>
  )
}

export const useDrafts = () => {
  const context = useContext(DraftsContext)

  if (!context) {
    throw new Error('useDrafts must be within a DraftsContextProvider')
  }

  return context
}
