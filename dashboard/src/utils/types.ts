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
  bigLogoUrl: string
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

export type Draft = {
  id: string
  title: string
  lastEdit: Date
  content: string
}

export type IssueStatusLabel =
  | 'backlog'
  | 'todo'
  | 'in-progress'
  | 'in-review'
  | 'finished'

export type IssueStatus = {
  id: string
  name: string
  label: IssueStatusLabel
  icon: () => React.JSX.Element
}

export type IssuePriorityLabel =
  | 'no-priority'
  | 'low'
  | 'medium'
  | 'high'
  | 'urgent'

type IssuePriorityLevel = 0 | 1 | 2 | 3 | 4

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

export type IssueFilterCategory = 'status' | 'priority' | 'tag'

export type IssueFilterKey =
  | IssueStatusLabel
  | IssuePriorityLabel
  | IssueTagLabel

export type IssueSort =
  | 'manual'
  | 'date-asc'
  | 'date-desc'
  | 'priority-asc'
  | 'priority-desc'
  | 'name-asc'
  | 'name-desc'

export type Task = {
  id: string
  title: string
  isChecked: boolean
  createdAt: Date
}

export type TaskFilterCategory = 'status'

export type TaskFilterKey = 'checked' | 'unchecked'

export type TaskSort = 'date-asc' | 'date-desc' | 'name-asc' | 'name-desc'

export type Guide = {
  id: string
  title: string
  slug: string
  lastEdit: Date
  thumbnailDarkUrl: string
  thumbnailLightUrl: string
  content: string
}
