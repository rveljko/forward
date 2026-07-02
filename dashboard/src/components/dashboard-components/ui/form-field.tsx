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

function Label({ children, className, ...props }: LabelProps) {
  return (
    <label className={cn('w-max font-medium', className)} {...props}>
      {children}
    </label>
  )
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
  return (
    <div className="relative w-full max-w-(--input-width)">
      {LeftIcon && (
        <span className="absolute top-1/2 left-px flex -translate-y-1/2 items-center bg-white pl-2 [&_svg]:text-black">
          {LeftIcon}
        </span>
      )}
      <input
        type="text"
        className={cn(
          `focus:ring-brand-500 w-full rounded-md bg-white px-3 py-2 text-black shadow-sm ring ring-neutral-900/10 transition placeholder:text-neutral-600 focus:outline-0 ${LeftIcon ? 'pl-8' : ''} ${RightIcon ? 'pr-8' : ''}`,
          className
        )}
        required={!optional}
        {...props}
      />
      {RightIcon && (
        <span className="absolute top-1/2 right-px flex -translate-y-1/2 items-center bg-white pr-2 [&_svg]:text-black">
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
  return (
    <div className="relative w-full max-w-(--input-width)">
      {LeftIcon && (
        <span className="absolute top-2.5 left-px flex items-center pl-2 [&_svg]:text-black">
          {LeftIcon}
        </span>
      )}
      <textarea
        className={cn(
          `focus:ring-brand-500 flex aspect-2/1 w-full resize-none rounded-md bg-white px-3 py-2 text-black shadow-sm ring ring-neutral-900/10 transition placeholder:text-neutral-600 focus:outline-0 ${LeftIcon ? 'pl-8' : ''} ${RightIcon ? 'pr-8' : ''} `,
          className
        )}
        {...props}
      />
      {RightIcon && (
        <span className="absolute top-2.5 right-px flex items-center pr-2 [&_svg]:text-black">
          {RightIcon}
        </span>
      )}
    </div>
  )
}
