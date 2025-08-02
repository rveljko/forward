import { chats as defaultChats } from '@data/chats'
import { Chat, Message } from '@utils/types'
import { createContext, useContext, useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

type InboxContextProviderProps = {
  children: React.ReactNode
}

type InboxContextType = {
  chats: Chat[]
  getChatById: (id: Chat['id']) => Chat
  addNewMessage: (chatId: Chat['id'], newMessage: Message) => void
}

export const InboxContext = createContext<InboxContextType | null>(null)

function getInitialChats(): Chat[] {
  const chats = localStorage.getItem('chats')
  return chats ? JSON.parse(chats) : defaultChats
}

export default function InboxContextProvider({
  children,
}: InboxContextProviderProps) {
  const [chats, setChats] = useState(getInitialChats)

  function getChatById(id: Chat['id']) {
    return chats.find((chat) => chat.id === id)!
  }

  function addNewMessage(chatId: Chat['id'], newMessage: Message) {
    const chat = getChatById(chatId)

    setChats((prevChats) => {
      return [
        {
          ...chat,
          messages: [
            ...chat.messages,
            { ...newMessage, id: uuidv4(), date: new Date() },
          ],
        },
        ...prevChats.filter(({ id }) => id !== chat.id),
      ]
    })
  }

  useEffect(() => {
    localStorage.setItem('chats', JSON.stringify(chats))
  }, [chats])

  return (
    <InboxContext.Provider
      value={{
        chats,
        getChatById,
        addNewMessage,
      }}
    >
      {children}
    </InboxContext.Provider>
  )
}

export const useInbox = () => {
  const context = useContext(InboxContext)

  if (!context) {
    throw new Error('useInbox must be within a InboxContextProvider')
  }

  return context
}
