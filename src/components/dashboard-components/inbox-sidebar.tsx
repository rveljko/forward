import ChatCardsList from '@dashboard-components/chat-cards-list'
import Divider from '@dashboard-components/ui/divider'
import FormField from '@dashboard-components/ui/form-field'
import { chats } from '@data/chats'
import SearchIcon from '@icons/search-icon'
import { useState } from 'react'

export default function InboxSidebar() {
  const [search, setSearch] = useState('')

  const filteredChats = chats.filter(({ name }) =>
    name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
  )

  return (
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
  )
}
