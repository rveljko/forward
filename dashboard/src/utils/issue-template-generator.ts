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
  return `<h1>${title}</h1><p>${description}</p>`
}

function generateFeatureRequestTemplate(
  title: Issue['title'],
  description: Issue['description']
) {
  return `<h4>Feature Request</h4><h1>${title}</h1><p><strong>Description: </strong>${description}</p><p></p><h3>Problem it Solves: </h3><p></p><p></p><h3>Proposed Solution:</h3><p></p><p></p><h3>Alternatives Considered: </h3><ol><li><p></p></li><li><p></p></li><li><p></p></li></ol>`
}

function generateBugReportTemplate(
  title: Issue['title'],
  description: Issue['description']
) {
  return `<h4>Bug Report</h4><h1>${title}</h1><p><strong>Description: </strong>${description}</p><p></p><h2>Steps to reproduce:</h2><ol><li><p></p></li><li><p></p></li><li><p></p></li></ol><p></p><h3>Expected Behavior: </h3><p></p><p></p><h3>Actual Behavior:</h3><p></p><p></p><h3>Environment: </h3><ul><li><p>Browser: </p></li><li><p>OS: </p></li><li><p>App Version</p></li></ul>`
}

function generateImprovementTemplate(
  title: Issue['title'],
  description: Issue['description']
) {
  return `<h4>Improvement</h4><h1>${title}</h1><p><strong>Description: </strong>${description}</p><p></p><h3>Current Behavior: </h3><p></p><p></p><h3>Proposed Changes: </h3><ul><li><p></p></li><li><p></p></li><li><p></p></li></ul><p></p><h3>Benefits: </h3><ul><li><p></p></li><li><p></p></li><li><p></p></li></ul>`
}

function generateBlockerTemplate(
  title: Issue['title'],
  description: Issue['description']
) {
  return `<h4>Blocker</h4><h1>${title}</h1><p><strong>Description: </strong>${description}</p><p></p><h3>Impact: </h3><p></p><p></p><h3>Workarounds: </h3><ul><li><p></p></li><li><p></p></li><li><p></p></li></ul><p></p><h3>Resolution Plan:</h3><ul><li><p></p></li><li><p></p></li><li><p></p></li></ul>`
}
