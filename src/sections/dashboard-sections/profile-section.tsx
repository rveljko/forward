import Divider from '@dashboard-components/ui/divider'
import FormField from '@dashboard-components/ui/form-field'
import useNewUserInformation from '@hooks/use-new-user-information'
import { useUserInformation } from '@services/contexts/user-information-context'
import Button from '@ui/button'
import { onlyLettersMask } from '@utils/input-masks'

export default function ProfileSection() {
  const { userInformation, updateUserInformation } = useUserInformation()
  const { isUserInformationSame, newUserInformation, setNewUserInformation } =
    useNewUserInformation()

  const isButtonDisabled = isUserInformationSame

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
        <FormField className="lg:flex-row lg:gap-16">
          <p className="w-full max-w-50 text-neutral-100">Profile Picture</p>
          <div className="relative flex items-center gap-2">
            <img
              src={newUserInformation.profilePictureUrl}
              alt={`${userInformation.firstName} ${userInformation.lastName} profile picture`}
              className="size-12 rounded-full object-cover"
            />
            <FormField.Label
              htmlFor="profile-picture"
              className="hover:cursor-pointer"
            >
              <span className="absolute top-0 left-0 size-12 rounded-full"></span>
              Upload
            </FormField.Label>
            <input
              type="file"
              id="profile-picture"
              accept="image/jpeg, image/png"
              onChange={(e) => {
                const file = e.target.files?.[0]
                const reader = new FileReader()

                if (!file) return

                reader.onload = () => {
                  reader.result &&
                    setNewUserInformation({
                      ...newUserInformation,
                      profilePictureUrl: reader.result.toString(),
                    })
                }

                reader.readAsDataURL(file)
              }}
              className="hidden"
            />
          </div>
        </FormField>
        <Divider />
        <FormField className="lg:flex-row lg:gap-16">
          <FormField.Label htmlFor="first-name" className="w-full max-w-50">
            First Name
          </FormField.Label>
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
        <FormField className="lg:flex-row lg:gap-16">
          <FormField.Label htmlFor="last-name" className="w-full max-w-50">
            Last Name
          </FormField.Label>
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
        <FormField className="lg:flex-row lg:gap-16">
          <FormField.Label htmlFor="email-address" className="w-full max-w-50">
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
