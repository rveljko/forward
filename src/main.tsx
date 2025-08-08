import ScrollToTop from '@components/scroll-to-top'
import AppRoutes from '@routes/app-routes'
import IssuesContextProvider from '@services/contexts/issues-context'
import PreferencesContextProvider from '@services/contexts/preferences-context'
import UserInformationContextProvider from '@services/contexts/user-information-context'
import HolyLoader from 'holy-loader'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import './assets/index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <PreferencesContextProvider>
        <UserInformationContextProvider>
          <IssuesContextProvider>
            <ScrollToTop />
            <HolyLoader
              color="var(--color-brand-500)"
              height={2}
              ignoreSearchParams
            />
            <AppRoutes />
          </IssuesContextProvider>
        </UserInformationContextProvider>
      </PreferencesContextProvider>
    </BrowserRouter>
  </StrictMode>
)
