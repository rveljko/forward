import Skeleton from '@dashboard-components/ui/skeleton'

export default function SettingsHeaderSkeleton() {
  return (
    <div className="mb-4">
      <Skeleton className="mb-1 max-w-40" />
      <Skeleton className="max-w-60" />
    </div>
  )
}
