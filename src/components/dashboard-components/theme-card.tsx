import PreferencesCard from '@dashboard-components/preferences-card'
import { usePreferences } from '@services/contexts/preferences-context'
import { Theme } from '@utils/types'

type ThemeCardProps = {
  theme: Theme
}

export default function ThemeCard({
  theme: { name, imageUrl, label },
}: ThemeCardProps) {
  const { newPreferences, setNewPreferences } = usePreferences()

  return (
    <button
      className="hover:cursor-pointer"
      onClick={() => setNewPreferences({ ...newPreferences, theme: label })}
    >
      <PreferencesCard
        name={name}
        imageUrl={imageUrl}
        isActive={newPreferences.theme === label}
      />
    </button>
  )
}
