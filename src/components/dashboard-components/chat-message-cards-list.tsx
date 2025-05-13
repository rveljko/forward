import ChatMessageCard from '@dashboard-components/chat-message-card'
import DateDivider from '@dashboard-components/date-divider'
import { isSameDate } from '@utils/date-checkers'
import { Message, Person } from '@utils/types'
import { cn } from '@utils/utils'
import React from 'react'

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
      {messages.map((message, index) => (
        <React.Fragment key={message.id}>
          {(index === 0 ||
            !isSameDate(messages[index - 1].date, message.date)) && (
            <DateDivider date={message.date} />
          )}
          <li>
            <ChatMessageCard message={message} person={person} />
          </li>
        </React.Fragment>
      ))}
    </ul>
  )
}
