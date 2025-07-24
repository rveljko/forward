import Divider from '@dashboard-components/ui/divider'
import MenuList from '@dashboard-components/ui/menu-list'
import ModalCard from '@dashboard-components/ui/modal-card'
import { secondaryNavigationLinks } from '@data/navigation-links'
import BrainIcon from '@icons/brain-icon'
import PenIcon from '@icons/pen-icon'
import SearchIcon from '@icons/search-icon'
import DraftsContextProvider, {
  useDrafts,
} from '@services/contexts/drafts-context'
import { useIssues } from '@services/contexts/issues-context'
import { cn } from '@utils/utils'
import Fuse from 'fuse.js'
import { useState } from 'react'

type SearchModalProps = React.ComponentPropsWithoutRef<'article'> & {
  closeModal: () => void
}

export default function SearchModal({
  closeModal,
  className,
  ...props
}: SearchModalProps) {
  const [search, setSearch] = useState('')

  return (
    <ModalCard
      className={cn('bg-search-modal-background overflow-hidden', className)}
      {...props}
    >
      <header className="relative">
        <span className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 [&_svg]:text-neutral-400">
          <SearchIcon />
        </span>
        <input
          type="text"
          placeholder="Type a command or search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="text-clickable w-full p-4 pl-11 placeholder:text-neutral-400 focus:outline-0"
        />
      </header>
      <Divider />
      <div className="h-max max-h-85 space-y-4 overflow-y-auto py-4">
        <DraftsContextProvider>
          {search.length > 0 ? (
            <ResultsPanel searchQuery={search} closeModal={closeModal} />
          ) : (
            <MenuPanel closeModal={closeModal} />
          )}
        </DraftsContextProvider>
      </div>
    </ModalCard>
  )
}

type MenuPanelProps = {
  closeModal: () => void
}

function MenuPanel({ closeModal }: MenuPanelProps) {
  const { createDefaultIssue } = useIssues()
  const { createNewDraft } = useDrafts()

  return (
    <>
      <div>
        <MenuList.Heading>Quick Actions</MenuList.Heading>
        <MenuList>
          <MenuList.Item leftIcon={<PenIcon />}>
            <MenuList.Button
              onClick={() => {
                createDefaultIssue()
                closeModal()
              }}
            >
              Create New Issue
            </MenuList.Button>
          </MenuList.Item>
          <MenuList.Item leftIcon={<BrainIcon />}>
            <MenuList.Button
              onClick={() => {
                createNewDraft()
                closeModal()
              }}
            >
              Create New Draft
            </MenuList.Button>
          </MenuList.Item>
        </MenuList>
      </div>
      <Divider />
      <div>
        <MenuList.Heading>Quick Menu</MenuList.Heading>
        <MenuList>
          {secondaryNavigationLinks.map(({ id, name, path, icon: Icon }) => (
            <MenuList.Item key={id} leftIcon={Icon && <Icon />}>
              <MenuList.Button href={path} onClick={closeModal}>
                {name}
              </MenuList.Button>
            </MenuList.Item>
          ))}
        </MenuList>
      </div>
    </>
  )
}

type ResultsPanelProps = {
  searchQuery: string
  closeModal: () => void
}

function ResultsPanel({ searchQuery, closeModal }: ResultsPanelProps) {
  const { issues, getIssueStatus } = useIssues()
  const { drafts } = useDrafts()
  const filteredIssues = new Fuse(issues, { keys: ['title'] })
    .search(searchQuery)
    .map(({ item }) => item)
  const filteredDrafts = new Fuse(drafts, { keys: ['title'] })
    .search(searchQuery)
    .map(({ item }) => item)

  if (!filteredIssues.length && !filteredDrafts.length)
    return <NoResultsPanel searchQuery={searchQuery} />

  return (
    <>
      {filteredIssues.length > 0 ? (
        <>
          <div>
            <MenuList.Heading>Issues</MenuList.Heading>
            <MenuList>
              {filteredIssues.map(({ id, title, status }) => {
                const { icon: Icon } = getIssueStatus(status)

                return (
                  <MenuList.Item key={id} leftIcon={<Icon />}>
                    <MenuList.Button
                      href={`/dashboard/issues/${id}`}
                      onClick={closeModal}
                    >
                      {title}
                    </MenuList.Button>
                  </MenuList.Item>
                )
              })}
            </MenuList>
          </div>
          {filteredDrafts.length > 0 ? <Divider /> : null}
        </>
      ) : null}
      {filteredDrafts.length > 0 ? (
        <div>
          <MenuList.Heading>Drafts</MenuList.Heading>
          <MenuList>
            {filteredDrafts.map(({ id, title }) => (
              <MenuList.Item key={id} leftIcon={<BrainIcon />}>
                <MenuList.Button
                  href={`/dashboard/drafts/${id}`}
                  onClick={closeModal}
                >
                  {title}
                </MenuList.Button>
              </MenuList.Item>
            ))}
          </MenuList>
        </div>
      ) : null}
    </>
  )
}

type NoResultsPanelProps = {
  searchQuery: string
}

function NoResultsPanel({ searchQuery }: NoResultsPanelProps) {
  return (
    <div className="flex flex-col items-center px-4 text-center text-pretty">
      <span className="border-section-outline mb-4 flex size-12 items-center justify-center rounded-sm border">
        <SearchIcon />
      </span>
      <h3 className="mb-2">Sorry, We Couldn't Find Anything</h3>
      <p className="wrap-anywhere">
        We couldn't find any results for{' '}
        <strong className="text-clickable">{searchQuery}</strong> search
      </p>
    </div>
  )
}
