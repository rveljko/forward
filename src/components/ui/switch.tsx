import { cn } from '@utils/utils'

type SwitchProps = React.ComponentPropsWithoutRef<'input'>

export default function Switch({ className, ...props }: SwitchProps) {
  return (
    <input
      className={cn(
        'checked:bg-brand-500 relative aspect-2/1 w-(--switch-width) appearance-none rounded-full bg-neutral-800 shadow-sm before:absolute before:top-1/2 before:left-0.5 before:size-3 before:-translate-y-1/2 before:rounded-full before:bg-white before:transition before:duration-100 before:ease-in-out checked:before:left-0 checked:before:translate-x-[150%] hover:cursor-pointer',
        className
      )}
      type="checkbox"
      role="switch"
      {...props}
    />
  )
}
