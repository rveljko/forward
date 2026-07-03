import IconWrapper from '@dashboard-components/ui/icon-wrapper'
import CircleCheckIcon from '@icons/circle-check-icon'
import CloseIcon from '@icons/close-icon'
import { usePreferences } from '@services/contexts/preferences-context'
import Button from '@ui/button'
import { toast } from 'sonner'

export type ToastProps = {
  id: string | number
  title: string
  description: string
}

export default function Toast({ id, title, description }: ToastProps) {
  const { getBorderRadius } = usePreferences()

  return (
    <article
      style={{ borderRadius: getBorderRadius() }}
      className="bg-neutral-50 p-2 ring inset-ring ring-neutral-200 inset-ring-white"
    >
      <div className="mb-1 flex items-start justify-between">
        <div className="flex items-center gap-1">
          <IconWrapper
            icon={<CircleCheckIcon />}
            className="bg-green-100 text-green-500 ring-green-200"
          />
          <h3 className="line-clamp-1 font-medium">{title}</h3>
        </div>
        <Button
          variant="tertiary"
          className="p-1"
          onClick={() => toast.dismiss(id)}
        >
          <span className="[&_svg]:size-4">
            <CloseIcon />
          </span>
          <span className="sr-only">Close</span>
        </Button>
      </div>
      <p className="text-xs text-neutral-600">{description}</p>
    </article>
  )
}
