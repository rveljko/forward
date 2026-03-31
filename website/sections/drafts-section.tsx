import DraftsPageDashboard from '@/components/drafts-page-dashboard'
import Badge from '@/components/ui/badge'
import Button from '@/components/ui/button'
import ArrowRightIcon from '@/icons/arrow-right-icon'
import Section from '@/sections/section'

export default function DraftsSection() {
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
          <Badge color="violet">Drafts</Badge>
          <Section.Heading2>
            Note-taking space <br />
            <span className="text-neutral-500">for your ideas</span>
          </Section.Heading2>
          <Section.Paragraph>
            Create rich text notes in personal workspaces, edit freely like a
            document editor
          </Section.Paragraph>
        </div>
        <Button
          href="https://dashboard-forward-demo-app.netlify.app/drafts"
          target="_blank"
          rel="noopener noreferrer"
          variant="link"
          rightIcon={<ArrowRightIcon />}
        >
          Explore Drafts
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
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <g clipPath="url(#clip0_1151_422)">
        <path
          strokeDasharray="2 2"
          d="M50 20.2675C63.7314 20.2675 76.1388 23.6342 85.0967 29.0507C94.0638 34.4727 99.4999 41.8942 99.5 49.9999C99.5 58.1057 94.064 65.528 85.0967 70.9501C76.1388 76.3665 63.7314 79.7323 50 79.7323C36.2686 79.7323 23.8612 76.3665 14.9033 70.9501C5.93604 65.528 0.5 58.1057 0.5 49.9999C0.500061 41.8942 5.93623 34.4727 14.9033 29.0507C23.8612 23.6342 36.2686 20.2675 50 20.2675Z"
          className="animate-dash-shift stroke-neutral-400"
        />
      </g>
      <g clipPath="url(#clip1_1151_422)">
        <path
          strokeDasharray="2 2"
          d="M79.9648 50C79.9648 63.7314 76.5981 76.1388 71.1816 85.0967C65.7596 94.0638 58.3381 99.4999 50.2324 99.5C42.1266 99.5 34.7043 94.064 29.2822 85.0967C23.8658 76.1388 20.5 63.7314 20.5 50C20.5 36.2686 23.8658 23.8612 29.2822 14.9033C34.7043 5.93604 42.1266 0.499998 50.2324 0.499999C58.3381 0.50006 65.7596 5.93623 71.1816 14.9033C76.5981 23.8612 79.9648 36.2686 79.9648 50Z"
          className="animate-dash-shift stroke-neutral-400"
        />
      </g>
      <g clipPath="url(#clip2_1151_422)">
        <path
          d="M79.7324 50C79.7324 63.7314 76.3656 76.1388 70.9492 85.0967C65.5272 94.0638 58.1056 99.4999 50 99.5C41.8942 99.5 34.4719 94.064 29.0498 85.0967C23.6334 76.1388 20.2676 63.7314 20.2676 50C20.2676 36.2686 23.6334 23.8612 29.0498 14.9033C34.4719 5.93604 41.8942 0.499998 50 0.499999C58.1057 0.50006 65.5272 5.93623 70.9492 14.9033C76.3656 23.8612 79.7324 36.2686 79.7324 50Z"
          className="stroke-black"
        />
      </g>
      <g clipPath="url(#clip3_1151_422)">
        <path
          d="M50 20.5C63.7314 20.5 76.1388 23.8668 85.0967 29.2832C94.0638 34.7052 99.4999 42.1268 99.5 50.2324C99.5 58.3382 94.064 65.7605 85.0967 71.1826C76.1388 76.599 63.7314 79.9648 50 79.9648C36.2686 79.9648 23.8612 76.599 14.9033 71.1826C5.93604 65.7605 0.5 58.3382 0.5 50.2324C0.500061 42.1268 5.93623 34.7052 14.9033 29.2832C23.8612 23.8668 36.2686 20.5 50 20.5Z"
          className="stroke-black"
        />
      </g>
      <circle cx="50" cy="50" r="29.5" className="stroke-black" />
      <defs>
        <clipPath id="clip0_1151_422">
          <rect
            width="100"
            height="30"
            fill="white"
            transform="translate(0 50)"
          />
        </clipPath>
        <clipPath id="clip1_1151_422">
          <rect
            width="30"
            height="100"
            fill="white"
            transform="translate(20)"
          />
        </clipPath>
        <clipPath id="clip2_1151_422">
          <rect
            width="30"
            height="100"
            fill="white"
            transform="translate(50)"
          />
        </clipPath>
        <clipPath id="clip3_1151_422">
          <rect
            width="100"
            height="30"
            fill="white"
            transform="translate(0 20)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}

function DashboardPanel() {
  return (
    <div className="flex w-full items-center justify-center px-6 py-8 @5xl:p-16">
      <DraftsPageDashboard />
    </div>
  )
}
