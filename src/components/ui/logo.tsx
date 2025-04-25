import LogoIcon from '@icons/logo-icon'

type LogoProps = {
  hideText?: boolean
}

export default function Logo({ hideText }: LogoProps) {
  return (
    <div className="text-clickable group flex items-center gap-1">
      <span className="shrink-0">
        <LogoIcon className="group-hover:[&_rect]:[clip-path:_polygon(0_0,_100%_0,_100%_100%,_0_100%)]" />
      </span>
      {!hideText && <span className="text-xl font-semibold">Forward</span>}
    </div>
  )
}
