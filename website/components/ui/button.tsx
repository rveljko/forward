import { cn } from '@/utils/utils'
import { cva, VariantProps } from 'class-variance-authority'
import Link from 'next/link'

const button = cva(
  'flex w-max items-center justify-center gap-1 rounded-md text-black shadow-sm transition-all hover:cursor-pointer active:scale-99 pointer-coarse:select-none',
  {
    variants: {
      variant: {
        primary:
          'bg-gray-800 text-white hover:bg-gray-900 pointer-coarse:active:bg-gray-900',
        secondary:
          'bg-white ring ring-black/10 hover:bg-neutral-100 pointer-coarse:active:bg-neutral-100',
        tertiary:
          'shadow-none hover:bg-neutral-50 pointer-coarse:active:bg-neutral-50',
        link: 'shadow-none',
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
      <Link className={buttonClasses} {...props}>
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
