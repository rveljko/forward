import ChatCardsList from '@dashboard-components/chat-cards-list'
import Divider from '@dashboard-components/ui/divider'
import FormField from '@dashboard-components/ui/form-field'
import { chats } from '@data/chats'
import SearchIcon from '@icons/search-icon'
import { usePreferences } from '@services/contexts/preferences-context'
import { IMAGE_PATH } from '@utils/constants'
import { useState } from 'react'

export default function InboxSection() {
  const { isLightTheme } = usePreferences()
  const [search, setSearch] = useState('')

  const filteredChats = chats.filter(({ name }) =>
    name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
  )

  return (
    <section className="flex h-full overflow-hidden">
      <aside className="md:border-r-section-outline h-full w-full overflow-y-auto md:max-w-80 md:border-r">
        <header className="p-4">
          <h1>Inbox</h1>
        </header>
        <Divider />
        <FormField className="p-4 [&_div]:max-w-none">
          <FormField.Input
            leftIcon={<SearchIcon />}
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </FormField>
        <Divider />
        <ChatCardsList chats={filteredChats} />
      </aside>
      <div className="hidden w-full items-center justify-center md:flex">
        <div>
          <div className="mb-4 size-full max-w-50">
            <img
              src={`${IMAGE_PATH}inbox-${isLightTheme ? 'light' : 'dark'}.svg`}
              alt="Inbox"
              className="size-full"
            />
          </div>
          <h2>Start A New Conversation</h2>
        </div>
      </div>
    </section>
  )
}
