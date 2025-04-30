import { IMAGE_PATH } from '@utils/constants'
import { SidebarStyle } from '@utils/types'

export const sidebarStyles: SidebarStyle[] = [
  {
    id: 1,
    name: 'Transparent',
    label: 'transparent',
    imageUrl: `${IMAGE_PATH}sidebar-transparent.png`,
  },
  {
    id: 2,
    name: 'Sticky',
    label: 'sticky',
    imageUrl: `${IMAGE_PATH}sidebar-sticky.png`,
  },
  {
    id: 3,
    name: 'Floating',
    label: 'floating',
    imageUrl: `${IMAGE_PATH}sidebar-floating.png`,
  },
]
