export function iso8601DateFormatter(date: Date) {
  return new Date(date).toISOString()
}

export function usDateTimeFormatter(date: Date) {
  return new Date(date).toLocaleString('en-US', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  })
}

export function usLongDateFormatter(date: Date) {
  return new Date(date).toLocaleString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
