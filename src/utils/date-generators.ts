export function generateDateInPast(daysAgo: number) {
  return new Date(new Date().setDate(new Date().getDate() - daysAgo))
}
