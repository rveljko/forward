import { cn } from '@utils/utils'

type ContainerProps = React.ComponentPropsWithoutRef<'div'> & {
  children: React.ReactNode
}

export default function Container({
  children,
  className,
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        'mx-auto w-[calc(100%-(--spacing(10)))] max-w-300',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
