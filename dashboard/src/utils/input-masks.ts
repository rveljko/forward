export function onlyLettersMask(value: string) {
  return value.replace(/[^A-Za-z\s]/g, '')
}
