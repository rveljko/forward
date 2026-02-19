import { integrations } from '@/data/integrations'
import Section from '@/sections/section'

export default function IntegrationsSection() {
  return (
    <Section className="mt-8 border-t border-t-neutral-200 py-4 md:py-8">
      <div className="px-4">
        <Section.Heading1 className="mx-auto mb-4 @2xl:text-5xl">
          Connect your tools
          <span className="text-neutral-500"> without any limits</span>
        </Section.Heading1>
        <Section.Paragraph className="mx-auto mb-8 max-w-[36ch] text-center text-pretty md:mb-16 @2xl:text-base">
          Link apps and services locally. No cloud sync, no accounts, full
          workflow control always
        </Section.Paragraph>
      </div>
      <div className="relative isolate flex w-full justify-center px-4">
        <div className="absolute inset-0 -z-1 flex flex-col border-y border-y-transparent @2xl:justify-center">
          <div className="h-25 w-full border-b border-b-neutral-200 @2xl:h-auto" />
          <div className="h-25 w-full border-b border-b-neutral-200 @2xl:hidden" />
          <div className="h-25 w-full border-b border-b-neutral-200 @2xl:hidden" />
          <div className="h-25 w-full border-b border-b-neutral-200 @2xl:hidden" />
          <div className="h-25 w-full border-b border-b-neutral-200 @2xl:hidden" />
        </div>
        <ul className="relative isolate grid w-full max-w-5xl grid-cols-1 divide-y divide-dashed divide-neutral-200 rounded-lg border border-neutral-200 bg-white @2xl:grid-cols-3 @2xl:divide-y-0">
          <div className="absolute inset-0 -z-1 hidden justify-evenly @2xl:flex">
            <div className="h-full border-r border-dashed border-r-neutral-200" />
            <div className="h-full border-r border-dashed border-r-neutral-200" />
          </div>
          <div className="absolute inset-x-0 top-1/2 -z-1 hidden border-b border-dashed border-b-neutral-200 @2xl:block" />
          {integrations.map(({ name, logo: Logo }) => (
            <li
              key={name}
              className="flex h-25 w-full items-center justify-center p-4 @2xl:max-w-85 @2xl:p-8"
            >
              <Logo />
              <span className="sr-only">{name}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
