import Container from '@dashboard-components/container'
import MarkdownContentLoader from '@dashboard-components/markdown-content-loader'
import Divider from '@dashboard-components/ui/divider'
import { guides } from '@data/guides'
import { TITLE_PREFIX } from '@utils/constants'
import { Guide } from '@utils/types'
import { Link, Navigate } from 'react-router'

type GuideSectionProps = {
  guideSlug: Guide['slug']
}

function getGuideBySlug(slug: Guide['slug']) {
  return guides.find((guide) => guide.slug === slug)!
}

export default function GuideSection({ guideSlug }: GuideSectionProps) {
  const guide = getGuideBySlug(guideSlug)

  if (!guide) return <Navigate to="/guides" />

  const { title, content } = guide

  return (
    <section>
      <title>{`${TITLE_PREFIX}${title}`}</title>
      <header className="p-4">
        <div className="flex items-center gap-1">
          <Link to="/guides" className="font-medium text-black">
            Guides
          </Link>
          <span className="text-neutral-600">/</span>
          <p className="line-clamp-1">{title}</p>
        </div>
      </header>
      <Divider />
      <Container className="py-8 md:py-16">
        <MarkdownContentLoader content={content} />
      </Container>
    </section>
  )
}
