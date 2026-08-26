import IssuesSectionPreview from '@/components/issues/issues-section-preview'
import Badge from '@/components/ui/badge'
import Button from '@/components/ui/button'
import ArrowRightIcon from '@/icons/arrow-right-icon'
import Section from '@/sections/section'

export default function IssuesSection() {
  return (
    <Section className="divide-y divide-neutral-200">
      <TextPanel />
      <DashboardPanel />
    </Section>
  )
}

function TextPanel() {
  return (
    <div className="flex flex-col gap-8 p-6 md:p-8">
      <div className="flex flex-col gap-2">
        <Badge color="cyan">Issues</Badge>
        <Section.Heading2>
          Track every issue from backlog <br />
          <span className="text-neutral-500">
            to finished without losing progress
          </span>
        </Section.Heading2>
        <Section.Paragraph>
          Move issues through every status, set priorities, add tags, and keep
          every detail together from start until completion
        </Section.Paragraph>
      </div>
      <Button
        href="https://dashboard-forward-demo-app.netlify.app/issues"
        target="_blank"
        rel="noopener noreferrer"
        variant="link"
        rightIcon={<ArrowRightIcon />}
      >
        Explore Issues
      </Button>
    </div>
  )
}

function DashboardPanel() {
  return (
    <div className="md:p-8 md:pb-0">
      <IssuesSectionPreview />
    </div>
  )
}
