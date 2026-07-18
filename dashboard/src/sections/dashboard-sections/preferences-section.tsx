import SidebarStyleCardsList from '@dashboard-components/sidebar-style-cards-list'
import Divider from '@dashboard-components/ui/divider'
import Select from '@dashboard-components/ui/select'
import { cornerRoundnesses } from '@data/corner-roundnesses '
import { sidebarStyles } from '@data/sidebar-styles'
import { usePreferences } from '@services/contexts/preferences-context'
import Button from '@ui/button'
import Switch from '@ui/switch'
import { showToast } from '@utils/toasts'
import { CornerRoundnessLabel } from '@utils/types'

export default function PreferencesSection() {
  const { preferences, setPreferences, newPreferences, setNewPreferences } =
    usePreferences()

  const isButtonDisabled =
    JSON.stringify(preferences) === JSON.stringify(newPreferences)

  return (
    <section className="space-y-4">
      <header>
        <h2 className="mb-1 font-medium">Preferences</h2>
        <p className="text-neutral-600">Customize your app experience</p>
      </header>
      <Divider />
      <div className="flex flex-col gap-2 lg:flex-row lg:gap-16">
        <h3 className="w-full max-w-50 font-medium">Sidebar Style</h3>
        <SidebarStyleCardsList sidebarStyles={sidebarStyles} />
      </div>
      <Divider />
      <div className="flex flex-col items-start gap-2 lg:flex-row lg:gap-16">
        <h3 className="w-full max-w-50 font-medium">Right Side Sidebar</h3>
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
        <h3 className="w-full max-w-50 font-medium">Rounded Corners</h3>
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
            <h3 className="w-full max-w-50 font-medium">Corner Roundness</h3>
            <Select
              variant="secondary"
              size="small"
              value={newPreferences.cornerRoundness}
              onChange={(e) =>
                setNewPreferences({
                  ...newPreferences,
                  cornerRoundness: e.target.value as CornerRoundnessLabel,
                })
              }
            >
              {cornerRoundnesses.map(({ id, name, label }) => (
                <Select.Option key={id} value={label}>
                  {name}
                </Select.Option>
              ))}
            </Select>
          </div>
          <Divider />
        </>
      )}
      <Button
        variant="primary"
        size="large"
        disabled={isButtonDisabled}
        onClick={() => {
          setPreferences(newPreferences)
          showToast({
            title: 'Preferences Updated',
            description: 'Preferences saved successfully',
          })
        }}
      >
        Save Changes
      </Button>
    </section>
  )
}
