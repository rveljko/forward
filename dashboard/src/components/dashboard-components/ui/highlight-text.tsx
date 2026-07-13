type HighlightTextProps = React.ComponentPropsWithoutRef<'strong'> & {
  text: string
  indices?: readonly [number, number][]
}

export default function HighlightText({
  text,
  indices,
  ...props
}: HighlightTextProps) {
  if (!indices || indices.length === 0) {
    return <>{text}</>
  }

  const parts: React.ReactNode[] = []
  let lastIndex = 0

  indices.forEach(([start, end], i) => {
    if (start > lastIndex) {
      parts.push(text.slice(lastIndex, start))
    }

    parts.push(
      <strong key={i} {...props}>
        {text.slice(start, end + 1)}
      </strong>
    )

    lastIndex = end + 1
  })

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex))
  }

  return <>{parts}</>
}
