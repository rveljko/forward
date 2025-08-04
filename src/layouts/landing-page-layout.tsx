import Footer from '@landing-page-components/footer'
import Header from '@landing-page-components/header'
import { Outlet } from 'react-router'

export default function LandingPageLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="relative pt-(--header-height) [--gradient:_radial-gradient(at_top,hsl(from_var(--color-clickable)_h_s_l_/_5%),_var(--color-landing-page-background-color)_50%)] after:absolute after:top-0 after:-z-1 after:h-175 after:w-full after:bg-(image:--gradient)">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
