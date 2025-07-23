import ChatPage from '@dashboard-pages/chat-page'
import DraftPage from '@dashboard-pages/draft-page'
import DraftsPage from '@dashboard-pages/drafts-page'
import GuidePage from '@dashboard-pages/guide-page'
import GuidesPage from '@dashboard-pages/guides-page'
import HelpAndSupportPage from '@dashboard-pages/help-and-support-page'
import InboxPage from '@dashboard-pages/inbox-page'
import IntegrationsPage from '@dashboard-pages/integrations-page'
import IssuePage from '@dashboard-pages/issue-page'
import IssuesPage from '@dashboard-pages/issues-page'
import PreferencesPage from '@dashboard-pages/preferences-page'
import ProfilePage from '@dashboard-pages/profile-page'
import SecurityPage from '@dashboard-pages/security-page'
import CustomersPage from '@landing-pages/customers-page'
import FeaturesPage from '@landing-pages/features-page'
import GuidesLandingPage from '@landing-pages/guides-page'
import IntegrationsLandingPage from '@landing-pages/integrations-page'
import LandingPage from '@landing-pages/landing-page'
import PrivacyPolicyPage from '@landing-pages/privacy-policy-page'
import SecurityLandingPage from '@landing-pages/security-page'
import TermsOfServicePage from '@landing-pages/terms-of-service-page'
import DashboardLayout from '@layouts/dashboard-layout'
import LandingPageLayout from '@layouts/landing-page-layout'
import SettingsLayout from '@layouts/settings-layout'
import { Route, Routes } from 'react-router'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPageLayout />}>
        <Route index element={<LandingPage />} />
        <Route path="features" element={<FeaturesPage />} />
        <Route path="integrations" element={<IntegrationsLandingPage />} />
        <Route path="customers" element={<CustomersPage />} />
        <Route path="guides" element={<GuidesLandingPage />} />
        <Route path="security" element={<SecurityLandingPage />} />
        <Route path="terms-of-service" element={<TermsOfServicePage />} />
        <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
      </Route>
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route path="inbox" element={<InboxPage />} />
        <Route path="inbox/:chatId" element={<ChatPage />} />
        <Route path="issues" element={<IssuesPage />} />
        <Route path="issues/:issueId" element={<IssuePage />} />
        <Route path="drafts" element={<DraftsPage />} />
        <Route path="drafts/:draftId" element={<DraftPage />} />
        <Route path="guides" element={<GuidesPage />} />
        <Route path="guides/:guideSlug" element={<GuidePage />} />
        <Route path="help-and-support" element={<HelpAndSupportPage />} />
        <Route path="settings" element={<SettingsLayout />}>
          <Route path="profile" element={<ProfilePage />} />
          <Route path="security" element={<SecurityPage />} />
          <Route path="preferences" element={<PreferencesPage />} />
          <Route path="integrations" element={<IntegrationsPage />} />
        </Route>
      </Route>
    </Routes>
  )
}
