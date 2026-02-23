import TermsOfService from '@/markdown/terms-of-service.mdx'
import Section from '@/sections/section'
import { dayMonthShortFormatter } from '@/utils/date-formatters'

export default function TermsOfServiceSection() {
  return (
    <Section className="mt-8 border-t border-t-neutral-200">
      <div className="mx-auto flex max-w-4xl flex-col gap-6 p-4 md:gap-8 md:py-8">
        <div>
          <h1 className="text-medium mb-4 text-2xl font-medium text-neutral-900">
            Forward Terms of Service
          </h1>
          <p className="text-sm text-neutral-600">
            Last updated: {dayMonthShortFormatter(new Date())}
          </p>
        </div>
        <div className="border-b border-dashed border-b-neutral-200" />
        <div className="space-y-4">
          <TermsOfService />
        </div>
      </div>
    </Section>
  )
}
