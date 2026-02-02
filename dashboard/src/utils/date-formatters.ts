export function iso8601DateFormatter(date: Date) {
  return new Date(date).toISOString()
}

export function dayMonthShortFormatter(date: Date) {
  return new Date(date).toLocaleString('en-US', {
    day: 'numeric',
    month: 'short',
  })
}

export function shortMonthYearFormatter(date: Date) {
  return new Date(date).toLocaleString('en-US', {
    month: '2-digit',
    year: '2-digit',
  })
}
