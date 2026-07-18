import Container from '@dashboard-components/container'
import CreateNewDraftModalButton from '@dashboard-components/create-new-draft-modal-button'
import DraftCardsList from '@dashboard-components/draft-cards-list'
import Checkbox from '@dashboard-components/ui/checkbox'
import Divider from '@dashboard-components/ui/divider'
import Dropdown from '@dashboard-components/ui/dropdown'
import DropdownButton from '@dashboard-components/ui/dropdown-button'
import FilterChip from '@dashboard-components/ui/filter-chip'
import IconWrapper from '@dashboard-components/ui/icon-wrapper'
import RadioButton from '@dashboard-components/ui/radio-button'
import { draftCategories } from '@data/draft-categories'
import useDropdown from '@hooks/use-dropdown'
import ArrowsSortIcon from '@icons/arrows-sort-icon'
import BrainIcon from '@icons/brain-icon'
import CalendarIcon from '@icons/calendar-icon'
import FilterIcon from '@icons/filter-icon'
import LetterCaseIcon from '@icons/letter-case-icon'
import SearchIcon from '@icons/search-icon'
import WritingIcon from '@icons/writing-icon'
import { useDrafts } from '@services/contexts/drafts-context'
import { AnimatePresence, motion } from 'motion/react'
import { useSearchParams } from 'react-router'

export default function DraftsSection() {
  const { categories, removeFilter, getSortedDrafts, getDraftCategory } =
    useDrafts()

  return (
    <section className="flex h-full flex-col overflow-hidden">
      <header className="p-4">
        <h1 className="font-medium">Drafts</h1>
      </header>
      <Divider />
      <div
        role="toolbar"
        className="flex flex-wrap items-center justify-between gap-2 p-4"
      >
        <div className="flex flex-wrap items-center gap-2">
          <FiltersDropdownButton />
          <SortDropdownButton />
          <ul className="contents">
            <AnimatePresence mode="popLayout" initial={false}>
              {categories.map((category) => {
                const { name, icon: Icon } = getDraftCategory(category)

                return (
                  <motion.li
                    layout
                    key={category}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                  >
                    <FilterChip
                      name={name}
                      icon={<Icon />}
                      onRemove={() => removeFilter('category', category)}
                    />
                  </motion.li>
                )
              })}
            </AnimatePresence>
          </ul>
        </div>
        <CreateNewDraftModalButton
          variant="primary"
          size="small"
          leftIcon={<WritingIcon />}
        >
          Create New Draft
        </CreateNewDraftModalButton>
      </div>
      <Divider />
      {getSortedDrafts().length > 0 ? (
        <div className="grow scrollbar-gutter-stable overflow-y-auto">
          <Container className="py-8 md:py-16">
            <DraftCardsList drafts={getSortedDrafts()} />
          </Container>
        </div>
      ) : (
        <NoDraftsPanel />
      )}
    </section>
  )
}

function FiltersDropdownButton() {
  const { setFilter, handleCheckbox } = useDrafts()
  const { isOpened, toggleDropdown } = useDropdown()

  return (
    <DropdownButton
      label="Filters"
      isOpened={isOpened}
      toggleDropdown={toggleDropdown}
      variant="secondary"
      size="small"
      leftIcon={<FilterIcon />}
    >
      <Dropdown.List>
        {draftCategories.map(({ id, name, label, icon: Icon }) => (
          <Dropdown.Item key={id}>
            <Dropdown.Label>
              <Checkbox
                onChange={() => {
                  setFilter('category', label)
                  toggleDropdown()
                }}
                checked={handleCheckbox(label)}
              />
              <Icon />
              {name}
            </Dropdown.Label>
          </Dropdown.Item>
        ))}
      </Dropdown.List>
    </DropdownButton>
  )
}

function SortDropdownButton() {
  const { sort, setSort } = useDrafts()
  const { isOpened, toggleDropdown } = useDropdown()

  return (
    <DropdownButton
      label="Sort"
      isOpened={isOpened}
      toggleDropdown={toggleDropdown}
      variant="secondary"
      size="small"
      leftIcon={<ArrowsSortIcon />}
    >
      <Dropdown.List>
        <Dropdown.Item>
          <Dropdown.Label>
            <RadioButton
              name="sort"
              checked={sort === 'date-desc'}
              onChange={() => {
                setSort('date-desc')
                toggleDropdown()
              }}
            />
            <CalendarIcon />
            Newest to Oldest
          </Dropdown.Label>
        </Dropdown.Item>
        <Dropdown.Item>
          <Dropdown.Label>
            <RadioButton
              name="sort"
              checked={sort === 'date-asc'}
              onChange={() => {
                setSort('date-asc')
                toggleDropdown()
              }}
            />
            <CalendarIcon />
            Oldest to Newest
          </Dropdown.Label>
        </Dropdown.Item>
        <Dropdown.Item>
          <Dropdown.Label>
            <RadioButton
              name="sort"
              checked={sort === 'name-asc'}
              onChange={() => {
                setSort('name-asc')
                toggleDropdown()
              }}
            />
            <LetterCaseIcon />A to Z
          </Dropdown.Label>
        </Dropdown.Item>
        <Dropdown.Item>
          <Dropdown.Label>
            <RadioButton
              name="sort"
              checked={sort === 'name-desc'}
              onChange={() => {
                setSort('name-desc')
                toggleDropdown()
              }}
            />
            <LetterCaseIcon />Z to A
          </Dropdown.Label>
        </Dropdown.Item>
      </Dropdown.List>
    </DropdownButton>
  )
}

function NoDraftsPanel() {
  const { drafts } = useDrafts()
  const [searchParams] = useSearchParams()

  if (drafts.length > 0 && searchParams.size > 0)
    return <NoFilteredDraftsPanel />

  return (
    <div className="flex h-full flex-col items-center justify-center p-4 text-center text-pretty">
      <IconWrapper icon={<BrainIcon />} className="mb-4" />
      <h2 className="mb-2 font-medium">Sorry, You Have No Drafts</h2>
      <p className="mb-4 text-xs text-neutral-600">
        Get started by creating your first draft
      </p>
      <CreateNewDraftModalButton
        variant="primary"
        size="small"
        leftIcon={<WritingIcon />}
      >
        Create New Draft
      </CreateNewDraftModalButton>
    </div>
  )
}

function NoFilteredDraftsPanel() {
  return (
    <div className="flex h-full flex-col items-center justify-center p-4 text-center text-pretty">
      <IconWrapper icon={<SearchIcon />} className="mb-4" />
      <h2 className="mb-2 font-medium">Sorry, No Matching Drafts</h2>
      <p className="mb-4 text-xs text-neutral-600">
        Try adjusting your filters or create a new draft
      </p>
    </div>
  )
}
