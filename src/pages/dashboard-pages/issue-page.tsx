import IssueSection from '@dashboard-sections/issue-section'
import IssuesContextProvider from '@services/contexts/issues-context'
import { useParams } from 'react-router'

export default function IssuePage() {
  const { issueId } = useParams()

  if (!issueId) return

  return (
    <IssuesContextProvider>
      <IssueSection issueId={issueId} />
    </IssuesContextProvider>
  )
}
