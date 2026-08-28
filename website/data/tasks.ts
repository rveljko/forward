import { Task } from '@/utils/types'

export const tasks: Task[] = [
  {
    title: 'Prepare release notes for next deploy',
    isChecked: false,
    order: 2,
  },
  { title: 'Clean up inactive test accounts', isChecked: false, order: 3 },
  {
    title: 'Verify mobile layout on issue details page',
    isChecked: false,
    order: 4,
  },
  {
    title: 'Review and update project documentation',
    isChecked: false,
    order: 5,
  },
]
