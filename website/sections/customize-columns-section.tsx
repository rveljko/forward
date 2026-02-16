import IssueKanbanCard from '@/components/issue-kanban-card'
import Badge from '@/components/ui/badge'
import CircleThreeQuartersIcon from '@/icons/circle-three-quarters-icon'
import PlusIcon from '@/icons/plus-icon'
import Section from '@/sections/section'

export default function CustomizeColumnsSection() {
  return (
    <Section className="flex flex-col divide-neutral-200 @max-3xl:divide-y @3xl:flex-row @3xl:divide-x">
      <TextPanel />
      <IssueColumnsPanel />
    </Section>
  )
}

function TextPanel() {
  return (
    <div className="flex w-full flex-col gap-2 p-6 md:p-8 @3xl:max-w-79">
      <Badge color="green">Customize</Badge>
      <Section.Heading2>
        Customize columns <br />
        <span className="text-neutral-500">show what you need</span>
      </Section.Heading2>
      <Section.Paragraph>
        Turn off columns you don't use. Make the board look like your workflow,
        not ours
      </Section.Paragraph>
    </div>
  )
}

function IssueColumnsPanel() {
  return (
    <div
      dir="rtl"
      className="scrollbar-hidden flex w-full overflow-x-auto px-6 py-8 @5xl:justify-center"
    >
      <div dir="ltr" className="flex divide-x divide-neutral-200">
        <div className="flex w-85 shrink-0 flex-col gap-2 pr-2">
          <div className="flex items-center justify-between rounded-sm bg-black/10 p-4">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <CircleThreeQuartersIcon />
                <h3 className="text-sm font-medium">In Review</h3>
              </div>
              <span className="text-dashboard-neutral-600 text-sm">4</span>
            </div>
            <PlusIcon />
          </div>
          <ul className="flex flex-col gap-2">
            <li>
              <IssueKanbanCard
                title="Utilize Mobile Access"
                status="in-review"
                priority="high"
                tag="development"
              />
            </li>
            <li>
              <IssueKanbanCard
                title="Add Comments"
                status="in-review"
                priority="medium"
                tag="design"
              />
            </li>
            <li>
              <IssueKanbanCard
                title="Set Priorities"
                status="in-review"
                priority="medium"
                tag="development"
              />
            </li>
            <li>
              <IssueKanbanCard
                title="Use Tags"
                status="in-review"
                priority="medium"
                tag="design"
              />
            </li>
          </ul>
        </div>
        <div className="flex w-85 shrink-0 pl-2">
          <button className="flex h-45 w-full items-center justify-center gap-2 rounded-lg border border-dashed border-neutral-300 bg-white text-sm font-medium transition-[background-color,scale] hover:cursor-pointer hover:bg-neutral-50 active:scale-99 pointer-coarse:active:bg-neutral-50">
            <PlusIcon />
            Add Column
          </button>
        </div>
      </div>
    </div>
  )
}
