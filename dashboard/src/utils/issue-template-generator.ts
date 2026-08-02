import { Issue } from '@utils/types'

export function generateIssueTemplate(
  template: Issue['template'],
  title: Issue['title'],
  description: Issue['description']
) {
  switch (template) {
    case 'clean':
      return generateCleanTemplate(title, description)
    case 'feature-request':
      return generateFeatureRequestTemplate(title, description)
    case 'bug-report':
      return generateBugReportTemplate(title, description)
    case 'improvement':
      return generateImprovementTemplate(title, description)
    case 'blocker':
      return generateBlockerTemplate(title, description)
  }
}

function generateCleanTemplate(
  title: Issue['title'],
  description: Issue['description']
) {
  return `<h1>${title}</h1><p></p><p>${description}</p>`
}

function generateFeatureRequestTemplate(
  title: Issue['title'],
  description: Issue['description']
) {
  return `<h1>${title}</h1><p></p><p>${description}</p><p></p><h3>Problem</h3><p>What problem are you trying to solve? Who is affected?</p><p></p><h3>Proposed Solution</h3><p>Describe how you think this should work.</p><p></p><h3>Additional Notes</h3><p>Mockups, examples, links, related issues, or anything else that might help.</p>`
}

function generateBugReportTemplate(
  title: Issue['title'],
  description: Issue['description']
) {
  return `<h1>${title}</h1><p></p><p>${description}</p><p></p><h3>Expected Behavior</h3><p>What should happen?</p><p></p><h3>Actual Behavior</h3><p>What actually happens?</p><p></p><h3>Steps to Reproduce</h3><ol><li>First step</li><li>Second step</li><li>Third step</li></ol><p></p><h3>Environment</h3><ul><li><strong>Version:</strong> Add version number</li><li><strong>Browser/App:</strong> Add browser or app version</li><li><strong>Operating System:</strong> Add operating system</li><li><strong>Device:</strong> Add device information</li></ul><p></p><h3>Additional Notes</h3><p>Screenshots, logs, recordings, or any other helpful information.</p>`
}

function generateImprovementTemplate(
  title: Issue['title'],
  description: Issue['description']
) {
  return `<h1>${title}</h1><p></p><p>${description}</p><p></p><h3>Current Situation</h3><p>How does it work today?</p><p></p><h3>Suggested Improvement</h3><p>What would you like to change?</p><p></p><h3>Expected Benefit</h3><p>Why is this improvement valuable?</p><p></p><h3>Additional Notes</h3><p>Examples, mockups, links, or related issues.</p>`
}

function generateBlockerTemplate(
  title: Issue['title'],
  description: Issue['description']
) {
  return `<h1>${title}</h1><p></p><p>${description}</p><p></p><h3>What's Blocked?</h3><p>What work cannot continue?</p><p></p><h3>Cause</h3><p>What is causing the blocker?</p><p></p><h3>Impact</h3><p>Who or what is affected?</p><p></p><h3>Required Action</h3><p>What needs to happen before work can continue?</p><p></p><h3>Additional Notes</h3><p>Links, screenshots, logs, dependencies, or other context.</p>`
}
