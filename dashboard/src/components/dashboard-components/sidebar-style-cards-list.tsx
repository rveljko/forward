import SidebarStyleCard from '@dashboard-components/sidebar-style-card'
import { SidebarStyle } from '@utils/types'

type SidebarStyleCardsListProps = {
  sidebarStyles: SidebarStyle[]
}

export default function SidebarStyleCardsList({
  sidebarStyles,
}: SidebarStyleCardsListProps) {
  return (
    <ul className="flex flex-wrap gap-2">
      {sidebarStyles.map((sidebarStyle) => (
        <li key={sidebarStyle.id}>
          <SidebarStyleCard sidebarStyle={sidebarStyle} />
        </li>
      ))}
    </ul>
  )
}
