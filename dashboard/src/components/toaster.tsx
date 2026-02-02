import { Toaster as SonnerToaster } from 'sonner'

export default function Toaster() {
  return (
    <SonnerToaster
      position="top-right"
      offset={16}
      style={{ fontFamily: 'inherit' }}
      toastOptions={{ classNames: { toast: 'w-90' } }}
    />
  )
}
