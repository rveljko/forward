import AppRoutes from '@routes/app-routes'
import UserInformationContextProvider from '@services/contexts/user-information-context'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import './assets/index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <UserInformationContextProvider>
        <AppRoutes />
      </UserInformationContextProvider>
    </BrowserRouter>
  </StrictMode>
)
