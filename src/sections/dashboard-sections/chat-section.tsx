import ChatMessageCardsList from '@dashboard-components/chat-message-cards-list'
import Divider from '@dashboard-components/ui/divider'
import ArrowLeftIcon from '@icons/arrow-left-icon'
import { useInbox } from '@services/contexts/inbox-context'
import Button from '@ui/button'
import { Navigate } from 'react-router'

type ChatSectionProps = {
  chatId: string
}

export default function ChatSection({ chatId }: ChatSectionProps) {
  const { getChatById } = useInbox()
  const chat = getChatById(chatId)

  if (!chat) return <Navigate to="/dashboard/inbox" />

  const { person, messages } = chat

  return (
    <section className="flex w-full flex-col">
      <header className="flex items-center gap-4 p-4">
        <Button
          href="/dashboard/inbox"
          variant="link"
          leftIcon={<ArrowLeftIcon />}
        >
          <span className="sr-only">Back</span>
        </Button>
        <div className="flex items-center gap-2">
          <div className="size-6 overflow-hidden rounded-full bg-neutral-700">
            <img
              src={person.image}
              alt={person.name}
              className="object-fit-cover"
            />
          </div>
          <p className="text-clickable">{person.name}</p>
        </div>
      </header>
      <Divider />
      <div className="flex flex-col-reverse overflow-y-auto p-4">
        <ChatMessageCardsList messages={messages} person={person} />
      </div>
    </section>
  )
}
