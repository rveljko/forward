import IssueItem from '@/components/issue-item'
import Badge from '@/components/ui/badge'
import Button from '@/components/ui/button'
import ArrowRightIcon from '@/icons/arrow-right-icon'
import ArrowsSortIcon from '@/icons/arrows-sort-icon'
import CircleDashedIcon from '@/icons/circle-dashed-icon'
import CircleEmptyIcon from '@/icons/circle-empty-icon'
import CircleHalfIcon from '@/icons/circle-half-icon'
import FilterIcon from '@/icons/filters-icon'
import PlusIcon from '@/icons/plus-icon'
import Section from '@/sections/section'

export default function IssuesSection() {
  return (
    <Section className="flex flex-col divide-neutral-200 @max-5xl:divide-y @3xl:flex-row @3xl:divide-x">
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
          <Badge color="cyan">Issues</Badge>
          <Section.Heading2>
            Issues in action <br />
            <span className="text-neutral-500">watch how they work</span>
          </Section.Heading2>
          <Section.Paragraph>
            Create an issue in seconds: Write title, add details, set priority
            and tag. Follow it from open to closed
          </Section.Paragraph>
        </div>
        <Button href="/" variant="link" rightIcon={<ArrowRightIcon />}>
          Explore Issues
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
      <g clipPath="url(#clip0_815_335)">
        <path
          strokeDasharray="2 2"
          d="M46.0137 45.2569C56.5779 36.3924 66.6362 28.9715 74.3537 24.1386C78.2155 21.7202 81.4734 19.9614 83.9067 18.991C85.1264 18.5046 86.11 18.2276 86.8441 18.1541C87.603 18.0783 87.95 18.231 88.0937 18.4021C88.2374 18.5733 88.3275 18.9414 88.1209 19.6757C87.9211 20.386 87.4782 21.3072 86.7874 22.424C85.4092 24.6518 83.1112 27.5549 80.059 30.938C73.9594 37.699 64.904 46.3151 54.3398 55.1795C43.7755 64.0441 33.7173 71.4662 25.9998 76.2991C22.138 78.7175 18.88 80.4764 16.4467 81.4468C15.2269 81.9332 14.2428 82.2094 13.5087 82.2829C12.7496 82.3588 12.4027 82.2061 12.2591 82.0349C12.1155 81.8637 12.0254 81.4954 12.2319 80.7613C12.4317 80.051 12.8753 79.1305 13.5661 78.0138C14.9443 75.786 17.2422 72.8829 20.2944 69.4997C26.3941 62.7387 35.4494 54.1214 46.0137 45.2569Z"
          className="animate-dash-shift stroke-neutral-400"
        />
      </g>
      <g clipPath="url(#clip1_815_335)">
        <path
          d="M46.0186 45.253C56.5828 36.3885 66.6411 28.9676 74.3585 24.1347C78.2204 21.7163 81.4783 19.9575 83.9116 18.9871C85.1313 18.5007 86.1149 18.2237 86.849 18.1502C87.6078 18.0744 87.9549 18.2271 88.0986 18.3982C88.2422 18.5693 88.3323 18.9375 88.1258 19.6718C87.926 20.3821 87.4831 21.3033 86.7922 22.42C85.414 24.6479 83.1161 27.551 80.0639 30.9341C73.9643 37.6951 64.9089 46.3112 54.3447 55.1756C43.7804 64.0402 33.7222 71.4623 26.0047 76.2952C22.1429 78.7136 18.8849 80.4725 16.4516 81.4429C15.2318 81.9293 14.2477 82.2055 13.5135 82.279C12.7545 82.3549 12.4076 82.2022 12.264 82.031C12.1204 81.8598 12.0303 81.4915 12.2368 80.7574C12.4366 80.0471 12.8801 79.1266 13.5709 78.0099C14.9491 75.7821 17.247 72.879 20.2993 69.4958C26.399 62.7348 35.4543 54.1175 46.0186 45.253Z"
          className="stroke-black"
        />
      </g>
      <g clipPath="url(#clip2_815_335)">
        <path
          strokeDasharray="2 2"
          d="M54.3486 45.2569C43.7844 36.3924 33.7261 28.9715 26.0086 24.1386C22.1468 21.7202 18.8889 19.9614 16.4556 18.991C15.2359 18.5046 14.2523 18.2276 13.5182 18.1541C12.7593 18.0783 12.4123 18.231 12.2686 18.4021C12.1249 18.5733 12.0348 18.9414 12.2414 19.6757C12.4412 20.386 12.8841 21.3072 13.5749 22.424C14.9532 24.6518 17.2511 27.5549 20.3033 30.938C26.4029 37.699 35.4583 46.3151 46.0225 55.1795C56.5868 64.0441 66.645 71.4662 74.3625 76.2991C78.2243 78.7175 81.4823 80.4764 83.9156 81.4468C85.1354 81.9332 86.1195 82.2094 86.8536 82.2829C87.6127 82.3588 87.9596 82.2061 88.1032 82.0349C88.2468 81.8637 88.3369 81.4954 88.1304 80.7613C87.9306 80.051 87.487 79.1305 86.7962 78.0138C85.4181 75.786 83.1202 72.8829 80.0679 69.4997C73.9682 62.7387 64.9129 54.1214 54.3486 45.2569Z"
          className="animate-dash-shift stroke-neutral-400"
        />
      </g>
      <g clipPath="url(#clip3_815_335)">
        <path
          d="M54.3437 45.253C43.7795 36.3885 33.7212 28.9676 26.0038 24.1347C22.1419 21.7163 18.884 19.9575 16.4507 18.9871C15.231 18.5007 14.2474 18.2237 13.5133 18.1502C12.7545 18.0744 12.4074 18.2271 12.2637 18.3982C12.1201 18.5693 12.03 18.9375 12.2365 19.6718C12.4363 20.3821 12.8792 21.3033 13.5701 22.42C14.9483 24.6479 17.2462 27.551 20.2984 30.9341C26.398 37.6951 35.4534 46.3112 46.0176 55.1756C56.5819 64.0402 66.6401 71.4623 74.3576 76.2952C78.2194 78.7136 81.4774 80.4725 83.9107 81.4429C85.1305 81.9293 86.1146 82.2055 86.8488 82.279C87.6078 82.3549 87.9547 82.2022 88.0983 82.031C88.2419 81.8598 88.332 81.4915 88.1256 80.7574C87.9257 80.0471 87.4822 79.1266 86.7914 78.0099C85.4132 75.7821 83.1153 72.879 80.063 69.4958C73.9633 62.7348 64.9081 54.1175 54.3437 45.253Z"
          className="stroke-black"
        />
      </g>
      <circle cx="50" cy="50" r="29.5" className="stroke-black" />
      <defs>
        <clipPath id="clip0_815_335">
          <rect
            width="100.003"
            height="6.97674"
            fill="white"
            transform="translate(11.875 82.3563) rotate(-40)"
          />
        </clipPath>
        <clipPath id="clip1_815_335">
          <rect
            width="99.9955"
            height="6.97674"
            fill="white"
            transform="translate(7.39648 77.0079) rotate(-40)"
          />
        </clipPath>
        <clipPath id="clip2_815_335">
          <rect
            width="100.003"
            height="6.97674"
            fill="white"
            transform="matrix(-0.766044 -0.642788 -0.642788 0.766044 88.4873 82.3563)"
          />
        </clipPath>
        <clipPath id="clip3_815_335">
          <rect
            width="99.9955"
            height="6.97674"
            fill="white"
            transform="matrix(-0.766044 -0.642788 -0.642788 0.766044 92.9658 77.0079)"
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
          aria-label="Dashboard Issues page"
          className="bg-dashboard-background pointer-events-none h-144 w-full rounded-b-lg border border-t-0 border-neutral-200 p-4 select-none"
        >
          <div
            aria-hidden
            className="size-full overflow-hidden rounded-lg border border-black/10 bg-white"
          >
            <div className="border-b border-b-black/10 p-4">Issues</div>
            <div className="border-b border-b-black/10 p-4">
              <div className="flex items-center gap-2">
                <span className="bg-dashboard-neutral-200 flex w-max items-center gap-1 rounded-md px-1.5 py-1 text-black shadow-sm">
                  <FilterIcon />
                  Filters
                </span>
                <span className="bg-dashboard-neutral-200 flex w-max items-center gap-1 rounded-md px-1.5 py-1 text-black shadow-sm">
                  <ArrowsSortIcon />
                  Sort
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between bg-black/10 p-4">
              <div className="flex items-center gap-1">
                <CircleDashedIcon />
                Backlog
                <span className="text-dashboard-neutral-600 ml-1">1</span>
              </div>
              <PlusIcon />
            </div>
            <IssueItem
              title="Implement Notification System"
              status="backlog"
              priority="high"
              tag="development"
            />
            <div className="flex items-center justify-between bg-black/10 p-4">
              <div className="flex items-center gap-1">
                <CircleEmptyIcon />
                Todo
                <span className="text-dashboard-neutral-600 ml-1">2</span>
              </div>
              <PlusIcon />
            </div>
            <div className="divide-y divide-black/10">
              <IssueItem
                title="Create and Report Issues"
                status="todo"
                priority="high"
                tag="development"
              />
              <IssueItem
                title="Update Status"
                status="todo"
                priority="medium"
                tag="design"
              />
            </div>
            <div className="flex items-center justify-between bg-black/10 p-4">
              <div className="flex items-center gap-1">
                <CircleHalfIcon />
                In Progress
                <span className="text-dashboard-neutral-600 ml-1">1</span>
              </div>
              <PlusIcon />
            </div>
            <IssueItem
              title="Integrate With Other Tools"
              status="in-progress"
              priority="high"
              tag="development"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
