import { generateDateInPast } from '@utils/date-generators'
import { Guide } from '@utils/types'
import { v4 as uuidv4 } from 'uuid'

export const guides: Guide[] = [
  {
    id: uuidv4(),
    title: 'How to Promptly Create a New Issue',
    lastEdit: generateDateInPast(1),
    content: '',
  },
  {
    id: uuidv4(),
    title: 'How to Swiftly Change Issue Priorities',
    lastEdit: generateDateInPast(1),
    content: '',
  },
  {
    id: uuidv4(),
    title: 'How to Effectively Sort and Filter Issues',
    lastEdit: generateDateInPast(2),
    content: '',
  },
  {
    id: uuidv4(),
    title: 'How to Quickly Create a New Draft',
    lastEdit: generateDateInPast(3),
    content: '',
  },
  {
    id: uuidv4(),
    title: 'How to Easily Update Draft Properties',
    lastEdit: generateDateInPast(3),
    content: '',
  },
  {
    id: uuidv4(),
    title: 'How to Correctly Update User Information',
    lastEdit: generateDateInPast(3),
    content: '',
  },
  {
    id: uuidv4(),
    title: 'How to Securely Change Your Password',
    lastEdit: generateDateInPast(4),
    content: '',
  },
  {
    id: uuidv4(),
    title: 'How to Simply Change Your Preferences',
    lastEdit: generateDateInPast(5),
    content: '',
  },
  {
    id: uuidv4(),
    title: 'How to Seamlessly Toggle Integrations',
    lastEdit: generateDateInPast(5),
    content: '',
  },
]
