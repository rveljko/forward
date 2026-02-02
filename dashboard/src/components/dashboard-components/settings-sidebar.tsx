import NavigationLinksList from '@dashboard-components/navigation-links-list'
import { settingsNavigationLinks } from '@data/navigation-links'
import useMediaQuery from '@hooks/use-media-query'
import LayoutSidebarLeftIcon from '@icons/layout-sidebar-left-icon'
import { useState } from 'react'

export default function SettingsSidebar() {
  const { isMediumSizeScreen } = useMediaQuery()
  const [isOpened, setIsOpened] = useState(isMediumSizeScreen)

  return (
    <aside
      className={`border-section-outline bg-section-background-color top-0 left-0 z-998 h-full shrink-0 p-4 ${isOpened ? 'absolute w-full min-w-(--settings-sidebar-opened-width) border-r-0 md:static md:w-fit md:border-r' : 'w-fit border-r'}`}
    >
      <header
        className={`mb-4 flex items-center ${isOpened ? 'justify-between' : 'justify-center'}`}
      >
        <h1
          className={`text-4xl font-semibold ${isOpened ? 'block' : 'hidden'}`}
        >
          Settings
        </h1>
        <button
          className="text-clickable group flex size-7 items-center justify-center hover:cursor-pointer"
          onClick={() => setIsOpened((prev) => !prev)}
        >
          <span className="sr-only">
            {isOpened ? 'Close Settings Sidebar' : 'Open Settings Sidebar'}
          </span>
          <LayoutSidebarLeftIcon
            className={`group-hover:[&_rect]:[clip-path:var(--clip-path)] pointer-coarse:group-active:[&_rect]:[clip-path:var(--clip-path)] ${isOpened ? '[--clip-path:polygon(0_0,0_0,0_100%,0_100%)] [&_rect]:[clip-path:polygon(0_0,100%_0,100%_100%,0_100%)]' : '[--clip-path:polygon(0_0,100%_0,100%_100%,0_100%)]'}`}
          />
        </button>
      </header>
      <nav>
        <NavigationLinksList
          navigationLinks={settingsNavigationLinks}
          hideNavigationLinkText={!isOpened}
          onClick={() =>
            !isMediumSizeScreen && isOpened && setIsOpened((prev) => !prev)
          }
        />
      </nav>
    </aside>
  )
}
