import LogoIcon from '@icons/logo-icon'

type LogoProps = {
  hideText?: boolean
}

export default function Logo({ hideText }: LogoProps) {
  return (
    <div className="text-clickable group flex items-center gap-1">
      <span className="shrink-0">
        <LogoIcon className="[--clip-path:_polygon(0_0,_100%_0,_100%_100%,_0_100%)] group-hover:[&_rect]:[clip-path:var(--clip-path)] pointer-coarse:group-active:[&_rect]:[clip-path:var(--clip-path)]" />
      </span>
      <span className={`text-xl font-semibold ${hideText ? 'hidden' : ''}`}>
        Forward
      </span>
    </div>
  )
}
