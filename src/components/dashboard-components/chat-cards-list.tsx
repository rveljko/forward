import ChatCard from '@dashboard-components/chat-card'
import { Chat } from '@utils/types'
import { AnimatePresence, motion } from 'motion/react'

type ChatCardsListProps = React.ComponentPropsWithoutRef<'ul'> & {
  chats: Chat[]
}

export default function ChatCardsList({ chats, ...props }: ChatCardsListProps) {
  return (
    <ul {...props}>
      <AnimatePresence>
        {chats.map((chat) => (
          <motion.li key={chat.id} layout>
            <ChatCard chat={chat} />
          </motion.li>
        ))}
      </AnimatePresence>
    </ul>
  )
}
