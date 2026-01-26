import { cornerRoundnesses } from '@data/corner-roundnesses '
import { preferences as defaultPreferences } from '@data/preferences'
import {
  CornerRoundness,
  CornerRoundnessLabel,
  Preferences,
} from '@utils/types'
import { createContext, useContext, useEffect, useState } from 'react'

type PreferencesContextProviderProps = {
  children: React.ReactNode
}

type PreferencesContextType = {
  preferences: Preferences
  setPreferences: React.Dispatch<React.SetStateAction<Preferences>>
  newPreferences: Preferences
  setNewPreferences: React.Dispatch<React.SetStateAction<Preferences>>
  getCornerRoundness: (cornerRoundness: CornerRoundnessLabel) => CornerRoundness
  getRemCornerRoundness: () => string
  getBorderRadius: () => string | 0
  isLightTheme: boolean
}

const PreferencesContext = createContext<PreferencesContextType | null>(null)

function getInitialPreferences(): Preferences {
  const preferences = localStorage.getItem('preferences')
  return preferences ? JSON.parse(preferences) : defaultPreferences
}

export default function PreferencesContextProvider({
  children,
}: PreferencesContextProviderProps) {
  const [preferences, setPreferences] = useState(getInitialPreferences)
  const [newPreferences, setNewPreferences] = useState(preferences)

  const isLightTheme =
    preferences.theme === 'light' ||
    (preferences.theme === 'system' &&
      window.matchMedia('(prefers-color-scheme: light)').matches)

  function getCornerRoundness(cornerRoundness: CornerRoundnessLabel) {
    return cornerRoundnesses.find(({ label }) => label === cornerRoundness)!
  }

  function getRemCornerRoundness() {
    return `${getCornerRoundness(preferences.cornerRoundness).value / 16}rem`
  }

  function getBorderRadius() {
    return preferences.areRoundedCorners ? getRemCornerRoundness() : 0
  }

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
        getCornerRoundness,
        getRemCornerRoundness,
        getBorderRadius,
        isLightTheme,
      }}
    >
      {children}
    </PreferencesContext.Provider>
  )
}

export function usePreferences() {
  const context = useContext(PreferencesContext)

  if (!context) {
    throw new Error(
      'usePreferences must be within a PreferencesContextProvider'
    )
  }

  return context
}
