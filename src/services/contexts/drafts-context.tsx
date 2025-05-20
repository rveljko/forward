import { drafts as defaultDrafts } from '@data/drafts'
import { Draft } from '@utils/types'
import { createContext, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { v4 as uuidv4 } from 'uuid'

type DraftsContextProviderProps = {
  children: React.ReactNode
}

type DraftsContextType = {
  drafts: Draft[]
  getDraftById: (id: string) => Draft
  createNewDraft: () => void
  renameDraft: (id: Draft['id'], newTitle: Draft['title']) => void
}

export const DraftsContext = createContext<DraftsContextType | null>(null)

function getInitialDrafts(): Draft[] {
  const drafts = localStorage.getItem('drafts')
  return drafts ? JSON.parse(drafts) : defaultDrafts
}

export default function DraftsContextProvider({
  children,
}: DraftsContextProviderProps) {
  const [drafts, setDrafts] = useState(getInitialDrafts)
  const navigate = useNavigate()

  function getDraftById(id: string) {
    return drafts.find((draft) => draft.id === id)!
  }

  function createNewDraft() {
    const id = uuidv4()
    setDrafts([{ id, lastEdit: new Date(), title: 'New Draft' }, ...drafts])
    navigate(`/dashboard/drafts/${id}`)
  }

  function renameDraft(id: Draft['id'], newTitle: Draft['title']) {
    const draft = getDraftById(id)

    setDrafts([
      { ...draft, title: newTitle },
      ...drafts.filter(({ id }) => id !== draft.id),
    ])
  }

  useEffect(() => {
    localStorage.setItem('drafts', JSON.stringify(drafts))
  }, [drafts])

  return (
    <DraftsContext.Provider
      value={{
        drafts,
        getDraftById,
        createNewDraft,
        renameDraft,
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
