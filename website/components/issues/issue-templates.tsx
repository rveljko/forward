export function CleanTemplate() {
  return (
    <>
      <Heading1>Add due dates and reminders to issues</Heading1>
      <Paragraph>
        Introduce deadline tracking for issues so teams can better plan upcoming
        work and stay aware of important dates
      </Paragraph>
      <Heading2>Overview</Heading2>
      <Paragraph>
        Issues can currently be prioritized and organized by workflow status,
        but there is no dedicated way to associate work with a specific deadline
      </Paragraph>
      <Heading2>Success Criteria</Heading2>
      <Paragraph>
        Users can easily identify upcoming and overdue issues without relying on
        external calendars or manually tracking deadlines
      </Paragraph>
      <Heading2>Future Considerations</Heading2>
      <Paragraph>
        Potential extensions include calendar synchronization, recurring
        reminders, and team notifications for approaching deadlines
      </Paragraph>
    </>
  )
}

export function FeatureRequestTemplate() {
  return (
    <>
      <Heading1>Add draft linking with issues and tasks</Heading1>
      <Paragraph>
        Allow users to connect drafts with related issues and tasks so notes,
        ideas, and project information can stay connected
      </Paragraph>
      <Heading2>Problem</Heading2>
      <Paragraph>
        Users often create notes before creating issues or tasks, making it
        harder to connect early ideas with actual work
      </Paragraph>
      <Heading2>Proposed Solution</Heading2>
      <Paragraph>
        Allow drafts to be linked with issues and tasks so related notes and
        project work remain connected and accessible
      </Paragraph>
      <Heading2>Additional Notes</Heading2>
      <Paragraph>
        Convert draft sections into issues automatically to make it easier for
        users to turn planned ideas into actionable work
      </Paragraph>
    </>
  )
}

export function BugReportTemplate() {
  return (
    <>
      <Heading1>Task completion state does not persist after refresh</Heading1>
      <Paragraph>
        Completed tasks sometimes unexpectedly return to an incomplete state
        after refreshing the application or reopening the page
      </Paragraph>
      <Heading2>Expected Behavior</Heading2>
      <Paragraph>
        When users check a task as completed, the completed state should be
        permanently saved and remain checked after refreshing
      </Paragraph>
      <Heading2>Actual Behavior</Heading2>
      <Paragraph>
        Some completed tasks become unchecked after refreshing the browser,
        closing and reopening the application, or switching between pages
      </Paragraph>
      <Heading2>Additional Notes</Heading2>
      <Paragraph>
        The issue may be related to database update failures, delayed
        synchronization, or frontend state not matching backend data
      </Paragraph>
    </>
  )
}

export function ImprovementTemplate() {
  return (
    <>
      <Heading1>Improve Kanban board organization and usability</Heading1>
      <Paragraph>
        Improve the issue Kanban board experience to make managing workflow
        states, organizing issues, and tracking project progress easier and more
        efficient
      </Paragraph>
      <Heading2>Current Situation</Heading2>
      <Paragraph>
        Users can currently drag issues between columns, including Backlog,
        Todo, In Progress, In Review, and Finished
      </Paragraph>
      <Heading2>Suggested Improvement</Heading2>
      <Paragraph>
        Improve the Kanban board by adding configurable card information, giving
        users more visibility and control over important issue details
      </Paragraph>
      <Heading2>Additional Notes</Heading2>
      <Paragraph>
        The improvements should maintain compatibility with the existing list
        view while allowing future enhancements to the board
      </Paragraph>
    </>
  )
}

export function BlockerTemplate() {
  return (
    <>
      <Heading1>Design approval is blocking new Kanban improvements</Heading1>
      <Paragraph>
        The implementation of the updated Kanban board cannot continue because
        the final design decisions have not been approved
      </Paragraph>
      <Heading2>What's Blocked?</Heading2>
      <Paragraph>
        Frontend development for the improved Kanban experience is currently
        paused while the final design direction remains undecided
      </Paragraph>
      <Heading2>Required Action</Heading2>
      <Paragraph>
        A final design decision needs to be made so the frontend team can
        proceed with implementation without major changes later
      </Paragraph>
      <Heading2>Additional Notes</Heading2>
      <Paragraph>
        Related materials include the existing Kanban prototype, design
        discussion notes, and user feedback from previous testing sessions
      </Paragraph>
    </>
  )
}

type ElementProps = {
  children: React.ReactNode
}

function Heading1({ children }: ElementProps) {
  return (
    <h1 className="mb-1 text-xl font-medium text-neutral-900">{children}</h1>
  )
}

function Heading2({ children }: ElementProps) {
  return (
    <h2 className="mb-1 text-lg font-medium text-neutral-900">{children}</h2>
  )
}

function Paragraph({ children }: ElementProps) {
  return (
    <p className="mb-3 text-pretty text-neutral-600 last:mb-0">{children}</p>
  )
}
