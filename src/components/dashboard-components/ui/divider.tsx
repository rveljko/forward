import { usePreferences } from '@services/contexts/preferences-context'

type DividerProps = React.ComponentPropsWithoutRef<'div'>

export default function Divider({ ...props }: DividerProps) {
  const { isLightTheme } = usePreferences()

  return (
    <div role="separator" {...props}>
      <div
        className={`h-0.25 w-full ${isLightTheme ? 'bg-transparent' : 'bg-black/40'}`}
      />
      <div className="bg-section-outline h-0.25 w-full" />
    </div>
  )
}
