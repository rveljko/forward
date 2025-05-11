import ChatMessageCard from '@dashboard-components/chat-message-card'
import { Message, Person } from '@utils/types'
import { cn } from '@utils/utils'

type ChatMessageCardsListProps = React.ComponentPropsWithoutRef<'ul'> & {
  messages: Message[]
  person: Person
}

export default function ChatMessageCardsList({
  messages,
  person,
  className,
  ...props
}: ChatMessageCardsListProps) {
  return (
    <ul className={cn('space-y-4', className)} {...props}>
      {messages.map((message) => (
        <li key={message.id}>
          <ChatMessageCard message={message} person={person} />
        </li>
      ))}
    </ul>
  )
}
