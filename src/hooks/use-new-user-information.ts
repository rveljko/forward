import { useUserInformation } from '@services/contexts/user-information-context'
import { useState } from 'react'

export default function useNewUserInformation() {
  const { userInformation } = useUserInformation()
  const [newUserInformation, setNewUserInformation] = useState(userInformation)

  const isUserInformationSame =
    JSON.stringify(userInformation) === JSON.stringify(newUserInformation)

  return { isUserInformationSame, newUserInformation, setNewUserInformation }
}
