import NavigationLinksList from '@dashboard-components/navigation-links-list'
import {
  primaryNavigationLinks,
  secondaryNavigationLinks,
} from '@data/navigation-links'
import useMediaQuery from '@hooks/use-media-query'
import ChevronLeftIcon from '@icons/chevron-left-icon'
import ChevronRightIcon from '@icons/chevron-right-icon'
import PenIcon from '@icons/pen-icon'
import SearchIcon from '@icons/search-icon'
import { usePreferences } from '@services/contexts/preferences-context'
import { useUserInformation } from '@services/contexts/user-information-context'
import Button from '@ui/button'
import Logo from '@ui/logo'
import { useState } from 'react'
import { Link } from 'react-router'

export default function Sidebar() {
  const { preferences } = usePreferences()
  const { userInformation } = useUserInformation()
  const { isMediumSizeScreen } = useMediaQuery()
  const [isOpened, setIsOpened] = useState(isMediumSizeScreen)

  const sidebarStyleClassNames = {
    transparent: `top-0 left-0 z-999 h-screen p-4 ${
      isOpened
        ? 'bg-background-color absolute w-full min-w-(--sidebar-opened-width) md:sticky md:w-fit md:bg-transparent'
        : 'sticky w-fit'
    }`,
    sticky: `bg-section-background-color top-0 left-0 z-999 h-screen p-4 ${preferences.isRightSideSidebar ? 'border-l-section-outline border-l' : 'border-r-section-outline border-r'} ${
      isOpened
        ? 'absolute w-full min-w-(--sidebar-opened-width) md:sticky md:w-fit'
        : 'sticky w-fit'
    }`,
    floating: `bg-section-background-color border-section-outline top-0 left-0 z-999 h-full rounded-2xl border p-4 ${
      isOpened
        ? 'absolute w-full min-w-(--sidebar-opened-width) rounded-none md:sticky md:w-fit md:rounded-2xl'
        : 'sticky w-fit'
    }`,
  }

  const sidebarStyle =
    (preferences.sidebarStyle === 'transparent' &&
      sidebarStyleClassNames.transparent) ||
    (preferences.sidebarStyle === 'floating' &&
      sidebarStyleClassNames.floating) ||
    (preferences.sidebarStyle === 'sticky' && sidebarStyleClassNames.sticky) ||
    ''

  return (
    <aside className={sidebarStyle}>
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
            {preferences.isRightSideSidebar ? (
              isOpened ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )
            ) : isOpened ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
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
              hideNavigationLinkText={!isOpened}
            />
            <div className="space-y-1">
              <NavigationLinksList
                navigationLinks={secondaryNavigationLinks}
                hideNavigationLinkText={!isOpened}
              />
              <Link
                to="/dashboard/settings/profile"
                className="flex items-center gap-1 px-1.5 py-1"
              >
                <div className="flex h-6 shrink-0 items-center justify-center">
                  <div className="size-5 overflow-hidden rounded-full bg-neutral-700">
                    <img
                      className="object-cover"
                      src={userInformation.profilePictureUrl}
                      alt={`${userInformation.firstName} ${userInformation.lastName}`}
                    />
                  </div>
                </div>
                <span
                  className={`text-clickable ${isOpened ? 'block' : 'hidden'}`}
                >
                  {userInformation.firstName} {userInformation.lastName}
                </span>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </aside>
  )
}
