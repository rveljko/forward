import { cn } from '@utils/utils'

type CountBadgeProps = React.ComponentPropsWithoutRef<'span'> & {
  children: React.ReactNode
}

export default function CountBadge({
  children,
  className,
  ...props
}: CountBadgeProps) {
  return (
    <span
      className={cn(
        'rounded-sm bg-neutral-50 px-1 py-0.5 text-xs text-neutral-600 tabular-nums mix-blend-multiply ring inset-ring ring-neutral-200 inset-ring-white',
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}
