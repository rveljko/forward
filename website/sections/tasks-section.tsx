import TasksSectionPreview from '@/components/tasks/tasks-section-preview'
import Badge from '@/components/ui/badge'
import Button from '@/components/ui/button'
import ArrowRightIcon from '@/icons/arrow-right-icon'
import Section from '@/sections/section'

export default function TasksSection() {
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
        <Badge color="blue">Tasks</Badge>
        <Section.Heading2>
          Stay on top of daily tasks <br />
          <span className="text-neutral-500">
            with simple checklists that work
          </span>
        </Section.Heading2>
        <Section.Paragraph>
          Create tasks, check completed work, uncheck when plans change, and
          always know what still needs your attention today
        </Section.Paragraph>
      </div>
      <Button
        href="https://dashboard-forward-demo-app.netlify.app/tasks"
        target="_blank"
        rel="noopener noreferrer"
        variant="link"
        rightIcon={<ArrowRightIcon />}
      >
        Explore Tasks
      </Button>
    </div>
  )
}

function DashboardPanel() {
  return (
    <div className="md:p-8 md:pb-0">
      <TasksSectionPreview />
    </div>
  )
}
