import ChatMessageCardsList from '@dashboard-components/chat-message-cards-list'
import Divider from '@dashboard-components/ui/divider'
import FormField from '@dashboard-components/ui/form-field'
import UserStatus from '@dashboard-components/ui/user-status'
import ArrowLeftIcon from '@icons/arrow-left-icon'
import MessageIcon from '@icons/message-icon'
import SendIcon from '@icons/send-icon'
import { useInbox } from '@services/contexts/inbox-context'
import Button from '@ui/button'
import {
  iso8601DateFormatter,
  weekdayTimeFormatter,
} from '@utils/date-formatters'
import { Message } from '@utils/types'
import { useState } from 'react'
import { Navigate } from 'react-router'

type ChatSectionProps = {
  chatId: string
}

export default function ChatSection({ chatId }: ChatSectionProps) {
  const initialMessage: Message = {
    id: '',
    date: new Date(),
    type: 'sender',
    message: '',
  }

  const [newMessage, setNewMessage] = useState(initialMessage)
  const { getChatById, addNewMessage } = useInbox()
  const chat = getChatById(chatId)

  if (!chat) return <Navigate to="/dashboard/inbox" />

  const { person, messages } = chat

  function handleSendMessage() {
    if (!newMessage.message.length) return

    addNewMessage(chatId, newMessage)
    setNewMessage(initialMessage)
  }

  return (
    <section className="grid w-full grid-cols-1 grid-rows-[repeat(3,auto)_1fr]">
      <header className="flex items-center gap-4 p-4">
        <Button
          href="/dashboard/inbox"
          variant="link"
          leftIcon={<ArrowLeftIcon />}
        >
          <span className="sr-only">Back</span>
        </Button>
        <div className="group flex items-center gap-2">
          <div className="relative">
            <div className="size-6 overflow-hidden rounded-full bg-neutral-700">
              <img
                src={person.image}
                alt={person.name}
                className="object-fit-cover"
              />
            </div>
            <UserStatus
              status={person.status}
              isSmall
              className="absolute right-0.25 bottom-0.25"
            />
          </div>
          <div className="flex items-center gap-1">
            <p className="text-clickable">{person.name}</p>
            <span className="hidden text-sm text-transparent transition-colors group-hover:text-neutral-400 hover:text-neutral-400 sm:block">
              {person.status === 'active' ? (
                'Active Now'
              ) : (
                <time dateTime={iso8601DateFormatter(person.lastActiveDate)}>
                  Last Active on {weekdayTimeFormatter(person.lastActiveDate)}
                </time>
              )}
            </span>
          </div>
        </div>
      </header>
      <Divider />
      <div className="flex flex-col-reverse overflow-y-auto p-4">
        <ChatMessageCardsList messages={messages} person={person} />
      </div>
      <div className="self-end">
        <Divider />
        <form
          className="p-4"
          onSubmit={(e) => {
            e.preventDefault()
            handleSendMessage()
          }}
        >
          <FormField className="[&_div]:max-w-none">
            <FormField.Textarea
              className="field-sizing-content aspect-auto max-h-[30vh]"
              placeholder="Message"
              value={newMessage.message}
              onChange={(e) =>
                setNewMessage({ ...newMessage, message: e.target.value })
              }
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault()
                  handleSendMessage()
                }
              }}
              leftIcon={<MessageIcon />}
              rightIcon={
                <button className="hover:cursor-pointer">
                  <SendIcon />
                </button>
              }
            />
          </FormField>
        </form>
      </div>
    </section>
  )
}
