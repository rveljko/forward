import Divider from '@dashboard-components/ui/divider'
import MenuList from '@dashboard-components/ui/menu-list'
import ModalCard from '@dashboard-components/ui/modal-card'
import { secondaryNavigationLinks } from '@data/navigation-links'
import BrainIcon from '@icons/brain-icon'
import PenIcon from '@icons/pen-icon'
import SearchIcon from '@icons/search-icon'
import { cn } from '@utils/utils'

type SearchModalProps = React.ComponentPropsWithoutRef<'article'> & {
  closeModal: () => void
}

export default function SearchModal({
  closeModal,
  className,
  ...props
}: SearchModalProps) {
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
          className="text-clickable w-full p-4 pl-11 placeholder:text-neutral-400 focus:outline-0"
        />
      </header>
      <Divider />
      <div className="space-y-4 py-4">
        <div>
          <MenuList.Heading>Quick Actions</MenuList.Heading>
          <MenuList>
            <MenuList.Item leftIcon={<PenIcon />}>
              <MenuList.Button onClick={closeModal}>
                Create New Issue
              </MenuList.Button>
            </MenuList.Item>
            <MenuList.Item leftIcon={<BrainIcon />}>
              <MenuList.Button onClick={closeModal}>
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
                <MenuList.Button
                  href={`/dashboard/${path}`}
                  onClick={closeModal}
                >
                  {name}
                </MenuList.Button>
              </MenuList.Item>
            ))}
          </MenuList>
        </div>
      </div>
    </ModalCard>
  )
}
