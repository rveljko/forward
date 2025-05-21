import { usePreferences } from '@services/contexts/preferences-context'
import { cn } from '@utils/utils'

type FormFieldProps = React.ComponentPropsWithoutRef<'div'> & {
  children: React.ReactNode
}

export default function FormField({
  children,
  className,
  ...props
}: FormFieldProps) {
  return (
    <div className={cn('flex flex-col gap-2', className)} {...props}>
      {children}
    </div>
  )
}

FormField.Label = Label
FormField.Input = Input
FormField.Textarea = Textarea

type LabelProps = React.ComponentPropsWithoutRef<'label'> & {
  children: React.ReactNode
}

function Label({ children, ...props }: LabelProps) {
  return <label {...props}>{children}</label>
}

type InputProps = React.ComponentPropsWithRef<'input'> & {
  optional?: boolean
  leftIcon?: React.JSX.Element
  rightIcon?: React.JSX.Element
}

function Input({
  optional,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  className,
  ...props
}: InputProps) {
  const { isLightTheme } = usePreferences()

  return (
    <div className="relative w-full max-w-(--input-width)">
      {LeftIcon && (
        <span className="bg-input-background [&_svg]:text-clickable absolute top-1/2 left-0.25 flex -translate-y-1/2 items-center pl-2">
          {LeftIcon}
        </span>
      )}
      <input
        className={cn(
          `bg-input-background text-clickable focus:inset-ring-brand-500 w-full rounded-md px-3 py-2 shadow-sm placeholder:text-neutral-400 focus:inset-ring focus:outline-0 ${LeftIcon ? 'pl-8' : ''} ${RightIcon ? 'pr-8' : ''} ${isLightTheme ? 'ring-section-outline ring' : 'inset-ring-section-outline inset-ring'}`,
          className
        )}
        required={!optional}
        {...props}
      />
      {RightIcon && (
        <span className="bg-input-background [&_svg]:text-clickable absolute top-1/2 right-0.25 flex -translate-y-1/2 items-center pr-2">
          {RightIcon}
        </span>
      )}
    </div>
  )
}

type TextareaProps = React.ComponentPropsWithoutRef<'textarea'> & {
  leftIcon?: React.JSX.Element
  rightIcon?: React.JSX.Element
}

function Textarea({
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  className,
  ...props
}: TextareaProps) {
  const { isLightTheme } = usePreferences()

  return (
    <div className="relative w-full max-w-(--input-width)">
      {LeftIcon && (
        <span className="[&_svg]:text-clickable absolute top-2.5 left-0.25 flex items-center pl-2">
          {LeftIcon}
        </span>
      )}
      <textarea
        className={cn(
          `bg-input-background text-clickable focus:inset-ring-brand-500 aspect-2/1 w-full resize-none rounded-md px-3 py-2 shadow-sm placeholder:text-neutral-400 focus:inset-ring focus:outline-0 ${LeftIcon ? 'pl-8' : ''} ${RightIcon ? 'pr-8' : ''} ${isLightTheme ? 'ring-section-outline ring' : 'inset-ring-section-outline inset-ring'}`,
          className
        )}
        {...props}
      />
      {RightIcon && (
        <span className="[&_svg]:text-clickable absolute top-2.5 right-0.25 flex items-center pr-2">
          {RightIcon}
        </span>
      )}
    </div>
  )
}
