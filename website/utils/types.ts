export type IssueStatusLabel =
  | 'backlog'
  | 'todo'
  | 'in-progress'
  | 'in-review'
  | 'finished'

export type IssuePriorityLabel =
  | 'no-priority'
  | 'low'
  | 'medium'
  | 'high'
  | 'urgent'

export type IssueTagLabel =
  | 'feature'
  | 'bug'
  | 'improvement'
  | 'optimization'
  | 'blocker'

export type Issue = {
  title: string
  status: IssueStatusLabel
  priority: IssuePriorityLabel
  tag: IssueTagLabel
}

export type Task = string

export type Draft = {
  title: string
  category: 'general' | 'idea' | 'meeting' | 'inspiration'
  daysAgo: string
}
