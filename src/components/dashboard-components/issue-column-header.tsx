import PlusIcon from '@icons/plus-icon'
import Button from '@ui/button'
import { cn } from '@utils/utils'

type IssueColumnHeaderProps = React.ComponentPropsWithoutRef<'div'> & {
  title: string
  icon: React.JSX.Element
  numberOfIssues: number
}

export default function IssueColumnHeader({
  title,
  icon: Icon,
  numberOfIssues,
  className,
  ...props
}: IssueColumnHeaderProps) {
  return (
    <div
      className={cn(
        'flex items-center justify-between bg-neutral-800 p-4',
        className
      )}
      {...props}
    >
      <div className="flex items-center gap-2">
        <div className="text-clickable flex items-center gap-1">
          {Icon}
          <h2>{title}</h2>
        </div>
        <span className="text-neutral-400">{numberOfIssues}</span>
      </div>
      <Button variant="tertiary" className="p-0.5">
        <PlusIcon />
        <span className="sr-only">Create new Issue</span>
      </Button>
    </div>
  )
}
