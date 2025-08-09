import MarkdownContentLoader from '@dashboard-components/markdown-content-loader'
import { privacyPolicy } from '@data/privacy-policy'
import Section from '@landing-page-sections/section'

export default function PrivacyPolicySection() {
  return (
    <Section>
      <MarkdownContentLoader content={privacyPolicy} />
    </Section>
  )
}
