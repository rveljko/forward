import { cn } from '@utils/utils'
import { cva, VariantProps } from 'class-variance-authority'

export const tooltip = cva(
  'bg-section-background-color border-section-outline text-clickable absolute z-999 my-2 rounded-sm border p-1 [position-anchor:--button] [position-try-fallbacks:flip-inline,flip-block]',
  {
    variants: {
      position: {
        'top-left':
          '[position-area:top_span-left] not-supports-[position-area:top_span-left]:right-0 not-supports-[position-area:top_span-left]:bottom-full',
        'top-center':
          '[position-area:top_center] not-supports-[position-area:top_center]:bottom-full not-supports-[position-area:top_center]:left-1/2 not-supports-[position-area:top_center]:-translate-x-1/2',
        'top-right':
          '[position-area:top_span-right] not-supports-[position-area:top_span-right]:bottom-full not-supports-[position-area:top_span-right]:left-0',
        'bottom-left':
          '[position-area:bottom_span-left] not-supports-[position-area:bottom_span-left]:top-full not-supports-[position-area:bottom_span-left]:right-0',
        'bottom-center':
          '[position-area:bottom_center] not-supports-[position-area:bottom_center]:top-full not-supports-[position-area:bottom_center]:left-1/2 not-supports-[position-area:bottom_center]:-translate-x-1/2',
        'bottom-right':
          '[position-area:bottom_span-right] not-supports-[position-area:bottom_span-right]:top-full not-supports-[position-area:bottom_span-right]:left-0',
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
