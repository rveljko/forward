import { Chat } from '@utils/types'
import { NavLink } from 'react-router'

type ChatCardProps = {
  chat: Chat
}

export default function ChatCard({
  chat: {
    person: { image, name },
    id,
  },
}: ChatCardProps) {
  return (
    <article className="relative isolate flex items-center gap-2 p-4 hover:bg-neutral-800">
      <div className="size-10 overflow-hidden rounded-full bg-neutral-700">
        <img src={image} alt={name} className="object-cover" />
      </div>
      <NavLink
        to={`/dashboard/inbox/${id}`}
        className={({ isActive }) =>
          `text-clickable ${isActive ? 'before:absolute before:inset-0 before:-z-1 before:bg-neutral-700' : ''}`
        }
      >
        <span className="absolute inset-0"></span>
        <h3>{name}</h3>
      </NavLink>
    </article>
  )
}
