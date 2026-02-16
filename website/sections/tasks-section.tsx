import Badge from '@/components/ui/badge'
import Button from '@/components/ui/button'
import { tasks } from '@/data/tasks'
import ArrowRightIcon from '@/icons/arrow-right-icon'
import ArrowsSortIcon from '@/icons/arrows-sort-icon'
import DotsVerticalIcon from '@/icons/dots-vertical-icon'
import FilterIcon from '@/icons/filters-icon'
import PlusIcon from '@/icons/plus-icon'
import Section from '@/sections/section'
import { dayMonthShortFormatter } from '@/utils/date-formatters'

export default function TasksSection() {
  return (
    <Section className="flex flex-col divide-neutral-200 @max-3xl:divide-y @3xl:flex-row @3xl:divide-x">
      <TextPanel />
      <DashboardPanel />
    </Section>
  )
}

function TextPanel() {
  return (
    <div className="flex w-full flex-col @3xl:max-w-79">
      <div className="flex h-full flex-col justify-between gap-8 p-6 md:p-8">
        <div className="flex flex-col gap-2">
          <Badge color="blue">Tasks</Badge>
          <Section.Heading2>
            Tasks in action <br />
            <span className="text-neutral-500">see how to use them</span>
          </Section.Heading2>
          <Section.Paragraph>
            Set up a task quick: Write what needs doing, check it off. Simple
            list that actually gets things done
          </Section.Paragraph>
        </div>
        <Button href="/" variant="link" rightIcon={<ArrowRightIcon />}>
          Explore Tasks
        </Button>
      </div>
      <div className="relative hidden aspect-square w-full items-center justify-center border-t border-t-neutral-200 @3xl:flex">
        <div className="absolute inset-0 flex justify-evenly">
          <div className="h-full border-r border-dashed border-r-neutral-200" />
          <div className="h-full border-r border-dashed border-r-neutral-200" />
        </div>
        <div className="absolute inset-0 flex flex-col justify-evenly">
          <div className="w-full border-b border-b-neutral-100" />
          <div className="w-full border-b border-dashed border-b-neutral-200" />
          <div className="w-full border-b border-b-transparent" />
          <div className="w-full border-b border-dashed border-b-neutral-200" />
          <div className="w-full border-b border-b-neutral-100" />
        </div>
        <Svg />
      </div>
    </div>
  )
}

function Svg() {
  return (
    <svg
      width="114"
      height="114"
      viewBox="0 0 114 114"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_858_335)">
        <path
          strokeDasharray="2 2"
          d="M77.7567 35.3814C87.4662 45.0909 93.8589 56.245 96.3631 66.4091C98.8698 76.5838 97.466 85.6756 91.7344 91.4072C86.0028 97.1388 76.9105 98.5433 66.7357 96.0365C56.5716 93.5323 45.4182 87.1389 35.7087 77.4294C25.9991 67.7198 19.6058 56.5665 17.1015 46.4023C14.5947 36.2275 15.9992 27.1352 21.7309 21.4036C27.4625 15.6721 36.5543 14.2682 46.7289 16.7749C56.8931 19.2792 68.0471 25.6718 77.7567 35.3814Z"
          className="animate-dash-shift stroke-neutral-400"
        />
      </g>
      <g clipPath="url(#clip1_858_335)">
        <path
          d="M77.5926 35.5458C87.3022 45.2554 93.6948 56.4094 96.199 66.5736C98.7058 76.7482 97.3019 85.84 91.5704 91.5716C85.8387 97.3032 76.7465 98.7078 66.5717 96.2009C56.4075 93.6967 45.2541 87.3033 35.5446 77.5938C25.8351 67.8843 19.4417 56.7309 16.9375 46.5667C14.4306 36.3919 15.8352 27.2997 21.5668 21.568C27.2984 15.8365 36.3902 14.4326 46.5648 16.9394C56.729 19.4436 67.883 25.8362 77.5926 35.5458Z"
          className="stroke-black"
        />
      </g>
      <g clipPath="url(#clip2_858_335)">
        <path
          strokeDasharray="2 2"
          d="M35.5439 35.5444C45.2534 25.8348 56.4074 19.4421 66.5716 16.9379C76.7463 14.4312 85.838 15.8351 91.5696 21.5666C97.3013 27.2982 98.7058 36.3905 96.199 46.5653C93.6947 56.7294 87.3014 67.8828 77.5918 77.5924C67.8823 87.3019 56.7289 93.6952 46.5648 96.1995C36.39 98.7063 27.2977 97.3018 21.5661 91.5701C15.8345 85.8385 14.4307 76.7468 16.9374 66.5721C19.4416 56.4079 25.8343 45.2539 35.5439 35.5444Z"
          className="animate-dash-shift stroke-neutral-400"
        />
      </g>
      <g clipPath="url(#clip3_858_335)">
        <path
          d="M35.7089 35.7089C45.4185 25.9993 56.5725 19.6067 66.7367 17.1025C76.9113 14.5957 86.0031 15.9996 91.7347 21.7311C97.4663 27.4628 98.8709 36.555 96.364 46.7298C93.8598 56.894 87.4664 68.0474 77.7569 77.7569C68.0474 87.4664 56.894 93.8598 46.7298 96.364C36.555 98.8709 27.4628 97.4663 21.7311 91.7347C15.9996 86.0031 14.5957 76.9113 17.1025 66.7367C19.6067 56.5725 25.9993 45.4185 35.7089 35.7089Z"
          className="stroke-black"
        />
      </g>
      <circle cx="56.5684" cy="56.5692" r="29.5" className="stroke-black" />
      <defs>
        <clipPath id="clip0_858_335">
          <rect
            width="30"
            height="100"
            fill="white"
            transform="translate(0 42.4277) rotate(-45)"
          />
        </clipPath>
        <clipPath id="clip1_858_335">
          <rect
            width="30"
            height="100"
            fill="white"
            transform="translate(21.2129 21.2146) rotate(-45)"
          />
        </clipPath>
        <clipPath id="clip2_858_335">
          <rect
            width="100"
            height="30"
            fill="white"
            transform="translate(21.2129 91.9238) rotate(-45)"
          />
        </clipPath>
        <clipPath id="clip3_858_335">
          <rect
            width="100"
            height="30"
            fill="white"
            transform="translate(0 70.7107) rotate(-45)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}

function DashboardPanel() {
  return (
    <div className="flex w-full items-center justify-center px-6 py-8 @5xl:p-16">
      <div className="w-full">
        <div className="flex w-full items-center gap-1 rounded-t-lg border border-neutral-200 bg-white px-2 py-1.5">
          <div className="size-2 rounded-full bg-neutral-200" />
          <div className="size-2 rounded-full bg-neutral-200" />
          <div className="size-2 rounded-full bg-neutral-200" />
        </div>
        <div
          aria-label="Dashboard Task page"
          className="bg-dashboard-background pointer-events-none h-144 w-full rounded-b-lg border border-t-0 border-neutral-200 p-4 select-none"
        >
          <div
            aria-hidden
            className="size-full overflow-hidden rounded-lg border border-black/10 bg-white"
          >
            <div className="border-b border-b-black/10 p-4 text-sm font-medium">
              Tasks
            </div>
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-b-black/10 p-4">
              <div className="flex items-center gap-2">
                <span className="bg-dashboard-neutral-200 flex w-max items-center gap-1 rounded-md px-1.5 py-1 text-sm text-black shadow-sm">
                  <FilterIcon />
                  Filters
                </span>
                <span className="bg-dashboard-neutral-200 flex w-max items-center gap-1 rounded-md px-1.5 py-1 text-sm text-black shadow-sm">
                  <ArrowsSortIcon />
                  Sort
                </span>
              </div>
              <span className="bg-dashboard-brand-500 flex w-max items-center gap-1 rounded-md px-1.5 py-1 text-sm text-white shadow-sm">
                <PlusIcon />
                Create New Task
              </span>
            </div>
            {tasks.map((task) => (
              <article
                key={task}
                className="flex justify-between gap-2 border-b border-black/10 p-4"
              >
                <div className="flex items-center gap-2">
                  <span className="size-3.5 shrink-0 rounded-sm inset-ring inset-ring-black/20" />
                  <span className="line-clamp-1 text-sm break-all">{task}</span>
                </div>
                <div className="[&_svg]:text-dashboard-neutral-600 flex items-center gap-2">
                  <span className="text-dashboard-neutral-600 text-xs text-nowrap">
                    {dayMonthShortFormatter(new Date())}
                  </span>
                  <DotsVerticalIcon />
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
