import { usLongDateFormatter } from '@utils/date-formatters'

export function isSameDate(firstDate: Date, secondDate: Date) {
  return usLongDateFormatter(firstDate) === usLongDateFormatter(secondDate)
}
