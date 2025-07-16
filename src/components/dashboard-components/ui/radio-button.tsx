import { cn } from '@utils/utils'

type RadioButtonProps = React.ComponentPropsWithoutRef<'input'>

export default function RadioButton({ className, ...props }: RadioButtonProps) {
  return (
    <input
      type="radio"
      className={cn(
        'before:inset-ring-clickable/20 pointer-coarse:active:before:inset-ring-brand-500 hover:before:inset-ring-brand-500 checked:before:inset-ring-brand-500 relative size-3.5 appearance-none before:absolute before:size-full before:rounded-full before:inset-ring before:transition-all checked:before:inset-ring-4',
        className
      )}
      {...props}
    />
  )
}
