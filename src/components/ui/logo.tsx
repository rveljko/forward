import LogoIcon from '@icons/logo-icon'

type LogoProps = {
  hideText?: boolean
}

export default function Logo({ hideText }: LogoProps) {
  return (
    <div className="text-clickable group/logo flex items-center gap-1">
      <span className="shrink-0">
        <LogoIcon className="[--clip-path:polygon(0_0,100%_0,100%_100%,0_100%)] group-hover/logo:[&_rect]:[clip-path:var(--clip-path)] pointer-coarse:group-active/logo:[&_rect]:[clip-path:var(--clip-path)]" />
      </span>
      <span className={`text-xl font-semibold ${hideText ? 'hidden' : ''}`}>
        Forward
      </span>
    </div>
  )
}
