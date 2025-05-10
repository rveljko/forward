import InboxSidebar from '@dashboard-components/inbox-sidebar'
import InboxContextProvider from '@services/contexts/inbox-context'

export default function ChatPage() {
  return (
    <InboxContextProvider>
      <div className="flex h-full overflow-hidden">
        <InboxSidebar className="hidden md:block" />
      </div>
    </InboxContextProvider>
  )
}
