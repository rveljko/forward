import { motion } from 'motion/react'

type MenuPanelContainerProps = React.ComponentProps<typeof motion.div> & {
  children: React.ReactNode
}

export default function MenuPanelContainer({
  children,
  ...props
}: MenuPanelContainerProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -40,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      exit={{
        opacity: 0,
        x: -40,
      }}
      layout="position"
      {...props}
    >
      {children}
    </motion.div>
  )
}
