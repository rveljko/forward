export function iso8601DateFormatter(date: Date) {
  return new Date(date).toISOString()
}

export function usDateTimeFormatter(date: Date) {
  return new Date(date).toLocaleString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  })
}

export function usLongDateFormatter(date: Date) {
  return new Date(date).toLocaleString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
