import InboxSidebar from '@dashboard-components/inbox-sidebar'
import InboxSection from '@dashboard-sections/inbox-section'
import { TITLE_PREFIX } from '@utils/constants'

export default function InboxPage() {
  return (
    <>
      <title>{`${TITLE_PREFIX}Inbox`}</title>
      <div className="flex h-full overflow-hidden">
        <InboxSidebar />
        <InboxSection />
      </div>
    </>
  )
}
