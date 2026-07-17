import CreateNewIssueModal from '@dashboard-components/create-new-issue-modal'
import NavigationLink from '@dashboard-components/navigation-link'
import SearchModal from '@dashboard-components/search-modal'
import CountBadge from '@dashboard-components/ui/count-badge'
import Modal from '@dashboard-components/ui/modal'
import useMediaQuery from '@hooks/use-media-query'
import useModal from '@hooks/use-modal'
import BrainIcon from '@icons/brain-icon'
import CheckboxIcon from '@icons/checkbox-icon'
import DocumentIcon from '@icons/document-icon'
import FolderIcon from '@icons/folder-icon'
import LayoutSidebarLeftIcon from '@icons/layout-sidebar-left-icon'
import LayoutSidebarRightIcon from '@icons/layout-sidebar-right-icon'
import LifebuoyIcon from '@icons/lifebuoy-icon'
import PenIcon from '@icons/pen-icon'
import SearchIcon from '@icons/search-icon'
import SettingsIcon from '@icons/settings-icon'
import { useDrafts } from '@services/contexts/drafts-context'
import { useIssues } from '@services/contexts/issues-context'
import { usePreferences } from '@services/contexts/preferences-context'
import { useTasks } from '@services/contexts/tasks-context'
import Button from '@ui/button'
import Logo from '@ui/logo'
import { AnimatePresence, motion } from 'motion/react'
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
  const { tasks } = useTasks()
  const { issues } = useIssues()
  const { drafts } = useDrafts()
  const { preferences, getBorderRadius } = usePreferences()
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

  return (
    <motion.aside
      layout="position"
      style={
        {
          '--border-radius': getBorderRadius(),
        } as React.CSSProperties
      }
      initial={false}
      animate={{ width: isOpened ? 'var(--sidebar-opened-width)' : 62 }}
      className={`z-999 h-full shrink-0 bg-neutral-100 p-4 [--sidebar-opened-width:256px]`}
    >
      <div className="flex h-full flex-col gap-4">
        <header
          className={`flex items-center justify-between gap-2 ${
            isOpened ? 'flex-row' : 'flex-col'
          }`}
        >
          <Link to="/issues" onClick={closeOpenedSidebarOnMobile}>
            <Logo hideText={!isOpened} />
          </Link>
          <Button
            variant="tertiary"
            className="group -m- shrink-0 p-1 text-black"
            onClick={() => setIsOpened((prev) => !prev)}
          >
            <span className="sr-only">Toggle Sidebar</span>
            {preferences.isRightSideSidebar ? (
              <LayoutSidebarRightIcon
                className={`group-hover:[&_rect]:[clip-path:var(--clip-path)] pointer-coarse:group-active:[&_rect]:[clip-path:var(--clip-path)] ${isOpened ? '[--clip-path:polygon(100%_0,100%_0,100%_100%,100%_100%)] [&_rect]:[clip-path:polygon(0_0,100%_0,100%_100%,0_100%)]' : '[--clip-path:polygon(0_0,100%_0,100%_100%,0_100%)]'}`}
              />
            ) : (
              <LayoutSidebarLeftIcon
                className={`group-hover:[&_rect]:[clip-path:var(--clip-path)] pointer-coarse:group-active:[&_rect]:[clip-path:var(--clip-path)] ${isOpened ? '[--clip-path:polygon(0_0,0_0,0_100%,0_100%)] [&_rect]:[clip-path:polygon(0_0,100%_0,100%_100%,0_100%)]' : '[--clip-path:polygon(0_0,100%_0,100%_100%,0_100%)]'}`}
              />
            )}
          </Button>
        </header>
        <motion.div
          layout
          className="flex h-full flex-col gap-1 overflow-x-hidden overflow-y-auto px-px"
        >
          <motion.div layout="position" className="space-y-1">
            <Button
              variant="primary"
              size="small"
              leftIcon={<PenIcon />}
              className="h-7 w-full justify-start"
              onClick={() => {
                openCreateNewIssueModal()
                closeOpenedSidebarOnMobile()
              }}
            >
              <AnimatePresence mode="popLayout" initial={false}>
                {isOpened && (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    Create New Issue
                  </motion.span>
                )}
              </AnimatePresence>
            </Button>
            <Button
              variant="secondary"
              size="small"
              leftIcon={<SearchIcon />}
              className="h-7 w-full justify-start"
              onClick={() => {
                openSearchModal()
                closeOpenedSidebarOnMobile()
              }}
            >
              <AnimatePresence mode="popLayout" initial={false}>
                {isOpened && (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    Search
                  </motion.span>
                )}
              </AnimatePresence>
            </Button>
          </motion.div>
          <nav className="flex h-full flex-col justify-between gap-1">
            <motion.ul layout="position" className="space-y-1">
              <li>
                <NavigationLink
                  to="/tasks"
                  leftIcon={<CheckboxIcon />}
                  rightIcon={
                    <AnimatePresence mode="popLayout" initial={false}>
                      {isOpened && (
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="ml-auto"
                        >
                          <CountBadge>{tasks.length}</CountBadge>
                        </motion.span>
                      )}
                    </AnimatePresence>
                  }
                  onClick={closeOpenedSidebarOnMobile}
                >
                  <AnimatePresence mode="popLayout" initial={false}>
                    {isOpened && (
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        Tasks
                      </motion.span>
                    )}
                  </AnimatePresence>
                </NavigationLink>
              </li>
              <li>
                <NavigationLink
                  to="/issues"
                  leftIcon={<FolderIcon />}
                  rightIcon={
                    <AnimatePresence mode="popLayout" initial={false}>
                      {isOpened && (
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="ml-auto"
                        >
                          <CountBadge>{issues.length}</CountBadge>
                        </motion.span>
                      )}
                    </AnimatePresence>
                  }
                  onClick={closeOpenedSidebarOnMobile}
                >
                  <AnimatePresence mode="popLayout" initial={false}>
                    {isOpened && (
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        Issues
                      </motion.span>
                    )}
                  </AnimatePresence>
                </NavigationLink>
              </li>
              <li>
                <NavigationLink
                  to="/drafts"
                  leftIcon={<BrainIcon />}
                  rightIcon={
                    <AnimatePresence mode="popLayout" initial={false}>
                      {isOpened && (
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="ml-auto"
                        >
                          <CountBadge>{drafts.length}</CountBadge>
                        </motion.span>
                      )}
                    </AnimatePresence>
                  }
                  onClick={closeOpenedSidebarOnMobile}
                >
                  <AnimatePresence mode="popLayout" initial={false}>
                    {isOpened && (
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        Drafts
                      </motion.span>
                    )}
                  </AnimatePresence>
                </NavigationLink>
              </li>
            </motion.ul>
            <motion.ul layout="preserve-aspect" className="space-y-1">
              <li>
                <NavigationLink
                  to="/guides"
                  leftIcon={<DocumentIcon />}
                  onClick={closeOpenedSidebarOnMobile}
                >
                  <AnimatePresence mode="popLayout" initial={false}>
                    {isOpened && (
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        Guides
                      </motion.span>
                    )}
                  </AnimatePresence>
                </NavigationLink>
              </li>
              <li>
                <NavigationLink
                  to="/help-and-support"
                  leftIcon={<LifebuoyIcon />}
                  onClick={closeOpenedSidebarOnMobile}
                >
                  <AnimatePresence mode="popLayout" initial={false}>
                    {isOpened && (
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        Help & Support
                      </motion.span>
                    )}
                  </AnimatePresence>
                </NavigationLink>
              </li>
              <li>
                <NavigationLink
                  to="/settings/profile"
                  leftIcon={<SettingsIcon />}
                  onClick={closeOpenedSidebarOnMobile}
                >
                  <AnimatePresence mode="popLayout" initial={false}>
                    {isOpened && (
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        Settings
                      </motion.span>
                    )}
                  </AnimatePresence>
                </NavigationLink>
              </li>
            </motion.ul>
          </nav>
        </motion.div>
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
    </motion.aside>
  )
}
