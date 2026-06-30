import { cn } from '@utils/utils'

type CheckboxProps = React.ComponentPropsWithoutRef<'input'>

export default function Checkbox({ className, ...props }: CheckboxProps) {
  return (
    <input
      type="checkbox"
      className={cn(
        'relative size-3.5 appearance-none',
        'hover:before:inset-ring-brand-500 pointer-coarse:active:before:inset-ring-brand-500 before:absolute before:flex before:size-full before:items-center before:justify-center before:rounded-sm before:bg-white before:text-xs before:text-transparent before:inset-ring before:inset-ring-neutral-300 before:transition-all',
        "checked:before:bg-brand-500 checked:before:text-white checked:before:inset-ring-0 checked:before:content-['✓']",
        className
      )}
      {...props}
    />
  )
}
