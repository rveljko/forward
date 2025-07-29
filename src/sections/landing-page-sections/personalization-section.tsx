import { personalizationFeatures } from '@data/features'
import FeatureCellsList from '@landing-page-components/feature-cells-list'
import ThemesBentoCard from '@landing-page-components/themes-bento-card'
import ViewsBentoCard from '@landing-page-components/views-bento-card'
import Section from '@landing-page-sections/section'

export default function PersonalizationSection() {
  return (
    <Section className="[--background:linear-gradient(hsl(from_var(--color-landing-page-background-color)_h_s_l_/_0%),hsl(from_var(--color-landing-page-background-color)_h_s_l_/_80%),var(--color-landing-page-background-color),hsl(from_var(--color-landing-page-background-color)_h_s_l_/_80%),hsl(from_var(--color-landing-page-background-color)_h_s_l_/_0%)),radial-gradient(hsl(from_var(--color-clickable)_h_s_l_/_5%),var(--color-landing-page-background-color))]">
      <Section.Heading>
        Personalize Your Experience for Maximum Efficiency
      </Section.Heading>
      <Section.Paragraph>
        Customize your workspace to fit your preferences and improve your
        workflow efficiency
      </Section.Paragraph>
      <div className="mb-8 grid grid-cols-1 gap-5 lg:grid-cols-2">
        <Section.CardAnimator delay={0.2} className="lg:col-span-1">
          <ThemesBentoCard />
        </Section.CardAnimator>
        <Section.CardAnimator delay={0.3} className="lg:col-span-1">
          <ViewsBentoCard />
        </Section.CardAnimator>
      </div>
      <FeatureCellsList features={personalizationFeatures} delay={0.4} />
    </Section>
  )
}
