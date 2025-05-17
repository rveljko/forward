export function generateTimeInPast(
  daysAgo: number,
  hours: number,
  minutes: number,
  seconds: number
) {
  const date = new Date().setHours(hours, minutes, seconds)

  return new Date(new Date(date).setDate(new Date(date).getDate() - daysAgo))
}

export function generateDateInPast(daysAgo: number) {
  return new Date(new Date().setDate(new Date().getDate() - daysAgo))
}
