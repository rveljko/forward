import NavigationLinksList from '@dashboard-components/navigation-links-list'
import {
  primaryNavigationLinks,
  secondaryNavigationLinks,
} from '@data/navigation-links'
import useMediaQuery from '@hooks/use-media-query'
import PenIcon from '@icons/pen-icon'
import SearchIcon from '@icons/search-icon'
import SidebarClosedIcon from '@icons/sidebar-closed-icon'
import SidebarLeftOpenedIcon from '@icons/sidebar-left-opened-icon'
import Button from '@ui/button'
import Logo from '@ui/logo'
import { useState } from 'react'
import { Link } from 'react-router'

export default function Sidebar() {
  const { isMediumSizeScreen } = useMediaQuery()
  const [isOpened, setIsOpened] = useState(isMediumSizeScreen)

  return (
    <aside
      className={`bg top-0 left-0 z-999 h-screen p-4 ${
        isOpened
          ? 'bg-background-color absolute w-full min-w-(--sidebar-opened-width) md:sticky md:w-fit md:bg-transparent'
          : 'sticky w-fit'
      }`}
    >
      <div className="flex h-full flex-col gap-4">
        <header
          className={`flex items-center justify-between gap-2 ${
            isOpened ? 'flex-row' : 'flex-col-reverse'
          }`}
        >
          <Link to="/dashboard">
            <Logo hideText={!isOpened} />
          </Link>
          <button
            className="text-clickable flex size-7 items-center justify-center hover:cursor-pointer"
            onClick={() => setIsOpened((prev) => !prev)}
          >
            {isOpened ? <SidebarClosedIcon /> : <SidebarLeftOpenedIcon />}
          </button>
        </header>
        <div className="flex h-full flex-col gap-1 overflow-y-auto">
          <div className="space-y-1">
            <Button
              variant="primary"
              size="small"
              leftIcon={<PenIcon />}
              className="w-full justify-start"
            >
              {isOpened && 'Create New Issue'}
            </Button>
            <Button
              variant="secondary"
              size="small"
              leftIcon={<SearchIcon />}
              className="w-full justify-start"
            >
              {isOpened && 'Search'}
            </Button>
          </div>
          <nav className="flex h-full flex-col justify-between gap-1">
            <NavigationLinksList
              navigationLinks={primaryNavigationLinks}
              showNavigationLinkText={isOpened}
            />
            <NavigationLinksList
              navigationLinks={secondaryNavigationLinks}
              showNavigationLinkText={isOpened}
            />
          </nav>
        </div>
      </div>
    </aside>
  )
}
