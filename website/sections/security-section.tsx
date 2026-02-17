import AicpaSoc2Certificate from '@/components/aicpa-soc2-certificate'
import GdprCertificate from '@/components/gdpr-certificate'
import Iso27001Certificate from '@/components/iso-27001-certificate'
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
      <Button href="/security" variant="link" rightIcon={<ArrowRightIcon />}>
        Explore Security
      </Button>
    </div>
  )
}

function CertificatesPanel() {
  return (
    <ul className="flex flex-col divide-neutral-200 @max-3xl:divide-y @3xl:flex-row @3xl:divide-x">
      <li className="flex items-center justify-center p-4 @3xl:p-8">
        <AicpaSoc2Certificate />
      </li>
      <li className="flex items-center justify-center p-4 @3xl:p-8">
        <GdprCertificate />
      </li>
      <li className="flex items-center justify-center p-4 @3xl:p-8">
        <Iso27001Certificate />
      </li>
    </ul>
  )
}
