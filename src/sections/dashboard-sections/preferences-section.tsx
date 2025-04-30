import SidebarStyleCardsList from '@dashboard-components/sidebar-style-cards-list'
import ThemeCardsList from '@dashboard-components/theme-cards-list'
import Divider from '@dashboard-components/ui/divider'
import { sidebarStyles } from '@data/sidebar-styles'
import { themes } from '@data/themes'
import ChevronDownIcon from '@icons/chevron-down-icon'
import { usePreferences } from '@services/contexts/preferences-context'
import Button from '@ui/button'
import Switch from '@ui/switch'

export default function PreferencesSection() {
  const { preferences, setPreferences, newPreferences, setNewPreferences } =
    usePreferences()

  const isButtonDisabled =
    JSON.stringify(preferences) === JSON.stringify(newPreferences)

  return (
    <section className="space-y-4">
      <header>
        <h2 className="mb-1">Preferences</h2>
        <p>Customize your app experience</p>
      </header>
      <Divider />
      <div className="flex flex-col gap-2 lg:flex-row lg:gap-16">
        <h3 className="w-full max-w-50">Themes</h3>
        <ThemeCardsList themes={themes} />
      </div>
      <Divider />
      <div className="flex flex-col gap-2 lg:flex-row lg:gap-16">
        <h3 className="w-full max-w-50">Sidebar Style</h3>
        <SidebarStyleCardsList sidebarStyles={sidebarStyles} />
      </div>
      <Divider />
      <div className="flex flex-col items-start gap-2 lg:flex-row lg:gap-16">
        <h3 className="w-full max-w-50">Right Side Sidebar</h3>
        <Switch
          checked={newPreferences.isRightSideSidebar}
          onChange={() =>
            setNewPreferences({
              ...newPreferences,
              isRightSideSidebar: !newPreferences.isRightSideSidebar,
            })
          }
        />
      </div>
      <Divider />
      <div className="flex flex-col items-start gap-2 lg:flex-row lg:gap-16">
        <h3 className="w-full max-w-50">Rounded Corners</h3>
        <Switch
          checked={newPreferences.areRoundedCorners}
          onChange={() =>
            setNewPreferences({
              ...newPreferences,
              areRoundedCorners: !newPreferences.areRoundedCorners,
            })
          }
        />
      </div>
      <Divider />
      {newPreferences.areRoundedCorners && (
        <>
          <div className="flex flex-col items-start gap-2 lg:flex-row lg:gap-16">
            <h3 className="w-full max-w-50">Corner Roundness</h3>
            <Button
              variant="secondary"
              size="small"
              rightIcon={<ChevronDownIcon />}
            >
              Medium
            </Button>
          </div>
          <Divider />
        </>
      )}
      <Button
        variant="primary"
        size="large"
        disabled={isButtonDisabled}
        onClick={() => setPreferences(newPreferences)}
      >
        Save Changes
      </Button>
    </section>
  )
}
