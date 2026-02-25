export type IssueStatusLabel =
  | 'backlog'
  | 'todo'
  | 'in-progress'
  | 'in-review'
  | 'finished'

export type IssuePriorityLabel = 'no-priority' | 'medium' | 'high'

export type IssueTagLabel = 'design' | 'development'

export type Issue = {
  title: string
  status: IssueStatusLabel
  priority: IssuePriorityLabel
  tag: IssueTagLabel
}

export type Task = string
