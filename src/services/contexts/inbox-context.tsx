import { chats as defaultChats } from '@data/chats'
import { Chat } from '@utils/types'
import { createContext, useContext, useEffect, useState } from 'react'

type InboxContextProviderProps = {
  children: React.ReactNode
}

type InboxContextType = {
  chats: Chat[]
  getChatById: (id: string) => Chat
}

export const InboxContext = createContext<InboxContextType | null>(null)

function getInitialChats(): Chat[] {
  const chats = localStorage.getItem('chats')
  return chats ? JSON.parse(chats) : defaultChats
}

export default function InboxContextProvider({
  children,
}: InboxContextProviderProps) {
  const [chats] = useState(getInitialChats)

  function getChatById(id: string) {
    return chats.find((chat) => chat.id === id)!
  }

  useEffect(() => {
    localStorage.setItem('chats', JSON.stringify(chats))
  }, [chats])

  return (
    <InboxContext.Provider
      value={{
        chats,
        getChatById,
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
