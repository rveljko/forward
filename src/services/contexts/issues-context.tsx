import { issues as defaultIssues } from '@data/issues'
import { Issue, IssueStatus } from '@utils/types'
import { createContext, useContext, useEffect, useState } from 'react'

type IssuesContextProviderProps = {
  children: React.ReactNode
}

type IssuesContextType = {
  issues: Issue[]
  getIssuesByStatus: (status: IssueStatus) => Issue[]
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

  useEffect(() => {
    localStorage.setItem('issues', JSON.stringify(issues))
  }, [issues])

  function getIssuesByStatus(status: IssueStatus) {
    return issues.filter((issue) => issue.status === status)
  }

  return (
    <IssuesContext.Provider
      value={{
        issues,
        getIssuesByStatus,
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
