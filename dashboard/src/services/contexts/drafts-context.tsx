import { draftCategories } from '@data/draft-categories'
import { drafts as defaultDrafts } from '@data/drafts'
import {
  Draft,
  DraftCategory,
  DraftCategoryLabel,
  DraftFilterCategory,
  DraftFilterKey,
  DraftSort,
} from '@utils/types'
import { createContext, useContext, useEffect, useState } from 'react'
import { useSearchParams } from 'react-router'
import { v4 as uuidv4 } from 'uuid'

type DraftsContextProviderProps = {
  children: React.ReactNode
}

type DraftsContextType = {
  drafts: Draft[]
  categories: DraftCategoryLabel[]
  setFilter: (category: DraftFilterCategory, key: DraftFilterKey) => void
  removeFilter: (category: DraftFilterCategory, key: DraftFilterKey) => void
  handleCheckbox: (key: DraftFilterKey) => boolean
  sort: DraftSort
  setSort: (key: DraftSort) => void
  getSortedDrafts: () => Draft[]
  getDraftById: (id: Draft['id']) => Draft
  createNewDraft: (newDraft: Draft) => void
  updateDraftContent: (id: Draft['id'], content: Draft['content']) => void
  updateDraftCategory: (id: Draft['id'], category: Draft['category']) => void
  renameDraft: (id: Draft['id'], newTitle: Draft['title']) => void
  duplicateDraft: (id: Draft['id']) => void
  deleteDraft: (id: Draft['id']) => void
  getDraftCategory: (category: DraftCategoryLabel) => DraftCategory
}

const DraftsContext = createContext<DraftsContextType | null>(null)

function getInitialDrafts(): Draft[] {
  const drafts = localStorage.getItem('drafts')
  return drafts ? JSON.parse(drafts) : defaultDrafts
}

export default function DraftsContextProvider({
  children,
}: DraftsContextProviderProps) {
  const [drafts, setDrafts] = useState(getInitialDrafts)
  const [searchParams, setSearchParams] = useSearchParams()
  const categories = searchParams.getAll('category') as DraftCategoryLabel[]
  const sort = (searchParams.get('sort') || 'date-desc') as DraftSort

  const filteredDrafts = drafts.filter((draft) => {
    const filteredCategories =
      !categories.length || categories.includes(draft.category)

    return filteredCategories
  })

  function setFilter(category: DraftFilterCategory, key: DraftFilterKey) {
    setSearchParams((prevParams) => {
      if (prevParams.has(category)) {
        const keys = prevParams.getAll(category) as DraftFilterKey[]

        if (keys.includes(key)) {
          prevParams.delete(category, key)
        } else {
          prevParams.append(category, key)
        }
      } else {
        prevParams.append(category, key)
      }

      return prevParams
    })
  }

  function removeFilter(category: DraftFilterCategory, key: DraftFilterKey) {
    setSearchParams((prevParams) => {
      prevParams.delete(category, key)

      return prevParams
    })
  }

  function handleCheckbox(key: DraftFilterKey) {
    return categories.includes(key)
  }

  function setSort(key: DraftSort) {
    setSearchParams((prevParams) => {
      prevParams.set('sort', key)
      return prevParams
    })
  }

  function getSortedDrafts() {
    switch (sort) {
      case 'date-asc':
        return filteredDrafts.sort(
          (a, b) =>
            new Date(a.lastEdit).getTime() - new Date(b.lastEdit).getTime()
        )
      case 'date-desc':
        return filteredDrafts.sort(
          (a, b) =>
            new Date(b.lastEdit).getTime() - new Date(a.lastEdit).getTime()
        )
      case 'name-asc':
        return filteredDrafts.sort((a, b) => a.title.localeCompare(b.title))
      case 'name-desc':
        return filteredDrafts.sort((a, b) => b.title.localeCompare(a.title))
      default:
        return filteredDrafts
    }
  }

  function getDraftById(id: Draft['id']) {
    return drafts.find((draft) => draft.id === id)!
  }

  function createNewDraft(newDraft: Draft) {
    setDrafts((prevDrafts) => [
      {
        ...newDraft,
        id: uuidv4(),
        lastEdit: new Date(),
        content: `<h1>${newDraft.title}</h1><p>${newDraft.content}</p>`,
      },
      ...prevDrafts,
    ])
  }

  function updateDraftContent(id: Draft['id'], content: Draft['content']) {
    const draft = getDraftById(id)

    setDrafts((prevDrafts) => [
      { ...draft, lastEdit: new Date(), content },
      ...prevDrafts.filter(({ id }) => id !== draft.id),
    ])
  }

  function updateDraftCategory(id: Draft['id'], category: Draft['category']) {
    const draft = getDraftById(id)

    setDrafts((prevDrafts) => [
      { ...draft, category },
      ...prevDrafts.filter(({ id }) => id !== draft.id),
    ])
  }

  function renameDraft(id: Draft['id'], newTitle: Draft['title']) {
    const draft = getDraftById(id)

    setDrafts((prevDrafts) => [
      { ...draft, title: newTitle },
      ...prevDrafts.filter(({ id }) => id !== draft.id),
    ])
  }

  function duplicateDraft(id: Draft['id']) {
    const draft = getDraftById(id)

    setDrafts((prevDrafts) => [
      { ...draft, id: uuidv4(), lastEdit: new Date() },
      ...prevDrafts,
    ])
  }

  function deleteDraft(id: Draft['id']) {
    setDrafts((prevDrafts) => prevDrafts.filter((draft) => draft.id !== id))
  }

  function getDraftCategory(category: DraftCategoryLabel) {
    return draftCategories.find(({ label }) => label === category)!
  }

  useEffect(() => {
    localStorage.setItem('drafts', JSON.stringify(drafts))
  }, [drafts])

  return (
    <DraftsContext.Provider
      value={{
        drafts,
        categories,
        setFilter,
        removeFilter,
        handleCheckbox,
        sort,
        setSort,
        getSortedDrafts,
        getDraftById,
        createNewDraft,
        updateDraftContent,
        updateDraftCategory,
        renameDraft,
        duplicateDraft,
        deleteDraft,
        getDraftCategory,
      }}
    >
      {children}
    </DraftsContext.Provider>
  )
}

export function useDrafts() {
  const context = useContext(DraftsContext)

  if (!context) {
    throw new Error('useDrafts must be within a DraftsContextProvider')
  }

  return context
}
