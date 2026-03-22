import Badge from '@/components/ui/badge'
import Button from '@/components/ui/button'
import ArrowRightIcon from '@/icons/arrow-right-icon'
import Section from '@/sections/section'

export default function TemplatesSection() {
  return (
    <Section className="flex flex-col divide-neutral-200 @max-3xl:divide-y @3xl:flex-row @3xl:divide-x">
      <TextPanel />
      <TemplatesCarouselPanel />
    </Section>
  )
}

function TextPanel() {
  return (
    <div className="flex w-full flex-col justify-between gap-8 p-6 md:p-8 @3xl:max-w-79">
      <div className="flex flex-col gap-2">
        <Badge color="pink">Templates</Badge>
        <Section.Heading2>
          Pre-filled structures <br />
          <span className="text-neutral-500">for common issues</span>
        </Section.Heading2>
        <Section.Paragraph>
          Prewritten structured forms that standardize and speed up issue
          creation
        </Section.Paragraph>
      </div>
      <Button
        href="https://dashboard-forward-demo-app.netlify.app/issues"
        target="_blank"
        rel="noopener noreferrer"
        variant="link"
        rightIcon={<ArrowRightIcon />}
      >
        Explore Templates
      </Button>
    </div>
  )
}

function TemplatesCarouselPanel() {
  return <div className="w-full p-6 md:p-8">templates carousel panel</div>
}
