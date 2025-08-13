import { UserStatus as UserStatusType } from '@utils/types'
import { cn } from '@utils/utils'

type UserStatusProps = React.ComponentPropsWithoutRef<'div'> & {
  status: UserStatusType
  isSmall?: boolean
}

export default function UserStatus({
  status,
  isSmall,
  className,
  ...props
}: UserStatusProps) {
  return (
    <div
      className={cn(
        `ring-section-background-color rounded-full ${status === 'active' ? 'bg-success-500' : `bg-section-background-color inset-ring-neutral-600 ${isSmall ? 'inset-ring-1' : 'inset-ring-2'}`} ${isSmall ? 'size-1.5 ring-1' : 'size-2.5 ring-2'}`,
        className
      )}
      role="status"
      {...props}
    >
      <span className="sr-only">
        {status === 'active' ? 'Active' : 'Inactive'}
      </span>
    </div>
  )
}
