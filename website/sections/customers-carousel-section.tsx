import { customers } from '@/data/customers'

export default function CustomersCarouselSection() {
  return (
    <section className="flex flex-col md:flex-row">
      <div className="flex shrink-0 items-center justify-center py-6 max-md:border-b max-md:border-b-neutral-200 md:border-r md:border-r-neutral-200 md:p-8">
        <h2 className="text-sm max-md:text-center">
          Trusted by companies <br /> of all sizes worldwide
        </h2>
      </div>
      <div className="scrollbar-hidden pointer-events-none flex overflow-x-auto select-none">
        <ul className="animate-slide flex">
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
        <ul aria-hidden className="animate-slide flex">
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
    </section>
  )
}
