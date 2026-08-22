import { motion, Variants } from 'motion/react'

export function GeneralCategory() {
  return (
    <>
      <Heading1>Sprint planning checklist and reminders</Heading1>
      <Paragraph>
        Prepare the team for the upcoming sprint by reviewing priorities,
        confirming commitments, and ensuring everyone understands the goals and
        outcomes
      </Paragraph>
      <Heading2>Sprint Preparation</Heading2>
      <Paragraph>
        Review prioritized backlog items to confirm they are ready for
        development with clear requirements and acceptance criteria before
        sprint begins
      </Paragraph>
      <Heading2>Team Alignment</Heading2>
      <Paragraph>
        Confirm team availability, planned vacations, and schedule changes that
        could impact delivery during the sprint and adjust commitments
        accordingly
      </Paragraph>
      <Heading2>Tracking Progress</Heading2>
      <Paragraph>
        Monitor sprint progress regularly and keep issue statuses updated as
        work moves forward to identify delays and blockers early enough
      </Paragraph>
      <Heading2>Reminders</Heading2>
      <Paragraph>
        Keep sprint scope realistic and avoid adding unnecessary work after
        planning is complete so the team can focus on priorities
      </Paragraph>
    </>
  )
}

export function IdeaCategory() {
  return (
    <>
      <Heading1>Offline mode support for dashboard idea</Heading1>
      <Paragraph>
        Enable users to access and interact with the dashboard even when they
        have no internet connection
      </Paragraph>
      <Heading2>Key Points to Consider</Heading2>
      <Paragraph>
        Cache essential dashboard data locally so users can view projects,
        issues, and updates without an internet connection when working offline
      </Paragraph>
      <Heading2>Implementation Ideas</Heading2>
      <Paragraph>
        Use IndexedDB or localStorage to store essential data locally and make
        it available when the dashboard is accessed without connectivity
      </Paragraph>
      <Heading2>Next Steps</Heading2>
      <Paragraph>
        Research best practices for building offline-first web applications and
        identify approaches that fit the dashboard's technical and user
        requirements
      </Paragraph>
      <Heading2>Reminders</Heading2>
      <Paragraph>
        Check compatibility with supported browsers to ensure offline
        functionality works consistently across environments
      </Paragraph>
    </>
  )
}

export function MeetingCategory() {
  return (
    <>
      <Heading1>Design feedback meeting with Luna</Heading1>
      <Paragraph>Next Friday at 2 PM</Paragraph>
      <Heading2>Meeting Purpose</Heading2>
      <Paragraph>
        To review current design drafts, gather constructive feedback, align on
        priorities, and agree on clear next steps for the project
      </Paragraph>
      <Heading2>Agenda</Heading2>
      <Paragraph>
        Begin the meeting with a brief welcome, introduce participants, and
        provide a clear overview of objectives and expected outcomes today
      </Paragraph>
      <Heading2>Preparation</Heading2>
      <Paragraph>
        Ensure all design files and prototypes are ready to present so the team
        can review current work efficiently together today
      </Paragraph>
      <Heading2>Reminders</Heading2>
      <Paragraph>
        Encourage open and constructive communication throughout the meeting so
        feedback remains focused, respectful, actionable, and useful for design
        decisions ahead
      </Paragraph>
    </>
  )
}

export function InspirationCategory() {
  return (
    <>
      <Heading1>Small improvements create better products</Heading1>
      <Paragraph>
        Successful products are built through continuous improvement, thoughtful
        decisions, and a commitment to making everyday experiences better
      </Paragraph>
      <Heading2>Product Mindset</Heading2>
      <Paragraph>
        Focus on improvements that remove friction and create meaningful value
        for users while addressing real problems in their experience directly
      </Paragraph>
      <Heading2>Building Better Experiences</Heading2>
      <Paragraph>
        Reduce unnecessary steps and make common workflows faster so users can
        complete important tasks with less effort and confusion overall
      </Paragraph>
      <Heading2>Continuous Improvement</Heading2>
      <Paragraph>
        Review existing workflows regularly and identify areas that can be
        improved through thoughtful changes based on user needs and feedback
      </Paragraph>
      <Heading2>Reminders</Heading2>
      <Paragraph>
        Every improvement, no matter how small, can create a better user
        experience when it addresses a meaningful need for users
      </Paragraph>
    </>
  )
}

const childVariants: Variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      ease: 'easeInOut',
    },
  },
}

type ElementProps = {
  children: React.ReactNode
}

function Heading1({ children }: ElementProps) {
  return (
    <motion.h1
      variants={childVariants}
      className="mb-1 text-xl font-medium text-neutral-900"
    >
      {children}
    </motion.h1>
  )
}

function Heading2({ children }: ElementProps) {
  return (
    <motion.h2
      variants={childVariants}
      className="mb-1 text-lg font-medium text-neutral-900"
    >
      {children}
    </motion.h2>
  )
}

function Paragraph({ children }: ElementProps) {
  return (
    <motion.p
      variants={childVariants}
      className="mb-3 text-pretty text-neutral-600 last:mb-0"
    >
      {children}
    </motion.p>
  )
}
