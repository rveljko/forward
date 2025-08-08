import CustomersSection from '@landing-page-sections/customers-section'
import { TITLE_PREFIX } from '@utils/constants'

export default function CustomersPage() {
  return (
    <>
      <title>{`${TITLE_PREFIX}Customers`}</title>
      <CustomersSection />
    </>
  )
}
