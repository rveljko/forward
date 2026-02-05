export function dayMonthShortFormatter(date: Date) {
  return date.toLocaleString('en-US', {
    day: 'numeric',
    month: 'short',
  })
}
