import useMediaQuery from '@hooks/use-media-query'
import ChevronRightIcon from '@icons/chevron-right-icon'
import Container from '@landing-page-components/container'
import Button from '@ui/button'
import Logo from '@ui/logo'
import { useState } from 'react'
import { Link } from 'react-router'

export default function Header() {
  const [isOpened, setIsOpened] = useState(false)
  const { isMediumSizeScreen } = useMediaQuery()

  function closeOpenedMenuOnMobile() {
    !isMediumSizeScreen && isOpened && setIsOpened((prev) => !prev)
  }

  return (
    <div className="fixed top-0 z-999 w-full">
      <header
        data-opened={isOpened}
        className="group border-b-section-outline relative h-(--header-height) border-b before:absolute before:inset-0 before:backdrop-blur-sm"
      >
        <Container className="relative z-998 flex items-center justify-between py-4">
          <div className="md:flex-1/3">
            <Link to="/" className="flex w-max">
              <Logo />
            </Link>
          </div>
          <Button
            variant="tertiary"
            className="block size-8 md:hidden"
            onClick={() => setIsOpened((prev) => !prev)}
          >
            <span
              className={`bg-clickable mx-auto block h-0.5 w-4.5 rounded-full transition-all duration-300 ${isOpened ? 'translate-y-full rotate-45' : '-translate-y-0.75'}`}
            />
            <span
              className={`bg-clickable mx-auto block h-0.5 w-4.5 rounded-full transition-all duration-300 ${isOpened ? 'opacity-0' : ''}`}
            />
            <span
              className={`bg-clickable mx-auto block h-0.5 w-4.5 rounded-full transition-all duration-300 ${isOpened ? '-translate-y-full -rotate-45' : 'translate-y-0.75'}`}
            />
            <span className="sr-only">Toggle Menu</span>
          </Button>
          <nav
            className={`max-md:border-section-outline [--opacity-from:0%] [--opacity-to:100%] [--scale-from:95%] [--scale-to:100%] [--slide-y-from:--spacing(10)] [--slide-y-to:--spacing(0)] max-md:absolute max-md:inset-x-0 max-md:top-[calc(var(--header-height)+(--spacing(4)))] max-md:z-997 max-md:rounded-2xl max-md:border max-md:py-4 max-md:backdrop-blur-sm max-md:transition-all max-md:transition-discrete max-md:duration-300 md:flex-2/3 md:items-center md:gap-2 max-md:starting:translate-y-(--slide-y-from) max-md:starting:scale-(--scale-from) max-md:starting:opacity-(--opacity-from) ${isOpened ? 'max-md:translate-y-(--slide-y-to) max-md:scale-(--scale-to) max-md:opacity-(--opacity-to)' : 'max-md:hidden max-md:translate-y-(--slide-y-from) max-md:scale-(--scale-from) max-md:opacity-(--opacity-from)'}`}
          >
            <ul className="flex max-md:flex-col md:items-center">
              <li>
                <Link
                  to="/features"
                  className="text-clickable max-md:hover:bg-clickable/10 max-md:pointer-coarse:active:bg-clickable/10 flex p-2 max-md:w-full max-md:px-4 max-md:text-2xl max-md:font-medium max-md:transition-[background-color] md:py-1"
                  onClick={closeOpenedMenuOnMobile}
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  to="/integrations"
                  className="text-clickable max-md:hover:bg-clickable/10 max-md:pointer-coarse:active:bg-clickable/10 flex p-2 max-md:w-full max-md:px-4 max-md:text-2xl max-md:font-medium max-md:transition-[background-color] md:py-1"
                  onClick={closeOpenedMenuOnMobile}
                >
                  Integrations
                </Link>
              </li>
              <li>
                <Link
                  to="/customers"
                  className="text-clickable max-md:hover:bg-clickable/10 max-md:pointer-coarse:active:bg-clickable/10 flex p-2 max-md:w-full max-md:px-4 max-md:text-2xl max-md:font-medium max-md:transition-[background-color] md:py-1"
                  onClick={closeOpenedMenuOnMobile}
                >
                  Customers
                </Link>
              </li>
              <li>
                <Link
                  to="/guides"
                  className="text-clickable max-md:hover:bg-clickable/10 max-md:pointer-coarse:active:bg-clickable/10 flex p-2 max-md:mb-4 max-md:w-full max-md:px-4 max-md:text-2xl max-md:font-medium max-md:transition-[background-color] md:py-1"
                  onClick={closeOpenedMenuOnMobile}
                >
                  Guides
                </Link>
              </li>
              <li className="max-md:px-4 md:ml-auto">
                <Button
                  href="/dashboard/issues"
                  variant="primary"
                  size={isMediumSizeScreen ? 'small' : 'large'}
                  rightIcon={<ChevronRightIcon />}
                  className="max-md:w-full"
                >
                  Start today
                </Button>
              </li>
            </ul>
          </nav>
        </Container>
      </header>
    </div>
  )
}
