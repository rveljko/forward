import Divider from '@dashboard-components/ui/divider'
import FormField from '@dashboard-components/ui/form-field'
import { useUserInformation } from '@services/contexts/user-information-context'
import Button from '@ui/button'
import { onlyLettersMask } from '@utils/input-masks'
import { useState } from 'react'

export default function ProfileSection() {
  const { userInformation, updateUserInformation } = useUserInformation()
  const [newUserInformation, setNewUserInformation] = useState(userInformation)

  const isButtonDisabled =
    JSON.stringify(userInformation) === JSON.stringify(newUserInformation)

  return (
    <section className="space-y-4">
      <header>
        <h2 className="mb-1">My Profile</h2>
        <p>Update your personal information</p>
      </header>
      <Divider />
      <form
        className="space-y-4"
        onSubmit={(e) => {
          e.preventDefault()
          updateUserInformation(newUserInformation)
        }}
      >
        <FormField>
          <FormField.Label htmlFor="first-name">First Name</FormField.Label>
          <FormField.Input
            id="first-name"
            placeholder={userInformation.firstName}
            value={newUserInformation.firstName}
            onChange={(e) =>
              setNewUserInformation({
                ...newUserInformation,
                firstName: onlyLettersMask(e.target.value),
              })
            }
          />
        </FormField>
        <Divider />
        <FormField>
          <FormField.Label htmlFor="last-name">Last Name</FormField.Label>
          <FormField.Input
            id="last-name"
            placeholder={userInformation.lastName}
            value={newUserInformation.lastName}
            onChange={(e) =>
              setNewUserInformation({
                ...newUserInformation,
                lastName: onlyLettersMask(e.target.value),
              })
            }
          />
        </FormField>
        <Divider />
        <FormField>
          <FormField.Label htmlFor="email-address">
            Email Address
          </FormField.Label>
          <FormField.Input
            id="email-address"
            type="email"
            placeholder={userInformation.emailAddress}
            value={newUserInformation.emailAddress}
            onChange={(e) =>
              setNewUserInformation({
                ...newUserInformation,
                emailAddress: e.target.value,
              })
            }
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
