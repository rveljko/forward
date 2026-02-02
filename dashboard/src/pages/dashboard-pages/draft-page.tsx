import DraftSection from '@dashboard-sections/draft-section'
import DraftsContextProvider from '@services/contexts/drafts-context'
import { useParams } from 'react-router'

export default function DraftPage() {
  const { draftId } = useParams()

  if (!draftId) return

  return (
    <DraftsContextProvider>
      <DraftSection draftId={draftId} />
    </DraftsContextProvider>
  )
}
