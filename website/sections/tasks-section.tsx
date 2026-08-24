import TasksPanel from '@/components/panels/tasks-panel'
import Badge from '@/components/ui/badge'
import Button from '@/components/ui/button'
import ArrowRightIcon from '@/icons/arrow-right-icon'
import Section from '@/sections/section'
import { cn } from '@/utils/utils'

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
    <div className="p-6 md:p-8">
      <div
        aria-label="Dashboard Tasks page"
        className="group relative flex h-150 w-full items-end rounded-t-xl bg-[radial-gradient(circle,var(--color-neutral-200)_1px,transparent_1px)] bg-size-[--spacing(1.5)_--spacing(1.5)] px-6 pt-6 ring inset-ring ring-neutral-900/10 inset-ring-white @4xl:px-12 @4xl:pt-12"
      >
        <div
          aria-hidden
          data-element="desktop-view"
          className="@container/dashboard size-full rounded-t-xl border border-b-0 border-neutral-200 bg-neutral-100 p-2 inset-ring inset-ring-white @4xl:h-19/20"
        >
          <div className="size-full overflow-hidden rounded-sm border border-neutral-200 bg-neutral-50">
            <TasksPanel />
          </div>
        </div>
        <div
          aria-hidden
          className={cn(
            '@container/dashboard absolute right-12 bottom-0 isolate z-2 hidden h-[calc(100%-(--spacing(12)))] w-110 overflow-hidden rounded-t-xl border border-b-0 border-neutral-200 bg-neutral-100 p-2 inset-ring inset-ring-white @4xl:block',
            'origin-bottom transition transition-discrete group-has-[[data-element=desktop-view]:hover]:hidden group-has-[[data-element=desktop-view]:hover]:scale-95 group-has-[[data-element=desktop-view]:hover]:opacity-0 starting:scale-95 starting:opacity-0'
          )}
        >
          <div className="size-full overflow-hidden rounded-sm border border-neutral-200 bg-neutral-50">
            <TasksPanel />
          </div>
        </div>
      </div>
    </div>
  )
}
