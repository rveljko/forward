import { generateDateInPast } from '@utils/date-generators'
import { Draft } from '@utils/types'
import { v4 as uuidv4 } from 'uuid'

export const drafts: Draft[] = [
  {
    id: uuidv4(),
    title: 'Offline mode support for dashboard idea',
    lastEdit: generateDateInPast(1),
  },
  {
    id: uuidv4(),
    title: 'Note for next meeting with John',
    lastEdit: generateDateInPast(2),
  },
  {
    id: uuidv4(),
    title: 'Design feedback meeting with Luna',
    lastEdit: generateDateInPast(3),
  },
  {
    id: uuidv4(),
    title: 'User onboarding and training improvements',
    lastEdit: generateDateInPast(14),
  },
  {
    id: uuidv4(),
    title: 'Performance and load testing meeting with William',
    lastEdit: generateDateInPast(18),
  },
]
