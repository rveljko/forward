import { drafts as defaultDrafts } from '@data/drafts'
import { DEFAULT_DRAFT_TITLE } from '@utils/constants'
import { Draft } from '@utils/types'
import { createContext, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { v4 as uuidv4 } from 'uuid'

type DraftsContextProviderProps = {
  children: React.ReactNode
}

type DraftsContextType = {
  drafts: Draft[]
  getSortedDrafts: () => Draft[]
  getDraftById: (id: Draft['id']) => Draft
  createNewDraft: () => void
  updateDraft: (id: Draft['id'], content: Draft['content']) => void
  renameDraft: (id: Draft['id'], newTitle: Draft['title']) => void
  duplicateDraft: (id: Draft['id']) => void
  deleteDraft: (id: Draft['id']) => void
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

  function getSortedDrafts() {
    return drafts.sort(
      (a, b) => new Date(b.lastEdit).getTime() - new Date(a.lastEdit).getTime()
    )
  }

  function getDraftById(id: Draft['id']) {
    return drafts.find((draft) => draft.id === id)!
  }

  function createNewDraft() {
    const id = uuidv4()
    setDrafts([
      { id, lastEdit: new Date(), title: DEFAULT_DRAFT_TITLE, content: '' },
      ...drafts,
    ])
    navigate(`/dashboard/drafts/${id}`)
  }

  function updateDraft(id: Draft['id'], content: Draft['content']) {
    const draft = getDraftById(id)

    setDrafts([
      { ...draft, lastEdit: new Date(), content },
      ...drafts.filter(({ id }) => id !== draft.id),
    ])
  }

  function renameDraft(id: Draft['id'], newTitle: Draft['title']) {
    const draft = getDraftById(id)

    setDrafts([
      { ...draft, title: newTitle },
      ...drafts.filter(({ id }) => id !== draft.id),
    ])
  }

  function duplicateDraft(id: Draft['id']) {
    const draft = getDraftById(id)

    setDrafts([{ ...draft, id: uuidv4(), lastEdit: new Date() }, ...drafts])
  }

  function deleteDraft(id: Draft['id']) {
    setDrafts([...drafts.filter((draft) => draft.id !== id)])
  }

  useEffect(() => {
    localStorage.setItem('drafts', JSON.stringify(drafts))
  }, [drafts])

  return (
    <DraftsContext.Provider
      value={{
        drafts,
        getSortedDrafts,
        getDraftById,
        createNewDraft,
        updateDraft,
        renameDraft,
        duplicateDraft,
        deleteDraft,
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
