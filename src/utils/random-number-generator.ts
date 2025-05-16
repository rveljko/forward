export function randomNumberGenerator(from: number, to: number) {
  return Math.floor(Math.random() * (to - from + 1)) + from
}
