import { useEffect, useRef } from 'react'

export default function useOnClickOutside<T extends HTMLElement>(
  callback: () => void
) {
  const ref = useRef<T>(null)

  function handleClickOutside(e: MouseEvent) {
    if (ref.current && !e.composedPath().includes(ref.current)) callback()
  }

  useEffect(() => {
    document.body.addEventListener('click', handleClickOutside)

    return () => {
      document.body.removeEventListener('click', handleClickOutside)
    }
  }, [callback])

  return ref
}
