import Skeleton from '@dashboard-components/ui/skeleton'

export default function SettingsNavigationSkeleton() {
  return (
    <div className="w-0 min-w-full overflow-x-auto py-4">
      <div className="flex gap-1">
        <Skeleton className="h-7 w-25 shrink-0" />
        <Skeleton className="h-7 w-25 shrink-0" />
        <Skeleton className="h-7 w-25 shrink-0" />
        <Skeleton className="h-7 w-25 shrink-0" />
      </div>
    </div>
  )
}
