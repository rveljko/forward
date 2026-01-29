type LogoIconProps = {
  className?: string
}

export default function LogoIcon({ className }: LogoIconProps) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle
        cx="10"
        cy="10"
        r="8.82812"
        stroke="currentColor"
        strokeWidth="2.34375"
      />
      <rect
        x="4.375"
        y="4.375"
        width="11.25"
        height="11.25"
        rx="5.625"
        fill="currentColor"
        className="transition-all duration-200 ease-in-out [clip-path:polygon(100%_0,100%_0,100%_100%,100%_100%)]"
      />
    </svg>
  )
}
