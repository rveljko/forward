import PreferencesCard from '@dashboard-components/preferences-card'
import { usePreferences } from '@services/contexts/preferences-context'
import { SidebarStyle } from '@utils/types'

type SidebarStyleCardProps = {
  sidebarStyle: SidebarStyle
}

export default function SidebarStyleCard({
  sidebarStyle: { name, imageUrl, label },
}: SidebarStyleCardProps) {
  const { newPreferences, setNewPreferences } = usePreferences()

  return (
    <button
      className="hover:cursor-pointer"
      onClick={() => {
        setNewPreferences({ ...newPreferences, sidebarStyle: label })
      }}
    >
      <PreferencesCard
        name={name}
        imageUrl={imageUrl}
        isActive={newPreferences.sidebarStyle === label}
      />
    </button>
  )
}
