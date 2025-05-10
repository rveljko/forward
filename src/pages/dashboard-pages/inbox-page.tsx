import InboxSection from '@dashboard-sections/inbox-section'
import { TITLE_PREFIX } from '@utils/constants'

export default function InboxPage() {
  return (
    <>
      <title>{`${TITLE_PREFIX}Inbox`}</title>
      <InboxSection />
    </>
  )
}
