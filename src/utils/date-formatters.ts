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

export function weekdayTimeFormatter(date: Date) {
  return new Date(date).toLocaleString('en-US', {
    weekday: 'long',
    hour: 'numeric',
    minute: 'numeric',
  })
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
