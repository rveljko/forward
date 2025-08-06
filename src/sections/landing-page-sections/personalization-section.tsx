import { personalizationFeatures } from '@data/features'
import FeatureCellsList from '@landing-page-components/feature-cells-list'
import ThemesBentoCard from '@landing-page-components/themes-bento-card'
import ViewsBentoCard from '@landing-page-components/views-bento-card'
import Section from '@landing-page-sections/section'

export default function PersonalizationSection() {
  return (
    <Section>
      <Section.Heading>
        Personalize Your Experience for Maximum Efficiency
      </Section.Heading>
      <Section.Paragraph>
        Customize your workspace to fit your preferences and improve your
        workflow efficiency
      </Section.Paragraph>
      <Section.Grid className="lg:grid-cols-2">
        <Section.CardAnimator delay={0.2} className="lg:col-span-1">
          <ThemesBentoCard />
        </Section.CardAnimator>
        <Section.CardAnimator delay={0.3} className="lg:col-span-1">
          <ViewsBentoCard />
        </Section.CardAnimator>
      </Section.Grid>
      <FeatureCellsList features={personalizationFeatures} delay={0.4} />
    </Section>
  )
}
