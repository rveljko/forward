import { cn } from '@utils/utils'

type SearchFilterProps = React.ComponentPropsWithRef<'label'> & {
  children: React.ReactNode
  checked?: boolean
  onChange?: () => void
}

export default function SearchFilter({
  children,
  className,
  checked,
  onChange,
  ...props
}: SearchFilterProps) {
  return (
    <label
      className={cn(
        'flex w-max items-center gap-1 rounded-md px-2 py-1 text-xs font-medium shadow-sm ring inset-ring ring-neutral-900/10 inset-ring-white transition hover:cursor-pointer hover:ring-neutral-900/20 active:scale-99 has-[input[type=checkbox]:focus-visible]:ring-2 has-[input[type=checkbox]:focus-visible]:ring-black has-[input[type=checkbox]:focus-visible]:transition-none',
        checked &&
          'ring-brand-600 bg-brand-500 pointer-coarse:active:ring-brand-700 pointer-coarse:active:bg-brand-600 hover:ring-brand-700 hover:bg-brand-600 text-white inset-ring-white/10',
        className
      )}
      {...props}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="sr-only"
      />
      {children}
    </label>
  )
}
