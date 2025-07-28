import Divider from '@dashboard-components/ui/divider'
import MenuList from '@dashboard-components/ui/menu-list'
import { secondaryNavigationLinks } from '@data/navigation-links'
import BrainIcon from '@icons/brain-icon'
import PenIcon from '@icons/pen-icon'
import SearchIcon from '@icons/search-icon'
import BentoCard from '@landing-page-components/ui/bento-card'
import { usePreferences } from '@services/contexts/preferences-context'
import { useEffect, useRef, useState } from 'react'

export default function SearchBentoCard() {
  const { getRemCornerRoundness } = usePreferences()
  const [isOpened, setIsOpened] = useState(false)
  const [search, setSearch] = useState('')
  const ref = useRef<HTMLDivElement>(null)

  function handleOnClick(e: MouseEvent) {
    if (ref.current && !e.composedPath().includes(ref.current))
      setIsOpened(false)
  }

  function handleOnKeyDown(e: KeyboardEvent) {
    if (e.code === 'Escape') setIsOpened(false)
  }

  useEffect(() => {
    if (!isOpened) return
    document.body.addEventListener('click', handleOnClick)
    document.body.addEventListener('keydown', handleOnKeyDown)

    return () => {
      document.body.removeEventListener('click', handleOnClick)
      document.body.removeEventListener('keydown', handleOnKeyDown)
    }
  }, [isOpened])

  return (
    <BentoCard>
      <div className="relative h-full" ref={ref}>
        <div
          className={`transition-opacity duration-400 ${isOpened ? 'opacity-0' : ''}`}
        >
          <BentoCard.Heading>Powerful Navigation Tool</BentoCard.Heading>
          <BentoCard.Paragraph>
            Quickly navigate and execute commands from anywhere within the
            application
          </BentoCard.Paragraph>
        </div>
        <div
          style={{ borderRadius: getRemCornerRoundness() }}
          className={`bg-search-modal-background border-section-outline absolute top-0 left-0 w-full overflow-hidden border transition-all duration-400 ${isOpened ? 'rotate-0' : 'translate-y-1/2 rotate-4 md:translate-x-1/2'}`}
          onClick={() => {
            if (isOpened) return
            setIsOpened(true)
          }}
        >
          <div className="relative">
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
          </div>
          <Divider />
          <MenuList className="py-3">
            <MenuList.Item leftIcon={<PenIcon />}>
              <MenuList.Button onClick={() => setIsOpened((prev) => !prev)}>
                Create New Issue
              </MenuList.Button>
            </MenuList.Item>
            <MenuList.Item leftIcon={<BrainIcon />}>
              <MenuList.Button onClick={() => setIsOpened((prev) => !prev)}>
                Create New Draft
              </MenuList.Button>
            </MenuList.Item>
            {secondaryNavigationLinks.map(({ id, name, icon: Icon }) => (
              <MenuList.Item key={id} leftIcon={Icon && <Icon />}>
                <MenuList.Button onClick={() => setIsOpened((prev) => !prev)}>
                  {name}
                </MenuList.Button>
              </MenuList.Item>
            ))}
          </MenuList>
        </div>
      </div>
    </BentoCard>
  )
}
