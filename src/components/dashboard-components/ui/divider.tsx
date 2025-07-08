type DividerProps = React.ComponentPropsWithoutRef<'div'>

export default function Divider({ ...props }: DividerProps) {
  return (
    <div role="separator" {...props}>
      <div className="bg-divider-top-background h-0.25 w-full" />
      <div className="bg-divider-bottom-background h-0.25 w-full" />
    </div>
  )
}
