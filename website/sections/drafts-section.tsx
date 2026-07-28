import DraftsPanel from '@/components/panels/drafts-panel'
import Badge from '@/components/ui/badge'
import Button from '@/components/ui/button'
import ArrowRightIcon from '@/icons/arrow-right-icon'
import Section from '@/sections/section'
import { cn } from '@/utils/utils'

export default function DraftsSection() {
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
        <Badge color="violet">Drafts</Badge>
        <Section.Heading2>
          Keep every thought in drafts <br />
          <span className="text-neutral-500">before it becomes real work</span>
        </Section.Heading2>
        <Section.Paragraph>
          Write ideas, meeting notes, reminders, or anything worth keeping until
          you decide what should happen with it later
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
  )
}

function DashboardPanel() {
  return (
    <div className="p-6 md:p-8">
      <div
        aria-label="Dashboard Issues page"
        className="group relative flex h-150 w-full items-end rounded-t-xl bg-[radial-gradient(circle,var(--color-neutral-200)_1px,transparent_1px)] bg-size-[--spacing(1.5)_--spacing(1.5)] px-6 pt-6 ring inset-ring ring-neutral-900/10 inset-ring-white @4xl:px-12 @4xl:pt-12"
      >
        <div
          aria-hidden
          data-element="desktop-view"
          className="@container/dashboard size-full rounded-t-xl border border-b-0 border-neutral-200 bg-neutral-100 p-2 inset-ring inset-ring-white @4xl:h-19/20"
        >
          <div className="size-full overflow-hidden rounded-sm border border-neutral-200 bg-neutral-50">
            <DraftsPanel />
          </div>
        </div>
        <div
          className={cn(
            '@container/dashboard absolute right-12 bottom-0 isolate z-2 hidden h-[calc(100%-(--spacing(12)))] w-110 overflow-hidden rounded-t-xl border border-b-0 border-neutral-200 bg-neutral-100 p-2 inset-ring inset-ring-white @4xl:block',
            'origin-bottom transition transition-discrete group-has-[[data-element=desktop-view]:hover]:hidden group-has-[[data-element=desktop-view]:hover]:scale-95 group-has-[[data-element=desktop-view]:hover]:opacity-0 starting:scale-95 starting:opacity-0'
          )}
        >
          <div className="size-full overflow-hidden rounded-sm border border-neutral-200 bg-neutral-50">
            <DraftsPanel />
          </div>
        </div>
      </div>
    </div>
  )
}
