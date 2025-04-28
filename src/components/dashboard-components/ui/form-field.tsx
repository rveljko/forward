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

type LabelProps = React.ComponentPropsWithoutRef<'label'> & {
  children: React.ReactNode
}

function Label({ children, ...props }: LabelProps) {
  return <label {...props}>{children}</label>
}

type InputProps = React.ComponentPropsWithoutRef<'input'> & {
  optional?: boolean
  rightIcon?: React.JSX.Element
}

function Input({
  optional,
  rightIcon: RightIcon,
  className,
  ...props
}: InputProps) {
  return (
    <div className="relative w-full max-w-(--input-width)">
      <input
        className={cn(
          `bg-input-background text-clickable inset-ring-section-outline focus:inset-ring-brand-500 w-full rounded-sm px-3 py-2 inset-ring placeholder:text-neutral-400 focus:inset-ring focus:outline-0 ${RightIcon ? 'pr-8' : ''}`,
          className
        )}
        required={!optional}
        {...props}
      />
      {RightIcon && (
        <span className="bg-input-background absolute top-1/2 right-0.25 flex -translate-y-1/2 items-center pr-2">
          {RightIcon}
        </span>
      )}
    </div>
  )
}
