import { howToChangeIssuePrioritiesGuide } from '@data/guides/how-to-change-issue-priorities-guide'
import { howToChangeYourPasswordGuide } from '@data/guides/how-to-change-your-password-guide'
import { howToChangeYourPreferencesGuide } from '@data/guides/how-to-change-your-preferences-guide'
import { howToCreateANewDraftGuide } from '@data/guides/how-to-create-a-new-draft-guide'
import { howToCreateANewIssueGuide } from '@data/guides/how-to-create-a-new-issue-guide'
import { howToSortAndFilterIssuesGuide } from '@data/guides/how-to-sort-and-filter-issues-guide'
import { howToToggleIntegrationsGuide } from '@data/guides/how-to-toggle-integrations-guide'
import { howToUpdateDraftPropertiesGuide } from '@data/guides/how-to-update-draft-properties-guide'
import { howToUpdateUserInformationGuide } from '@data/guides/how-to-update-user-information-guide'
import { IMAGE_PATH } from '@utils/constants'
import { generateDateInPast } from '@utils/date-generators'
import { Guide } from '@utils/types'
import { v4 as uuidv4 } from 'uuid'

export const guides: Guide[] = [
  {
    id: uuidv4(),
    title: 'How to Create a New Issue',
    slug: 'how-to-create-a-new-issue',
    thumbnailUrl: `${IMAGE_PATH}guide-thumbnail-light-how-to-create-a-new-issue.png`,
    lastEdit: generateDateInPast(1),
    tags: [{ text: 'Issues', color: 'cyan' }],
    content: howToCreateANewIssueGuide,
  },
  {
    id: uuidv4(),
    title: 'How to Change Issue Priorities',
    slug: 'how-to-change-issue-priorities',
    thumbnailUrl: `${IMAGE_PATH}guide-thumbnail-light-how-to-change-issue-priorities.png`,
    lastEdit: generateDateInPast(1),
    tags: [{ text: 'Issues', color: 'cyan' }],
    content: howToChangeIssuePrioritiesGuide,
  },
  {
    id: uuidv4(),
    title: 'How to Sort and Filter Issues',
    slug: 'how-to-sort-and-filter-issues',
    thumbnailUrl: `${IMAGE_PATH}guide-thumbnail-light-how-to-sort-and-filter-issues.png`,
    lastEdit: generateDateInPast(2),
    tags: [{ text: 'Issues', color: 'cyan' }],
    content: howToSortAndFilterIssuesGuide,
  },
  {
    id: uuidv4(),
    title: 'How to Create a New Draft',
    slug: 'how-to-create-a-new-draft',
    thumbnailUrl: `${IMAGE_PATH}guide-thumbnail-light-how-to-create-a-new-draft.png`,
    lastEdit: generateDateInPast(3),
    tags: [{ text: 'Drafts', color: 'violet' }],
    content: howToCreateANewDraftGuide,
  },
  {
    id: uuidv4(),
    title: 'How to Update Draft Properties',
    slug: 'how-to-update-draft-properties',
    thumbnailUrl: `${IMAGE_PATH}guide-thumbnail-light-how-to-update-draft-properties.png`,
    lastEdit: generateDateInPast(3),
    tags: [{ text: 'Drafts', color: 'violet' }],
    content: howToUpdateDraftPropertiesGuide,
  },
  {
    id: uuidv4(),
    title: 'How to Update User Information',
    slug: 'how-to-update-user-information',
    thumbnailUrl: `${IMAGE_PATH}guide-thumbnail-light-how-to-update-user-information.png`,
    lastEdit: generateDateInPast(3),
    tags: [
      { text: 'Settings', color: 'sky' },
      { text: 'Profile', color: 'pink' },
    ],
    content: howToUpdateUserInformationGuide,
  },
  {
    id: uuidv4(),
    title: 'How to Change Your Password',
    slug: 'how-to-change-your-password',
    thumbnailUrl: `${IMAGE_PATH}guide-thumbnail-light-how-to-change-your-password.png`,
    lastEdit: generateDateInPast(4),
    tags: [
      { text: 'Settings', color: 'sky' },
      { text: 'Security', color: 'orange' },
    ],
    content: howToChangeYourPasswordGuide,
  },
  {
    id: uuidv4(),
    title: 'How to Change Your Preferences',
    slug: 'how-to-change-your-preferences',
    thumbnailUrl: `${IMAGE_PATH}guide-thumbnail-light-how-to-change-your-preferences.png`,
    lastEdit: generateDateInPast(5),
    tags: [
      { text: 'Settings', color: 'sky' },
      { text: 'Preferences', color: 'green' },
    ],
    content: howToChangeYourPreferencesGuide,
  },
  {
    id: uuidv4(),
    title: 'How to Toggle Integrations',
    slug: 'how-to-toggle-integrations',
    thumbnailUrl: `${IMAGE_PATH}guide-thumbnail-light-how-to-toggle-integrations.png`,
    lastEdit: generateDateInPast(5),
    tags: [
      { text: 'Settings', color: 'sky' },
      { text: 'Integrations', color: 'rose' },
    ],
    content: howToToggleIntegrationsGuide,
  },
]
