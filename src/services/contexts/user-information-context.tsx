import { userInformation as defaultUserInformation } from '@data/user-information'
import { User } from '@utils/types'
import { createContext, useContext, useEffect, useState } from 'react'

type UserInformationContextProviderProps = {
  children: React.ReactNode
}

type UserInformationContextType = {
  userInformation: User
  newUserInformation: User
  setNewUserInformation: React.Dispatch<React.SetStateAction<User>>
  isUserInformationSame: boolean
  updateUserInformation: (newUserInformation: User) => void
}

export const UserInformationContext =
  createContext<UserInformationContextType | null>(null)

function getInitialUserInformation(): User {
  const userInformation = localStorage.getItem('user-information')
  return userInformation ? JSON.parse(userInformation) : defaultUserInformation
}

export default function UserInformationContextProvider({
  children,
}: UserInformationContextProviderProps) {
  const [userInformation, setUserInformation] = useState(
    getInitialUserInformation
  )
  const [newUserInformation, setNewUserInformation] = useState(userInformation)

  const isUserInformationSame =
    JSON.stringify(userInformation) === JSON.stringify(newUserInformation)

  function updateUserInformation(newUserInformation: User) {
    setUserInformation({ ...newUserInformation })
  }

  useEffect(() => {
    localStorage.setItem('user-information', JSON.stringify(userInformation))
  }, [userInformation])

  return (
    <UserInformationContext.Provider
      value={{
        userInformation,
        newUserInformation,
        setNewUserInformation,
        isUserInformationSame,
        updateUserInformation,
      }}
    >
      {children}
    </UserInformationContext.Provider>
  )
}

export function useUserInformation() {
  const context = useContext(UserInformationContext)

  if (!context) {
    throw new Error(
      'useUserInformation must be within a UserInformationContextProvider'
    )
  }

  return context
}
