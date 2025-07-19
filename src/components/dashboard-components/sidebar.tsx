import CreateNewIssueModalButton from '@dashboard-components/create-new-issue-modal-button'
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
  const { preferences, getRemCornerRoundness } = usePreferences()
  const { userInformation } = useUserInformation()
  const { isMediumSizeScreen } = useMediaQuery()
  const [isOpened, setIsOpened] = useState(isMediumSizeScreen)

  const sidebarStyleClassNames = {
    transparent: `h-screen ${
      isOpened
        ? 'bg-background-color absolute w-full min-w-(--sidebar-opened-width) md:sticky md:w-fit md:bg-transparent'
        : 'sticky w-fit'
    }`,
    sticky: `bg-section-background-color h-screen ${preferences.isRightSideSidebar ? 'border-l-section-outline border-l' : 'border-r-section-outline border-r'} ${
      isOpened
        ? 'absolute w-full min-w-(--sidebar-opened-width) md:sticky md:w-fit'
        : 'sticky w-fit'
    }`,
    floating: `bg-section-background-color border-section-outline h-full rounded-(--border-radius) border ${
      isOpened
        ? 'absolute w-full min-w-(--sidebar-opened-width) rounded-none md:sticky md:w-fit md:rounded-(--border-radius)'
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
    <aside
      style={
        {
          '--border-radius': preferences.areRoundedCorners
            ? getRemCornerRoundness()
            : 0,
        } as React.CSSProperties
      }
      className={`top-0 left-0 z-999 p-4 ${sidebarStyle}`}
    >
      <div className="flex h-full flex-col gap-4">
        <header
          className={`flex items-center justify-between gap-2 ${
            isOpened ? 'flex-row' : 'flex-col'
          }`}
        >
          <Link
            to="/dashboard/issues"
            onClick={() =>
              !isMediumSizeScreen && isOpened && setIsOpened((prev) => !prev)
            }
          >
            <Logo hideText={!isOpened} />
          </Link>
          <Button
            variant="tertiary"
            className="text-clickable flex size-7 items-center justify-center"
            onClick={() => setIsOpened((prev) => !prev)}
          >
            <span className="sr-only">Toggle Sidebar</span>
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
          </Button>
        </header>
        <div className="flex h-full flex-col gap-1 overflow-y-auto">
          <div className="space-y-1">
            <CreateNewIssueModalButton
              variant="primary"
              size="small"
              leftIcon={<PenIcon />}
              className="w-full justify-start"
            >
              <span className={isOpened ? 'block' : 'hidden'}>
                Create New Issue
              </span>
            </CreateNewIssueModalButton>
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
              onClick={() =>
                !isMediumSizeScreen && isOpened && setIsOpened((prev) => !prev)
              }
            />
            <div className="space-y-1">
              <NavigationLinksList
                navigationLinks={secondaryNavigationLinks}
                hideNavigationLinkText={!isOpened}
                onClick={() =>
                  !isMediumSizeScreen &&
                  isOpened &&
                  setIsOpened((prev) => !prev)
                }
              />
              <Link
                to="/dashboard/settings/profile"
                className="flex items-center gap-1 px-1.5 py-1"
                onClick={() =>
                  !isMediumSizeScreen &&
                  isOpened &&
                  setIsOpened((prev) => !prev)
                }
              >
                <div className="flex h-6 shrink-0 items-center justify-center">
                  <div className="size-5 overflow-hidden rounded-full bg-neutral-700">
                    <img
                      className="size-full object-cover"
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
