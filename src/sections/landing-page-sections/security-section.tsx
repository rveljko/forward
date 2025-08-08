import { securityFeatures } from '@data/features'
import FeatureCellsList from '@landing-page-components/feature-cells-list'
import Section from '@landing-page-sections/section'

export default function SecuritySection() {
  return (
    <Section>
      <Section.Heading1>
        Protect Your Digital Assets with Our Comprehensive Security Solutions
      </Section.Heading1>
      <Section.Paragraph className="mx-0 text-left">
        Ensure your data remains safe and secure with our advanced protection
        measures and tools
      </Section.Paragraph>
      <FeatureCellsList features={securityFeatures} delay={0.2} />
    </Section>
  )
}
