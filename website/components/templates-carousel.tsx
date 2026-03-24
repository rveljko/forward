'use client'

import Badge from '@/components/ui/badge'
import AlertTriangleIcon from '@/icons/alert-triangle-icon'
import BugIcon from '@/icons/bug-icon'
import DocumentIcon from '@/icons/document-icon'
import GitBranchIcon from '@/icons/git-branch-icon'
import SparklesIcon from '@/icons/sparkles-icon'
import { useEffect, useState } from 'react'

type Template = {
  label: string
  description: string
  icon: React.JSX.Element
  color: React.ComponentProps<typeof Badge>['color']
  title: string
  content: React.JSX.Element
}

const templates: Template[] = [
  {
    label: 'Clean',
    description: 'Empty template to start fresh',
    icon: <DocumentIcon />,
    color: 'slate',
    title: 'Set Priorities',
    content: <CleanTemplate />,
  },
  {
    label: 'Feature Request',
    description: 'Request new features or additions',
    icon: <SparklesIcon />,
    color: 'cyan',
    title: 'Create and Report Issues',
    content: <FeatureRequestTemplate />,
  },
  {
    label: 'Bug Report',
    description: 'Report bugs with reproduction steps',
    icon: <BugIcon />,
    color: 'orange',
    title: 'Missing Status Updates and Offline Sync',
    content: <BugReportTemplate />,
  },
  {
    label: 'Improvement',
    description: 'Fix current features to work better',
    icon: <GitBranchIcon />,
    color: 'green',
    title: 'Add Comments',
    content: <ImprovementTemplate />,
  },
  {
    label: 'Blocker',
    description: 'Issues blocking team progress now',
    icon: <AlertTriangleIcon />,
    color: 'rose',
    title: 'No Integrations with External Tools',
    content: <BlockerTemplate />,
  },
]

export default function TemplatesCarousel() {
  const [activeIndex, setActiveIndex] = useState(4)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % templates.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex flex-col items-center gap-8 [--transition-duration:1000ms]">
      <ul className="relative isolate h-24 w-full max-w-lg overflow-hidden">
        <div className="absolute left-0 z-1 h-full w-4 bg-linear-to-r from-white to-transparent" />
        <div className="absolute right-0 z-1 h-full w-4 bg-linear-to-l from-white to-transparent" />
        {templates.map(({ label, description, icon: Icon, color }, index) => (
          <li
            key={index}
            className="absolute bottom-0 left-1/2 w-full max-w-60 -translate-x-1/2 p-px"
          >
            <article
              data-is-after-previous={
                activeIndex === index + 2 ||
                (activeIndex === 0 && index === templates.length - 2) ||
                (activeIndex === 1 && index === templates.length - 1)
              }
              data-is-previous={
                activeIndex === index + 1 ||
                (activeIndex === 0 && index === templates.length - 1)
              }
              data-is-active={activeIndex === index}
              data-is-next={
                activeIndex === index - 1 ||
                (activeIndex === templates.length - 1 && index === 0)
              }
              className="flex translate-x-[calc(-200%-(var(--gap)*2))] flex-col rounded-lg bg-white opacity-0 shadow-sm ring ring-black/10 transition-transform duration-(--transition-duration) [--gap:--spacing(4)] data-[is-active=true]:translate-x-0 data-[is-active=true]:-translate-y-4 data-[is-active=true]:opacity-100 data-[is-after-previous=true]:translate-x-[calc(200%+(var(--gap)*2))] data-[is-after-previous=true]:opacity-100 data-[is-next=true]:translate-x-[calc(-100%-var(--gap))] data-[is-next=true]:opacity-100 data-[is-previous=true]:translate-x-[calc(100%+var(--gap))] data-[is-previous=true]:opacity-100"
            >
              <div className="flex w-full items-center gap-2 border-b border-b-neutral-300 p-2.5">
                <Badge color={color} className="py-1 [&_svg]:size-3">
                  {Icon}
                </Badge>
                <h3 className="text-sm font-medium text-neutral-900">
                  {label}
                </h3>
              </div>
              <div className="p-2.5">
                <p className="text-xs text-nowrap text-neutral-600">
                  {description}
                </p>
              </div>
            </article>
          </li>
        ))}
      </ul>
      <ul className="relative h-154 w-full overflow-hidden">
        <div className="absolute left-0 z-1 h-full w-4 bg-linear-to-r from-white to-transparent" />
        <div className="absolute right-0 z-1 h-full w-4 bg-linear-to-l from-white to-transparent" />
        {templates.map(({ title, content: Content }, index) => (
          <li
            key={index}
            className="absolute bottom-0 left-1/2 w-full max-w-md -translate-x-1/2"
          >
            <article
              data-is-after-previous={
                activeIndex === index + 2 ||
                (activeIndex === 0 && index === templates.length - 2) ||
                (activeIndex === 1 && index === templates.length - 1)
              }
              data-is-previous={
                activeIndex === index + 1 ||
                (activeIndex === 0 && index === templates.length - 1)
              }
              data-is-active={activeIndex === index}
              data-is-next={
                activeIndex === index - 1 ||
                (activeIndex === templates.length - 1 && index === 0)
              }
              className="flex w-full translate-x-[calc(-200%-(var(--gap)*2))] flex-col opacity-0 transition-transform duration-(--transition-duration) [--gap:--spacing(8)] data-[is-active=true]:translate-x-0 data-[is-active=true]:-translate-y-4 data-[is-active=true]:opacity-100 data-[is-after-previous=true]:translate-x-[calc(200%+(var(--gap)*2))] data-[is-after-previous=true]:opacity-100 data-[is-next=true]:translate-x-[calc(-100%-var(--gap))] data-[is-next=true]:opacity-100 data-[is-previous=true]:translate-x-[calc(100%+var(--gap))] data-[is-previous=true]:opacity-100"
            >
              <div className="flex w-full items-center gap-1 rounded-t-lg border border-neutral-200 bg-white px-2 py-1.5">
                <div className="size-2 rounded-full bg-neutral-200" />
                <div className="size-2 rounded-full bg-neutral-200" />
                <div className="size-2 rounded-full bg-neutral-200" />
              </div>
              <div className="bg-dashboard-background relative isolate h-144 w-full rounded-b-lg border border-t-0 border-neutral-200 p-4 after:absolute after:-inset-4 after:top-0 after:-z-1 after:bg-white after:mask-linear-0 after:mask-linear-from-black after:mask-linear-to-transparent">
                <div className="size-full overflow-hidden rounded-lg border border-black/10 bg-white">
                  <div className="border-b border-b-black/10 p-4">
                    <span className="line-clamp-1 text-sm font-medium break-all">
                      Issues / {title}
                    </span>
                  </div>
                  <div className="border-b border-b-black/10 p-4">
                    <div className="h-6 w-2/3 animate-pulse rounded-md bg-neutral-200" />
                  </div>
                  <div className="size-full px-4 py-8">
                    <div className="mx-auto size-full max-w-sm flex-col text-neutral-900">
                      {Content}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </div>
  )
}

function CleanTemplate() {
  return (
    <>
      <p className="text-lg font-medium">Set Priorities</p>
      <p className="text-xs">
        Allow users to assign and update priority levels on issues so teams can
        focus on the most important tasks first
      </p>
    </>
  )
}

function FeatureRequestTemplate() {
  return (
    <>
      <p className="text-lg font-medium">Create and Report Issues</p>
      <p className="mb-4 text-xs">
        <span className="font-medium">Description: </span>
        Make it easy and intuitive for users to create new issues and report
        problems within their projects. This should help teams track bugs,
        tasks, and feature requests efficiently
      </p>
      <p className="text-sm font-medium">Problem it Solves:</p>
      <p className="mb-4 text-xs">
        Teams lose efficiency tracking bugs/tasks due to inflexible forms, lost
        drafts (offline/navigation), incomplete data, and poor accessibility
        from app pages
      </p>
      <p className="text-sm font-medium">Proposed Solution:</p>
      <p className="mb-4 text-xs">
        Build reusable form component with validation, markdown editor, file
        uploads, and quick-access buttons. Add local draft saving with
        auto-sync, backend API integration, and success messages
      </p>
      <p className="text-sm font-medium">Alternatives Considered:</p>
      <ol className="list-inside list-decimal">
        <li className="text-xs">
          Off-the-shelf embeds: Limited customization/offline support
        </li>
        <li className="text-xs">Basic modals: No rich text/attachments</li>
        <li className="text-xs">
          Full-page forms: Disrupts workflow, no quick access
        </li>
      </ol>
    </>
  )
}

function BugReportTemplate() {
  return (
    <>
      <p className="text-lg font-medium">
        Missing Status Updates and Offline Sync
      </p>
      <p className="mb-4 text-xs">
        <span className="font-medium">Description: </span>
        Users cannot easily update issue status from issue pages/lists, lacking
        visual indicators, notifications, offline queuing, and backend workflows
      </p>
      <p className="text-sm font-medium">Steps to reproduce:</p>
      <ol className="mb-4 list-inside list-decimal">
        <li className="text-xs">Open an issue detail page or issue list</li>
        <li className="text-xs">Look for status dropdown/toggle</li>
        <li className="text-xs">Attempt offline status change</li>
      </ol>
      <p className="text-sm font-medium">Expected Behavior:</p>
      <p className="mb-4 text-xs">
        Quick status toggle/dropdown on issue pages/lists with instant UI
        updates, offline queuing/auto-sync, team notifications, visual
        indicators on cards/details
      </p>
      <p className="text-sm font-medium">Actual Behavior:</p>
      <p className="mb-4 text-xs">
        No status update UI available. Changes not possible offline No
        notifications, visuals, or logs. Teams stay uninformed on progress
      </p>
      <p className="text-sm font-medium">Environment:</p>
      <ul className="list-inside list-disc">
        <li className="text-xs">Browser: All supported browsers</li>
        <li className="text-xs">OS: All platforms</li>
        <li className="text-xs">
          App Version: Current version (pre-implementation)
        </li>
      </ul>
    </>
  )
}

function ImprovementTemplate() {
  return (
    <>
      <p className="text-lg font-medium">Add Comments</p>
      <p className="mb-4 text-xs">
        <span className="font-medium">Description: </span>
        Enable users to add, edit, and delete comments on issues for better team
        communication. Support markdown/rich text, chronological display with
        timestamps/authors
      </p>
      <p className="text-sm font-medium">Current Behavior:</p>
      <p className="mb-4 text-xs">
        No comment functionality exists. Users cannot discuss issues,
        collaborate, or get notified of updates, leading to siloed communication
        outside the app
      </p>
      <p className="text-sm font-medium">Proposed Changes:</p>
      <ul className="mb-4 list-inside list-disc">
        <li className="text-xs">
          Add markdown-enabled comment input box with edit/delete
        </li>
        <li className="text-xs">
          Display threaded comments below issue description with user info
        </li>
        <li className="text-xs">
          Implement offline drafting/auto-sync and backend API integration
        </li>
      </ul>
      <p className="text-sm font-medium">Benefits:</p>
      <ul className="list-inside list-disc">
        <li className="text-xs">
          Improves collaboration and keeps discussions in-context
        </li>
        <li className="text-xs">
          Reduces email/Slack dependency with notifications
        </li>
        <li className="text-xs">
          Enhances productivity via offline support and quick edits
        </li>
      </ul>
    </>
  )
}

function BlockerTemplate() {
  return (
    <>
      <p className="text-lg font-medium">No Integrations with External Tools</p>
      <p className="mb-4 text-xs">
        <span className="font-medium">Description: </span>
        The platform lacks seamless integrations with tools like GitHub, Slack,
        CRM, email, and calendars, preventing automatic syncing of issues,
        comments, status updates, and notifications
      </p>
      <p className="text-sm font-medium">Impact:</p>
      <p className="mb-4 text-xs">
        Teams waste time context-switching between apps, leading to inconsistent
        data, missed notifications, duplicated work, and reduced productivity
      </p>
      <p className="text-sm font-medium">Workarounds:</p>
      <ul className="mb-4 list-inside list-disc">
        <li className="text-xs">Manual copy-paste between tools</li>
        <li className="text-xs">
          Use external automation like Zapier/Make.com
        </li>
        <li className="text-xs">Email exports (no real-time sync)</li>
      </ul>
      <p className="text-sm font-medium">Resolution Plan:</p>
      <ul className="list-inside list-disc">
        <li className="text-xs">
          Build integration UI for no-code setup with APIs for GitHub/Slack/etc
        </li>
        <li className="text-xs">
          Add background sync jobs, conflict resolution, custom triggers
        </li>
        <li className="text-xs">
          Implement security/auth flows, logs/dashboards, and import/export
        </li>
      </ul>
    </>
  )
}
