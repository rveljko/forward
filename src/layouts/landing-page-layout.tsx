import Header from '@landing-page-components/header'
import { Outlet } from 'react-router'

export default function LandingPageLayout() {
  return (
    <>
      <Header />
      <main className="pt-(--header-height)">
        <Outlet />
      </main>
    </>
  )
}
