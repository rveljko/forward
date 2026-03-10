'use client'

import Badge from '@/components/ui/badge'
import AppWindowIcon from '@/icons/app-window-icon'
import BrainIcon from '@/icons/brain-icon'
import CalendarIcon from '@/icons/calendar-icon'
import CheckboxIcon from '@/icons/checkbox-icon'
import FolderIcon from '@/icons/folder-icon'
import LockPasswordIcon from '@/icons/lock-password-icon'
import SparklesIcon from '@/icons/sparkles-icon'
import UserIcon from '@/icons/user-icon'
import { dayMonthShortFormatter } from '@/utils/date-formatters'
import Image from 'next/image'
import { useEffect, useState } from 'react'

type Guide = {
  title: string
  image: string
  tags: {
    text: string
    color: React.ComponentProps<typeof Badge>['color']
  }[]
  label: string
  icon: React.JSX.Element
}

const guides: Guide[] = [
  {
    title: 'How to Create a New Task',
    image: '/images/how-to-create-a-task-thumbnail.png',
    tags: [{ text: 'Tasks', color: 'blue' }],
    label: 'Creating a Task',
    icon: <CheckboxIcon />,
  },
  {
    title: 'How to Create a New Issue',
    image: '/images/how-to-create-an-issue-thumbnail.png',
    tags: [{ text: 'Issues', color: 'cyan' }],
    label: 'Creating a Issue',
    icon: <FolderIcon />,
  },
  {
    title: 'How to Create a New Draft',
    image: '/images/how-to-create-a-draft-thumbnail.png',
    tags: [{ text: 'Drafts', color: 'violet' }],
    label: 'Creating a Draft',
    icon: <BrainIcon />,
  },
  {
    title: 'How to Update User Information',
    image: '/images/how-to-update-user-information-thumbnail.png',
    tags: [
      { text: 'Settings', color: 'sky' },
      { text: 'Profile', color: 'pink' },
    ],
    label: 'Updating User Info',
    icon: <UserIcon />,
  },
  {
    title: 'How to Change Password',
    image: '/images/how-to-change-password-thumbnail.png',
    tags: [
      { text: 'Settings', color: 'sky' },
      { text: 'Security', color: 'orange' },
    ],
    label: 'Changing Password',
    icon: <LockPasswordIcon />,
  },
  {
    title: 'How to Change Preferences',
    image: '/images/how-to-change-preferences-thumbnail.png',
    tags: [
      { text: 'Settings', color: 'sky' },
      { text: 'Preferences', color: 'green' },
    ],
    label: 'Changing Preferences',
    icon: <SparklesIcon />,
  },
  {
    title: 'How to Toggle Integrations',
    image: '/images/how-to-toggle-integrations-thumbnail.png',
    tags: [
      { text: 'Settings', color: 'sky' },
      { text: 'Integrations', color: 'rose' },
    ],
    label: 'Toggling Integrations',
    icon: <AppWindowIcon />,
  },
]

export default function GuidesCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % guides.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex flex-col items-center gap-8 [--gap:--spacing(4)] [--transition-duration:1000ms] @5xl:flex-row">
      <ul className="relative isolate h-38 w-full overflow-hidden">
        <div className="absolute top-0 z-1 h-8 w-full bg-linear-to-b from-white to-transparent" />
        <div className="absolute bottom-0 z-1 h-8 w-full bg-linear-to-t from-white to-transparent" />
        {guides.map(({ tags, label, icon: Icon }, index) => (
          <li
            key={index}
            className="absolute top-1/2 left-1/2 w-full max-w-50 -translate-1/2 px-px @5xl:right-0 @5xl:left-auto @5xl:translate-x-0"
          >
            <article
              data-is-before-previous={
                activeIndex === index + 2 ||
                (activeIndex === 0 && index === guides.length - 2) ||
                (activeIndex === 1 && index === guides.length - 1)
              }
              data-is-previous={
                activeIndex === index + 1 ||
                (activeIndex === 0 && index === guides.length - 1)
              }
              data-is-active={activeIndex === index}
              data-is-next={
                activeIndex === index - 1 ||
                (activeIndex === guides.length - 1 && index === 0)
              }
              className="flex translate-y-[calc(200%+(var(--gap)*2))] scale-95 items-center gap-2 rounded-lg bg-white p-2.5 opacity-0 shadow-sm ring ring-black/10 transition-transform duration-(--transition-duration) data-[is-active=true]:translate-0 data-[is-active=true]:scale-100 data-[is-active=true]:opacity-100 data-[is-before-previous=true]:translate-y-[calc(-200%-(var(--gap)*2))] data-[is-before-previous=true]:opacity-100 data-[is-next=true]:translate-y-[calc(100%-2.5%+var(--gap))] data-[is-next=true]:opacity-100 data-[is-previous=true]:translate-y-[calc(-100%+2.5%-var(--gap))] data-[is-previous=true]:opacity-100 @5xl:origin-right"
            >
              <Badge
                color={tags[tags.length - 1].color}
                className="py-1 [&_svg]:size-3"
              >
                {Icon}
              </Badge>
              <h3 className="text-sm font-medium text-neutral-900">{label}</h3>
            </article>
          </li>
        ))}
      </ul>
      <ul className="relative isolate h-150 w-full max-w-79 overflow-hidden">
        <div className="absolute top-0 z-1 h-8 w-full bg-linear-to-b from-white to-transparent" />
        <div className="absolute bottom-0 z-1 h-8 w-full bg-linear-to-t from-white to-transparent" />
        {guides.map(({ title, image, tags }, index) => (
          <li
            key={index}
            className="absolute top-1/2 left-1/2 w-full -translate-1/2 px-px @5xl:right-0 @5xl:left-auto @5xl:translate-x-0"
          >
            <article
              data-is-before-previous={
                activeIndex === index + 2 ||
                (activeIndex === 0 && index === guides.length - 2) ||
                (activeIndex === 1 && index === guides.length - 1)
              }
              data-is-previous={
                activeIndex === index + 1 ||
                (activeIndex === 0 && index === guides.length - 1)
              }
              data-is-active={activeIndex === index}
              data-is-next={
                activeIndex === index - 1 ||
                (activeIndex === guides.length - 1 && index === 0)
              }
              className="translate-y-[calc(200%+(var(--gap)*2))] scale-95 overflow-hidden rounded-lg bg-white opacity-0 shadow-sm ring ring-black/10 transition-transform duration-(--transition-duration) data-[is-active=true]:translate-0 data-[is-active=true]:scale-100 data-[is-active=true]:opacity-100 data-[is-before-previous=true]:translate-y-[calc(-200%-(var(--gap)*2))] data-[is-before-previous=true]:opacity-100 data-[is-next=true]:translate-y-[calc(100%-2.5%+var(--gap))] data-[is-next=true]:opacity-100 data-[is-previous=true]:translate-y-[calc(-100%+2.5%-var(--gap))] data-[is-previous=true]:opacity-100 @5xl:origin-right"
            >
              <div className="flex flex-col gap-2 border-b border-b-neutral-300 p-2">
                <div className="max-h-42 w-full max-w-75 overflow-hidden rounded-md border border-neutral-300 mask-linear-360 mask-linear-from-transparent mask-linear-to-black">
                  <Image
                    src={image}
                    alt=""
                    width={1280}
                    height={720}
                    loading="lazy"
                  />
                </div>
                <h3 className="text-sm font-medium text-neutral-900">
                  {title}
                </h3>
                <ul className="flex items-center gap-1">
                  {tags.map(({ text, color }, index) => (
                    <li key={index}>
                      <Badge color={color}>{text}</Badge>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-2">
                <span className="flex w-max items-center gap-1 text-xs text-neutral-600 [&_svg]:size-4">
                  <CalendarIcon />
                  {dayMonthShortFormatter(new Date())}
                </span>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </div>
  )
}
