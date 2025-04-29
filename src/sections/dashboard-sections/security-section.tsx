import Divider from '@dashboard-components/ui/divider'
import FormField from '@dashboard-components/ui/form-field'
import useNewUserInformation from '@hooks/use-new-user-information'
import EyeIcon from '@icons/eye-icon'
import EyeOffIcon from '@icons/eye-off-icon'
import { useUserInformation } from '@services/contexts/user-information-context'
import Button from '@ui/button'
import Switch from '@ui/switch'
import { useState } from 'react'

export default function SecuritySection() {
  const { updateUserInformation } = useUserInformation()
  const { isUserInformationSame, newUserInformation, setNewUserInformation } =
    useNewUserInformation()
  const [showPassword, setShowPassword] = useState(false)

  const isButtonDisabled = isUserInformationSame

  return (
    <section className="space-y-4">
      <header>
        <h2 className="mb-1">Security</h2>
        <p>Enhance your account protection settings</p>
      </header>
      <Divider />
      <form
        className="space-y-4"
        onSubmit={(e) => {
          e.preventDefault()
          updateUserInformation(newUserInformation)
        }}
      >
        <FormField className="lg:flex-row lg:gap-16">
          <FormField.Label htmlFor="password" className="w-full max-w-50">
            Password
          </FormField.Label>
          <FormField.Input
            id="password"
            value={newUserInformation.password}
            type={showPassword ? 'text' : 'password'}
            rightIcon={
              <button
                className="text-clickable hover:cursor-pointer"
                role="switch"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                <span className="sr-only">
                  {showPassword ? 'Hide Password' : 'Show Password'}
                </span>
                {showPassword ? <EyeOffIcon /> : <EyeIcon />}
              </button>
            }
            onChange={(e) =>
              setNewUserInformation({
                ...newUserInformation,
                password: e.target.value,
              })
            }
          />
        </FormField>
        <Divider />
        <FormField className="items-start lg:flex-row lg:gap-16">
          <p className="w-full max-w-50 text-neutral-100">
            2-Step Authentication
          </p>
          <Switch
            checked={newUserInformation.isTwoStepVerificationEnabled}
            onChange={() => {
              setNewUserInformation({
                ...newUserInformation,
                isTwoStepVerificationEnabled:
                  !newUserInformation.isTwoStepVerificationEnabled,
              })
            }}
          />
        </FormField>
        <Divider />
        <Button variant="primary" size="large" disabled={isButtonDisabled}>
          Save Changes
        </Button>
      </form>
    </section>
  )
}
