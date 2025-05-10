import { Chat } from '@utils/types'
import { Link } from 'react-router'

type ChatCardProps = {
  chat: Chat
}

export default function ChatCard({ chat: { image, name, id } }: ChatCardProps) {
  return (
    <article className="border-b-section-outline flex items-center gap-2 border-b p-4">
      <div className="size-10 overflow-hidden rounded-full bg-neutral-700">
        <img src={image} alt={name} className="object-cover" />
      </div>
      <Link to={`/dashboard/inbox/${id}`}>
        <h3>{name}</h3>
      </Link>
    </article>
  )
}
