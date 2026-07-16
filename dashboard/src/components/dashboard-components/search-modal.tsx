import CountBadge from '@dashboard-components/ui/count-badge'
import Divider from '@dashboard-components/ui/divider'
import HighlightText from '@dashboard-components/ui/highlight-text'
import IconWrapper from '@dashboard-components/ui/icon-wrapper'
import MenuList from '@dashboard-components/ui/menu-list'
import ModalCard from '@dashboard-components/ui/modal-card'
import SearchFilter from '@dashboard-components/ui/search-filter'
import BrainIcon from '@icons/brain-icon'
import CheckboxIcon from '@icons/checkbox-icon'
import CloseIcon from '@icons/close-icon'
import DocumentIcon from '@icons/document-icon'
import FolderIcon from '@icons/folder-icon'
import LifebuoyIcon from '@icons/lifebuoy-icon'
import SearchIcon from '@icons/search-icon'
import SettingsIcon from '@icons/settings-icon'
import { useDrafts } from '@services/contexts/drafts-context'
import { useIssues } from '@services/contexts/issues-context'
import { useTasks } from '@services/contexts/tasks-context'
import Button from '@ui/button'
import Fuse from 'fuse.js'
import { AnimatePresence, motion } from 'motion/react'
import { useState } from 'react'

type SearchModalProps = {
  closeModal: () => void
}

type Filter = 'tasks' | 'issues' | 'drafts'

export default function SearchModal({ closeModal }: SearchModalProps) {
  const [search, setSearch] = useState('')
  const [filters, setFilters] = useState<Filter[]>([])

  function toggleFilter(filter: Filter) {
    setFilters((prevFilters) =>
      prevFilters.includes(filter)
        ? [...prevFilters].filter((prevFilter) => prevFilter !== filter)
        : [...prevFilters, filter]
    )
  }

  return (
    <ModalCard>
      <motion.div layout="position">
        <header className="relative">
          <span className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 [&_svg]:size-4 [&_svg]:text-neutral-600">
            <SearchIcon />
          </span>
          <input
            type="text"
            placeholder="Type a command or search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full p-4 pl-10 text-black placeholder:text-neutral-600 focus:outline-0"
          />
          <AnimatePresence initial={false}>
            {search.length > 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute top-1/2 right-4 -translate-y-1/2 bg-neutral-50"
              >
                <Button
                  variant="tertiary"
                  className="p-1"
                  onClick={() => setSearch('')}
                >
                  <CloseIcon />
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </header>
        <Divider />
        <div role="toolbar" className="flex items-center gap-2 p-4">
          <SearchFilter
            checked={filters.includes('tasks')}
            onChange={() => toggleFilter('tasks')}
          >
            Tasks
          </SearchFilter>
          <SearchFilter
            checked={filters.includes('issues')}
            onChange={() => toggleFilter('issues')}
          >
            Issues
          </SearchFilter>
          <SearchFilter
            checked={filters.includes('drafts')}
            onChange={() => toggleFilter('drafts')}
          >
            Drafts
          </SearchFilter>
        </div>
        <Divider />
      </motion.div>
      <motion.div
        layout="position"
        className="h-max max-h-85 overflow-x-hidden overflow-y-auto *:py-4 *:not-first:border-t *:not-first:border-t-neutral-200"
      >
        {search.length > 0 ? (
          <ResultsPanel
            searchQuery={search}
            closeModal={closeModal}
            filters={filters}
          />
        ) : (
          <MenuPanel closeModal={closeModal} />
        )}
      </motion.div>
    </ModalCard>
  )
}

type MenuPanelProps = {
  closeModal: () => void
}

function MenuPanel({ closeModal }: MenuPanelProps) {
  const { tasks } = useTasks()
  const { issues } = useIssues()
  const { drafts } = useDrafts()

  return (
    <>
      <div>
        <div className="px-4">
          <MenuList.Heading>Quick Access</MenuList.Heading>
        </div>
        <MenuList>
          <MenuList.Item
            leftIcon={<CheckboxIcon />}
            rightIcon={<CountBadge>{tasks.length}</CountBadge>}
            className="[&>span_svg]:size-4 [&>span:last-child]:ml-auto"
          >
            <MenuList.Button href="/tasks" onClick={closeModal}>
              Tasks
            </MenuList.Button>
          </MenuList.Item>
          <MenuList.Item
            leftIcon={<FolderIcon />}
            rightIcon={<CountBadge>{issues.length}</CountBadge>}
            className="[&>span_svg]:size-4 [&>span:last-child]:ml-auto"
          >
            <MenuList.Button href="/issues" onClick={closeModal}>
              Issues
            </MenuList.Button>
          </MenuList.Item>
          <MenuList.Item
            leftIcon={<BrainIcon />}
            rightIcon={<CountBadge>{drafts.length}</CountBadge>}
            className="[&>span_svg]:size-4 [&>span:last-child]:ml-auto"
          >
            <MenuList.Button href="/drafts" onClick={closeModal}>
              Drafts
            </MenuList.Button>
          </MenuList.Item>
        </MenuList>
      </div>
      <div>
        <div className="px-4">
          <MenuList.Heading>Quick Menu</MenuList.Heading>
        </div>
        <MenuList>
          <MenuList.Item
            leftIcon={<DocumentIcon />}
            className="[&>span_svg]:size-4"
          >
            <MenuList.Button href="/guides" onClick={closeModal}>
              Guides
            </MenuList.Button>
          </MenuList.Item>
          <MenuList.Item
            leftIcon={<LifebuoyIcon />}
            className="[&>span_svg]:size-4"
          >
            <MenuList.Button href="/help-and-support" onClick={closeModal}>
              Help & Support
            </MenuList.Button>
          </MenuList.Item>
          <MenuList.Item
            leftIcon={<SettingsIcon />}
            className="[&>span_svg]:size-4"
          >
            <MenuList.Button href="/settings/profile" onClick={closeModal}>
              Settings
            </MenuList.Button>
          </MenuList.Item>
        </MenuList>
      </div>
    </>
  )
}

type ResultsPanelProps = {
  searchQuery: string
  closeModal: () => void
  filters: Filter[]
}

function ResultsPanel({ searchQuery, closeModal, filters }: ResultsPanelProps) {
  const { tasks } = useTasks()
  const { issues, getIssueStatus } = useIssues()
  const { drafts } = useDrafts()

  const showTasks = filters.length === 0 || filters.includes('tasks')
  const showIssues = filters.length === 0 || filters.includes('issues')
  const showDrafts = filters.length === 0 || filters.includes('drafts')

  const filteredTasks = new Fuse(tasks, {
    keys: ['title'],
    includeMatches: true,
  }).search(searchQuery)
  const filteredIssues = new Fuse(issues, {
    keys: ['title'],
    includeMatches: true,
  }).search(searchQuery)
  const filteredDrafts = new Fuse(drafts, {
    keys: ['title'],
    includeMatches: true,
  }).search(searchQuery)

  if (
    (!showTasks || filteredTasks.length === 0) &&
    (!showIssues || filteredIssues.length === 0) &&
    (!showDrafts || filteredDrafts.length === 0)
  )
    return <NoResultsPanel searchQuery={searchQuery} />

  return (
    <AnimatePresence mode="popLayout" initial={false}>
      {showTasks && filteredTasks.length > 0 ? (
        <motion.div
          layout="position"
          key="tasks"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="bg-neutral-50"
        >
          <div className="flex items-center gap-1 px-4">
            <MenuList.Heading>Tasks</MenuList.Heading>
            <span className="text-neutral-600">{filteredTasks.length}</span>
          </div>
          <MenuList>
            <AnimatePresence mode="popLayout" initial={false}>
              {filteredTasks.map(({ item: { id, title }, matches }) => {
                const titleMatch = matches?.find(
                  (match) => match.key === 'title'
                )

                return (
                  <MenuList.Item
                    layout
                    key={id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    leftIcon={<CheckboxIcon />}
                  >
                    <MenuList.Button href="/tasks" onClick={closeModal}>
                      <HighlightText
                        text={title}
                        indices={titleMatch?.indices}
                      />
                    </MenuList.Button>
                  </MenuList.Item>
                )
              })}
            </AnimatePresence>
          </MenuList>
        </motion.div>
      ) : null}
      {showIssues && filteredIssues.length > 0 ? (
        <motion.div
          layout="position"
          key="issues"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="bg-neutral-50"
        >
          <div className="flex items-center gap-1 px-4">
            <MenuList.Heading>Issues</MenuList.Heading>
            <span className="text-neutral-600">{filteredIssues.length}</span>
          </div>
          <MenuList>
            <AnimatePresence mode="popLayout" initial={false}>
              {filteredIssues.map(
                ({ item: { id, status, title }, matches }) => {
                  const { icon: Icon } = getIssueStatus(status)

                  const titleMatch = matches?.find(
                    (match) => match.key === 'title'
                  )

                  return (
                    <MenuList.Item
                      layout
                      key={id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      leftIcon={<Icon />}
                    >
                      <MenuList.Button
                        href={`/issues/${id}`}
                        onClick={closeModal}
                      >
                        <HighlightText
                          text={title}
                          indices={titleMatch?.indices}
                        />
                      </MenuList.Button>
                    </MenuList.Item>
                  )
                }
              )}
            </AnimatePresence>
          </MenuList>
        </motion.div>
      ) : null}
      {showDrafts && filteredDrafts.length > 0 ? (
        <motion.div
          layout="position"
          key="drafts"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="bg-neutral-50"
        >
          <div className="flex items-center gap-1 px-4">
            <MenuList.Heading>Drafts</MenuList.Heading>
            <span className="text-neutral-600">{filteredDrafts.length}</span>
          </div>
          <MenuList>
            <AnimatePresence mode="popLayout" initial={false}>
              {filteredDrafts.map(({ item: { id, title }, matches }) => {
                const titleMatch = matches?.find(
                  (match) => match.key === 'title'
                )

                return (
                  <MenuList.Item
                    layout
                    key={id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    leftIcon={<BrainIcon />}
                  >
                    <MenuList.Button
                      href={`/drafts/${id}`}
                      onClick={closeModal}
                    >
                      <HighlightText
                        text={title}
                        indices={titleMatch?.indices}
                      />
                    </MenuList.Button>
                  </MenuList.Item>
                )
              })}
            </AnimatePresence>
          </MenuList>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}

type NoResultsPanelProps = {
  searchQuery: string
}

function NoResultsPanel({ searchQuery }: NoResultsPanelProps) {
  return (
    <div className="flex flex-col items-center px-4 text-center text-pretty">
      <IconWrapper icon={<SearchIcon />} className="mb-4" />
      <h3 className="mb-2 font-medium">Sorry, We Couldn't Find Anything</h3>
      <p className="text-xs wrap-anywhere text-neutral-600">
        We couldn't find any results for{' '}
        <strong className="font-medium text-black">{searchQuery}</strong> search
      </p>
    </div>
  )
}
