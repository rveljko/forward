import Badge from '@/components/ui/badge'
import Button from '@/components/ui/button'
import ArrowRightIcon from '@/icons/arrow-right-icon'
import Section from '@/sections/section'

export default function SecuritySection() {
  return (
    <Section className="flex flex-col divide-neutral-200 @max-3xl:divide-y @3xl:h-100 @3xl:flex-row @3xl:divide-x">
      <TextPanel />
      <CertificatesPanel />
    </Section>
  )
}

function TextPanel() {
  return (
    <div className="flex w-full flex-col justify-between gap-8 p-6 md:p-8">
      <div className="flex flex-col gap-2">
        <Badge color="slate">Security</Badge>
        <Section.Heading2>
          Keep data safe <br />
          <span className="text-neutral-500">with full security</span>
        </Section.Heading2>
        <Section.Paragraph>
          Your data stays safe. We follow all the rules and handle security so
          you focus on work
        </Section.Paragraph>
      </div>
      <Button href="/" variant="link" rightIcon={<ArrowRightIcon />}>
        Explore Security
      </Button>
    </div>
  )
}

function CertificatesPanel() {
  return (
    <ul className="flex flex-col divide-neutral-200 @max-3xl:divide-y @3xl:flex-row @3xl:divide-x">
      <li className="flex items-center justify-center p-4 @3xl:p-8">
        <div className="relative flex size-16 flex-col items-center justify-center rounded-full shadow-sm ring ring-black/10">
          <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 border-b border-dashed border-b-neutral-200" />
          <h3 className="flex flex-col gap-1 text-center text-xs text-neutral-600">
            <span>AICPA</span>
            <span>SOC 2</span>
          </h3>
        </div>
      </li>
      <li className="flex items-center justify-center p-4 @3xl:p-8">
        <div className="relative flex size-16 flex-col justify-center overflow-hidden rounded-sm shadow-sm ring ring-black/10">
          <div className="absolute inset-0 flex flex-col justify-evenly">
            <div className="h-px w-full border-b border-dashed border-b-neutral-200" />
            <div className="h-px w-full border-b border-dashed border-b-neutral-200" />
          </div>
          <h3 className="text-center text-xs text-neutral-600">GDPR</h3>
        </div>
      </li>
      <li className="flex items-center justify-center p-4 @3xl:p-8">
        <div className="relative flex size-16 flex-col items-center justify-center rounded-full shadow-sm ring ring-black/10">
          <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 border-b border-dashed border-b-neutral-200" />
          <h3 className="flex flex-col gap-1 text-center text-xs text-neutral-600">
            <span>ISO</span>
            <span>27001</span>
          </h3>
        </div>
      </li>
    </ul>
  )
}
