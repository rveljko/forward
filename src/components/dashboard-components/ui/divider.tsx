type DividerProps = React.ComponentPropsWithoutRef<'div'>

export default function Divider({ ...props }: DividerProps) {
  return (
    <div role="separator" {...props}>
      <div className="h-0.25 w-full bg-black/40"></div>
      <div className="h-0.25 w-full bg-white/10"></div>
    </div>
  )
}
