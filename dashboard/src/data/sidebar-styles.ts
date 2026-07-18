import { IMAGE_PATH } from '@utils/constants'
import { SidebarStyle } from '@utils/types'

export const sidebarStyles: SidebarStyle[] = [
  {
    id: 1,
    name: 'Transparent',
    label: 'transparent',
    imageUrl: `${IMAGE_PATH}sidebar-light-transparent.png`,
  },
  {
    id: 2,
    name: 'Sticky',
    label: 'sticky',
    imageUrl: `${IMAGE_PATH}sidebar-light-sticky.png`,
  },
  {
    id: 3,
    name: 'Floating',
    label: 'floating',
    imageUrl: `${IMAGE_PATH}sidebar-light-floating.png`,
  },
]
