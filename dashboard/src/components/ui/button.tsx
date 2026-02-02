import Tooltip, { tooltip } from '@dashboard-components/ui/tooltip'
import { cn } from '@utils/utils'
import { cva, VariantProps } from 'class-variance-authority'
import { useState } from 'react'
import { Link } from 'react-router'

const button = cva(
  'text-clickable flex w-max items-center justify-center gap-1 rounded-md shadow-sm transition-[background-color,scale] [anchor-name:--button] hover:cursor-pointer not-disabled:active:scale-99 disabled:cursor-not-allowed disabled:opacity-50 disabled:select-none',
  {
    variants: {
      variant: {
        primary:
          'bg-brand-500 text-white not-disabled:hover:bg-[color-mix(in_oklab,var(--color-brand-500),var(--color-black)_10%)] not-disabled:pointer-coarse:active:bg-[color-mix(in_oklab,var(--color-brand-500),var(--color-black)_10%)]',
        secondary:
          'bg-neutral-800 not-disabled:hover:bg-[color-mix(in_oklab,var(--color-neutral-800),var(--color-black)_10%)] not-disabled:pointer-coarse:active:bg-[color-mix(in_oklab,var(--color-neutral-800),var(--color-black)_10%)]',
        tertiary:
          'not-disabled:hover:bg-clickable/10 not-disabled:pointer-coarse:active:bg-clickable/10 shadow-none',
        ghost:
          'not-disabled:hover:bg-clickable/10 not-disabled:pointer-coarse:active:bg-clickable/10 inset-ring-clickable/10 shadow-none inset-ring',
        danger:
          'bg-danger-500 text-black not-disabled:hover:bg-[color-mix(in_oklab,var(--color-danger-500),var(--color-black)_10%)] not-disabled:pointer-coarse:active:bg-[color-mix(in_oklab,var(--color-danger-500),var(--color-black)_10%)]',
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

type ButtonBaseProps = VariantProps<typeof button> &
  VariantProps<typeof tooltip> & {
    children: React.ReactNode
    leftIcon?: React.JSX.Element
    rightIcon?: React.JSX.Element
    tooltip?: React.JSX.Element
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
  tooltip: TooltipContent,
  position,
  variant,
  size,
  className,
  ...props
}: ButtonProps) {
  const buttonClasses = cn(button({ variant, size, className }))
  const [isHover, setIsHover] = useState(false)

  if ('href' in props && props.href !== undefined) {
    return (
      <div className="[anchor-scope:--button] not-supports-[anchor-name:--dropdown]:relative">
        <Link
          to={props.href}
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          className={buttonClasses}
          {...props}
        >
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
        {TooltipContent && isHover && (
          <Tooltip position={position}>{TooltipContent}</Tooltip>
        )}
      </div>
    )
  }

  return (
    <div className="[anchor-scope:--button] not-supports-[anchor-name:--dropdown]:relative">
      <button
        className={buttonClasses}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        type="button"
        {...props}
      >
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
      </button>
      {TooltipContent && isHover && (
        <Tooltip position={position}>{TooltipContent}</Tooltip>
      )}
    </div>
  )
}
