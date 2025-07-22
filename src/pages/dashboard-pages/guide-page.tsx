import GuideSection from '@dashboard-sections/guide-section'
import { useParams } from 'react-router'

export default function GuidePage() {
  const { guideSlug } = useParams()

  if (!guideSlug) return

  return <GuideSection guideSlug={guideSlug} />
}
