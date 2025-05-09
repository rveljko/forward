import { cn } from '@utils/utils'
import { cva, VariantProps } from 'class-variance-authority'
import { Link } from 'react-router'

const button = cva(
  'text-clickable inline-flex w-max items-center justify-center gap-1 rounded-md inset-ring inset-ring-white/10 hover:cursor-pointer hover:bg-[linear-gradient(hsl(from_var(--color-black)_h_s_l_/_5%),hsl(from_var(--color-black)_h_s_l_/_5%))] active:scale-99 disabled:scale-100 disabled:cursor-not-allowed disabled:bg-[linear-gradient(transparent,transparent)] disabled:opacity-50',
  {
    variants: {
      variant: {
        primary: 'bg-brand-500 text-white',
        secondary: 'bg-neutral-800',
        tertiary: 'inset-ring-0',
        ghost: '',
        danger: 'bg-danger-500 text-white',
        link: 'hover:text-brand-500 inset-ring-0 hover:bg-[image:unset]',
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
