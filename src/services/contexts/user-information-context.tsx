import { userInformation as defaultUserInformation } from '@data/user-information'
import { User } from '@utils/types'
import { createContext, useContext, useEffect, useState } from 'react'

type UserInformationContextProviderProps = {
  children: React.ReactNode
}

type UserInformationContextType = {
  userInformation: User
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
        updateUserInformation,
      }}
    >
      {children}
    </UserInformationContext.Provider>
  )
}

export const useUserInformation = () => {
  const context = useContext(UserInformationContext)

  if (!context) {
    throw new Error(
      'useUserInformation must be within a UserInformationContextProvider'
    )
  }

  return context
}
