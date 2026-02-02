import AppRoutes from '@routes/app-routes'
import IssuesContextProvider from '@services/contexts/issues-context'
import PreferencesContextProvider from '@services/contexts/preferences-context'
import UserInformationContextProvider from '@services/contexts/user-information-context'
import HolyLoader from 'holy-loader'
import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import './assets/index.css'

posthog.init(import.meta.env.VITE_PUBLIC_POSTHOG_KEY, {
  api_host: import.meta.env.VITE_PUBLIC_POSTHOG_HOST,
  capture_pageview: false,
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <PreferencesContextProvider>
        <UserInformationContextProvider>
          <IssuesContextProvider>
            <PostHogProvider client={posthog}>
              <HolyLoader
                color="var(--color-brand-500)"
                height={2}
                ignoreSearchParams
              />
              <AppRoutes />
            </PostHogProvider>
          </IssuesContextProvider>
        </UserInformationContextProvider>
      </PreferencesContextProvider>
    </BrowserRouter>
  </StrictMode>
)
