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
  const { getRemCornerRoundness } = usePreferences()

  return (
    <article
      style={{ borderRadius: getRemCornerRoundness() }}
      className="bg-section-background-color border-section-outline border p-1"
    >
      <div className="mb-1 flex justify-between">
        <div className="flex items-center gap-1">
          <span className="inset-ring-section-outline bg-success-500/10 [&_svg]:text-success-500 flex size-8 shrink-0 items-center justify-center rounded-lg inset-ring">
            <CircleCheckIcon />
          </span>
          <h3 className="line-clamp-1">{title}</h3>
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
      <p className="text-sm">{description}</p>
    </article>
  )
}
