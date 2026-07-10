import { cn } from '@utils/utils'
import { motion } from 'motion/react'

type MenuPanelContainerProps = React.ComponentProps<typeof motion.div> & {
  children: React.ReactNode
}

export default function MenuPanelContainer({
  children,
  className,
  ...props
}: MenuPanelContainerProps) {
  return (
    <motion.div
      initial={{
        opacity: 'var(--opacity-from)',
        translateX: 'var(--slide-x-from)',
      }}
      animate={{
        opacity: 'var(--opacity-to)',
        translateX: 'var(--slide-x-to)',
      }}
      exit={{
        opacity: 'var(--opacity-from)',
        translateX: 'var(--slide-x-from)',
      }}
      className={cn(
        '[--opacity-from:0%] [--opacity-to:100%] [--slide-x-from:--spacing(-10)] [--slide-x-to:--spacing(0)]',
        className
      )}
      transition={{ ease: 'easeInOut' }}
      {...props}
    >
      {children}
    </motion.div>
  )
}
