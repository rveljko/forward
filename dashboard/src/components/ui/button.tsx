import { cn } from '@utils/utils'
import { cva, VariantProps } from 'class-variance-authority'
import { Link } from 'react-router'

const button = cva(
  'flex w-max items-center justify-center gap-1 rounded-md text-black shadow-sm transition hover:cursor-pointer not-disabled:active:scale-99 disabled:cursor-not-allowed disabled:opacity-50 disabled:select-none',
  {
    variants: {
      variant: {
        primary:
          'bg-brand-500 not-disabled:hover:border-brand-700 not-disabled:pointer-coarse:active:border-brand-700 not-disabled:pointer-coarse:active:from-brand-600 not-disabled:pointer-coarse:active:to-brand-700 not-disabled:hover:from-brand-600 not-disabled:hover:to-brand-700 border-brand-600 from-brand-500 to-brand-600 border bg-linear-to-b text-white inset-shadow-2xs inset-shadow-white/10',
        secondary:
          'bg-white ring ring-neutral-900/10 not-disabled:hover:ring-neutral-900/20 not-disabled:pointer-coarse:active:ring-neutral-900/20',
        tertiary:
          'shadow-none not-disabled:hover:bg-neutral-200 not-disabled:pointer-coarse:active:bg-neutral-200',
        ghost:
          'ring ring-neutral-900/10 not-disabled:hover:ring-neutral-900/20 not-disabled:pointer-coarse:active:ring-neutral-900/20',
        danger:
          'border border-red-600 bg-red-500 bg-linear-to-b from-red-500 to-red-600 text-white inset-ring inset-ring-white/10 not-disabled:hover:border-red-700 not-disabled:hover:from-red-600 not-disabled:hover:to-red-700 not-disabled:pointer-coarse:active:border-red-700 not-disabled:pointer-coarse:active:from-red-600 not-disabled:pointer-coarse:active:to-red-700',
        link: 'not-disabled:hover:text-brand-500 not-disabled:pointer-coarse:active:text-brand-500 shadow-none',
      },
      size: {
        large: 'px-3 py-2',
        medium: 'px-2 py-1.5',
        small: 'px-1.5 py-1',
      },
    },
  }
)

type ButtonBaseProps = VariantProps<typeof button> & {
  children: React.ReactNode
  leftIcon?: React.JSX.Element
  rightIcon?: React.JSX.Element
}

type ButtonAsAnchorProps = React.ComponentPropsWithoutRef<'a'> & {
  href: string
}

type ButtonAsButtonProps = React.ComponentPropsWithoutRef<'button'> & {
  href?: never
}

export type ButtonProps = ButtonBaseProps &
  (ButtonAsAnchorProps | ButtonAsButtonProps)

export default function Button({
  children,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  variant,
  size,
  className,
  ...props
}: ButtonProps) {
  const buttonClasses = cn(button({ variant, size, className }))

  if ('href' in props && props.href !== undefined) {
    return (
      <Link to={props.href} className={buttonClasses} {...props}>
        {LeftIcon && (
          <span className="flex size-4 items-center justify-center">
            {LeftIcon}
          </span>
        )}
        {children}
        {RightIcon && (
          <span className="flex size-4 items-center justify-center">
            {RightIcon}
          </span>
        )}
      </Link>
    )
  }

  return (
    <button className={buttonClasses} type="button" {...props}>
      {LeftIcon && (
        <span className="flex size-4 items-center justify-center">
          {LeftIcon}
        </span>
      )}
      {children}
      {RightIcon && (
        <span className="flex size-4 items-center justify-center">
          {RightIcon}
        </span>
      )}
    </button>
  )
}
