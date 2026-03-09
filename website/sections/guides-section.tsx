import GuidesCarousel from '@/components/guides-carousel'
import Badge from '@/components/ui/badge'
import Button from '@/components/ui/button'
import ArrowRightIcon from '@/icons/arrow-right-icon'
import Section from '@/sections/section'

export default function GuidesSection() {
  return (
    <Section className="flex flex-col divide-neutral-200 @max-3xl:divide-y @3xl:flex-row @3xl:divide-x">
      <TextPanel />
      <GuidesCarouselPanel />
    </Section>
  )
}

function TextPanel() {
  return (
    <div className="flex w-full flex-col justify-between gap-8 p-6 md:p-8 @3xl:max-w-79">
      <div className="flex flex-col gap-2">
        <Badge color="orange">Guides</Badge>
        <Section.Heading2>
          Guides to get you <br />
          <span className="text-neutral-500">started step by step</span>
        </Section.Heading2>
        <Section.Paragraph>
          Find guides for every part of the app. See how to set up your board,
          create issues. Jump in fast, no guessing
        </Section.Paragraph>
      </div>
      <Button
        href="https://dashboard-forward-demo-app.netlify.app/guides"
        target="_blank"
        rel="noopener noreferrer"
        variant="link"
        rightIcon={<ArrowRightIcon />}
      >
        Explore Guides
      </Button>
    </div>
  )
}

function GuidesCarouselPanel() {
  return (
    <div className="flex h-100 w-full flex-col items-center overflow-hidden px-6 md:px-8 @3xl:h-150 @3xl:items-end">
      <GuidesCarousel />
    </div>
  )
}
