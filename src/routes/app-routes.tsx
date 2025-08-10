import ChatPage from '@dashboard-pages/chat-page'
import DraftPage from '@dashboard-pages/draft-page'
import DraftsPage from '@dashboard-pages/drafts-page'
import GuidePage from '@dashboard-pages/guide-page'
import GuidesPage from '@dashboard-pages/guides-page'
import InboxPage from '@dashboard-pages/inbox-page'
import IssuePage from '@dashboard-pages/issue-page'
import IssuesPage from '@dashboard-pages/issues-page'
import HelpAndSupportPageSkeleton from '@dashboard-pages/skeletons/help-and-support-page-skeleton'
import IntegrationsPageSkeleton from '@dashboard-pages/skeletons/integrations-page-skeleton'
import PreferencesPageSkeleton from '@dashboard-pages/skeletons/preferences-page-skeleton'
import ProfilePageSkeleton from '@dashboard-pages/skeletons/profile-page-skeleton'
import SecurityPageSkeleton from '@dashboard-pages/skeletons/security-page-skeleton'
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
import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router'
const HelpAndSupportPage = lazy(
  () => import('@dashboard-pages/help-and-support-page')
)
const IntegrationsPage = lazy(
  () => import('@dashboard-pages/integrations-page')
)
const PreferencesPage = lazy(() => import('@dashboard-pages/preferences-page'))
const ProfilePage = lazy(() => import('@dashboard-pages/profile-page'))
const SecurityPage = lazy(() => import('@dashboard-pages/security-page'))

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
        <Route
          path="help-and-support"
          element={
            <Suspense fallback={<HelpAndSupportPageSkeleton />}>
              <HelpAndSupportPage />
            </Suspense>
          }
        />
        <Route path="settings" element={<SettingsLayout />}>
          <Route
            path="profile"
            element={
              <Suspense fallback={<ProfilePageSkeleton />}>
                <ProfilePage />
              </Suspense>
            }
          />
          <Route
            path="security"
            element={
              <Suspense fallback={<SecurityPageSkeleton />}>
                <SecurityPage />
              </Suspense>
            }
          />
          <Route
            path="preferences"
            element={
              <Suspense fallback={<PreferencesPageSkeleton />}>
                <PreferencesPage />
              </Suspense>
            }
          />
          <Route
            path="integrations"
            element={
              <Suspense fallback={<IntegrationsPageSkeleton />}>
                <IntegrationsPage />
              </Suspense>
            }
          />
        </Route>
      </Route>
    </Routes>
  )
}
