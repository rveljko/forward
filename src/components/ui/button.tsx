import { cn } from '@utils/utils'
import { cva, VariantProps } from 'class-variance-authority'
import { Link } from 'react-router'

const button = cva(
  'text-clickable flex w-max items-center justify-center gap-1 rounded-md hover:cursor-pointer active:scale-99 disabled:scale-100 disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        primary:
          'bg-brand-500 text-white hover:bg-[color-mix(in_oklab,var(--color-brand-500),_var(--color-black)_10%)]',
        secondary:
          'bg-neutral-800 hover:bg-[color-mix(in_oklab,var(--color-neutral-800),_var(--color-black)_10%)]',
        tertiary: 'hover:bg-clickable/10',
        ghost: 'hover:bg-clickable/10 inset-ring-clickable/10 inset-ring',
        danger:
          'bg-danger-500 text-white hover:bg-[color-mix(in_oklab,var(--color-danger-500),_var(--color-black)_10%)]',
        link: 'hover:text-brand-500',
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
          <span className="flex h-6 items-center justify-center">
            {LeftIcon}
          </span>
        )}
        {children}
        {RightIcon && (
          <span className="flex h-6 items-center justify-center">
            {RightIcon}
          </span>
        )}
      </Link>
    )
  }

  return (
    <button className={buttonClasses} {...props}>
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
