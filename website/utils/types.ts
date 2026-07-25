export type IssueStatusLabel =
  | 'backlog'
  | 'todo'
  | 'in-progress'
  | 'in-review'
  | 'finished'

export type IssuePriorityLabel = 'no-priority' | 'medium' | 'high'

export type IssueTagLabel = 'bug' | 'improvement' | 'optimization'

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
