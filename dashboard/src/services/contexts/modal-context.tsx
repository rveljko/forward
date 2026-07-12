import { createContext, useContext, useState } from 'react'

type ModalContextProviderProps = {
  children: React.ReactNode
}

type ModalContextType = {
  isModalOpened: boolean
  setIsModalOpened: React.Dispatch<React.SetStateAction<boolean>>
}

const ModalContext = createContext<ModalContextType | null>(null)

export default function ModalContextProvider({
  children,
}: ModalContextProviderProps) {
  const [isModalOpened, setIsModalOpened] = useState(false)

  return (
    <ModalContext.Provider
      value={{
        isModalOpened,
        setIsModalOpened,
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}

export function useModalContext() {
  const context = useContext(ModalContext)

  if (!context) {
    throw new Error('useModalContext must be within a ModalContextProvider')
  }

  return context
}
