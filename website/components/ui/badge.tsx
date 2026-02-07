import { cn } from '@/utils/utils'
import { cva, VariantProps } from 'class-variance-authority'

const badge = cva(
  'flex w-max rounded-sm px-1 py-0.5 text-xs shadow-xs inset-ring inset-ring-black/10',
  {
    variants: {
      color: {
        orange: 'bg-orange-100 text-orange-900',
        green: 'bg-green-100 text-green-900',
        cyan: 'bg-cyan-100 text-cyan-900',
        sky: 'bg-sky-100 text-sky-900',
        blue: 'bg-blue-100 text-blue-900',
        violet: 'bg-violet-100 text-violet-900',
        pink: 'bg-pink-100 text-pink-900',
        rose: 'bg-rose-100 text-rose-900',
        slate: 'bg-slate-100 text-slate-900',
      },
    },
    defaultVariants: {
      color: 'slate'
    }
  }
)

type BadgeProps = React.ComponentPropsWithRef<'span'> &
  VariantProps<typeof badge> & {
    children: React.ReactNode
  }

export default function Badge({
  children,
  color,
  className,
  ...props
}: BadgeProps) {
  return (
    <span className={cn(badge({ color, className }))} {...props}>
      {children}
    </span>
  )
}
