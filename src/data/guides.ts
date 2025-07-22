import { generateDateInPast } from '@utils/date-generators'
import { Guide } from '@utils/types'
import { v4 as uuidv4 } from 'uuid'

export const guides: Guide[] = [
  {
    id: uuidv4(),
    title: 'How to Promptly Create a New Issue',
    slug: 'how-to-promptly-create-a-new-issue',
    lastEdit: generateDateInPast(1),
    content: '',
  },
  {
    id: uuidv4(),
    title: 'How to Swiftly Change Issue Priorities',
    slug: 'how-to-swiftly-change-issue-priorities',
    lastEdit: generateDateInPast(1),
    content: '',
  },
  {
    id: uuidv4(),
    title: 'How to Effectively Sort and Filter Issues',
    slug: 'how-to-effectively-sort-and-filter-issues',
    lastEdit: generateDateInPast(2),
    content: '',
  },
  {
    id: uuidv4(),
    title: 'How to Quickly Create a New Draft',
    slug: 'how-to-quickly-create-a-new-draft',
    lastEdit: generateDateInPast(3),
    content: '',
  },
  {
    id: uuidv4(),
    title: 'How to Easily Update Draft Properties',
    slug: 'how-to-easily-update-draft-properties',
    lastEdit: generateDateInPast(3),
    content: '',
  },
  {
    id: uuidv4(),
    title: 'How to Correctly Update User Information',
    slug: 'how-to-correctly-update-user-information',
    lastEdit: generateDateInPast(3),
    content: '',
  },
  {
    id: uuidv4(),
    title: 'How to Securely Change Your Password',
    slug: 'how-to-securely-change-your-password',
    lastEdit: generateDateInPast(4),
    content: '',
  },
  {
    id: uuidv4(),
    title: 'How to Simply Change Your Preferences',
    slug: 'how-to-simply-change-your-preferences',
    lastEdit: generateDateInPast(5),
    content: '',
  },
  {
    id: uuidv4(),
    title: 'How to Seamlessly Toggle Integrations',
    slug: 'how-to-seamlessly-toggle-integrations',
    lastEdit: generateDateInPast(5),
    content: '',
  },
]
