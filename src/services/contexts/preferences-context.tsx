import { preferences as defaultPreferences } from '@data/preferences'
import { Preferences } from '@utils/types'
import { createContext, useContext, useEffect, useState } from 'react'

type PreferencesContextProviderProps = {
  children: React.ReactNode
}

type PreferencesContextType = {
  preferences: Preferences
  setPreferences: React.Dispatch<React.SetStateAction<Preferences>>
  newPreferences: Preferences
  setNewPreferences: React.Dispatch<React.SetStateAction<Preferences>>
}

export const PreferencesContext = createContext<PreferencesContextType | null>(
  null
)

function getInitialPreferences(): Preferences {
  const preferences = localStorage.getItem('preferences')
  return preferences ? JSON.parse(preferences) : defaultPreferences
}

export default function PreferencesContextProvider({
  children,
}: PreferencesContextProviderProps) {
  const [preferences, setPreferences] = useState(getInitialPreferences)
  const [newPreferences, setNewPreferences] = useState(preferences)

  useEffect(() => {
    localStorage.setItem('preferences', JSON.stringify(preferences))
  }, [preferences])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', preferences.theme)
  }, [preferences.theme])

  return (
    <PreferencesContext.Provider
      value={{
        preferences,
        setPreferences,
        newPreferences,
        setNewPreferences,
      }}
    >
      {children}
    </PreferencesContext.Provider>
  )
}

export const usePreferences = () => {
  const context = useContext(PreferencesContext)

  if (!context) {
    throw new Error(
      'usePreferences must be within a PreferencesContextProvider'
    )
  }

  return context
}
