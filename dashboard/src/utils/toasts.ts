import Toast, { ToastProps } from '@dashboard-components/ui/toast'
import React from 'react'
import { toast as sonnerToast } from 'sonner'

export function showToast(toast: Omit<ToastProps, 'id'>) {
  sonnerToast.custom((id) => React.createElement(Toast, { id, ...toast }))
}
