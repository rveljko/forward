import { cn } from '@utils/utils'

type CheckboxProps = React.ComponentPropsWithoutRef<'input'>

export default function Checkbox({ className, ...props }: CheckboxProps) {
  return (
    <input
      type="checkbox"
      className={cn(
        "before:inset-ring-clickable/20 hover:before:inset-ring-brand-500 pointer-coarse:active:before:inset-ring-brand-500 checked:before:bg-brand-500 relative size-3.5 appearance-none before:absolute before:flex before:size-full before:items-center before:justify-center before:rounded-sm before:text-xs before:text-transparent before:inset-ring before:transition-all checked:before:text-white checked:before:inset-ring-0 checked:before:content-['✓']",
        className
      )}
      {...props}
    />
  )
}
