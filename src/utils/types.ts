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

export type CornerRoundnessLabel = 'large' | 'medium' | 'small' | 'extra-small'

export type CornerRoundness = {
  id: string
  name: string
  label: CornerRoundnessLabel
  value: number
}

export type Preferences = {
  theme: ThemeLabel
  sidebarStyle: SidebarStyleLabel
  isRightSideSidebar: boolean
  areRoundedCorners: boolean
  cornerRoundness: CornerRoundnessLabel
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
  lastActiveDate: Date
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

export type Draft = {
  id: string
  title: string
  lastEdit: Date
  content: string
}

export type IssueStatusLabel = 'todo' | 'in-progress' | 'finished'

export type IssueStatus = {
  id: string
  name: string
  label: IssueStatusLabel
  icon: () => React.JSX.Element
}

export type IssuePriorityLabel = 'low' | 'medium' | 'high'

type IssuePriorityLevel = 1 | 2 | 3

export type IssuePriority = {
  id: string
  name: string
  label: IssuePriorityLabel
  level: IssuePriorityLevel
  icon: () => React.JSX.Element
}

export type IssueTagLabel = 'design' | 'development' | 'testing'

export type IssueTag = {
  id: string
  name: string
  label: IssueTagLabel
  icon: () => React.JSX.Element
}

export type Issue = {
  id: string
  title: string
  description?: string
  status: IssueStatusLabel
  priority: IssuePriorityLabel
  tag: IssueTagLabel
  createdAt: Date
  content: string
}
