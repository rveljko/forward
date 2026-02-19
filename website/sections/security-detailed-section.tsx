import AicpaSoc2Certificate from '@/components/aicpa-soc2-certificate'
import GdprCertificate from '@/components/gdpr-certificate'
import Iso27001Certificate from '@/components/iso-27001-certificate'
import { securityFeatures } from '@/data/security-features'
import Section from '@/sections/section'

export default function SecurityDetailedSection() {
  return (
    <Section className="mt-8 border-t border-t-neutral-200 py-4 md:py-8">
      <div className="px-4">
        <Section.Heading1 className="mx-auto mb-4 @2xl:text-5xl">
          Keep your work safe
          <span className="text-neutral-500"> and private everywhere</span>
        </Section.Heading1>
        <Section.Paragraph className="mx-auto mb-8 max-w-[36ch] text-center text-pretty md:mb-16 @2xl:text-base">
          Data stays encrypted on your device. No servers, no leaks, total
          privacy control always
        </Section.Paragraph>
      </div>
      <div className="flex flex-col items-center gap-6 md:gap-8">
        <div className="relative isolate flex w-full justify-center px-4">
          <div className="absolute inset-0 -z-1 flex flex-col justify-evenly">
            <div className="h-px w-full bg-neutral-200" />
            <div className="h-px w-full bg-neutral-200 @2xl:hidden" />
          </div>
          <ul className="flex w-full max-w-5xl flex-col divide-dashed divide-neutral-200 rounded-lg border border-neutral-200 bg-white @max-2xl:divide-y @2xl:flex-row @2xl:divide-x">
            <li className="flex w-full items-center justify-center p-4 @2xl:p-8">
              <AicpaSoc2Certificate />
            </li>
            <li className="flex w-full items-center justify-center p-4 @2xl:p-8">
              <GdprCertificate />
            </li>
            <li className="flex w-full items-center justify-center p-4 @2xl:p-8">
              <Iso27001Certificate />
            </li>
          </ul>
        </div>
        <div className="flex w-full justify-center px-4">
          <div className="w-full max-w-5xl border-b border-dashed border-b-neutral-200" />
        </div>
        <div className="flex w-full justify-center px-4">
          <ul className="flex max-w-5xl flex-wrap justify-center gap-4">
            {securityFeatures.map(
              ({ icon: Icon, title, description }, index) => (
                <li key={index} className="w-full max-w-82.5">
                  <article className="w-full rounded-lg bg-white shadow-sm ring ring-black/10">
                    <div className="flex items-center gap-2 border-b border-b-neutral-300 p-2.5">
                      <Icon />
                      <h3 className="text-sm font-medium text-neutral-900">
                        {title}
                      </h3>
                    </div>
                    <div className="p-2.5">
                      <p className="text-xs text-neutral-600">{description}</p>
                    </div>
                  </article>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </Section>
  )
}
