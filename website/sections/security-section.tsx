import AicpaSoc2Certificate from '@/components/certificates/aicpa-soc2-certificate'
import GdprCertificate from '@/components/certificates/gdpr-certificate'
import Iso27001Certificate from '@/components/certificates/iso-27001-certificate'
import Badge from '@/components/ui/badge'
import Button from '@/components/ui/button'
import ArrowRightIcon from '@/icons/arrow-right-icon'
import Section from '@/sections/section'

export default function SecuritySection() {
  return (
    <Section className="divide-y divide-neutral-200 @3xl:h-100 @3xl:flex-row @3xl:divide-x @3xl:divide-y-0">
      <div className="flex w-full flex-col justify-between gap-8 p-6 md:p-8">
        <div className="flex flex-col gap-2">
          <Badge color="slate">Security</Badge>
          <Section.Heading2>
            Keep your work safe every <br />
            <span className="text-neutral-500">
              day with trusted protection built in
            </span>
          </Section.Heading2>
          <Section.Paragraph>
            Your issues, drafts, and tasks stay protected, giving you confidence
            your work remains private and always available
          </Section.Paragraph>
        </div>
        <Button href="/security" variant="link" rightIcon={<ArrowRightIcon />}>
          Explore Security
        </Button>
      </div>
      <ul className="flex flex-col divide-y divide-neutral-200 @3xl:flex-row @3xl:divide-x @3xl:divide-y-0">
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
    </Section>
  )
}
