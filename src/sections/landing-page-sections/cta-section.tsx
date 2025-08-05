import ChevronRightIcon from '@icons/chevron-right-icon'
import Section from '@landing-page-sections/section'
import Button from '@ui/button'

export default function CtaSection() {
  return (
    <Section>
      <Section.Heading>
        Start Effectively Managing Your Projects Today
      </Section.Heading>
      <Section.Paragraph>
        Join Forward now to revolutionize the way you track issues and manage
        projects effectively
      </Section.Paragraph>
      <Section.CardAnimator delay={0.2} className="mx-auto w-max">
        <Button
          href="/dashboard/issues"
          variant="primary"
          size="large"
          rightIcon={<ChevronRightIcon />}
        >
          Begin Your Journey
        </Button>
      </Section.CardAnimator>
    </Section>
  )
}
