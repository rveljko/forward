import InboxSidebar from '@dashboard-components/inbox-sidebar'
import ChatSection from '@dashboard-sections/chat-section'
import InboxContextProvider from '@services/contexts/inbox-context'
import { useParams } from 'react-router'

export default function ChatPage() {
  const { chatId } = useParams()

  if (!chatId) return

  return (
    <InboxContextProvider>
      <div className="flex h-full overflow-hidden">
        <InboxSidebar className="hidden lg:block" />
        <ChatSection chatId={chatId} />
      </div>
    </InboxContextProvider>
  )
}
