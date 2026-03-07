import Logo from '@/components/ui/logo'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="mt-auto flex flex-col gap-6 border-t border-t-neutral-200 p-6 md:gap-8 md:p-8">
      <Link href="/" className="flex w-max">
        <Logo />
      </Link>
      <div className="w-full border-b border-dashed border-b-neutral-200" />
      <nav className="flex flex-wrap gap-8 md:gap-16">
        <ul className="flex flex-col gap-1">
          <li>
            <h4 className="text-neutral-600">Products</h4>
          </li>
          <li>
            <Link
              href="https://dashboard-forward-demo-app.netlify.app/tasks"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tasks
            </Link>
          </li>
          <li>
            <Link
              href="https://dashboard-forward-demo-app.netlify.app/issues"
              target="_blank"
              rel="noopener noreferrer"
            >
              Issues
            </Link>
          </li>
          <li>
            <Link
              href="https://dashboard-forward-demo-app.netlify.app/drafts"
              target="_blank"
              rel="noopener noreferrer"
            >
              Drafts
            </Link>
          </li>
          <li>
            <Link href="/integrations">Integrations</Link>
          </li>
        </ul>
        <ul className="flex flex-col gap-1">
          <li>
            <h4 className="text-neutral-600">Company</h4>
          </li>
          <li>
            <Link href="/security">Security</Link>
          </li>
          <li>
            <Link href="/customers">Customers</Link>
          </li>
        </ul>
        <ul className="flex flex-col gap-1">
          <li>
            <h4 className="text-neutral-600">Resources</h4>
          </li>
          <li>
            <Link
              href="https://dashboard-forward-demo-app.netlify.app/help-and-support"
              target="_blank"
              rel="noopener noreferrer"
            >
              Help Center
            </Link>
          </li>
          <li>
            <Link
              href="https://dashboard-forward-demo-app.netlify.app/guides"
              target="_blank"
              rel="noopener noreferrer"
            >
              Guides
            </Link>
          </li>
        </ul>
      </nav>
      <div className="w-full border-b border-dashed border-b-neutral-200" />
      <div className="flex flex-wrap justify-between gap-8">
        <p className="text-neutral-600">
          &copy; {new Date().getFullYear()} All rights reserved
        </p>
        <ul className="flex flex-wrap gap-2">
          <li>
            <Link href="/privacy-policy">Privacy Policy</Link>
          </li>
          <li>
            <Link href="/terms-of-service">Terms of Service</Link>
          </li>
        </ul>
      </div>
    </footer>
  )
}
