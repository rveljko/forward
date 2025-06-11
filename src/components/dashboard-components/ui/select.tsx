import { cn } from '@utils/utils'
import { cva, VariantProps } from 'class-variance-authority'

const select = cva(
  'text-clickable picker-select:bg-dropdown-background picker-select:my-2 picker-select:border-section-outline picker-select:rounded-sm picker-select:p-1 picker-select:[appearance:base-select] field-sizing-content [appearance:base-select] space-y-2 rounded-md hover:cursor-pointer active:scale-99 [&::picker-icon]:hidden',
  {
    variants: {
      variant: {
        secondary:
          'bg-neutral-800 hover:bg-[color-mix(in_oklab,var(--color-neutral-800),_var(--color-black)_10%)]',
        ghost: 'hover:bg-clickable/10 inset-ring-clickable/10 inset-ring',
      },
      size: {
        large: 'px-3 py-2',
        medium: 'px-2 py-1.5',
        small: 'px-1.5 py-1',
      },
    },
  }
)

type SelectProps = Omit<React.ComponentPropsWithoutRef<'select'>, 'size'> &
  VariantProps<typeof select> & {
    children: React.ReactNode
  }

export default function Select({
  children,
  variant,
  size,
  className,
  ...props
}: SelectProps) {
  return (
    <div className="relative w-max">
      <select className={cn(select({ variant, size }), className)} {...props}>
        {children}
      </select>
    </div>
  )
}

Select.Option = Option

type OptionProps = React.ComponentPropsWithoutRef<'option'> & {
  children: React.ReactNode
}

function Option({ children, ...props }: OptionProps) {
  return (
    <option
      className="text-clickable pointer-coarse:active:bg-clickable/5 [&::checkmark]:text-success-500 hover:bg-clickable/10 rounded-sm p-1 hover:cursor-pointer active:scale-99"
      {...props}
    >
      {children}
    </option>
  )
}
