import ThemeCard from '@dashboard-components/theme-card'
import { Theme } from '@utils/types'

type ThemeCardsListProps = {
  themes: Theme[]
}

export default function ThemeCardsList({ themes }: ThemeCardsListProps) {
  return (
    <ul className="flex flex-wrap gap-2">
      {themes.map((theme) => (
        <li key={theme.id}>
          <ThemeCard theme={theme} />
        </li>
      ))}
    </ul>
  )
}
