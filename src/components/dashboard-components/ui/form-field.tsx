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
}

function Input({ optional, className, ...props }: InputProps) {
  return (
    <input
      className={cn(
        'bg-input-background text-clickable inset-ring-section-outline focus:inset-ring-brand-500 w-full max-w-(--input-width) rounded-sm px-3 py-2 inset-ring placeholder:text-neutral-400 focus:inset-ring focus:outline-0',
        className
      )}
      required={!optional}
      {...props}
    />
  )
}
