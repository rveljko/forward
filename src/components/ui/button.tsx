import { cn } from '@utils/utils'
import { cva, VariantProps } from 'class-variance-authority'

const button = cva(
  'text-clickable flex w-max items-center justify-center gap-1 rounded-md inset-ring inset-ring-white/10 hover:cursor-pointer hover:bg-[linear-gradient(hsl(from_var(--color-black)_h_s_l_/_5%),hsl(from_var(--color-black)_h_s_l_/_5%))] active:scale-99 disabled:scale-100 disabled:cursor-not-allowed disabled:bg-[linear-gradient(transparent,transparent)] disabled:opacity-50',
  {
    variants: {
      variant: {
        primary: 'bg-brand-500 text-white',
        secondary: 'bg-neutral-800',
        tertiary: 'inset-ring-0',
        ghost: '',
        danger: 'bg-danger-500 text-white',
      },
      size: {
        large: 'px-3 py-2',
        medium: 'px-2 py-1.5',
        small: 'px-1.5 py-1',
      },
    },
  }
)

export type ButtonProps = React.ComponentPropsWithoutRef<'button'> &
  VariantProps<typeof button> & {
    children: React.ReactNode
    leftIcon?: React.JSX.Element
    rightIcon?: React.JSX.Element
  }

export default function Button({
  children,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  variant,
  size,
  className,
  ...props
}: ButtonProps) {
  return (
    <button className={cn(button({ variant, size, className }))} {...props}>
      {LeftIcon && (
        <span className="flex h-6 items-center justify-center">{LeftIcon}</span>
      )}
      {children}
      {RightIcon && (
        <span className="flex h-6 items-center justify-center">
          {RightIcon}
        </span>
      )}
    </button>
  )
}
