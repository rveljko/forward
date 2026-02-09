'use client'

import Button from '@/components/ui/button'
import Logo from '@/components/ui/logo'
import ChevronRightIcon from '@/icons/chevron-right-icon'
import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false)

  return (
    <header
      data-is-hamburger-menu-open={isHamburgerMenuOpen}
      className="fixed top-0 z-100 h-(--header-height) w-full border-b border-b-neutral-200 bg-white"
    >
      <div className="mx-auto flex max-w-285.5 justify-between px-4 py-2">
        <Link href="/" className="flex">
          <Logo />
        </Link>
        <Button
          variant="tertiary"
          className="block size-8 md:hidden"
          onClick={() => setIsHamburgerMenuOpen((prev) => !prev)}
        >
          <span
            className={`mx-auto block h-px w-3 rounded-full bg-black transition-all duration-300 ${isHamburgerMenuOpen ? 'translate-y-full rotate-45' : '-translate-y-0.5'}`}
          />
          <span
            className={`mx-auto block h-px w-3 rounded-full bg-black transition-opacity duration-300 ${isHamburgerMenuOpen ? 'opacity-0' : ''}`}
          />
          <span
            className={`mx-auto block h-px w-3 rounded-full bg-black transition-all duration-300 ${isHamburgerMenuOpen ? '-translate-y-full -rotate-45' : 'translate-y-0.5'}`}
          />
          <span className="sr-only">Toggle Menu</span>
        </Button>
        <nav
          className={
            isHamburgerMenuOpen
              ? 'max-md:fixed max-md:inset-x-0 max-md:top-(--header-height) max-md:h-[calc(100%-var(--header-height))] max-md:overflow-y-auto max-md:bg-white'
              : 'max-md:hidden'
          }
        >
          <ul className="flex h-full flex-col md:flex-row md:items-center">
            <li className="md:h-full">
              <Link
                href="/"
                className="flex px-2 text-black transition-[background-color,scale] hover:bg-neutral-100 max-md:border-b max-md:border-b-neutral-200 max-md:py-4 max-md:text-xl max-md:font-medium md:h-full md:items-center md:rounded-sm md:active:scale-99 pointer-coarse:active:bg-neutral-100"
              >
                Products
              </Link>
            </li>
            <li className="md:h-full">
              <Link
                href="/"
                className="flex px-2 text-black transition-[background-color,scale] hover:bg-neutral-100 max-md:border-b max-md:border-b-neutral-200 max-md:py-4 max-md:text-xl max-md:font-medium md:h-full md:items-center md:rounded-sm md:active:scale-99 pointer-coarse:active:bg-neutral-100"
              >
                Integrations
              </Link>
            </li>
            <li className="md:h-full">
              <Link
                href="/"
                className="flex px-2 text-black transition-[background-color,scale] hover:bg-neutral-100 max-md:border-b max-md:border-b-neutral-200 max-md:py-4 max-md:text-xl max-md:font-medium md:h-full md:items-center md:rounded-sm md:active:scale-99 pointer-coarse:active:bg-neutral-100"
              >
                Customers
              </Link>
            </li>
          </ul>
        </nav>
        <Button
          variant="primary"
          size="small"
          rightIcon={<ChevronRightIcon />}
          className="max-md:hidden"
        >
          Get Started
        </Button>
      </div>
    </header>
  )
}
