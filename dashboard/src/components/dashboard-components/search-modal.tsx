import Divider from '@dashboard-components/ui/divider'
import HighlightText from '@dashboard-components/ui/highlight-text'
import IconWrapper from '@dashboard-components/ui/icon-wrapper'
import MenuList from '@dashboard-components/ui/menu-list'
import ModalCard from '@dashboard-components/ui/modal-card'
import BrainIcon from '@icons/brain-icon'
import DocumentIcon from '@icons/document-icon'
import LifebuoyIcon from '@icons/lifebuoy-icon'
import PenIcon from '@icons/pen-icon'
import SearchIcon from '@icons/search-icon'
import SettingsIcon from '@icons/settings-icon'
import DraftsContextProvider, {
  useDrafts,
} from '@services/contexts/drafts-context'
import { useIssues } from '@services/contexts/issues-context'
import Fuse from 'fuse.js'
import { useState } from 'react'

type SearchModalProps = {
  closeModal: () => void
}

export default function SearchModal({ closeModal }: SearchModalProps) {
  const [search, setSearch] = useState('')

  return (
    <ModalCard>
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
          <MenuList.Item leftIcon={<PenIcon />} className="[&>span_svg]:size-4">
            <MenuList.Button
              onClick={() => {
                createDefaultIssue()
                closeModal()
              }}
            >
              Create New Issue
            </MenuList.Button>
          </MenuList.Item>
          <MenuList.Item
            leftIcon={<BrainIcon />}
            className="[&>span_svg]:size-4"
          >
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
}

function ResultsPanel({ searchQuery, closeModal }: ResultsPanelProps) {
  const { issues, getIssueStatus } = useIssues()
  const { drafts } = useDrafts()
  const filteredIssues = new Fuse(issues, {
    keys: ['title'],
    includeMatches: true,
  }).search(searchQuery)
  const filteredDrafts = new Fuse(drafts, {
    keys: ['title'],
    includeMatches: true,
  }).search(searchQuery)

  if (!filteredIssues.length && !filteredDrafts.length)
    return <NoResultsPanel searchQuery={searchQuery} />

  return (
    <>
      {filteredIssues.length > 0 ? (
        <>
          <div>
            <MenuList.Heading>Issues</MenuList.Heading>
            <MenuList>
              {filteredIssues.map(
                ({ item: { id, status, title }, matches }) => {
                  const { icon: Icon } = getIssueStatus(status)

                  const titleMatch = matches?.find(
                    (match) => match.key === 'title'
                  )

                  return (
                    <MenuList.Item key={id} leftIcon={<Icon />}>
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
            </MenuList>
          </div>
          {filteredDrafts.length > 0 ? <Divider /> : null}
        </>
      ) : null}
      {filteredDrafts.length > 0 ? (
        <div>
          <MenuList.Heading>Drafts</MenuList.Heading>
          <MenuList>
            {filteredDrafts.map(({ item: { id, title }, matches }) => {
              const titleMatch = matches?.find((match) => match.key === 'title')

              return (
                <MenuList.Item key={id} leftIcon={<BrainIcon />}>
                  <MenuList.Button href={`/drafts/${id}`} onClick={closeModal}>
                    <HighlightText text={title} indices={titleMatch?.indices} />
                  </MenuList.Button>
                </MenuList.Item>
              )
            })}
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
      <IconWrapper icon={<SearchIcon />} className="mb-4" />
      <h3 className="mb-2 font-medium">Sorry, We Couldn't Find Anything</h3>
      <p className="text-xs wrap-anywhere text-neutral-600">
        We couldn't find any results for{' '}
        <strong className="font-medium text-black">{searchQuery}</strong> search
      </p>
    </div>
  )
}
