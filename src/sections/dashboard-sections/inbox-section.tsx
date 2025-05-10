import { usePreferences } from '@services/contexts/preferences-context'
import { IMAGE_PATH } from '@utils/constants'

export default function InboxSection() {
  const { isLightTheme } = usePreferences()

  return (
    <section className="hidden w-full items-center justify-center md:flex">
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
    </section>
  )
}
