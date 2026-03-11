import Button from '@/components/ui/button'
import ChevronRightIcon from '@/icons/chevron-right-icon'
import Section from '@/sections/section'

export default function NotFoundSection() {
  return (
    <Section className="mt-8 border-t border-t-neutral-200 py-4 md:py-8">
      <div className="mb-8 hidden h-48 w-full flex-wrap items-center justify-center divide-x divide-y divide-neutral-200 overflow-hidden mask-y-from-50% mask-x-from-90% md:flex">
        {Array.from({ length: 90 }).map((_, index) => (
          <div
            key={index}
            className="size-12 odd:bg-neutral-50 hover:bg-neutral-100"
          />
        ))}
      </div>
      <div className="px-4">
        <Section.Heading1 className="mx-auto mb-4 @2xl:text-5xl">
          We couldn't find
          <span className="text-neutral-500"> the page you want</span>
        </Section.Heading1>
        <Section.Paragraph className="mx-auto mb-6 max-w-[36ch] text-center text-pretty @2xl:text-base">
          Sorry, the page you're looking for isn't here right now. Head back to
          the homepage to continue
        </Section.Paragraph>
        <Button
          href="/"
          variant="primary"
          size="medium"
          rightIcon={<ChevronRightIcon />}
          className="mx-auto"
        >
          Go Back Home
        </Button>
      </div>
    </Section>
  )
}
