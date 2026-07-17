import LogoIcon from '@icons/logo-icon'
import { AnimatePresence, motion } from 'motion/react'

type LogoProps = {
  hideText?: boolean
}

export default function Logo({ hideText }: LogoProps) {
  return (
    <div className="group/logo relative flex items-center gap-1 text-black">
      <span className="shrink-0">
        <LogoIcon className="[--clip-path:polygon(0_0,100%_0,100%_100%,0_100%)] group-hover/logo:[&_rect]:[clip-path:var(--clip-path)] pointer-coarse:group-active/logo:[&_rect]:[clip-path:var(--clip-path)]" />
      </span>
      <AnimatePresence mode="popLayout" initial={false}>
        {!hideText && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-xl font-semibold"
          >
            Forward
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  )
}
