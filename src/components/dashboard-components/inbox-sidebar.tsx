import ChatCardsList from '@dashboard-components/chat-cards-list'
import InboxNoSearchResults from '@dashboard-components/inbox-no-search-results'
import Divider from '@dashboard-components/ui/divider'
import FormField from '@dashboard-components/ui/form-field'
import SearchIcon from '@icons/search-icon'
import { useInbox } from '@services/contexts/inbox-context'
import { cn } from '@utils/utils'
import Fuse from 'fuse.js'
import { useState } from 'react'
import { Link } from 'react-router'

type InboxSidebarProps = {
  className?: string
}

export default function InboxSidebar({ className }: InboxSidebarProps) {
  const { chats } = useInbox()
  const [search, setSearch] = useState('')

  const filteredChats = search
    ? new Fuse(chats, { keys: ['person.name'] })
        .search(search)
        .map(({ item }) => item)
    : chats

  return (
    <aside
      className={cn(
        'md:border-r-section-outline h-full w-full overflow-y-auto md:max-w-80 md:border-r',
        className
      )}
    >
      <header className="p-4">
        <h1>
          <Link to="/dashboard/inbox" className="text-clickable">
            Inbox
          </Link>
        </h1>
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
      {filteredChats.length > 0 ? (
        <ChatCardsList chats={filteredChats} />
      ) : (
        <InboxNoSearchResults searchTerm={search} />
      )}
    </aside>
  )
}
