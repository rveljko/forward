export function amPmTimeFormatter(date: Date) {
  return new Date(date).toLocaleString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
  })
}
