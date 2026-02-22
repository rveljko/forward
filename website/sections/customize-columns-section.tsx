import IssuesColumnsPanel from '@/components/issues-columns-panel'
import Badge from '@/components/ui/badge'
import Section from '@/sections/section'

export default function CustomizeColumnsSection() {
  return (
    <Section className="flex flex-col divide-neutral-200 @max-3xl:divide-y @3xl:flex-row @3xl:divide-x">
      <TextPanel />
      <IssuesColumnsPanel />
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
