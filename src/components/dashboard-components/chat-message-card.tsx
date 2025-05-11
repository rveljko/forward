import { useUserInformation } from '@services/contexts/user-information-context'
import { Message, Person } from '@utils/types'

type ChatMessageCardProps = {
  message: Message
  person: Person
}

export default function ChatMessageCard({
  message: { type, message },
  person: { image, name },
}: ChatMessageCardProps) {
  const {
    userInformation: { firstName, lastName, profilePictureUrl },
  } = useUserInformation()
  const isSender = type === 'sender'

  return (
    <article className="flex gap-2">
      <div className="size-10 shrink-0 overflow-hidden rounded-full bg-neutral-700">
        <img
          src={isSender ? profilePictureUrl : image}
          alt={isSender ? `${firstName} ${lastName}` : name}
          className="object-cover"
        />
      </div>
      <div>
        <p className="text-clickable mb-0.5">
          {isSender ? `${firstName} ${lastName}` : name}
        </p>
        <p className="text-neutral-100">{message}</p>
      </div>
    </article>
  )
}
