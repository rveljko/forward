import { issuePriorities } from '@data/issue-priorities'
import { issueStatuses } from '@data/issue-statuses'
import { issueTags } from '@data/issue-tags'
import { issues as defaultIssues } from '@data/issues'
import { UniqueIdentifier } from '@dnd-kit/core'
import { arrayMove } from '@dnd-kit/sortable'
import { DEFAULT_ISSUE_TITLE } from '@utils/constants'
import {
  Issue,
  IssueFilterCategory,
  IssueFilterKey,
  IssuePriority,
  IssuePriorityLabel,
  IssueSort,
  IssueStatus,
  IssueStatusLabel,
  IssueTag,
  IssueTagLabel,
} from '@utils/types'
import { createContext, useContext, useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router'
import { v4 as uuidv4 } from 'uuid'

type IssuesContextProviderProps = {
  children: React.ReactNode
}

type IssuesContextType = {
  issues: Issue[]
  setFilter: (category: IssueFilterCategory, key: IssueFilterKey) => void
  handleCheckbox: (key: IssueFilterKey) => boolean
  sort: IssueSort
  setSort: (key: IssueSort) => void
  getIssuesByStatus: (status: IssueStatusLabel) => Issue[]
  getIssueById: (id: Issue['id']) => Issue
  createNewIssue: (newIssue: Issue) => void
  createDefaultIssue: () => void
  duplicateIssue: (id: Issue['id']) => void
  deleteIssue: (id: Issue['id']) => void
  updateIssue: (issue: Issue) => void
  updateIssuePosition: (
    activeId: UniqueIdentifier,
    overId: UniqueIdentifier
  ) => void
  getIssueStatus: (status: IssueStatusLabel) => IssueStatus
  getIssueTag: (tag: IssueTagLabel) => IssueTag
  getIssuePriority: (priority: IssuePriorityLabel) => IssuePriority
}

export const IssuesContext = createContext<IssuesContextType | null>(null)

function getInitialIssues(): Issue[] {
  const issues = localStorage.getItem('issues')
  return issues ? JSON.parse(issues) : defaultIssues
}

export default function IssuesContextProvider({
  children,
}: IssuesContextProviderProps) {
  const [issues, setIssues] = useState(getInitialIssues)
  const [searchParams, setSearchParams] = useSearchParams()
  const statuses = searchParams.getAll('status') as IssueStatusLabel[]
  const priorities = searchParams.getAll('priority') as IssuePriorityLabel[]
  const tags = searchParams.getAll('tag') as IssueTagLabel[]
  const sort = (searchParams.get('sort') || 'manual') as IssueSort
  const navigate = useNavigate()

  const filteredIssues = issues.filter((issue) => {
    const filteredStatuses = !statuses.length || statuses.includes(issue.status)
    const filteredPriorities =
      !priorities.length || priorities.includes(issue.priority)
    const filteredTags = !tags.length || tags.includes(issue.tag)

    return filteredStatuses && filteredPriorities && filteredTags
  })

  function setFilter(category: IssueFilterCategory, key: IssueFilterKey) {
    setSearchParams((prevParams) => {
      if (prevParams.has(category)) {
        const keys = prevParams.getAll(category) as IssueFilterKey[]

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

  function handleCheckbox(key: IssueFilterKey) {
    return [...statuses, ...priorities, ...tags].includes(key)
  }

  function setSort(key: IssueSort) {
    setSearchParams((prevParams) => {
      prevParams.set('sort', key)
      return prevParams
    })
  }

  function getSortedIssues() {
    switch (sort) {
      case 'manual':
        return filteredIssues
      case 'date-asc':
        return filteredIssues.sort(
          (a, b) =>
            new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        )
      case 'date-desc':
        return filteredIssues.sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        )
      case 'priority-asc':
        return filteredIssues.sort(
          (a, b) =>
            getIssuePriority(a.priority).level -
            getIssuePriority(b.priority).level
        )
      case 'priority-desc':
        return filteredIssues.sort(
          (a, b) =>
            getIssuePriority(b.priority).level -
            getIssuePriority(a.priority).level
        )
      case 'name-asc':
        return filteredIssues.sort((a, b) => a.title.localeCompare(b.title))
      case 'name-desc':
        return filteredIssues.sort((a, b) => b.title.localeCompare(a.title))
      default:
        return filteredIssues
    }
  }

  function getIssuesByStatus(status: IssueStatusLabel) {
    return getSortedIssues().filter((issue) => issue.status === status)
  }

  function getIssueById(id: Issue['id']) {
    return issues.find((issue) => issue.id === id)!
  }

  function createNewIssue(newIssue: Issue) {
    setIssues((prevIssues) => [
      {
        ...newIssue,
        id: uuidv4(),
        createdAt: new Date(),
        content: `<h1>${newIssue.title}</h1><p>${newIssue.description}</p>`,
      },
      ...prevIssues,
    ])
  }

  function createDefaultIssue() {
    const id = uuidv4()
    setIssues((prevIssues) => [
      {
        id,
        title: DEFAULT_ISSUE_TITLE,
        status: 'backlog',
        priority: 'no-priority',
        tag: 'design',
        createdAt: new Date(),
        content: '',
      },
      ...prevIssues,
    ])
    navigate(`/dashboard/issues/${id}`)
  }

  function duplicateIssue(id: Issue['id']) {
    const issue = getIssueById(id)

    setIssues((prevIssues) => [
      { ...issue, id: uuidv4(), createdAt: new Date() },
      ...prevIssues,
    ])
  }

  function deleteIssue(id: Issue['id']) {
    setIssues((prevIssues) => prevIssues.filter((issue) => issue.id !== id))
  }

  function updateIssue(issue: Issue) {
    setIssues((prevIssues) => [
      issue,
      ...prevIssues.filter(({ id }) => id !== issue.id),
    ])
  }

  function updateIssuePosition(
    activeId: UniqueIdentifier,
    overId: UniqueIdentifier
  ) {
    setIssues((prevIssues) => {
      const activeIndex = prevIssues.findIndex(({ id }) => id === activeId)
      const overIndex = prevIssues.findIndex(({ id }) => id === overId)

      prevIssues[activeIndex].status = prevIssues[overIndex]?.status ?? overId

      return arrayMove(prevIssues, activeIndex, overIndex)
    })
  }

  function getIssueStatus(status: IssueStatusLabel) {
    return issueStatuses.find(({ label }) => label === status)!
  }

  function getIssueTag(tag: IssueTagLabel) {
    return issueTags.find(({ label }) => label === tag)!
  }

  function getIssuePriority(priority: IssuePriorityLabel) {
    return issuePriorities.find(({ label }) => label === priority)!
  }

  useEffect(() => {
    localStorage.setItem('issues', JSON.stringify(issues))
  }, [issues])

  return (
    <IssuesContext.Provider
      value={{
        issues,
        setFilter,
        handleCheckbox,
        sort,
        setSort,
        getIssuesByStatus,
        getIssueById,
        createNewIssue,
        createDefaultIssue,
        duplicateIssue,
        deleteIssue,
        updateIssue,
        updateIssuePosition,
        getIssueStatus,
        getIssueTag,
        getIssuePriority,
      }}
    >
      {children}
    </IssuesContext.Provider>
  )
}

export function useIssues() {
  const context = useContext(IssuesContext)

  if (!context) {
    throw new Error('useIssues must be within a IssuesContextProvider')
  }

  return context
}
