import IssueSection from '@dashboard-sections/issue-section'
import { useParams } from 'react-router'

export default function IssuePage() {
  const { issueId } = useParams()

  if (!issueId) return

  return <IssueSection issueId={issueId} />
}
