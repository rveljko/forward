import UserStatus from '@dashboard-components/ui/user-status'
import { Chat } from '@utils/types'
import { NavLink } from 'react-router'

type ChatCardProps = {
  chat: Chat
}

export default function ChatCard({
  chat: {
    id,
    person: { image, name, status },
    messages,
  },
}: ChatCardProps) {
  return (
    <article className="group relative isolate flex items-center gap-2 p-4 hover:bg-neutral-800">
      <div className="relative">
        <div className="size-10 overflow-hidden rounded-full bg-neutral-700">
          <img src={image} alt={name} className="object-cover" />
        </div>
        <UserStatus
          status={status}
          className={`absolute right-0.5 bottom-0.5 group-hover:ring-neutral-800 group-has-[.active]:ring-neutral-700 ${status === 'inactive' ? 'group-hover:bg-neutral-800 group-has-[.active]:bg-neutral-700 group-has-[.active]:inset-ring-neutral-500' : ''}`}
        />
      </div>
      <div>
        <h3>
          <NavLink
            to={`/dashboard/inbox/${id}`}
            className={({ isActive }) =>
              `text-clickable ${isActive ? 'active before:absolute before:inset-0 before:-z-1 before:bg-neutral-700' : ''}`
            }
          >
            <span className="absolute inset-0"></span>
            {name}
          </NavLink>
        </h3>
        <p className="line-clamp-1 break-all">
          {messages[messages.length - 1].message}
        </p>
      </div>
    </article>
  )
}
