import Container from '@dashboard-components/container'
import CreateNewDraftModalButton from '@dashboard-components/create-new-draft-modal-button'
import DraftCardsList from '@dashboard-components/draft-cards-list'
import Checkbox from '@dashboard-components/ui/checkbox'
import Divider from '@dashboard-components/ui/divider'
import Dropdown from '@dashboard-components/ui/dropdown'
import DropdownButton from '@dashboard-components/ui/dropdown-button'
import RadioButton from '@dashboard-components/ui/radio-button'
import { draftCategories } from '@data/draft-categories'
import useDropdown from '@hooks/use-dropdown'
import ArrowsSortIcon from '@icons/arrows-sort-icon'
import CalendarIcon from '@icons/calendar-icon'
import FilterIcon from '@icons/filter-icon'
import LetterCaseIcon from '@icons/letter-case-icon'
import PlusIcon from '@icons/plus-icon'
import { useDrafts } from '@services/contexts/drafts-context'

export default function DraftsSection() {
  const { getSortedDrafts } = useDrafts()

  return (
    <section>
      <header className="p-4">
        <h1 className="font-medium">Drafts</h1>
      </header>
      <Divider />
      <div
        role="toolbar"
        className="flex flex-wrap items-center justify-between gap-2 p-4"
      >
        <div className="flex items-center gap-2">
          <FiltersDropdownButton />
          <SortDropdownButton />
        </div>
        <CreateNewDraftModalButton
          variant="primary"
          size="small"
          leftIcon={<PlusIcon />}
        >
          Create New Draft
        </CreateNewDraftModalButton>
      </div>
      <Divider />
      <Container className="py-8 md:py-16">
        <DraftCardsList drafts={getSortedDrafts()} />
      </Container>
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
