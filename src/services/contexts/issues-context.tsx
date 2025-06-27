import { issuePriorities } from '@data/issue-priorities'
import { issueStatuses } from '@data/issue-statuses'
import { issueTags } from '@data/issue-tags'
import { issues as defaultIssues } from '@data/issues'
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
import { useSearchParams } from 'react-router'
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
  renameIssue: (id: Issue['id'], newTitle: Issue['title']) => void
  duplicateIssue: (id: Issue['id']) => void
  updateIssueContent: (id: Issue['id'], content: Issue['content']) => void
  updateIssueStatus: (id: Issue['id'], status: IssueStatusLabel) => void
  updateIssuePriority: (id: Issue['id'], priority: IssuePriorityLabel) => void
  updateIssueTag: (id: Issue['id'], tag: IssueTagLabel) => void
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
  const sort = (searchParams.get('sort') || 'priority-desc') as IssueSort

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
        return filteredIssues.sort(
          (a, b) =>
            getIssuePriority(b.priority).level -
            getIssuePriority(a.priority).level
        )
    }
  }

  function getIssuesByStatus(status: IssueStatusLabel) {
    return getSortedIssues().filter((issue) => issue.status === status)
  }

  function getIssueById(id: Issue['id']) {
    return issues.find((issue) => issue.id === id)!
  }

  function createNewIssue(newIssue: Issue) {
    setIssues([
      {
        ...newIssue,
        content: `<h1>${newIssue.title}</h1><p>${newIssue.description}</p>`,
      },
      ...issues,
    ])
  }

  function renameIssue(id: Issue['id'], newTitle: Issue['title']) {
    const issue = getIssueById(id)

    setIssues([
      { ...issue, title: newTitle },
      ...issues.filter(({ id }) => id !== issue.id),
    ])
  }

  function duplicateIssue(id: Issue['id']) {
    const issue = getIssueById(id)

    setIssues([{ ...issue, id: uuidv4(), createdAt: new Date() }, ...issues])
  }

  function updateIssueContent(id: Issue['id'], content: Issue['content']) {
    const issue = getIssueById(id)

    setIssues([
      { ...issue, content },
      ...issues.filter(({ id }) => id !== issue.id),
    ])
  }

  function updateIssueStatus(id: Issue['id'], status: IssueStatusLabel) {
    const issue = getIssueById(id)

    setIssues([
      { ...issue, status },
      ...issues.filter(({ id }) => id !== issue.id),
    ])
  }

  function updateIssuePriority(id: Issue['id'], priority: IssuePriorityLabel) {
    const issue = getIssueById(id)

    setIssues([
      { ...issue, priority },
      ...issues.filter(({ id }) => id !== issue.id),
    ])
  }

  function updateIssueTag(id: Issue['id'], tag: IssueTagLabel) {
    const issue = getIssueById(id)

    setIssues([
      { ...issue, tag },
      ...issues.filter(({ id }) => id !== issue.id),
    ])
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
        renameIssue,
        duplicateIssue,
        updateIssueContent,
        updateIssueStatus,
        updateIssuePriority,
        updateIssueTag,
        getIssueStatus,
        getIssueTag,
        getIssuePriority,
      }}
    >
      {children}
    </IssuesContext.Provider>
  )
}

export const useIssues = () => {
  const context = useContext(IssuesContext)

  if (!context) {
    throw new Error('useIssues must be within a IssuesContextProvider')
  }

  return context
}
