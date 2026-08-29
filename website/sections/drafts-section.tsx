import DraftsSectionPreview from '@/components/drafts/drafts-section-preview'
import Badge from '@/components/ui/badge'
import Button from '@/components/ui/button'
import ArrowRightIcon from '@/icons/arrow-right-icon'
import Section from '@/sections/section'

export default function DraftsSection() {
  return (
    <Section className="divide-y divide-neutral-200">
      <div className="flex flex-col gap-8 p-6 md:p-8">
        <div className="flex flex-col gap-2">
          <Badge color="violet">Drafts</Badge>
          <Section.Heading2>
            Keep every thought in drafts <br />
            <span className="text-neutral-500">
              before it becomes real work
            </span>
          </Section.Heading2>
          <Section.Paragraph>
            Write ideas, meeting notes, reminders, or anything worth keeping
            until you decide what should happen with it later
          </Section.Paragraph>
        </div>
        <Button
          href="https://dashboard-forward-demo-app.netlify.app/drafts"
          target="_blank"
          rel="noopener noreferrer"
          variant="link"
          rightIcon={<ArrowRightIcon />}
        >
          Explore Drafts
        </Button>
      </div>
      <div className="md:p-8 md:pb-0">
        <DraftsSectionPreview />
      </div>
    </Section>
  )
}
