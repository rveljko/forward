import CloseIcon from '@icons/close-icon'
import Button from '@ui/button'
import { cn } from '@utils/utils'

type FilterChipProps = React.ComponentPropsWithoutRef<'article'> & {
  name: string
  icon: React.JSX.Element
  onRemove: () => void
}

export default function FilterChip({
  name,
  icon: Icon,
  onRemove,
  className,
  ...props
}: FilterChipProps) {
  return (
    <article
      className={cn(
        'flex items-center gap-2 rounded-md bg-white px-1.5 py-1 shadow-sm ring ring-neutral-900/10',
        className
      )}
      {...props}
    >
      <div className="flex items-center gap-1 [&_svg]:size-4 [&>div:first-child]:h-4 [&>div:first-child]:w-auto">
        {Icon}
        <span className="text-xs font-medium text-nowrap">{name}</span>
      </div>
      <Button variant="tertiary" className="size-4" onClick={onRemove}>
        <CloseIcon />
      </Button>
    </article>
  )
}
