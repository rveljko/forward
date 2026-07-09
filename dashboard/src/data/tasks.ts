import { generateDateInPast } from '@utils/date-generators'
import { Task } from '@utils/types'
import { v4 as uuidv4 } from 'uuid'

export const tasks: Task[] = [
  {
    id: uuidv4(),
    title: 'Prepare release notes for next deploy',
    isChecked: false,
    createdAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'Clean up inactive test accounts',
    isChecked: false,
    createdAt: generateDateInPast(1),
  },
  {
    id: uuidv4(),
    title: 'Verify mobile layout on issue details page',
    isChecked: false,
    createdAt: generateDateInPast(2),
  },
  {
    id: uuidv4(),
    title: 'Review and update project documentation',
    isChecked: false,
    createdAt: generateDateInPast(3),
  },
]
