import { cn } from '@utils/utils'
import { cva, VariantProps } from 'class-variance-authority'

const select = cva(
  'text-clickable not-open:picker-select:opacity-(--opacity-from) not-open:picker-select:translate-y-(--slide-y-from) not-open:picker-select:scale-(--scale-from) picker-select:transition-all picker-select:transition-discrete picker-select:opacity-(--opacity-to) picker-select:translate-y-(--slide-y-to) picker-select:scale-(--scale-to) picker-select:starting:opacity-(--opacity-from) picker-select:starting:scale-(--scale-from) picker-select:starting:translate-y-(--slide-y-from) picker-select:bg-dropdown-background picker-select:my-2 picker-select:border-section-outline picker-select:rounded-sm picker-select:p-1 picker-select:[appearance:base-select] field-sizing-content [appearance:base-select] space-y-0.5 rounded-md [--opacity-from:0%] [--opacity-to:100%] [--scale-from:95%] [--scale-to:100%] [--slide-y-from:--spacing(4)] [--slide-y-to:--spacing(0)] hover:cursor-pointer active:scale-99 [&::picker-icon]:hidden',
  {
    variants: {
      variant: {
        secondary:
          'bg-neutral-800 hover:bg-[color-mix(in_oklab,var(--color-neutral-800),var(--color-black)_10%)]',
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
    <select className={cn(select({ variant, size }), className)} {...props}>
      <button>
        {/* @ts-ignore */}
        <selectedcontent className="flex items-center gap-1"></selectedcontent>
      </button>
      {children}
    </select>
  )
}

Select.Option = Option

type OptionProps = React.ComponentPropsWithoutRef<'option'> & {
  children: React.ReactNode
}

function Option({ children, ...props }: OptionProps) {
  return (
    <option
      className="text-clickable pointer-coarse:active:bg-clickable/5 [&::checkmark]:text-success-500 hover:bg-clickable/10 flex items-center gap-2 rounded-sm p-1 hover:cursor-pointer active:scale-99"
      {...props}
    >
      {children}
    </option>
  )
}
