import { howToCorrectlyUpdateUserInformationGuide } from '@data/guides/how-to-correctly-update-user-information-guide'
import { howToEasilyUpdateDraftPropertiesGuide } from '@data/guides/how-to-easily-update-draft-properties-guide'
import { howToEffectivelySortAndFilterIssuesGuide } from '@data/guides/how-to-effectively-sort-and-filter-issues-guide'
import { howToPromptlyCreateANewIssueGuide } from '@data/guides/how-to-promptly-create-a-new-issue-guide'
import { howToQuicklyCreateANewDraftGuide } from '@data/guides/how-to-quickly-create-a-new-draft-guide'
import { howToSeamlesslyToggleIntegrationsGuide } from '@data/guides/how-to-seamlessly-toggle-integrations-guide'
import { howToSecurelyChangeYourPasswordGuide } from '@data/guides/how-to-securely-change-your-password-guide'
import { howToSimplyChangeYourPreferencesGuide } from '@data/guides/how-to-simply-change-your-preferences-guide'
import { howToSwiftlyChangeIssuePrioritiesGuide } from '@data/guides/how-to-swiftly-change-issue-priorities-guide'
import { IMAGE_PATH } from '@utils/constants'
import { generateDateInPast } from '@utils/date-generators'
import { Guide } from '@utils/types'
import { v4 as uuidv4 } from 'uuid'

export const guides: Guide[] = [
  {
    id: uuidv4(),
    title: 'How to Promptly Create a New Issue',
    slug: 'how-to-promptly-create-a-new-issue',
    thumbnailDarkUrl: `${IMAGE_PATH}guide-thumbnail-dark-how-to-promptly-create-a-new-issue.png`,
    thumbnailLightUrl: `${IMAGE_PATH}guide-thumbnail-light-how-to-promptly-create-a-new-issue.png`,
    lastEdit: generateDateInPast(1),
    content: howToPromptlyCreateANewIssueGuide,
  },
  {
    id: uuidv4(),
    title: 'How to Swiftly Change Issue Priorities',
    slug: 'how-to-swiftly-change-issue-priorities',
    thumbnailDarkUrl: `${IMAGE_PATH}guide-thumbnail-dark-how-to-swiftly-change-issue-priorities.png`,
    thumbnailLightUrl: `${IMAGE_PATH}guide-thumbnail-light-how-to-swiftly-change-issue-priorities.png`,
    lastEdit: generateDateInPast(1),
    content: howToSwiftlyChangeIssuePrioritiesGuide,
  },
  {
    id: uuidv4(),
    title: 'How to Effectively Sort and Filter Issues',
    slug: 'how-to-effectively-sort-and-filter-issues',
    thumbnailDarkUrl: `${IMAGE_PATH}guide-thumbnail-dark-how-to-effectively-sort-and-filter-issues.png`,
    thumbnailLightUrl: `${IMAGE_PATH}guide-thumbnail-light-how-to-effectively-sort-and-filter-issues.png`,
    lastEdit: generateDateInPast(2),
    content: howToEffectivelySortAndFilterIssuesGuide,
  },
  {
    id: uuidv4(),
    title: 'How to Quickly Create a New Draft',
    slug: 'how-to-quickly-create-a-new-draft',
    thumbnailDarkUrl: `${IMAGE_PATH}guide-thumbnail-dark-how-to-quickly-create-a-new-draft.png`,
    thumbnailLightUrl: `${IMAGE_PATH}guide-thumbnail-light-how-to-quickly-create-a-new-draft.png`,
    lastEdit: generateDateInPast(3),
    content: howToQuicklyCreateANewDraftGuide,
  },
  {
    id: uuidv4(),
    title: 'How to Easily Update Draft Properties',
    slug: 'how-to-easily-update-draft-properties',
    thumbnailDarkUrl: `${IMAGE_PATH}guide-thumbnail-dark-how-to-easily-update-draft-properties.png`,
    thumbnailLightUrl: `${IMAGE_PATH}guide-thumbnail-light-how-to-easily-update-draft-properties.png`,
    lastEdit: generateDateInPast(3),
    content: howToEasilyUpdateDraftPropertiesGuide,
  },
  {
    id: uuidv4(),
    title: 'How to Correctly Update User Information',
    slug: 'how-to-correctly-update-user-information',
    thumbnailDarkUrl: `${IMAGE_PATH}guide-thumbnail-dark-how-to-correctly-update-user-information.png`,
    thumbnailLightUrl: `${IMAGE_PATH}guide-thumbnail-light-how-to-correctly-update-user-information.png`,
    lastEdit: generateDateInPast(3),
    content: howToCorrectlyUpdateUserInformationGuide,
  },
  {
    id: uuidv4(),
    title: 'How to Securely Change Your Password',
    slug: 'how-to-securely-change-your-password',
    thumbnailDarkUrl: `${IMAGE_PATH}guide-thumbnail-dark-how-to-securely-change-your-password.png`,
    thumbnailLightUrl: `${IMAGE_PATH}guide-thumbnail-light-how-to-securely-change-your-password.png`,
    lastEdit: generateDateInPast(4),
    content: howToSecurelyChangeYourPasswordGuide,
  },
  {
    id: uuidv4(),
    title: 'How to Simply Change Your Preferences',
    slug: 'how-to-simply-change-your-preferences',
    thumbnailDarkUrl: `${IMAGE_PATH}guide-thumbnail-dark-how-to-simply-change-your-preferences.png`,
    thumbnailLightUrl: `${IMAGE_PATH}guide-thumbnail-light-how-to-simply-change-your-preferences.png`,
    lastEdit: generateDateInPast(5),
    content: howToSimplyChangeYourPreferencesGuide,
  },
  {
    id: uuidv4(),
    title: 'How to Seamlessly Toggle Integrations',
    slug: 'how-to-seamlessly-toggle-integrations',
    thumbnailDarkUrl: `${IMAGE_PATH}guide-thumbnail-dark-how-to-seamlessly-toggle-integrations.png`,
    thumbnailLightUrl: `${IMAGE_PATH}guide-thumbnail-light-how-to-seamlessly-toggle-integrations.png`,
    lastEdit: generateDateInPast(5),
    content: howToSeamlesslyToggleIntegrationsGuide,
  },
]
