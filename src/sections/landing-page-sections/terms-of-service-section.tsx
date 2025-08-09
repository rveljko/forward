import MarkdownContentLoader from '@dashboard-components/markdown-content-loader'
import { termsOfService } from '@data/terms-of-service'
import Section from '@landing-page-sections/section'

export default function TermsOfServiceSection() {
  return (
    <Section>
      <MarkdownContentLoader content={termsOfService} />
    </Section>
  )
}
