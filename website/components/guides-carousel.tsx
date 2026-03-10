'use client'

import Badge from '@/components/ui/badge'
import CalendarIcon from '@/icons/calendar-icon'
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
}

const guides: Guide[] = [
  {
    title: 'How to Create a New Task',
    image: '/images/how-to-create-a-task-thumbnail.png',
    tags: [{ text: 'Tasks', color: 'blue' }],
  },
  {
    title: 'How to Create a New Issue',
    image: '/images/how-to-create-an-issue-thumbnail.png',
    tags: [{ text: 'Issues', color: 'cyan' }],
  },
  {
    title: 'How to Create a New Draft',
    image: '/images/how-to-create-a-draft-thumbnail.png',
    tags: [{ text: 'Drafts', color: 'violet' }],
  },
  {
    title: 'How to Update User Information',
    image: '/images/how-to-update-user-information-thumbnail.png',
    tags: [
      { text: 'Settings', color: 'sky' },
      { text: 'Profile', color: 'pink' },
    ],
  },
  {
    title: 'How to Change Password',
    image: '/images/how-to-change-password-thumbnail.png',
    tags: [
      { text: 'Settings', color: 'sky' },
      { text: 'Security', color: 'orange' },
    ],
  },
  {
    title: 'How to Change Preferences',
    image: '/images/how-to-change-preferences-thumbnail.png',
    tags: [
      { text: 'Settings', color: 'sky' },
      { text: 'Preferences', color: 'green' },
    ],
  },
  {
    title: 'How to Toggle Integrations',
    image: '/images/how-to-toggle-integrations-thumbnail.png',
    tags: [
      { text: 'Settings', color: 'sky' },
      { text: 'Integrations', color: 'rose' },
    ],
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
    <ul className="relative size-full">
      {guides.map(({ title, image, tags }, index) => (
        <li key={index} className="absolute top-1/2 right-px -translate-y-1/2">
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
            className="w-full max-w-max origin-right translate-y-[calc(200%+(var(--gap)*2))] scale-95 overflow-hidden rounded-lg bg-white opacity-0 shadow-sm ring ring-black/10 transition-transform duration-1000 [--gap:--spacing(4)] data-[is-active=true]:translate-0 data-[is-active=true]:scale-100 data-[is-active=true]:opacity-100 data-[is-before-previous=true]:translate-y-[calc(-200%-(var(--gap)*2))] data-[is-before-previous=true]:opacity-100 data-[is-next=true]:translate-y-[calc(100%-2.5%+var(--gap))] data-[is-next=true]:opacity-100 data-[is-previous=true]:translate-y-[calc(-100%+2.5%-var(--gap))] data-[is-previous=true]:opacity-100"
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
              <h3 className="text-sm font-medium text-neutral-900">{title}</h3>
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
  )
}
