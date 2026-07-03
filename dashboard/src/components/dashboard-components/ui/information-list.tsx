import { cn } from '@utils/utils'

type InformationListProps = React.ComponentPropsWithoutRef<'ul'> & {
  children: React.ReactNode
}

export default function InformationList({
  children,
  className,
  ...props
}: InformationListProps) {
  return (
    <ul className={cn('space-y-1', className)} {...props}>
      {children}
    </ul>
  )
}

InformationList.Item = Item
InformationList.Label = Label
InformationList.Value = Value

type ItemProps = React.ComponentPropsWithoutRef<'li'> & {
  children: React.ReactNode
}

function Item({ children, className, ...props }: ItemProps) {
  return (
    <li className={cn('flex items-center gap-8', className)} {...props}>
      {children}
    </li>
  )
}

type LabelProps = React.ComponentPropsWithoutRef<'p'> & {
  children: React.ReactNode
  icon: React.JSX.Element
}

function Label({ children, icon: Icon, className, ...props }: LabelProps) {
  return (
    <div className="flex w-full max-w-30 items-center gap-1">
      <span className="text-black">{Icon}</span>
      <p
        className={cn('line-clamp-1 break-all text-neutral-600', className)}
        {...props}
      >
        {children}
      </p>
    </div>
  )
}

type ValueProps = React.ComponentPropsWithoutRef<'p'> & {
  children: React.ReactNode
  icon?: React.JSX.Element
}

function Value({ children, icon: Icon, className, ...props }: ValueProps) {
  return (
    <div className="flex w-full items-center gap-1 rounded-sm border border-dashed border-transparent px-1.5 py-0.5 hover:border-neutral-300 hover:bg-neutral-200">
      {Icon && <span className="text-black">{Icon}</span>}
      <p
        className={cn('line-clamp-1 break-all text-black', className)}
        {...props}
      >
        {children}
      </p>
    </div>
  )
}
