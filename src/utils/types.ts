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
  password: string
  isTwoStepVerificationEnabled: boolean
}
