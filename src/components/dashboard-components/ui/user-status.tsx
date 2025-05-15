import { UserStatus as UserStatusType } from '@utils/types'
import { cn } from '@utils/utils'
import React from 'react'

type UserStatusProps = React.ComponentPropsWithoutRef<'div'> & {
  status: UserStatusType
}

export default function UserStatus({
  status,
  className,
  ...props
}: UserStatusProps) {
  return (
    <div
      className={cn(
        `ring-section-background-color size-2.5 rounded-full ring-2 ${status === 'active' ? 'bg-success-500' : 'bg-section-background-color inset-ring-2 inset-ring-neutral-600'}`,
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
