import PreferencesCard from '@dashboard-components/preferences-card'
import { usePreferences } from '@services/contexts/preferences-context'
import { SidebarStyle } from '@utils/types'

type SidebarStyleCardProps = {
  sidebarStyle: SidebarStyle
}

export default function SidebarStyleCard({
  sidebarStyle: { name, imageLightUrl, imageDarkUrl, label },
}: SidebarStyleCardProps) {
  const { newPreferences, setNewPreferences, isLightTheme } = usePreferences()

  return (
    <button
      className="hover:cursor-pointer"
      onClick={() => {
        setNewPreferences({ ...newPreferences, sidebarStyle: label })
      }}
    >
      <PreferencesCard
        name={name}
        imageUrl={isLightTheme ? imageLightUrl : imageDarkUrl}
        isActive={newPreferences.sidebarStyle === label}
      />
    </button>
  )
}
