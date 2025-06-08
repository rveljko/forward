import { issuePriorities } from '@data/issue-priorities'
import { issueStatuses } from '@data/issue-statuses'
import { issueTags } from '@data/issue-tags'
import { issues as defaultIssues } from '@data/issues'
import {
  Issue,
  IssuePriority,
  IssuePriorityLabel,
  IssueStatus,
  IssueStatusLabel,
  IssueTag,
  IssueTagLabel,
} from '@utils/types'
import { createContext, useContext, useEffect, useState } from 'react'

type IssuesContextProviderProps = {
  children: React.ReactNode
}

type IssuesContextType = {
  issues: Issue[]
  getIssuesByStatus: (status: IssueStatusLabel) => Issue[]
  getIssueById: (id: Issue['id']) => Issue
  renameIssue: (id: Issue['id'], newTitle: Issue['title']) => void
  updateIssueContent: (id: Issue['id'], content: Issue['content']) => void
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

  function getIssuesByStatus(status: IssueStatusLabel) {
    return issues.filter((issue) => issue.status === status)
  }

  function getIssueById(id: Issue['id']) {
    return issues.find((issue) => issue.id === id)!
  }

  function renameIssue(id: Issue['id'], newTitle: Issue['title']) {
    const issue = getIssueById(id)

    setIssues([
      { ...issue, title: newTitle },
      ...issues.filter(({ id }) => id !== issue.id),
    ])
  }

  function updateIssueContent(id: Issue['id'], content: Issue['content']) {
    const issue = getIssueById(id)

    setIssues([
      { ...issue, content },
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
        getIssuesByStatus,
        getIssueById,
        renameIssue,
        updateIssueContent,
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
