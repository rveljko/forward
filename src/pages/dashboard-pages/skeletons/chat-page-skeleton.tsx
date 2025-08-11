import InboxSidebarSkeleton from '@dashboard-components/skeletons/inbox-sidebar-skeleton'
import ChatSectionSkeleton from '@dashboard-sections/skeletons/chat-section-skeleton'
import { TITLE_PREFIX } from '@utils/constants'

export default function ChatPageSkeleton() {
  return (
    <div className="flex h-full overflow-hidden">
      <title>{`${TITLE_PREFIX}Chat`}</title>
      <InboxSidebarSkeleton className="hidden lg:block" />
      <ChatSectionSkeleton />
    </div>
  )
}
