'use client'

import {
  BlockerTemplate,
  BugReportTemplate,
  CleanTemplate,
  FeatureRequestTemplate,
  ImprovementTemplate,
} from '@/components/issues/issue-templates'
import Badge from '@/components/ui/badge'
import AlertTriangleIcon from '@/icons/alert-triangle-icon'
import BugIcon from '@/icons/bug-icon'
import DocumentIcon from '@/icons/document-icon'
import GitBranchIcon from '@/icons/git-branch-icon'
import SparklesIcon from '@/icons/sparkles-icon'
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
    <div className="flex flex-col gap-4 @4xl:h-126.5 @4xl:flex-row @4xl:p-8">
      <ul className="flex flex-col *:not-first:*:border-t *:not-first:*:border-t-neutral-200 @4xl:w-1/3 @4xl:gap-2">
        {templates.map(({ label, description, icon: Icon, color }, index) => (
          <li key={label} className="contents">
            <article
              className={`relative isolate overflow-hidden transition-all duration-500 @4xl:rounded-lg @4xl:border @4xl:border-neutral-200 ${activeTemplateIndex === index ? 'h-auto @4xl:flex-1' : 'h-18 @4xl:h-10.5'}`}
            >
              <div className="p-6 md:px-8 @4xl:p-2">
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
                  <p className="max-w-100 text-pretty text-neutral-600 @4xl:text-balance">
                    {description}
                  </p>
                </div>
              </div>
              <div className="border-t border-t-neutral-200 bg-[radial-gradient(circle,var(--color-neutral-200)_1px,transparent_1px)] bg-size-[--spacing(1.5)_--spacing(1.5)] p-6 md:px-8 @4xl:hidden">
                <TemplatePanel activePanel={index} />
              </div>
            </article>
          </li>
        ))}
      </ul>
      <div className="hidden w-full overflow-hidden rounded-lg border border-neutral-200 bg-[radial-gradient(circle,var(--color-neutral-200)_1px,transparent_1px)] bg-size-[--spacing(1.5)_--spacing(1.5)] @4xl:block">
        <ul
          style={{ transform: `translateY(-${activeTemplateIndex * 100}%)` }}
          className="h-full transition-transform duration-1000"
        >
          {templates.map((_, index) => (
            <li key={index} className="p-8">
              <TemplatePanel activePanel={index} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

type TemplatePanelProps = {
  activePanel: number
}

function TemplatePanel({ activePanel }: TemplatePanelProps) {
  return (
    <div
      aria-label={`${templates[activePanel].label} template`}
      className="mx-auto max-w-xl rounded-xl border border-neutral-200 bg-neutral-100 p-2 inset-ring inset-ring-white"
    >
      <article
        aria-hidden
        className="rounded-sm border border-neutral-200 bg-neutral-50 p-4"
      >
        {templates[activePanel].content}
      </article>
    </div>
  )
}
