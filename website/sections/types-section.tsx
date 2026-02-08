import Badge from '@/components/ui/badge'
import Button from '@/components/ui/button'
import ArrowRightIcon from '@/icons/arrow-right-icon'
import BrainIcon from '@/icons/brain-icon'
import CalendarIcon from '@/icons/calendar-icon'
import CheckboxIcon from '@/icons/checkbox-icon'
import CircleDashedIcon from '@/icons/circle-dashed-icon'
import CircleEmptyIcon from '@/icons/circle-empty-icon'
import DevelopmentIssueTagIcon from '@/icons/development-issue-tag-icon'
import FolderIcon from '@/icons/folder-icon'
import LogoIcon from '@/icons/logo-icon'
import PriorityHighIcon from '@/icons/priority-high-icon'
import PriorityIcon from '@/icons/priority-icon'
import TagIcon from '@/icons/tag-icon'
import UserIcon from '@/icons/user-icon'
import Section from '@/sections/section'
import { dayMonthShortFormatter } from '@/utils/date-formatters'
import Image from 'next/image'

export default function TypesSection() {
  return (
    <Section className="flex flex-col divide-neutral-200 @max-5xl:divide-y @5xl:h-177.5 @5xl:flex-row @5xl:divide-x">
      <div className="flex w-full flex-col divide-neutral-200 @max-3xl:divide-y @3xl:flex-row @3xl:divide-x">
        <TextPanel />
        <TypesPanel />
      </div>
      <IssueInformationPanel />
    </Section>
  )
}

function TextPanel() {
  return (
    <div className="flex w-full flex-col justify-between gap-8 p-6 md:p-8 @3xl:max-w-79">
      <div className="flex flex-col gap-2">
        <Badge color="rose">Types</Badge>
        <Section.Heading2>
          Any problem type <br />
          <span className="text-neutral-500">tasks issues drafts</span>
        </Section.Heading2>
        <Section.Paragraph>
          Tasks run your daily to-do checklist. Issues track bugs or fixes.
          Drafts hold your quick notes
        </Section.Paragraph>
      </div>
      <Button href="/" variant="link" rightIcon={<ArrowRightIcon />}>
        Explore Types
      </Button>
    </div>
  )
}

function TypesPanel() {
  return (
    <div className="flex w-full overflow-hidden bg-[radial-gradient(circle,var(--color-neutral-200)_1px,transparent_1px)] bg-size-[--spacing(2.5)_--spacing(2.5)] px-6 py-8">
      <div className="m-auto">
        <div className="flex flex-col">
          <div className="mx-auto mb-px flex size-16 items-center justify-center rounded-lg bg-white shadow-sm ring ring-black/10 [&_svg]:size-6">
            <LogoIcon />
          </div>
          <div className="relative h-16">
            <div className="absolute top-0 right-1/2 left-12.5 flex h-full pr-2.25 pb-px">
              <div className="mt-auto h-1/2 w-8 shrink-0 rounded-tl-lg border-t border-l border-neutral-300" />
              <div className="mb-auto h-[calc(50%+1px)] w-full rounded-br-lg border-r border-b border-neutral-300" />
            </div>
            <div className="mx-auto h-full w-px bg-neutral-300" />
            <div className="absolute top-0 right-12.5 left-1/2 flex h-full pb-px pl-2">
              <div className="mb-auto h-[calc(50%+1px)] w-full rounded-bl-lg border-b border-l border-neutral-300" />
              <div className="mt-auto h-1/2 w-8 shrink-0 rounded-tr-lg border-t border-r border-neutral-300" />
            </div>
          </div>
          <div className="mb-px flex gap-6">
            <div className="flex flex-col gap-px">
              <article className="flex w-25 items-center justify-center gap-2 rounded-lg bg-white p-2.5 shadow-sm ring ring-black/10">
                <CheckboxIcon />
                <h3 className="text-sm font-medium text-neutral-900">Tasks</h3>
              </article>
              <div className="mx-auto h-6 w-px bg-neutral-300" />
              <article className="flex w-25 items-center justify-center gap-2 rounded-lg bg-white p-2.5 shadow-sm ring ring-black/10">
                <CheckboxIcon />
                <h3 className="text-sm font-medium text-neutral-900">Task</h3>
              </article>
            </div>
            <div className="flex flex-col gap-px">
              <div className="mx-auto h-full w-px bg-neutral-300" />
              <article className="flex w-25 items-center justify-center gap-2 rounded-lg bg-white p-2.5 shadow-sm ring ring-black/10">
                <FolderIcon />
                <h3 className="text-sm font-medium text-neutral-900">Issues</h3>
              </article>
            </div>
            <div className="flex flex-col gap-px">
              <article className="flex w-25 items-center justify-center gap-2 rounded-lg bg-white p-2.5 shadow-sm ring ring-black/10">
                <BrainIcon />
                <h3 className="text-sm font-medium text-neutral-900">Drafts</h3>
              </article>
              <div className="mx-auto h-6 w-px bg-neutral-300" />
              <article className="flex w-25 items-center justify-center gap-2 rounded-lg bg-white p-2.5 shadow-sm ring ring-black/10">
                <BrainIcon />
                <h3 className="text-sm font-medium text-neutral-900">Draft</h3>
              </article>
            </div>
          </div>
          <div className="relative mb-px h-16">
            <div className="absolute top-0 right-1/2 left-12.5 flex h-full pr-2.25">
              <div className="mt-auto h-1/2 w-8 shrink-0 rounded-tl-lg border-t border-l border-neutral-300" />
              <div className="mb-auto h-[calc(50%+1px)] w-full rounded-br-lg border-r border-b border-neutral-300" />
            </div>
            <div className="mx-auto h-full w-px bg-neutral-300" />
            <div className="absolute top-0 right-12.5 left-1/2 flex h-full pl-2">
              <div className="mb-auto h-[calc(50%+1px)] w-full rounded-bl-lg border-b border-l border-neutral-300" />
              <div className="mt-auto h-1/2 w-8 shrink-0 rounded-tr-lg border-t border-r border-neutral-300" />
            </div>
          </div>
          <div className="flex gap-6">
            <article className="flex w-25 items-center justify-center gap-2 rounded-lg bg-white p-2.5 shadow-sm ring ring-black/10">
              <CircleEmptyIcon />
              <h3 className="text-sm font-medium text-neutral-900">Status</h3>
            </article>
            <article className="flex w-25 items-center justify-center gap-2 rounded-lg bg-white p-2.5 shadow-sm ring ring-black/10">
              <PriorityIcon />
              <h3 className="text-sm font-medium text-neutral-900">Priority</h3>
            </article>
            <article className="flex w-25 items-center justify-center gap-2 rounded-lg bg-white p-2.5 shadow-sm ring ring-black/10">
              <TagIcon />
              <h3 className="text-sm font-medium text-neutral-900">Tag</h3>
            </article>
          </div>
        </div>
      </div>
    </div>
  )
}

function IssueInformationPanel() {
  return (
    <div className="flex w-full flex-col @5xl:max-w-79">
      <div className="relative isolate flex h-full items-center justify-center p-6 md:p-8">
        <div className="absolute inset-0 -z-1 hidden justify-evenly @5xl:flex">
          <div className="h-full border-r border-dashed border-r-neutral-200" />
          <div className="h-full border-r border-dashed border-r-neutral-200" />
        </div>
        <article className="max-w-63 rounded-lg bg-white shadow-sm ring ring-black/10">
          <header className="flex flex-col gap-2 border-b border-b-neutral-300 p-2.5">
            <div className="flex size-9 items-center justify-center rounded-lg border border-neutral-300 bg-white">
              <CircleDashedIcon />
            </div>
            <h4 className="text-sm font-medium text-neutral-900">
              Implement Notification System
            </h4>
            <p className="line-clamp-2 text-xs text-neutral-600">
              Build a notification system that keeps users updated about
              important events in their projects and issues. This should help
              users stay on top of changes like new comments, status updates,
              assignments, and deadlines.
            </p>
          </header>
          <div className="p-2.5">
            <h5 className="mb-2 text-xs font-medium text-neutral-900">
              Properties
            </h5>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <div className="flex w-full max-w-20 items-center gap-1">
                  <span className="[&_svg]:size-4">
                    <UserIcon />
                  </span>
                  <span className="text-xs text-neutral-600">Author</span>
                </div>
                <div className="flex w-full max-w-20 items-center gap-1">
                  <span className="size-4 shrink-0 overflow-hidden rounded-full">
                    <Image
                      src="/images/james-williams.png"
                      alt="James Williams"
                      width={256}
                      height={256}
                      className="object-cover"
                    />
                  </span>
                  <span className="text-xs text-nowrap text-neutral-900">
                    James Williams
                  </span>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <div className="flex w-full max-w-20 items-center gap-1">
                  <span className="[&_svg]:size-4">
                    <CalendarIcon />
                  </span>
                  <span className="text-xs text-neutral-600">Started</span>
                </div>
                <span className="text-xs text-nowrap text-neutral-900">
                  {dayMonthShortFormatter(new Date())}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <div className="flex w-full max-w-20 items-center gap-1">
                  <span className="[&_svg]:size-4">
                    <CircleEmptyIcon />
                  </span>
                  <span className="text-xs text-neutral-600">Status</span>
                </div>
                <div className="flex w-full max-w-20 items-center gap-1">
                  <span className="[&_svg]:size-4">
                    <CircleDashedIcon />
                  </span>
                  <span className="text-xs text-nowrap text-neutral-900">
                    Backlog
                  </span>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <div className="flex w-full max-w-20 items-center gap-1">
                  <span className="[&_svg]:size-4">
                    <PriorityIcon />
                  </span>
                  <span className="text-xs text-neutral-600">Priority</span>
                </div>
                <div className="flex w-full max-w-20 items-center gap-1">
                  <span className="[&_svg]:size-4">
                    <PriorityHighIcon />
                  </span>
                  <span className="text-xs text-nowrap text-neutral-900">
                    High
                  </span>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <div className="flex w-full max-w-20 items-center gap-1">
                  <span className="[&_svg]:size-4">
                    <TagIcon />
                  </span>
                  <span className="text-xs text-neutral-600">Tag</span>
                </div>
                <div className="flex w-full max-w-20 items-center gap-1">
                  <span className="[&_svg]:size-4">
                    <DevelopmentIssueTagIcon />
                  </span>
                  <span className="text-xs text-nowrap text-neutral-900">
                    Development
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </article>
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
      <g clipPath="url(#clip0_760_449)">
        <g clipPath="url(#clip1_760_449)">
          <path
            strokeDasharray="2 2"
            d="M46.0137 45.2569C56.5779 36.3924 66.6362 28.9715 74.3537 24.1386C78.2155 21.7202 81.4734 19.9614 83.9067 18.991C85.1264 18.5046 86.11 18.2276 86.8441 18.1541C87.603 18.0783 87.95 18.231 88.0937 18.4021C88.2374 18.5733 88.3275 18.9414 88.1209 19.6757C87.9211 20.386 87.4782 21.3072 86.7874 22.424C85.4092 24.6518 83.1112 27.5549 80.059 30.938C73.9594 37.699 64.904 46.3151 54.3398 55.1795C43.7755 64.0441 33.7173 71.4662 25.9998 76.2991C22.138 78.7175 18.88 80.4764 16.4467 81.4468C15.2269 81.9332 14.2428 82.2094 13.5087 82.2829C12.7496 82.3588 12.4027 82.2061 12.2591 82.0349C12.1155 81.8637 12.0254 81.4954 12.2319 80.7613C12.4317 80.051 12.8753 79.1305 13.5661 78.0138C14.9443 75.786 17.2422 72.8829 20.2944 69.4997C26.3941 62.7387 35.4494 54.1214 46.0137 45.2569Z"
            className="animate-dash-shift stroke-neutral-400"
          />
        </g>
        <g clipPath="url(#clip2_760_449)">
          <path
            strokeDasharray="2 2"
            d="M54.1162 45.062C43.5519 36.1976 33.4937 28.7767 25.7762 23.9438C21.9144 21.5254 18.6565 19.7665 16.2231 18.7961C15.0035 18.3097 14.0199 18.0328 13.2857 17.9593C12.5269 17.8834 12.1798 18.0362 12.0362 18.2073C11.8925 18.3784 11.8024 18.7466 12.0089 19.4809C12.2088 20.1912 12.6517 21.1123 13.3425 22.2291C14.7207 24.457 17.0187 27.3601 20.0709 30.7432C26.1705 37.5042 35.2259 46.1203 45.7901 54.9847C56.3544 63.8492 66.4126 71.2713 74.1301 76.1043C77.9919 78.5227 81.2499 80.2816 83.6832 81.252C84.903 81.7384 85.8871 82.0146 86.6212 82.0881C87.3803 82.1639 87.7272 82.0113 87.8708 81.8401C88.0144 81.6689 88.1045 81.3006 87.898 80.5664C87.6982 79.8562 87.2546 78.9357 86.5638 77.819C85.1856 75.5911 82.8877 72.6881 79.8355 69.3049C73.7358 62.5439 64.6805 53.9266 54.1162 45.062Z"
            className="animate-dash-shift stroke-neutral-400"
          />
        </g>
        <g clipPath="url(#clip3_760_449)">
          <path
            strokeDasharray="2 2"
            d="M71.1883 28.8119C80.8979 38.5215 87.2905 49.6755 89.7947 59.8397C92.3015 70.0143 90.8976 79.1061 85.1661 84.8377C79.4344 90.5694 70.3422 91.9739 60.1674 89.467C50.0032 86.9628 38.8498 80.5694 29.1403 70.8599C19.4308 61.1504 13.0374 49.997 10.5332 39.8328C8.02635 29.658 9.43088 20.5658 15.1625 14.8341C20.8941 9.10261 29.9859 7.69875 40.1605 10.2055C50.3247 12.7097 61.4787 19.1024 71.1883 28.8119Z"
            className="animate-dash-shift stroke-neutral-400"
          />
        </g>
        <g clipPath="url(#clip4_760_449)">
          <path
            strokeDasharray="2 2"
            d="M71.0245 71.0247C61.3149 80.7343 50.1609 87.1269 39.9967 89.6312C29.8221 92.1379 20.7303 90.734 14.9987 85.0025C9.26707 79.2709 7.86255 70.1786 10.3694 60.0038C12.8736 49.8396 19.267 38.6863 28.9765 28.9767C38.686 19.2672 49.8394 12.8738 60.0036 10.3696C70.1784 7.86277 79.2707 9.2673 85.0023 14.999C90.7338 20.7306 92.1377 29.8223 89.6309 39.997C87.1267 50.1612 80.7341 61.3152 71.0245 71.0247Z"
            className="animate-dash-shift stroke-neutral-400"
          />
        </g>
        <g clipPath="url(#clip5_760_449)">
          <path
            d="M71.1886 71.189C61.479 80.8986 50.325 87.2913 40.1608 89.7955C29.9862 92.3022 20.8944 90.8983 15.1628 85.1668C9.43114 79.4352 8.02661 70.3429 10.5334 60.1681C13.0377 50.004 19.431 38.8506 29.1406 29.141C38.8501 19.4315 50.0035 13.0382 60.1676 10.5339C70.3425 8.02708 79.4347 9.43161 85.1664 15.1633C90.8979 20.8949 92.3017 29.9866 89.795 40.1613C87.2908 50.3255 80.8981 61.4795 71.1886 71.189Z"
            className="stroke-black"
          />
        </g>
        <g clipPath="url(#clip6_760_449)">
          <path
            d="M54.0947 45.0437C43.5305 36.1793 33.4722 28.7584 25.7547 23.9255C21.8929 21.5071 18.635 19.7482 16.2017 18.7778C14.982 18.2914 13.9984 18.0145 13.2643 17.941C12.5054 17.8651 12.1584 18.0178 12.0147 18.189C11.871 18.3601 11.7809 18.7283 11.9875 19.4626C12.1873 20.1729 12.6302 21.094 13.321 22.2108C14.6992 24.4387 16.9972 27.3417 20.0494 30.7249C26.149 37.4859 35.2044 46.102 45.7686 54.9664C56.3329 63.8309 66.3911 71.253 74.1086 76.086C77.9704 78.5044 81.2284 80.2633 83.6617 81.2337C84.8815 81.7201 85.8656 81.9963 86.5997 82.0697C87.3588 82.1456 87.7057 81.993 87.8493 81.8218C87.9929 81.6506 88.083 81.2823 87.8765 80.5481C87.6767 79.8379 87.2331 78.9174 86.5423 77.8007C85.1641 75.5728 82.8662 72.6698 79.814 69.2866C73.7143 62.5256 64.659 53.9083 54.0947 45.0437Z"
            className="stroke-black"
          />
        </g>
        <g clipPath="url(#clip7_760_449)">
          <path
            d="M46.0186 45.253C56.5828 36.3885 66.6411 28.9676 74.3585 24.1347C78.2204 21.7163 81.4783 19.9575 83.9116 18.9871C85.1313 18.5007 86.1149 18.2237 86.849 18.1502C87.6078 18.0744 87.9549 18.2271 88.0986 18.3982C88.2422 18.5693 88.3323 18.9375 88.1258 19.6718C87.926 20.3821 87.4831 21.3033 86.7922 22.42C85.414 24.6479 83.1161 27.551 80.0639 30.9341C73.9643 37.6951 64.9089 46.3112 54.3447 55.1756C43.7804 64.0402 33.7222 71.4623 26.0047 76.2952C22.1429 78.7136 18.8849 80.4725 16.4516 81.4429C15.2318 81.9293 14.2477 82.2055 13.5135 82.279C12.7545 82.3549 12.4076 82.2022 12.264 82.031C12.1204 81.8598 12.0303 81.4915 12.2368 80.7574C12.4366 80.0471 12.8801 79.1266 13.5709 78.0099C14.9491 75.7821 17.247 72.879 20.2993 69.4958C26.399 62.7348 35.4543 54.1175 46.0186 45.253Z"
            className="stroke-black"
          />
        </g>
        <g clipPath="url(#clip8_760_449)">
          <path
            d="M71.0242 28.9764C80.7338 38.6859 87.1265 49.8399 89.6307 60.0041C92.1374 70.1788 90.7335 79.2705 85.002 85.0021C79.2704 90.7338 70.1781 92.1383 60.0033 89.6315C49.8392 87.1272 38.6858 80.7339 28.9762 71.0243C19.2667 61.3148 12.8734 50.1614 10.3691 39.9973C7.86228 29.8225 9.26682 20.7302 14.9985 14.9986C20.7301 9.26704 29.8218 7.86317 39.9965 10.3699C50.1607 12.8741 61.3147 19.2668 71.0242 28.9764Z"
            className="stroke-black"
          />
        </g>
        <circle cx="50" cy="50" r="49.5" className="stroke-black" />
      </g>
      <defs>
        <clipPath id="clip0_760_449">
          <rect width="100" height="100" fill="white" />
        </clipPath>
        <clipPath id="clip1_760_449">
          <rect
            width="100.003"
            height="6.97674"
            fill="white"
            transform="translate(11.875 82.3563) rotate(-40)"
          />
        </clipPath>
        <clipPath id="clip2_760_449">
          <rect
            width="99.67"
            height="6.97674"
            fill="white"
            transform="matrix(-0.766044 -0.642788 -0.642788 0.766044 88.2549 82.1615)"
          />
        </clipPath>
        <clipPath id="clip3_760_449">
          <rect
            width="30"
            height="100"
            fill="white"
            transform="translate(-6.56836 35.8583) rotate(-45)"
          />
        </clipPath>
        <clipPath id="clip4_760_449">
          <rect
            width="30"
            height="100"
            fill="white"
            transform="translate(85.3555 14.6453) rotate(45)"
          />
        </clipPath>
        <clipPath id="clip5_760_449">
          <rect
            width="30"
            height="100"
            fill="white"
            transform="translate(64.1426 -6.56799) rotate(45)"
          />
        </clipPath>
        <clipPath id="clip6_760_449">
          <rect
            width="99.6699"
            height="6.97674"
            fill="white"
            transform="matrix(-0.766044 -0.642788 -0.642788 0.766044 92.7168 76.7987)"
          />
        </clipPath>
        <clipPath id="clip7_760_449">
          <rect
            width="99.9955"
            height="6.97674"
            fill="white"
            transform="translate(7.39648 77.0079) rotate(-40)"
          />
        </clipPath>
        <clipPath id="clip8_760_449">
          <rect
            width="30"
            height="100"
            fill="white"
            transform="translate(14.6445 14.6451) rotate(-45)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}
