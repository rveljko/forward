import DraftsPage from '@dashboard-pages/drafts-page'
import GuidesPage from '@dashboard-pages/guides-page'
import HelpAndSupportPage from '@dashboard-pages/help-and-support-page'
import InboxPage from '@dashboard-pages/inbox-page'
import IssuesPage from '@dashboard-pages/issues-page'
import DashboardLayout from '@layouts/dashboard-layout'
import SettingsLayout from '@layouts/settings-layout'
import { Route, Routes } from 'react-router'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<IssuesPage />} />
        <Route path="inbox" element={<InboxPage />} />
        <Route path="drafts" element={<DraftsPage />} />
        <Route path="guides" element={<GuidesPage />} />
        <Route path="help-and-support" element={<HelpAndSupportPage />} />
        <Route path="settings" element={<SettingsLayout />} />
      </Route>
    </Routes>
  )
}
