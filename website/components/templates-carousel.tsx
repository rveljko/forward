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
}

const templates: Template[] = [
  {
    label: 'Clean',
    description: 'Empty template to start fresh',
    icon: <DocumentIcon />,
    color: 'slate',
  },
  {
    label: 'Feature Request',
    description: 'Request new features or additions',
    icon: <SparklesIcon />,
    color: 'cyan',
  },
  {
    label: 'Bug Report',
    description: 'Report bugs with reproduction steps',
    icon: <BugIcon />,
    color: 'orange',
  },
  {
    label: 'Improvement',
    description: 'Fix current features to work better',
    icon: <GitBranchIcon />,
    color: 'green',
  },
  {
    label: 'Blocker',
    description: 'Issues blocking team progress now',
    icon: <AlertTriangleIcon />,
    color: 'rose',
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
    <div className="flex flex-col items-center">
      <ul className="relative isolate h-24 w-full max-w-lg overflow-hidden [--gap:--spacing(4)]">
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
              className="flex translate-x-[calc(-200%-(var(--gap)*2))] flex-col rounded-lg bg-white opacity-0 shadow-sm ring ring-black/10 transition-transform duration-1000 data-[is-active=true]:translate-x-0 data-[is-active=true]:-translate-y-4 data-[is-active=true]:opacity-100 data-[is-after-previous=true]:translate-x-[calc(200%+(var(--gap)*2))] data-[is-after-previous=true]:opacity-100 data-[is-next=true]:translate-x-[calc(-100%-var(--gap))] data-[is-next=true]:opacity-100 data-[is-previous=true]:translate-x-[calc(100%+var(--gap))] data-[is-previous=true]:opacity-100"
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
    </div>
  )
}
