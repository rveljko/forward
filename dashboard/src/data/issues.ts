import { generateDateInPast } from '@utils/date-generators'
import { Issue } from '@utils/types'
import { v4 as uuidv4 } from 'uuid'

export const issues: Issue[] = [
  {
    id: uuidv4(),
    title: 'Add draft linking with issues and tasks',
    description: 'Add draft linking with issues and tasks',
    status: 'backlog',
    priority: 'low',
    tag: 'feature',
    template: 'feature-request',
    createdAt: generateDateInPast(4),
    content:
      '<h1>Add draft linking with issues and tasks</h1><p></p><p>Allow users to connect drafts with related issues and tasks so notes, ideas, and project information can stay connected</p><p></p><p>Drafts are currently useful for storing meeting notes, ideas, and inspiration, but they exist separately from the actual work users are managing.</p><p></p><h3>Problem</h3><p>Users often create notes before creating issues or tasks. For example:</p><ul><li><p>A product manager writes down feature ideas during a meeting</p></li><li><p>A developer documents technical considerations before creating a bug issue</p></li><li><p>A team creates planning notes before starting sprint work</p></li></ul><p></p><p>Currently, users need to manually copy information between drafts, issues, and tasks</p><p></p><p>This creates several problems:</p><ul><li><p>Important context can be lost</p></li><li><p>Users need to search multiple areas to find related information</p></li><li><p>Notes and implementation work become disconnected</p></li><li><p>Teams may create duplicate information</p></li></ul><p></p><h3>Proposed Solution</h3><p>Allow drafts to be linked with issues and tasks.</p><p></p><p>Users should be able to:</p><ul><li><p>Attach one or more issues to a draft</p></li><li><p>Attach tasks to drafts</p></li><li><p>Open related items directly from the draft</p></li><li><p>View connected drafts from inside issues and tasks</p></li></ul><p></p><h3>Additional Notes</h3><p>Possible future improvements:</p><ul><li><p>Convert a draft section into an issue automatically</p></li><li><p>Create tasks from highlighted text</p></li><li><p>Suggest related issues while writing drafts</p></li><li><p>Add backlinks between all content types</p></li></ul><p></p>',
  },
  {
    id: uuidv4(),
    title: 'Improve Kanban board organization and usability',
    description:
      'Improve the issue Kanban board experience to make managing workflow states easier and more efficient',
    status: 'todo',
    priority: 'high',
    tag: 'improvement',
    template: 'improvement',
    createdAt: generateDateInPast(4),
    content:
      '<h1>Improve Kanban board organization and usability</h1><p></p><p>Improve the issue Kanban board experience to make managing workflow states easier and more efficient</p><p></p><p>The Kanban view is one of the main ways users interact with issues, so it should provide a smooth experience when moving, organizing, and reviewing work</p><p></p><h3>Current Situation</h3><p>Users can currently drag issues between columns:</p><ul><li><p>Backlog</p></li><li><p>Todo</p></li><li><p>In Progress</p></li><li><p>In Review</p></li><li><p>Finished</p></li></ul><p></p><p>Moving an issue updates its status automatically</p><p></p><h3>Suggested Improvement</h3><p>Improve the Kanban board by adding:</p><ul><li><p>Configurable card information</p></li><li><p>Option to show priority badges</p></li><li><p>Visible issue tags</p></li><li><p>Last updated information</p></li><li><p>Quick actions directly from cards</p></li></ul><p></p><h3>Expected Benefit</h3><p>A better Kanban experience will help teams understand project progress faster and reduce the time spent opening individual issues</p><p></p><h3>Additional Notes</h3><p>The improvements should maintain compatibility with the existing list view</p><p></p><p>Future possibilities:</p><ul><li><p>Custom Kanban columns</p></li><li><p>Swimlanes by priority or tag</p></li><li><p>Board sharing options</p></li></ul><p></p>',
  },
  {
    id: uuidv4(),
    title: 'Add comments and discussions inside issues',
    description:
      'Add a commenting system that allows users to discuss issues directly inside the issue page without using external communication tools',
    status: 'todo',
    priority: 'medium',
    tag: 'feature',
    template: 'feature-request',
    createdAt: generateDateInPast(4),
    content:
      '<h1>Add comments and discussions inside issues</h1><p></p><p>Add a commenting system that allows users to discuss issues directly inside the issue page without using external communication tools</p><p></p><p>Comments should become part of the issue context and remain available throughout the entire project lifecycle</p><p></p><h3>Problem</h3><p>Issue descriptions contain requirements, but discussions about those requirements often happen somewhere else</p><p></p><p>A developer opening an older issue may understand what needs to be done but miss important decisions made during conversations</p><p></p><h3>Proposed Solution</h3><p>Add a comments section inside every issue</p><p></p><p>Users should be able to:</p><ul><li><p>Create comments</p></li><li><p>Edit their own comments</p></li><li><p>Delete comments</p></li><li><p>Reply to existing comments</p></li><li><p>Mention other users</p></li><li><p>View comment timestamps</p></li></ul><p></p><h3>Additional Notes</h3><p>Future improvements:</p><ul><li><p>Comment reactions</p></li><li><p>File attachments</p></li><li><p>Comment notifications</p></li><li><p>Ability to convert comments into tasks</p></li><li><p>Pin important comments</p></li></ul><p></p><p>Comments should follow the same permission rules as the issue itself</p>',
  },
  {
    id: uuidv4(),
    title: 'Add issue activity history timeline',
    description:
      'Create a complete activity timeline inside every issue that records important actions and changes throughout the issue lifecycle. The timeline should provide a clear history of what happened, who made changes, and when those changes occurred',
    status: 'todo',
    priority: 'low',
    tag: 'feature',
    template: 'feature-request',
    createdAt: generateDateInPast(3),
    content:
      '<h1>Add issue activity history timeline</h1><p></p><p>Create a complete activity timeline inside every issue that records important actions and changes throughout the issue lifecycle. The timeline should provide a clear history of what happened, who made changes, and when those changes occurred</p><p></p><p>This will help teams understand issue progress without relying on external communication channels or manually documenting every update</p><p></p><h3>Problem</h3><p>When multiple team members work on the same issue, important changes can become difficult to track. A developer may update the status, a product manager may change the priority, and another team member may update the description or tags</p><p></p><p>Currently, users only see the current state of an issue and do not have a historical view of how it reached that state</p><p></p><h3>Proposed Solution</h3><p>Add an activity timeline section inside every issue</p><p></p><p>Each activity item should display:</p><ul><li><p>User who performed the action</p></li><li><p>Date and exact time</p></li><li><p>Type of action performed</p></li></ul><p></p><p></p><p>The timeline should appear below the rich text editor or inside a separate activity tab</p><p></p><h3>Additional Notes</h3><p>The activity history should be available for all issue views including:</p><ul><li><p>Kanban view</p></li><li><p>List view</p></li><li><p>Search results</p></li></ul>',
  },
  {
    id: uuidv4(),
    title: 'Improve issue filtering and filter management',
    description:
      'Improve the current issue filtering system to make finding specific issues faster when working with large projects',
    status: 'in-progress',
    priority: 'high',
    tag: 'improvement',
    template: 'improvement',
    createdAt: generateDateInPast(4),
    content:
      '<h1>Improve issue filtering and filter management</h1><p></p><p>Improve the current issue filtering system to make finding specific issues faster when working with large projects</p><p></p><p>The current filtering system supports statuses, priorities, and tags, but users managing hundreds of issues need a more efficient way to combine and reuse filters</p><p></p><h3>Current Situation</h3><p>Users can filter issues using:</p><ul><li><p>Status</p></li><li><p>Priority</p></li><li><p>Tags</p></li></ul><p></p><p>However, users must manually select filters every time they return to the issue board</p><p></p><h3>Suggested Improvement</h3><p>Improve filtering by adding:</p><ul><li><p>Visible active filter indicators</p></li><li><p>Clear all filters button</p></li><li><p>Multiple selections inside each filter category</p></li><li><p>Saved filter combinations</p></li><li><p>Filter persistence when switching between list and kanban views</p></li></ul><p></p><h3>Expected Benefit</h3><p>Users will spend less time searching manually and more time managing work</p><p></p><p>This will especially help:</p><ul><li><p>Product managers reviewing priorities</p></li><li><p>Developers checking current work</p></li><li><p>Teams preparing sprint planning sessions</p></li></ul><p></p><h3>Additional Notes</h3><p>Saved filters could later become shareable between team members</p>',
  },
  {
    id: uuidv4(),
    title: 'Add reusable issue templates',
    description:
      'Allow users and teams to create reusable templates for common issue types to make issue creation faster and more consistent',
    status: 'in-progress',
    priority: 'medium',
    tag: 'feature',
    template: 'feature-request',
    createdAt: generateDateInPast(3),
    content:
      '<h1>Add reusable issue templates</h1><p></p><p>Allow users and teams to create reusable templates for common issue types to make issue creation faster and more consistent</p><p></p><p>Many teams create similar issues repeatedly, such as bug reports, feature requests, technical improvements, and documentation tasks. Templates would reduce repetitive work and improve issue quality</p><p></p><h3>Problem</h3><p>Creating issues manually requires users to repeatedly enter the same structure, information, and formatting</p><p></p><h3>Proposed Solution</h3><p>Create an issue template system where users can define predefined issue structures</p><p></p><p>Users should be able to create templates containing:</p><ul><li><p>Default issue title</p></li><li><p>Default description content</p></li><li><p>Rich text formatting</p></li><li><p>Default status</p></li><li><p>Default priority</p></li><li><p>Default tags</p></li></ul><p></p><p>When creating a new issue, users should have an option to select a template before entering details.</p><p></p><h3>Additional Notes</h3><p>Templates could include:</p><ul><li><p>Personal templates</p></li><li><p>Workspace templates</p></li><li><p>Team shared templates</p></li></ul><p></p>',
  },
  {
    id: uuidv4(),
    title: 'Task completion state does not persist after refresh',
    description:
      'Completed tasks sometimes return to an incomplete state after refreshing the application',
    status: 'in-progress',
    priority: 'medium',
    tag: 'bug',
    template: 'bug-report',
    createdAt: generateDateInPast(5),
    content:
      '<h1>Task completion state does not persist after refresh</h1><p></p><p>Completed tasks sometimes return to an incomplete state after refreshing the application</p><p></p><h3>Expected Behavior</h3><p>When users check a task as completed, the completed state should be permanently saved</p><p></p><p>Refreshing the page should keep the task checked</p><p></p><h3>Actual Behavior</h3><p>Some completed tasks become unchecked after:</p><ul><li><p>Refreshing the browser</p></li><li><p>Closing and reopening the application</p></li><li><p>Switching between pages</p></li></ul><p></p><h3>Steps to Reproduce</h3><ol><li><p>Open the tasks section</p></li><li><p>Create a new task</p></li><li><p>Mark the task as completed</p></li><li><p>Refresh the application</p></li><li><p>Notice the task is incomplete again</p></li></ol><p></p><h3>Environment</h3><ul><li><p><strong>Version:</strong> 1.0.0</p></li><li><p><strong>Browser/App:</strong> Firefox 128</p></li><li><p><strong>Operating System:</strong> Windows 11</p></li><li><p><strong>Device:</strong> Laptop</p></li></ul><p></p><h3>Additional Notes</h3><p>The issue may be related to:</p><ul><li><p>Database update failures</p></li><li><p>Delayed synchronization</p></li><li><p>Frontend state not matching backend data</p></li></ul><p></p><p>Logs should be reviewed during reproduction</p>',
  },
  {
    id: uuidv4(),
    title: 'Design approval is blocking new Kanban improvements',
    description:
      'The implementation of the updated kanban board cannot continue because the final design decisions have not been approved',
    status: 'in-review',
    priority: 'high',
    tag: 'blocker',
    template: 'blocker',
    createdAt: generateDateInPast(6),
    content:
      "<h1>Design approval is blocking new Kanban improvements</h1><p></p><p>The implementation of the updated Kanban board cannot continue because the final design decisions have not been approved</p><p></p><h3>What's Blocked?</h3><p>Frontend development for the improved Kanban experience is currently paused</p><p></p><p>The team cannot finalize:</p><ul><li><p>Issue card layout</p></li><li><p>Drag-and-drop interactions</p></li><li><p>Filter placement</p></li><li><p>Column customization options</p></li></ul><p></p><p>Developers need the final design before completing the implementation</p><p></p><h3>Cause</h3><p>The design team has multiple possible solutions but the final direction has not been selected</p><p></p><p>Open questions include:</p><ul><li><p>Which issue information should appear on cards?</p></li><li><p>How should priority indicators look?</p></li><li><p>Should tags be displayed permanently or only on hover?</p></li><li><p>How should mobile behavior work?</p></li></ul><p></p><p>Without these decisions, development risks creating UI that requires major changes later</p><p></p><h3>Impact</h3><p>Affected areas:</p><ul><li><p>Kanban improvements</p></li><li><p>Issue card redesign</p></li><li><p>User interface consistency</p></li></ul><p></p><p>The frontend team cannot complete assigned tasks, and the sprint milestone may be delayed</p><p></p><p>Product planning is also affected because upcoming improvements depend on the new board structure</p><p></p><h3>Required Action</h3><p>A final design decision needs to be made</p><p></p><p>Required actions:</p><ul><li><p>Review current design options</p></li><li><p>Collect feedback from product and engineering</p></li><li><p>Select final approach</p></li><li><p>Provide updated design files</p></li><li><p>Confirm implementation requirements</p></li></ul><p></p><h3>Additional Notes</h3><p>Related materials:</p><ul><li><p>Existing Kanban prototype</p></li><li><p>Design discussion notes</p></li><li><p>User feedback from previous testing sessions</p></li></ul><p></p><p>Future improvements should consider:</p><ul><li><p>Accessibility</p></li><li><p>Different screen sizes</p></li><li><p>Large project boards</p></li></ul><p></p>",
  },
  {
    id: uuidv4(),
    title: 'Deleted issues remain visible in search results',
    description:
      'Deleted issues continue appearing inside the global search modal',
    status: 'in-review',
    priority: 'medium',
    tag: 'bug',
    template: 'bug-report',
    createdAt: generateDateInPast(4),
    content:
      '<h1>Deleted issues remain visible in search results</h1><p></p><p>Deleted issues continue appearing inside the global search modal</p><p></p><h3>Expected Behavior</h3><p>When an issue is deleted, it should no longer appear in search results unless there is a dedicated restore or archive section</p><p></p><h3>Actual Behavior</h3><p>Deleted issues remain searchable and users can open outdated records</p><p></p><p>This creates confusion because users may interact with content that should no longer exist</p><p></p><h3>Steps to Reproduce</h3><ol><li><p>Create a new issue</p></li><li><p>Delete the issue</p></li><li><p>Open the global search modal</p></li><li><p>Search for the deleted issue title</p></li><li><p>Notice that the deleted issue still appears</p></li></ol><p></p><h3>Environment</h3><ul><li><p><strong>Version:</strong> 1.0.0</p></li><li><p><strong>Browser/App:</strong> Safari 17</p></li><li><p><strong>Operating System:</strong> macOS Sonoma</p></li><li><p><strong>Device:</strong> MacBook Pro</p></li></ul><p></p><h3>Additional Notes</h3><p>Possible solutions:</p><ul><li><p>Remove deleted records from search indexing</p></li><li><p>Add a deleted status</p></li><li><p>Create a trash section where users can restore items</p></li></ul><p></p><p>The same behavior should be reviewed for deleted tasks and drafts</p>',
  },
  {
    id: uuidv4(),
    title: 'Add issue templates for faster issue creation',
    description:
      'Allow users to create reusable issue templates that automatically fill in predefined titles, descriptions, tags, priorities, and statuses when creating new issues',
    status: 'finished',
    priority: 'urgent',
    tag: 'feature',
    template: 'feature-request',
    createdAt: generateDateInPast(3),
    content:
      '<h1>Add issue templates for faster issue creation</h1><p></p><p>Allow users to create reusable issue templates that automatically fill in predefined titles, descriptions, tags, priorities, and statuses when creating new issues</p><p></p><h3>Problem</h3><p>Creating similar issues repeatedly requires users to manually enter the same information every time. Teams often follow common formats for bugs, feature requests, technical tasks, and improvements, which makes issue creation slower and inconsistent</p><p></p><p>This affects users who create many issues regularly and teams that need standardized issue documentation</p><p></p><h3>Proposed Solution</h3><p>Add a template system where users can create and manage custom issue templates</p><p></p><p>Users should be able to:</p><ul><li><p>Create templates with predefined title structures</p></li><li><p>Add default descriptions using the rich text editor</p></li><li><p>Set default status, priority, and tags</p></li><li><p>Select a template when creating a new issue</p></li><li><p>Edit the generated issue before saving</p></li></ul><p></p><p>Include default templates for common use cases such as bug reports, feature requests, and improvements</p><p></p><h3>Additional Notes</h3><p>Mockups, examples, links, related issues, or anything else that might help</p><p></p><p>Templates could be managed from preferences or workspace settings</p>',
  },
]
