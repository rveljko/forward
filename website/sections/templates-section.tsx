import TemplateShowcase from '@/components/issues/template-showcase'
import Badge from '@/components/ui/badge'
import Button from '@/components/ui/button'
import ArrowRightIcon from '@/icons/arrow-right-icon'
import Section from '@/sections/section'

export default function TemplatesSection() {
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
        <Badge color="pink">Templates</Badge>
        <Section.Heading2>
          Create consistent issues with <br />
          <span className="text-neutral-500">
            templates ready for every new issue
          </span>
        </Section.Heading2>
        <Section.Paragraph>
          Save reusable issue structures, skip repeated writing, and help
          everyone start with the same information every single time
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

function DashboardPanel() {
  return (
    <div className="p-3 md:p-4">
      <TemplateShowcase />
    </div>
  )
}
