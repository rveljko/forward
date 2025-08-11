import InboxSidebarSkeleton from '@dashboard-components/skeletons/inbox-sidebar-skeleton'
import InboxSectionSkeleton from '@dashboard-sections/skeletons/inbox-section-skeleton'
import { TITLE_PREFIX } from '@utils/constants'

export default function InboxPageSkeleton() {
  return (
    <>
      <title>{`${TITLE_PREFIX}Inbox`}</title>
      <div className="flex h-full overflow-hidden">
        <InboxSidebarSkeleton />
        <InboxSectionSkeleton />
      </div>
    </>
  )
}
