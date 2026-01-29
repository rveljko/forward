import PosthogPageviewTracker from '@components/posthog-pageview-tracker'
import Footer from '@landing-page-components/footer'
import Header from '@landing-page-components/header'
import { Outlet } from 'react-router'

export default function LandingPageLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="relative pt-(--header-height) [--gradient:radial-gradient(at_top,hsl(from_var(--color-clickable)_h_s_l/5%),var(--color-landing-page-background-color)_50%)] after:absolute after:top-0 after:-z-1 after:h-175 after:w-full after:bg-(image:--gradient)">
        <PosthogPageviewTracker />
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
