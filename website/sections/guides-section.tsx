import Badge from '@/components/ui/badge'
import Button from '@/components/ui/button'
import ArrowRightIcon from '@/icons/arrow-right-icon'
import CalendarIcon from '@/icons/calendar-icon'
import { dayMonthShortFormatter } from '@/utils/date-formatters'
import Image from 'next/image'

import Section from '@/sections/section'

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

export default function GuidesSection() {
  return (
    <Section className="flex flex-col divide-neutral-200 @max-5xl:divide-y @3xl:flex-row @3xl:divide-x">
      <TextPanel />
      <GuidesCarouselPanel />
    </Section>
  )
}

function TextPanel() {
  return (
    <div className="flex w-full flex-col justify-between gap-8 p-6 md:p-8 @3xl:max-w-79">
      <div className="flex flex-col gap-2">
        <Badge color="orange">Guides</Badge>
        <Section.Heading2>
          Guides to get you <br />
          <span className="text-neutral-500">started step by step</span>
        </Section.Heading2>
        <Section.Paragraph>
          Find guides for every part of the app. See how to set up your board,
          create issues. Jump in fast, no guessing
        </Section.Paragraph>
      </div>
      <Button href="/" variant="link" rightIcon={<ArrowRightIcon />}>
        Explore Guides
      </Button>
    </div>
  )
}

function GuidesCarouselPanel() {
  return (
    <div className="scrollbar-hidden pointer-events-none flex h-100 w-full flex-col items-center overflow-hidden px-6 select-none md:px-8 @3xl:h-150 @3xl:items-end">
      <ul className="animate-slide-y flex flex-col gap-4 pb-4">
        {guides.map(({ title, image, tags }, index) => (
          <li key={index}>
            <article className="w-full max-w-max overflow-hidden rounded-lg bg-white shadow-sm ring ring-black/10">
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
      <ul aria-hidden className="animate-slide-y flex flex-col gap-4 pb-4">
        {guides.map(({ title, image, tags }, index) => (
          <li key={index}>
            <article className="w-full max-w-max overflow-hidden rounded-lg bg-white shadow-sm ring ring-black/10">
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
