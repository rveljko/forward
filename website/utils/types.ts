export type IssueStatusLabel = 'backlog' | 'todo' | 'in-progress' | 'in-review'

export type IssuePriorityLabel = 'medium' | 'high'

export type IssueTagLabel = 'design' | 'development'

export type Issue = {
  title: string
  status: IssueStatusLabel
  priority: IssuePriorityLabel
  tag: IssueTagLabel
}
