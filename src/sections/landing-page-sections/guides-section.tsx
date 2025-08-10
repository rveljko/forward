import { guides } from '@data/guides'
import GuideCardsList from '@landing-page-components/guide-cards-list'
import Section from '@landing-page-sections/section'

export default function GuidesSection() {
  return (
    <Section>
      <Section.Heading1>
        Master Your Project Management Skills with Expert Learning Resources
      </Section.Heading1>
      <Section.Paragraph className="mx-0 text-left">
        Access a wealth of resources designed to help you navigate our platform
        effectively and efficiently
      </Section.Paragraph>
      <GuideCardsList guides={guides} delay={0.2} />
    </Section>
  )
}
