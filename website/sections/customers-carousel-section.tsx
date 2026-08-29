import { customers } from '@/data/customers'
import Section from '@/sections/section'

export default function CustomersCarouselSection() {
  return (
    <Section className="md:flex-row">
      <div className="flex shrink-0 items-center justify-center border-b border-b-neutral-200 py-6 md:border-r md:border-b-0 md:border-r-neutral-200 md:p-8">
        <h2 className="text-center text-sm md:text-left">
          Trusted by companies <br /> of all sizes worldwide
        </h2>
      </div>
      <div className="pointer-events-none flex scrollbar-none overflow-x-auto select-none">
        <ul className="animate-slide-x flex">
          {customers.map(({ name, logo: Logo }) => (
            <li
              key={name}
              className="flex w-50 items-center justify-center border-r border-r-neutral-200 p-8"
            >
              <Logo />
              <span className="sr-only">{name}</span>
            </li>
          ))}
        </ul>
        <ul aria-hidden className="animate-slide-x flex">
          {customers.map(({ name, logo: Logo }) => (
            <li
              key={name}
              className="flex w-50 items-center justify-center border-r border-r-neutral-200 p-8"
            >
              <Logo />
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
