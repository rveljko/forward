import { cn } from '@utils/utils'
import { cva, VariantProps } from 'class-variance-authority'

export const tooltip = cva(
  'anchored/tooltip try-flip-all absolute z-999 my-2 rounded-sm border border-neutral-200 bg-white p-1 text-black',
  {
    variants: {
      position: {
        'top-left': 'anchored-top-span-left',
        'top-center': 'anchored-top-center',
        'top-right': 'anchored-top-span-right',
        'bottom-left': 'anchored-bottom-span-left',
        'bottom-center': 'anchored-bottom-center',
        'bottom-right': 'anchored-bottom-span-right',
      },
    },
    defaultVariants: {
      position: 'top-center',
    },
  }
)

type TooltipProps = VariantProps<typeof tooltip> &
  React.ComponentPropsWithoutRef<'div'> & {
    children: React.ReactNode
  }

export default function Tooltip({
  children,
  className,
  position,
  ...props
}: TooltipProps) {
  return (
    <div
      role="tooltip"
      className={cn(tooltip({ position, className }))}
      {...props}
    >
      {children}
    </div>
  )
}
