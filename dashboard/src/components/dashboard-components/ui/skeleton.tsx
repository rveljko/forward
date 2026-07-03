import { cn } from '@utils/utils'

type SkeletonProps = React.ComponentPropsWithoutRef<'div'>

export default function Skeleton({ className, ...props }: SkeletonProps) {
  return (
    <div
      className={cn(
        'h-6 w-full animate-pulse rounded-sm bg-neutral-200',
        className
      )}
      {...props}
    />
  )
}
