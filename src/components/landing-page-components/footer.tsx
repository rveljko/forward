import { guides } from '@data/guides'
import Container from '@landing-page-components/container'
import Logo from '@ui/logo'
import { Link } from 'react-router'

export default function Footer() {
  return (
    <footer className="border-t-section-outline mt-auto border-t py-8">
      <Container className="flex flex-col gap-8">
        <div className="border-b-section-outline flex flex-wrap justify-between gap-8 border-b pb-8 md:gap-16">
          <Link to="/" className="flex size-max">
            <Logo />
          </Link>
          <nav className="flex flex-wrap gap-4 md:gap-8">
            <ul>
              <li className="text-neutral-400">Guides</li>
              {guides.map(({ id, slug, title }) => (
                <li key={id}>
                  <Link
                    to={`/dashboard/guides/${slug}`}
                    className="text-clickable inline-block py-1 wrap-anywhere"
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
            <ul>
              <li className="text-neutral-400">Product</li>
              <li>
                <Link to="/features" className="text-clickable flex w-max py-1">
                  Features
                </Link>
              </li>
              <li>
                <Link
                  to="/integrations"
                  className="text-clickable flex w-max py-1"
                >
                  Integrations
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/issues"
                  className="text-clickable flex w-max py-1"
                >
                  Demo
                </Link>
              </li>
            </ul>
            <ul>
              <li className="text-neutral-400">Company</li>
              <li>
                <Link to="/security" className="text-clickable flex w-max py-1">
                  Security
                </Link>
              </li>
              <li>
                <Link
                  to="/customers"
                  className="text-clickable flex w-max py-1"
                >
                  Customers
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p>&copy; {new Date().getFullYear()} All Rights Reserved</p>
          <div className="flex gap-2">
            <Link to="/terms-of-service" className="text-clickable">
              Terms of Service
            </Link>
            <Link to="/privacy-policy" className="text-clickable">
              Privacy Policy
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  )
}
