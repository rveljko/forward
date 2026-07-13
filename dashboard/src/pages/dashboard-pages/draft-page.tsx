import DraftSection from '@dashboard-sections/draft-section'
import { useParams } from 'react-router'

export default function DraftPage() {
  const { draftId } = useParams()

  if (!draftId) return

  return <DraftSection draftId={draftId} />
}
