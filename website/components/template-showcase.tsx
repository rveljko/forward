'use client'

import Badge from '@/components/ui/badge'
import Button from '@/components/ui/button'
import Divider from '@/components/ui/divider'
import AlertTriangleIcon from '@/icons/alert-triangle-icon'
import AlignCenterIcon from '@/icons/align-center-icon'
import AlignJustifiedIcon from '@/icons/align-justified-icon'
import AlignLeftIcon from '@/icons/align-left-icon'
import AlignRightIcon from '@/icons/align-right-icon'
import ArrowBackUpIcon from '@/icons/arrow-back-up-icon'
import ArrowForwardUpIcon from '@/icons/arrow-forward-up-icon'
import BoldIcon from '@/icons/bold-icon'
import BugIcon from '@/icons/bug-icon'
import DocumentIcon from '@/icons/document-icon'
import GitBranchIcon from '@/icons/git-branch-icon'
import Heading1Icon from '@/icons/heading1-icon'
import Heading2Icon from '@/icons/heading2-icon'
import Heading3Icon from '@/icons/heading3-icon'
import Heading4Icon from '@/icons/heading4-icon'
import ItalicIcon from '@/icons/italic-icon'
import ListIcon from '@/icons/list-icon'
import ListNumbersIcon from '@/icons/list-numbers-icon'
import SparklesIcon from '@/icons/sparkles-icon'
import StrikethroughIcon from '@/icons/strikethrough-icon'
import UnderlineIcon from '@/icons/underline-icon'
import { cn } from '@/utils/utils'
import { useState } from 'react'

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
    description:
      "Start from a blank page when you don't need a predefined structure and want to organize every detail your own way",
    icon: <DocumentIcon />,
    color: 'slate',
    title: 'Set Priorities',
    content: <CleanTemplate />,
  },
  {
    label: 'Feature Request',
    description:
      'Describe new ideas, expected behavior, reasons behind the request, and any details that help others understand the proposed feature',
    icon: <SparklesIcon />,
    color: 'cyan',
    title: 'Create and Report Issues',
    content: <FeatureRequestTemplate />,
  },
  {
    label: 'Bug Report',
    description:
      'Record what went wrong, how to reproduce the problem, what should have happened, and any details useful for fixing it',
    icon: <BugIcon />,
    color: 'orange',
    title: 'Missing Status Updates and Offline Sync',
    content: <BugReportTemplate />,
  },
  {
    label: 'Improvement',
    description:
      'Suggest changes that make existing features better, easier to use, or more useful while explaining the problem they solve',
    icon: <GitBranchIcon />,
    color: 'green',
    title: 'Add Comments',
    content: <ImprovementTemplate />,
  },
  {
    label: 'Blocker',
    description:
      'Report critical issues preventing work from moving forward, explain what is blocked, and describe what is needed to continue',
    icon: <AlertTriangleIcon />,
    color: 'rose',
    title: 'No Integrations with External Tools',
    content: <BlockerTemplate />,
  },
]

export default function TemplateShowcase() {
  const [activeTemplateIndex, setActiveTemplateIndex] = useState(
    Math.floor(templates.length / 2)
  )

  return (
    <div className="flex w-full flex-col gap-2 @4xl:flex-row">
      <ul className="flex h-100 flex-col gap-2 @4xl:h-150 @4xl:w-1/3">
        {templates.map(({ label, description, icon: Icon, color }, index) => (
          <li
            key={index}
            className={`transition-all duration-500 ${activeTemplateIndex === index ? 'h-full' : 'h-10.5'}`}
          >
            <article className="relative isolate flex h-full flex-col overflow-hidden rounded-lg border border-neutral-200 p-2">
              <div className="flex items-center gap-2">
                <Badge color={color} className="p-1 [&_svg]:size-4">
                  {Icon}
                </Badge>
                <h3>
                  <button
                    className="font-medium text-black hover:cursor-pointer"
                    onClick={() => setActiveTemplateIndex(index)}
                  >
                    <span className="absolute inset-0 z-10" />
                    {label}
                  </button>
                </h3>
              </div>
              <div
                className={cn(
                  'hidden pt-2 opacity-0 transition transition-discrete duration-500 starting:opacity-0',
                  activeTemplateIndex === index && 'block opacity-100'
                )}
              >
                <p className="max-w-100 text-balance text-neutral-600">
                  {description}
                </p>
              </div>
            </article>
          </li>
        ))}
      </ul>
      <div className="h-150 w-full overflow-hidden rounded-lg border border-neutral-200 bg-[radial-gradient(circle,var(--color-neutral-200)_1px,transparent_1px)] bg-size-[--spacing(1.5)_--spacing(1.5)]">
        <ul
          style={{ transform: `translateY(-${activeTemplateIndex * 100}%)` }}
          className="size-full transition-transform duration-1000"
        >
          {templates.map(({ label, title, content: Content }) => (
            <li
              key={label}
              aria-label={`${label} Template`}
              className="size-full p-6 @4xl:p-12"
            >
              <div
                aria-hidden
                className="size-full rounded-xl border border-neutral-200 bg-neutral-100 p-2 inset-ring inset-ring-white"
              >
                <article className="flex h-full flex-col overflow-y-hidden rounded-sm border border-neutral-200 bg-neutral-50">
                  <div className="p-4">
                    <div className="flex items-center gap-1">
                      <p className="font-medium text-black">Issues</p>
                      <span className="text-neutral-600">/</span>
                      <p className="line-clamp-1 font-medium text-black">
                        {title}
                      </p>
                    </div>
                  </div>
                  <Divider />
                  <Toolbar />
                  <Divider />
                  <div className="h-full overflow-y-auto px-4 py-8">
                    {Content}
                  </div>
                </article>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function Toolbar() {
  return (
    <div className="flex scrollbar-none overflow-x-auto p-4">
      <div className="flex items-center gap-0.5">
        <Button
          variant="tertiary"
          disabled
          className="p-0.5 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-transparent"
        >
          <ArrowBackUpIcon />
        </Button>
        <Button
          variant="tertiary"
          disabled
          className="p-0.5 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-transparent"
        >
          <ArrowForwardUpIcon />
        </Button>
        <Button variant="tertiary" className="p-0.5">
          <Heading1Icon />
        </Button>
        <Button variant="tertiary" className="p-0.5">
          <Heading2Icon />
        </Button>
        <Button variant="tertiary" className="p-0.5">
          <Heading3Icon />
        </Button>
        <Button variant="tertiary" className="p-0.5">
          <Heading4Icon />
        </Button>
        <Button variant="tertiary" className="p-0.5">
          <BoldIcon />
        </Button>
        <Button variant="tertiary" className="p-0.5">
          <ItalicIcon />
        </Button>
        <Button variant="tertiary" className="p-0.5">
          <UnderlineIcon />
        </Button>
        <Button variant="tertiary" className="p-0.5">
          <StrikethroughIcon />
        </Button>
        <Button variant="tertiary" className="p-0.5">
          <AlignLeftIcon />
        </Button>
        <Button variant="tertiary" className="p-0.5">
          <AlignCenterIcon />
        </Button>
        <Button variant="tertiary" className="p-0.5">
          <AlignRightIcon />
        </Button>
        <Button variant="tertiary" className="p-0.5">
          <AlignJustifiedIcon />
        </Button>
        <Button variant="tertiary" className="p-0.5">
          <ListIcon />
        </Button>
        <Button variant="tertiary" className="p-0.5">
          <ListNumbersIcon />
        </Button>
      </div>
    </div>
  )
}

function CleanTemplate() {
  return (
    <>
      <p className="text-lg font-medium">Set Priorities</p>
      <p>
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
      <p className="mb-4">
        <span className="font-medium">Description: </span>
        Make it easy and intuitive for users to create new issues and report
        problems within their projects. This should help teams track bugs,
        tasks, and feature requests efficiently
      </p>
      <p className="text-sm font-medium">Problem it Solves:</p>
      <p className="mb-4">
        Teams lose efficiency tracking bugs/tasks due to inflexible forms, lost
        drafts (offline/navigation), incomplete data, and poor accessibility
        from app pages
      </p>
      <p className="text-sm font-medium">Proposed Solution:</p>
      <p className="mb-4">
        Build reusable form component with validation, markdown editor, file
        uploads, and quick-access buttons. Add local draft saving with
        auto-sync, backend API integration, and success messages
      </p>
      <p className="text-sm font-medium">Alternatives Considered:</p>
      <ol className="list-inside list-decimal">
        <li>Off-the-shelf embeds: Limited customization/offline support</li>
        <li>Basic modals: No rich text/attachments</li>
        <li>Full-page forms: Disrupts workflow, no quick access</li>
      </ol>
    </>
  )
}

function BugReportTemplate() {
  return (
    <>
      <p className="text-xl font-medium">
        Missing Status Updates and Offline Sync
      </p>
      <p className="mb-4">
        <span className="font-medium">Description: </span>
        Users cannot easily update issue status from issue pages/lists, lacking
        visual indicators, notifications, offline queuing, and backend workflows
      </p>
      <p className="text-sm font-medium">Steps to reproduce:</p>
      <ol className="mb-4 list-inside list-decimal">
        <li>Open an issue detail page or issue list</li>
        <li>Look for status dropdown/toggle</li>
        <li>Attempt offline status change</li>
      </ol>
      <p className="text-sm font-medium">Expected Behavior:</p>
      <p className="mb-4">
        Quick status toggle/dropdown on issue pages/lists with instant UI
        updates, offline queuing/auto-sync, team notifications, visual
        indicators on cards/details
      </p>
      <p className="text-sm font-medium">Actual Behavior:</p>
      <p className="mb-4">
        No status update UI available. Changes not possible offline No
        notifications, visuals, or logs. Teams stay uninformed on progress
      </p>
      <p className="text-sm font-medium">Environment:</p>
      <ul className="list-inside list-disc">
        <li>Browser: All supported browsers</li>
        <li>OS: All platforms</li>
        <li>App Version: Current version (pre-implementation)</li>
      </ul>
    </>
  )
}

function ImprovementTemplate() {
  return (
    <>
      <p className="text-lg font-medium">Add Comments</p>
      <p className="mb-4">
        <span className="font-medium">Description: </span>
        Enable users to add, edit, and delete comments on issues for better team
        communication. Support markdown/rich text, chronological display with
        timestamps/authors
      </p>
      <p className="text-sm font-medium">Current Behavior:</p>
      <p className="mb-4">
        No comment functionality exists. Users cannot discuss issues,
        collaborate, or get notified of updates, leading to siloed communication
        outside the app
      </p>
      <p className="text-sm font-medium">Proposed Changes:</p>
      <ul className="mb-4 list-inside list-disc">
        <li>Add markdown-enabled comment input box with edit/delete</li>
        <li>
          Display threaded comments below issue description with user info
        </li>
        <li>
          Implement offline drafting/auto-sync and backend API integration
        </li>
      </ul>
      <p className="text-sm font-medium">Benefits:</p>
      <ul className="list-inside list-disc">
        <li>Improves collaboration and keeps discussions in-context</li>
        <li>Reduces email/Slack dependency with notifications</li>
        <li>Enhances productivity via offline support and quick edits</li>
      </ul>
    </>
  )
}

function BlockerTemplate() {
  return (
    <>
      <p className="text-lg font-medium">No Integrations with External Tools</p>
      <p className="mb-4">
        <span className="font-medium">Description: </span>
        The platform lacks seamless integrations with tools like GitHub, Slack,
        CRM, email, and calendars, preventing automatic syncing of issues,
        comments, status updates, and notifications
      </p>
      <p className="text-sm font-medium">Impact:</p>
      <p className="mb-4">
        Teams waste time context-switching between apps, leading to inconsistent
        data, missed notifications, duplicated work, and reduced productivity
      </p>
      <p className="text-sm font-medium">Workarounds:</p>
      <ul className="mb-4 list-inside list-disc">
        <li>Manual copy-paste between tools</li>
        <li>Use external automation like Zapier/Make.com</li>
        <li>Email exports (no real-time sync)</li>
      </ul>
      <p className="text-sm font-medium">Resolution Plan:</p>
      <ul className="list-inside list-disc">
        <li>
          Build integration UI for no-code setup with APIs for GitHub/Slack/etc
        </li>
        <li>Add background sync jobs, conflict resolution, custom triggers</li>
        <li>
          Implement security/auth flows, logs/dashboards, and import/export
        </li>
      </ul>
    </>
  )
}
