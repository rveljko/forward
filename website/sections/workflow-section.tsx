import Badge from '@/components/ui/badge'
import Button from '@/components/ui/button'
import ArrowRightIcon from '@/icons/arrow-right-icon'
import BulbIcon from '@/icons/bulb-icon'
import CircleDashedIcon from '@/icons/circle-dashed-icon'
import CircleEmptyIcon from '@/icons/circle-empty-icon'
import CircleHalfIcon from '@/icons/circle-half-icon'
import CircleThreeQuartersIcon from '@/icons/circle-three-quarters-icon'
import Section from '@/sections/section'
import CircleFullIcon from '../icons/circle-full-icon'

export default function WorkflowSection() {
  return (
    <Section className="flex flex-col divide-neutral-200 @max-5xl:divide-y @5xl:h-177.5 @5xl:flex-row @5xl:divide-x">
      <div className="flex w-full flex-col divide-neutral-200 @max-3xl:divide-y @3xl:flex-row @3xl:divide-x">
        <TextPanel />
        <StepsPanel />
      </div>
      <StatusesPanel />
    </Section>
  )
}

function TextPanel() {
  return (
    <div className="flex w-full flex-col justify-between gap-8 p-6 md:p-8 @3xl:max-w-79">
      <div className="flex flex-col gap-2">
        <Badge color="sky">Workflow</Badge>
        <Section.Heading2>
          Your issue workflow <br />
          <span className="text-neutral-500">from idea to done</span>
        </Section.Heading2>
        <Section.Paragraph>
          Start with an idea. Work through steps. Mark it finished. Everything
          shows up there, so you stay on track
        </Section.Paragraph>
      </div>
      <Button href="/" variant="link" rightIcon={<ArrowRightIcon />}>
        Explore Workflow
      </Button>
    </div>
  )
}

function StepsPanel() {
  return (
    <div className="flex w-full overflow-hidden bg-[radial-gradient(circle,var(--color-neutral-200)_1px,transparent_1px)] bg-size-[--spacing(2.5)_--spacing(2.5)] px-4 py-8">
      <div className="m-auto">
        <article className="flex w-max items-center gap-2 rounded-lg bg-white p-2.5 shadow-sm ring ring-black/10">
          <BulbIcon />
          <h3 className="text-xs font-medium text-neutral-900">
            New feature idea
          </h3>
        </article>
        <div className="relative mt-px ml-5 pt-6 before:absolute before:top-0 before:left-0 before:h-[calc(100%-(--spacing(11)))] before:w-px before:bg-neutral-300">
          <ul className="flex flex-col gap-8">
            <li className="flex gap-px">
              <div className="h-2 w-4 shrink-0 translate-y-8.25 rounded-bl-full border-b border-l border-b-neutral-300 border-l-neutral-300" />
              <article className="flex w-full flex-col rounded-lg bg-white shadow-sm ring ring-black/10">
                <div className="flex w-full items-center justify-between border-b border-b-neutral-300 p-2.5">
                  <div className="flex items-center gap-2">
                    <CircleDashedIcon />
                    <h3 className="text-sm font-medium text-neutral-900">
                      Create an Issue
                    </h3>
                  </div>
                  <span className="text-xs text-neutral-600">1/5</span>
                </div>
                <div className="p-2.5">
                  <p className="text-xs text-nowrap text-neutral-600">
                    Add title, describe the issue, set priority and tag
                  </p>
                </div>
              </article>
            </li>
            <li className="flex gap-px">
              <div className="h-2 w-4 shrink-0 translate-y-8.25 rounded-bl-full border-b border-l border-b-neutral-300 border-l-neutral-300" />
              <article className="flex w-full flex-col rounded-lg bg-white shadow-sm ring ring-black/10">
                <div className="flex w-full items-center justify-between border-b border-b-neutral-300 p-2.5">
                  <div className="flex items-center gap-2">
                    <CircleEmptyIcon />
                    <h3 className="text-sm font-medium text-neutral-900">
                      Move to Todo
                    </h3>
                  </div>
                  <span className="text-xs text-neutral-600">2/5</span>
                </div>
                <div className="p-2.5">
                  <p className="text-xs text-nowrap text-neutral-600">
                    Add details, estimate effort, and plan upcoming work
                  </p>
                </div>
              </article>
            </li>
            <li className="flex gap-px">
              <div className="h-2 w-4 shrink-0 translate-y-8.25 rounded-bl-full border-b border-l border-b-neutral-300 border-l-neutral-300" />
              <article className="flex w-full flex-col rounded-lg bg-white shadow-sm ring ring-black/10">
                <div className="flex w-full items-center justify-between border-b border-b-neutral-300 p-2.5">
                  <div className="flex items-center gap-2">
                    <CircleHalfIcon />
                    <h3 className="text-sm font-medium text-neutral-900">
                      Start work
                    </h3>
                  </div>
                  <span className="text-xs text-neutral-600">3/5</span>
                </div>
                <div className="p-2.5">
                  <p className="text-xs text-nowrap text-neutral-600">
                    Actively work on the issue and update its status
                  </p>
                </div>
              </article>
            </li>
            <li className="flex gap-px">
              <div className="h-2 w-4 shrink-0 translate-y-8.25 rounded-bl-full border-b border-l border-b-neutral-300 border-l-neutral-300" />
              <article className="flex w-full flex-col rounded-lg bg-white shadow-sm ring ring-black/10">
                <div className="flex w-full items-center justify-between border-b border-b-neutral-300 p-2.5">
                  <div className="flex items-center gap-2">
                    <CircleThreeQuartersIcon />
                    <h3 className="text-sm font-medium text-neutral-900">
                      Submit for review
                    </h3>
                  </div>
                  <span className="text-xs text-neutral-600">4/5</span>
                </div>
                <div className="p-2.5">
                  <p className="text-xs text-nowrap text-neutral-600">
                    Request feedback or approval before completion
                  </p>
                </div>
              </article>
            </li>
            <li className="flex gap-px">
              <div className="h-2 w-4 shrink-0 translate-y-8.25 rounded-bl-full border-b border-l border-b-neutral-300 border-l-neutral-300" />
              <article className="flex w-full flex-col rounded-lg bg-white shadow-sm ring ring-black/10">
                <div className="flex w-full items-center justify-between border-b border-b-neutral-300 p-2.5">
                  <div className="flex items-center gap-2">
                    <CircleFullIcon />
                    <h3 className="text-sm font-medium text-neutral-900">
                      Finish and close
                    </h3>
                  </div>
                  <span className="text-xs text-neutral-600">5/5</span>
                </div>
                <div className="p-2.5">
                  <p className="text-xs text-nowrap text-neutral-600">
                    Confirm done, document results, and close the issue
                  </p>
                </div>
              </article>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

function StatusesPanel() {
  return (
    <div className="flex w-full flex-col @5xl:max-w-79">
      <div className="flex h-full items-center justify-center p-6 md:p-8">
        <ul className="flex flex-col gap-2 @5xl:w-full">
          <li className="flex items-center gap-2 p-2.5">
            <CircleDashedIcon />
            <h4 className="text-sm font-medium text-neutral-900">Backlog</h4>
          </li>
          <li className="flex items-center gap-2 p-2.5">
            <CircleEmptyIcon />
            <h4 className="text-sm font-medium text-neutral-900">Todo</h4>
          </li>
          <li className="flex items-center gap-2 p-2.5">
            <CircleHalfIcon />
            <h4 className="text-sm font-medium text-neutral-900">
              In Progress
            </h4>
          </li>
          <li className="flex items-center gap-2 p-2.5">
            <CircleThreeQuartersIcon />
            <h4 className="text-sm font-medium text-neutral-900">In Review</h4>
          </li>
          <li className="flex items-center gap-2 p-2.5">
            <CircleFullIcon />
            <h4 className="text-sm font-medium text-neutral-900">Finished</h4>
          </li>
        </ul>
      </div>
      <div className="relative mt-auto hidden aspect-square w-full items-center justify-center border-t border-t-neutral-200 @5xl:flex">
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
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <g clipPath="url(#a)">
        <path
          strokeDasharray="2 2"
          d="M50 20.267c13.731 0 26.139 3.367 35.097 8.784C94.064 34.473 99.5 41.894 99.5 50c0 8.106-5.436 15.528-14.403 20.95C76.139 76.366 63.73 79.732 50 79.732c-13.731 0-26.139-3.365-35.097-8.782C5.936 65.528.5 58.106.5 50s5.436-15.527 14.403-20.95C23.861 23.635 36.27 20.268 50 20.268Z"
          className="animate-dash-shift stroke-neutral-400"
        />
      </g>
      <g clipPath="url(#b)">
        <path
          strokeDasharray="2 2"
          d="M46.014 45.257c10.564-8.865 20.622-16.285 28.34-21.118 3.862-2.419 7.12-4.178 9.553-5.148 1.22-.486 2.203-.763 2.937-.837.759-.076 1.106.077 1.25.248.143.171.234.54.027 1.274-.2.71-.643 1.631-1.334 2.748-1.378 2.228-3.676 5.13-6.728 8.514-6.1 6.761-15.155 15.377-25.72 24.241C43.777 64.044 33.718 71.466 26 76.3c-3.861 2.418-7.119 4.177-9.552 5.148-1.22.486-2.204.762-2.938.836-.76.076-1.106-.077-1.25-.248-.143-.171-.234-.54-.027-1.274.2-.71.643-1.63 1.334-2.747 1.378-2.228 3.676-5.131 6.728-8.514 6.1-6.761 15.155-15.379 25.72-24.243Z"
          className="animate-dash-shift stroke-neutral-400"
        />
      </g>
      <g clipPath="url(#c)">
        <path
          strokeDasharray="2 2"
          d="M79.965 50c0 13.731-3.367 26.139-8.783 35.097C65.76 94.064 58.338 99.5 50.232 99.5c-8.105 0-15.528-5.436-20.95-14.403C23.866 76.139 20.5 63.73 20.5 50c0-13.731 3.366-26.139 8.782-35.097C34.704 5.936 42.127.5 50.232.5c8.106 0 15.528 5.436 20.95 14.403C76.598 23.861 79.965 36.27 79.965 50Z"
          className="animate-dash-shift stroke-neutral-400"
        />
      </g>
      <g clipPath="url(#d)">
        <path
          className="stroke-black"
          d="M79.732 50c0 13.731-3.366 26.139-8.783 35.097C65.527 94.064 58.106 99.5 50 99.5c-8.106 0-15.528-5.436-20.95-14.403C23.633 76.139 20.268 63.73 20.268 50c0-13.731 3.365-26.139 8.782-35.097C34.472 5.936 41.894.5 50 .5s15.527 5.436 20.95 14.403C76.365 23.861 79.731 36.27 79.731 50Z"
        />
      </g>
      <g clipPath="url(#e)">
        <path
          className="stroke-black"
          d="M46.019 45.253c10.564-8.864 20.622-16.285 28.34-21.118 3.861-2.419 7.12-4.178 9.553-5.148 1.22-.486 2.203-.763 2.937-.837.759-.076 1.106.077 1.25.248.143.171.233.54.027 1.274-.2.71-.643 1.631-1.334 2.748-1.378 2.228-3.676 5.131-6.728 8.514-6.1 6.761-15.155 15.377-25.72 24.242-10.564 8.864-20.622 16.286-28.34 21.12-3.861 2.418-7.12 4.176-9.552 5.147-1.22.486-2.204.763-2.939.836-.758.076-1.105-.077-1.249-.248-.144-.171-.234-.54-.027-1.274.2-.71.643-1.63 1.334-2.747 1.378-2.228 3.676-5.131 6.728-8.514 6.1-6.761 15.155-15.378 25.72-24.243Z"
        />
      </g>
      <g clipPath="url(#f)">
        <path
          className="stroke-black"
          d="M50 20.5c13.731 0 26.139 3.367 35.097 8.783C94.064 34.705 99.5 42.127 99.5 50.233c0 8.105-5.436 15.527-14.403 20.95C76.139 76.599 63.73 79.965 50 79.965c-13.731 0-26.139-3.366-35.097-8.782C5.936 65.76.5 58.338.5 50.233c0-8.106 5.436-15.528 14.403-20.95C23.861 23.867 36.27 20.5 50 20.5Z"
        />
      </g>
      <circle cx="50" cy="50" r="49.5" className="stroke-black" />
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 50h100v30H0z" />
        </clipPath>
        <clipPath id="b">
          <path
            fill="#fff"
            d="m11.875 82.356 76.607-64.28 4.484 5.344L16.36 87.701z"
          />
        </clipPath>
        <clipPath id="c">
          <path fill="#fff" d="M20 0h30v100H20z" />
        </clipPath>
        <clipPath id="d">
          <path fill="#fff" d="M50 0h30v100H50z" />
        </clipPath>
        <clipPath id="e">
          <path
            fill="#fff"
            d="m7.396 77.008 76.602-64.276 4.485 5.344L11.88 82.353z"
          />
        </clipPath>
        <clipPath id="f">
          <path fill="#fff" d="M0 20h100v30H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}
