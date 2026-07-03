import { cn } from '@utils/utils'

type IconWrapperProps = React.ComponentPropsWithoutRef<'div'> & {
  icon: React.JSX.Element
}

export default function IconWrapper({
  icon: Icon,
  className,
  ...props
}: IconWrapperProps) {
  return (
    <div
      className={cn(
        'flex w-max items-center justify-center rounded-lg bg-white p-2 text-black shadow-sm ring ring-neutral-900/10 [&_svg]:size-4',
        className
      )}
      {...props}
    >
      {Icon}
    </div>
  )
}
