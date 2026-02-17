import DashboardControls from '@/components/dashboard-controls'
import Button from '@/components/ui/button'
import ChevronRightIcon from '@/icons/chevron-right-icon'
import Section from '@/sections/section'

export default function HeroSection() {
  return (
    <Section className="py-8">
      <div className="mb-4 flex h-8 w-full md:mb-8">
        <div className="size-full max-w-16 border-b border-b-neutral-200 @2xl:max-w-80" />
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
          className="shrink-0"
        >
          <path
            d="M0 31.5C10 31.5 22 0.5 32 0.5"
            className="stroke-neutral-200"
          />
        </svg>
        <div className="size-full border-t border-t-neutral-200" />
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
          className="shrink-0"
        >
          <path
            d="M32 31.5C22 31.5 10 0.5 0 0.5"
            className="stroke-neutral-200"
          />
        </svg>
        <div className="size-full max-w-16 border-b border-b-neutral-200 @2xl:max-w-80" />
      </div>
      <div className="px-4">
        <Section.Heading1 className="mx-auto mb-4">
          Turn issues into
          <span className="text-neutral-500"> finished projects fast</span>
        </Section.Heading1>
        <Section.Paragraph className="mx-auto mb-6 max-w-[48ch] text-center text-pretty @2xl:text-base">
          Keep your team's work in one spot. No more digging through chats or
          docs, everything lives here, clear and simple
        </Section.Paragraph>
        <Button
          variant="primary"
          size="large"
          rightIcon={<ChevronRightIcon />}
          className="mx-auto md:mb-16"
        >
          Get Started
        </Button>
      </div>
      <DashboardControls />
      <div className="mt-4 flex h-8 w-full md:mt-8">
        <div className="size-full max-w-16 border-t border-t-neutral-200 @2xl:max-w-80" />
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
          className="shrink-0"
        >
          <path
            d="M0 0.5C10 0.5 22 31.5 32 31.5"
            className="stroke-neutral-200"
          />
        </svg>
        <div className="size-full border-b border-b-neutral-200" />
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
          className="shrink-0"
        >
          <path
            d="M32 0.5C22 0.5 10 31.5 0 31.5"
            className="stroke-neutral-200"
          />
        </svg>
        <div className="size-full max-w-16 border-t border-t-neutral-200 @2xl:max-w-80" />
      </div>
    </Section>
  )
}
