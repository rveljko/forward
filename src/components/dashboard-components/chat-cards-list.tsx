import ChatCard from '@dashboard-components/chat-card'
import { Chat } from '@utils/types'

type ChatCardsListProps = React.ComponentPropsWithoutRef<'ul'> & {
  chats: Chat[]
}

export default function ChatCardsList({ chats, ...props }: ChatCardsListProps) {
  return (
    <ul {...props}>
      {chats.map((chat) => (
        <li key={chat.id}>
          <ChatCard chat={chat} />
        </li>
      ))}
    </ul>
  )
}
