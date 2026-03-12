import Button from '@/components/ui/button'
import ChevronRightIcon from '@/icons/chevron-right-icon'
import Section from '@/sections/section'

export default function CtaSection() {
  return (
    <Section className="relative isolate flex flex-col items-center justify-center p-6 md:px-8 md:py-16">
      <div className="absolute inset-0 -z-1 bg-[linear-gradient(var(--color-neutral-200)_1px,transparent_0),linear-gradient(90deg,var(--color-neutral-200)_1px,transparent_0)] mask-y-from-50% mask-x-from-50% bg-size-[--spacing(12)_--spacing(12)]" />
      <Section.Heading2 className="mb-2 text-center @2xl:text-4xl @2xl:font-semibold">
        Get started right <br />
        <span className="text-neutral-500">now in minutes</span>
      </Section.Heading2>
      <Section.Paragraph className="mb-6 max-w-[34ch] text-center">
        Click to get started. Set up your board in minutes. Start tracking
        issues and tasks today
      </Section.Paragraph>
      <Button
        href="https://dashboard-forward-demo-app.netlify.app/issues"
        target="_blank"
        rel="noopener noreferrer"
        variant="primary"
        size="small"
        rightIcon={<ChevronRightIcon />}
      >
        Get Started
      </Button>
    </Section>
  )
}
