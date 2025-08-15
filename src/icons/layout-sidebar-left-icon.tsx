type LayoutSidebarLeftIconProps = {
  className?: string
}

export default function LayoutSidebarLeftIcon({
  className,
}: LayoutSidebarLeftIconProps) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M3.33331 4.99992C3.33331 4.55789 3.50891 4.13397 3.82147 3.82141C4.13403 3.50885 4.55795 3.33325 4.99998 3.33325H15C15.442 3.33325 15.8659 3.50885 16.1785 3.82141C16.4911 4.13397 16.6666 4.55789 16.6666 4.99992V14.9999C16.6666 15.4419 16.4911 15.8659 16.1785 16.1784C15.8659 16.491 15.442 16.6666 15 16.6666H4.99998C4.55795 16.6666 4.13403 16.491 3.82147 16.1784C3.50891 15.8659 3.33331 15.4419 3.33331 14.9999V4.99992Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.49994 3.84912V16.1507"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x="3.33331"
        y="3.33325"
        width="4.16663"
        height="13.3333"
        rx="1"
        fill="currentColor"
        className="transition-all duration-200 ease-in-out [clip-path:_polygon(0_0,_0_0,_0_100%,_0_100%)]"
      />
    </svg>
  )
}
