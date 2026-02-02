export default function useMediaQuery() {
  const isMediumSizeScreen = window.matchMedia('(min-width: 48rem)').matches

  return { isMediumSizeScreen }
}
