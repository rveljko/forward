import ChatCard from '@dashboard-components/chat-card'
import { Chat } from '@utils/types'
import { cn } from '@utils/utils'

type ChatCardsListProps = React.ComponentPropsWithoutRef<'ul'> & {
  chats: Chat[]
}

export default function ChatCardsList({
  chats,
  className,
  ...props
}: ChatCardsListProps) {
  return (
    <ul
      className={cn(
        'divide-section-outline border-b-section-outline divide-y border-b',
        className
      )}
      {...props}
    >
      {chats.map((chat) => (
        <li key={chat.id}>
          <ChatCard chat={chat} />
        </li>
      ))}
    </ul>
  )
}
