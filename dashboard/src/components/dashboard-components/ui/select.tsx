import { cn } from '@utils/utils'
import { cva, VariantProps } from 'class-variance-authority'

const select = cva(
  'not-open:picker-select:opacity-(--opacity-from) not-open:picker-select:translate-y-(--slide-y-from) not-open:picker-select:scale-(--scale-from) picker-select:transition-all picker-select:transition-discrete picker-select:opacity-(--opacity-to) picker-select:translate-y-(--slide-y-to) picker-select:scale-(--scale-to) picker-select:starting:opacity-(--opacity-from) picker-select:starting:scale-(--scale-from) picker-select:starting:translate-y-(--slide-y-from) picker-select:bg-white picker-select:my-2 picker-select:border-neutral-200 picker-select:rounded-sm picker-select:p-1 picker-select:[appearance:base-select] field-sizing-content [appearance:base-select] space-y-0.5 rounded-md text-black [--opacity-from:0%] [--opacity-to:100%] [--scale-from:95%] [--scale-to:100%] [--slide-y-from:--spacing(4)] [--slide-y-to:--spacing(0)] hover:cursor-pointer active:scale-99 [&::picker-icon]:hidden',
  {
    variants: {
      variant: {
        secondary:
          'bg-white ring ring-neutral-900/10 hover:ring-neutral-900/20 pointer-coarse:active:ring-neutral-900/20',
        ghost:
          'ring ring-neutral-900/10 hover:ring-neutral-900/20 pointer-coarse:active:ring-neutral-900/20',
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
      className="flex items-center gap-2 rounded-sm p-1 text-black hover:cursor-pointer hover:bg-neutral-100 active:scale-99 pointer-coarse:active:bg-neutral-100 [&::checkmark]:text-green-500"
      {...props}
    >
      {children}
    </option>
  )
}
