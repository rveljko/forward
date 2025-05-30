import { usePreferences } from '@services/contexts/preferences-context'
import { IMAGE_PATH } from '@utils/constants'

type InboxNoSearchResultsProps = {
  searchTerm: string
}

export default function InboxNoSearchResults({
  searchTerm,
}: InboxNoSearchResultsProps) {
  const { isLightTheme } = usePreferences()

  return (
    <article className="flex flex-col items-center p-4">
      <img
        src={`${IMAGE_PATH}inbox-no-results-${isLightTheme ? 'light' : 'dark'}.svg`}
        alt="No Results"
        className="mb-4"
      />
      <h3 className="text-center wrap-anywhere">
        No results for <strong>{searchTerm}</strong>
      </h3>
    </article>
  )
}
