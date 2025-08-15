import CreateNewIssueModal from '@dashboard-components/create-new-issue-modal'
import NavigationLinksList from '@dashboard-components/navigation-links-list'
import SearchModal from '@dashboard-components/search-modal'
import Modal from '@dashboard-components/ui/modal'
import {
  primaryNavigationLinks,
  secondaryNavigationLinks,
} from '@data/navigation-links'
import useMediaQuery from '@hooks/use-media-query'
import useModal from '@hooks/use-modal'
import LayoutSidebarLeftIcon from '@icons/layout-sidebar-left-icon'
import LayoutSidebarRightIcon from '@icons/layout-sidebar-right-icon'
import PenIcon from '@icons/pen-icon'
import SearchIcon from '@icons/search-icon'
import { usePreferences } from '@services/contexts/preferences-context'
import { useUserInformation } from '@services/contexts/user-information-context'
import Button from '@ui/button'
import Logo from '@ui/logo'
import { AnimatePresence } from 'motion/react'
import { useState } from 'react'
import { useHotkeys } from 'react-hotkeys-hook'
import { Link } from 'react-router'

export default function Sidebar() {
  const {
    isOpened: isCreateNewIssueModalOpen,
    openModal: openCreateNewIssueModal,
    closeModal: closeCreateNewIssueModal,
  } = useModal()
  const {
    isOpened: isSearchModalOpen,
    openModal: openSearchModal,
    closeModal: closeSearchModal,
  } = useModal()
  const { preferences, getBorderRadius } = usePreferences()
  const { userInformation } = useUserInformation()
  const { isMediumSizeScreen } = useMediaQuery()
  const [isOpened, setIsOpened] = useState(isMediumSizeScreen)
  const [isBigSizeModal, setIsBigSizeModal] = useState(false)

  useHotkeys('ctrl+b', () => setIsOpened((prev) => !prev))
  useHotkeys('ctrl+alt+i', openCreateNewIssueModal)
  useHotkeys('ctrl+k', (e) => {
    e.preventDefault()
    openSearchModal()
  })

  function closeOpenedSidebarOnMobile() {
    !isMediumSizeScreen && isOpened && setIsOpened((prev) => !prev)
  }

  const sidebarStyleClassNames = {
    transparent: isOpened
      ? 'bg-background-color absolute w-full min-w-(--sidebar-opened-width) md:sticky md:w-fit md:bg-transparent'
      : 'sticky w-fit',
    sticky: `bg-section-background-color ${preferences.isRightSideSidebar ? 'border-l-section-outline border-l' : 'border-r-section-outline border-r'} ${
      isOpened
        ? 'absolute w-full min-w-(--sidebar-opened-width) md:sticky md:w-fit'
        : 'sticky w-fit'
    }`,
    floating: `bg-section-background-color border-section-outline rounded-(--border-radius) border ${
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
          '--border-radius': getBorderRadius(),
        } as React.CSSProperties
      }
      className={`top-0 left-0 z-999 h-full p-4 ${sidebarStyle}`}
    >
      <div className="flex h-full flex-col gap-4">
        <header
          className={`flex items-center justify-between gap-2 ${
            isOpened ? 'flex-row' : 'flex-col'
          }`}
        >
          <Link to="/dashboard/issues" onClick={closeOpenedSidebarOnMobile}>
            <Logo hideText={!isOpened} />
          </Link>
          <Button
            variant="tertiary"
            className="text-clickable group flex size-7 items-center justify-center"
            onClick={() => setIsOpened((prev) => !prev)}
          >
            <span className="sr-only">Toggle Sidebar</span>
            {preferences.isRightSideSidebar ? (
              <LayoutSidebarRightIcon
                className={`group-hover:[&_rect]:[clip-path:var(--clip-path)] pointer-coarse:group-active:[&_rect]:[clip-path:var(--clip-path)] ${isOpened ? '[--clip-path:_polygon(100%_0,_100%_0,_100%_100%,_100%_100%)] [&_rect]:[clip-path:_polygon(0_0,_100%_0,_100%_100%,_0_100%)]' : '[--clip-path:_polygon(0_0,_100%_0,_100%_100%,_0_100%)]'}`}
              />
            ) : (
              <LayoutSidebarLeftIcon
                className={`group-hover:[&_rect]:[clip-path:var(--clip-path)] pointer-coarse:group-active:[&_rect]:[clip-path:var(--clip-path)] ${isOpened ? '[--clip-path:_polygon(0_0,_0_0,_0_100%,_0_100%)] [&_rect]:[clip-path:_polygon(0_0,_100%_0,_100%_100%,_0_100%)]' : '[--clip-path:_polygon(0_0,_100%_0,_100%_100%,_0_100%)]'}`}
              />
            )}
          </Button>
        </header>
        <div className="flex h-full flex-col gap-1 overflow-y-auto">
          <div className="space-y-1">
            <Button
              variant="primary"
              size="small"
              leftIcon={<PenIcon />}
              className="w-full justify-start"
              onClick={() => {
                openCreateNewIssueModal()
                closeOpenedSidebarOnMobile()
              }}
            >
              <span className={isOpened ? 'block' : 'hidden'}>
                Create New Issue
              </span>
            </Button>
            <Button
              variant="secondary"
              size="small"
              leftIcon={<SearchIcon />}
              className="w-full justify-start"
              onClick={() => {
                openSearchModal()
                closeOpenedSidebarOnMobile()
              }}
            >
              <span className={isOpened ? 'block' : 'hidden'}>Search</span>
            </Button>
          </div>
          <nav className="flex h-full flex-col justify-between gap-1">
            <NavigationLinksList
              navigationLinks={primaryNavigationLinks}
              hideNavigationLinkText={!isOpened}
              onClick={closeOpenedSidebarOnMobile}
            />
            <div className="space-y-1">
              <NavigationLinksList
                navigationLinks={secondaryNavigationLinks}
                hideNavigationLinkText={!isOpened}
                onClick={closeOpenedSidebarOnMobile}
              />
              <Link
                to="/dashboard/settings/profile"
                className="flex items-center gap-1 px-1.5 py-1"
                onClick={closeOpenedSidebarOnMobile}
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
      <AnimatePresence>
        {isCreateNewIssueModalOpen && (
          <Modal
            isOpened={isCreateNewIssueModalOpen}
            closeModal={closeCreateNewIssueModal}
          >
            <Modal.Overlay>
              <Modal.Dialog
                className={`transition-[max-width] ${isBigSizeModal ? 'max-w-200' : ''} `}
              >
                <Modal.FocusLock>
                  <CreateNewIssueModal
                    closeModal={closeCreateNewIssueModal}
                    isBigSizeModal={isBigSizeModal}
                    setIsBigSizeModal={setIsBigSizeModal}
                  />
                </Modal.FocusLock>
              </Modal.Dialog>
            </Modal.Overlay>
          </Modal>
        )}
        {isSearchModalOpen && (
          <Modal isOpened={isSearchModalOpen} closeModal={closeSearchModal}>
            <Modal.Overlay>
              <Modal.Dialog>
                <Modal.FocusLock>
                  <SearchModal closeModal={closeSearchModal} />
                </Modal.FocusLock>
              </Modal.Dialog>
            </Modal.Overlay>
          </Modal>
        )}
      </AnimatePresence>
    </aside>
  )
}
