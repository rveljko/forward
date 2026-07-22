type DividerProps = React.ComponentPropsWithoutRef<'div'>

export default function Divider({ ...props }: DividerProps) {
  return (
    <div role="separator" {...props}>
      <div className="h-px w-full bg-neutral-200" />
      <div className="h-px w-full bg-white" />
    </div>
  )
}
