import { issues as defaultIssues } from '@data/issues'
import { Issue, IssueStatus } from '@utils/types'
import { createContext, useContext, useEffect, useState } from 'react'

type IssuesContextProviderProps = {
  children: React.ReactNode
}

type IssuesContextType = {
  issues: Issue[]
  getIssuesByStatus: (status: IssueStatus) => Issue[]
  getIssueById: (id: Issue['id']) => Issue
}

export const IssuesContext = createContext<IssuesContextType | null>(null)

function getInitialIssues(): Issue[] {
  const issues = localStorage.getItem('issues')
  return issues ? JSON.parse(issues) : defaultIssues
}

export default function IssuesContextProvider({
  children,
}: IssuesContextProviderProps) {
  const [issues] = useState(getInitialIssues)

  function getIssuesByStatus(status: IssueStatus) {
    return issues.filter((issue) => issue.status === status)
  }

  function getIssueById(id: Issue['id']) {
    return issues.find((issue) => issue.id === id)!
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
