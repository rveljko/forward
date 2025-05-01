import { IMAGE_PATH } from '@utils/constants'
import { SidebarStyle } from '@utils/types'

export const sidebarStyles: SidebarStyle[] = [
  {
    id: 1,
    name: 'Transparent',
    label: 'transparent',
    imageDarkUrl: `${IMAGE_PATH}sidebar-dark-transparent.png`,
    imageLightUrl: `${IMAGE_PATH}sidebar-light-transparent.png`,
  },
  {
    id: 2,
    name: 'Sticky',
    label: 'sticky',
    imageDarkUrl: `${IMAGE_PATH}sidebar-dark-sticky.png`,
    imageLightUrl: `${IMAGE_PATH}sidebar-light-sticky.png`,
  },
  {
    id: 3,
    name: 'Floating',
    label: 'floating',
    imageDarkUrl: `${IMAGE_PATH}sidebar-dark-floating.png`,
    imageLightUrl: `${IMAGE_PATH}sidebar-light-floating.png`,
  },
]
