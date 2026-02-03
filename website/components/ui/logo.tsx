import LogoIcon from '@/icons/logo-icon'

export default function Logo() {
  return (
    <div className="group flex w-max items-center gap-1 text-black">
      <span className="shrink-0">
        <LogoIcon className="[--clip-path:polygon(0_0,100%_0,100%_100%,0_100%)] group-hover:[&_rect]:[clip-path:var(--clip-path)] pointer-coarse:group-active:[&_rect]:[clip-path:var(--clip-path)]" />
      </span>
      <span className="text-xl font-semibold">Forward</span>
    </div>
  )
}
