export type NavigationLink = {
  id: number
  name: string
  path: string
  icon?: () => React.JSX.Element
}

export type Integration = {
  id: number
  name: string
  description: string
  logoUrl: string
  isActive: boolean
}

export type User = {
  firstName: string
  lastName: string
  emailAddress: string
  profilePictureUrl: string
  password: string
  isTwoStepVerificationEnabled: boolean
}

export type ThemeLabel = 'system' | 'dark' | 'light'

export type Theme = {
  id: number
  name: string
  label: ThemeLabel
  imageUrl: string
}

export type SidebarStyleLabel = 'transparent' | 'sticky' | 'floating'

export type SidebarStyle = {
  id: number
  name: string
  label: SidebarStyleLabel
  imageDarkUrl: string
  imageLightUrl: string
}

export type Preferences = {
  theme: ThemeLabel
  sidebarStyle: SidebarStyleLabel
  isRightSideSidebar: boolean
  areRoundedCorners: boolean
  cornerRoundness: 'large' | 'medium' | 'small' | 'extra-small'
}

export type Question = {
  id: number
  summary: string
  details: string
}

export type UserStatus = 'active' | 'inactive'

export type Person = {
  name: string
  image: string
  status: UserStatus
}

export type Message = {
  id: string
  type: 'sender' | 'receiver'
  date: Date
  message: string
}

export type Chat = {
  id: string
  person: Person
  messages: Message[]
}
