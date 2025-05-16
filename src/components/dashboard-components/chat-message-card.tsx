import { useUserInformation } from '@services/contexts/user-information-context'
import { iso8601DateFormatter } from '@utils/date-formatters'
import { amPmTimeFormatter } from '@utils/time-formatters'
import { Message, Person } from '@utils/types'

type ChatMessageCardProps = {
  message: Message
  person: Person
}

export default function ChatMessageCard({
  message: { type, message, date },
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
        <div className="flex items-center gap-1">
          <p className="text-clickable mb-0.5">
            {isSender ? `${firstName} ${lastName}` : name}
          </p>
          <time
            className="text-sm text-nowrap text-neutral-400"
            dateTime={iso8601DateFormatter(date)}
          >
            {amPmTimeFormatter(date)}
          </time>
        </div>
        <p className="text-neutral-100">{message}</p>
      </div>
    </article>
  )
}
