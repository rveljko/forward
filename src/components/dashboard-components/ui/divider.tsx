type DividerProps = React.ComponentPropsWithoutRef<'div'>

export default function Divider({ ...props }: DividerProps) {
  return (
    <div {...props}>
      <div className="h-0.25 w-full bg-black/60"></div>
      <div className="bg-section-outline h-0.25 w-full"></div>
    </div>
  )
}
